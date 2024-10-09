"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { convertToFahrenheit } from "@/utils/helpers";

const defaultTemperatureRange = { min: 16, max: 26 };
const defaultHumidityRange = { min: 30, max: 60 };

export default function EditDetailsForm({ room, settings }) {
  const [isEditing, setIsEditing] = useState(false);
  const [temperature, setTemperature] = useState(room.currentTemperature);
  const [humidity, setHumidity] = useState(room.currentHumidity);
  const [roomData, setRoomData] = useState(room);
  const temperatureUnit = settings?.temperatureUnit;

  function handleEdit() {
    setIsEditing((prev) => !prev);
  }

  function handleTemperatureChange(e) {
    const newTemperature = +e.target.value;

    if (newTemperature < defaultTemperatureRange.min) {
      toast.error("Temperature cannot be lower than the minimum allowed value");
      setTemperature(defaultTemperatureRange.min);
    } else if (newTemperature > defaultTemperatureRange.max) {
      toast.error("Temperature exceeds the maximum allowed value");
      setTemperature(defaultTemperatureRange.max);
    } else {
      setTemperature(newTemperature);
    }
  }

  function handleHumidityChange(e) {
    const newHumidity = +e.target.value;

    if (newHumidity < defaultHumidityRange.min) {
      toast.error("Humidity cannot be lower than the minimum allowed value");
      setHumidity(defaultHumidityRange.min);
    } else if (newHumidity > defaultHumidityRange.max) {
      toast.error("Humidity exceeds the maximum allowed value");
      setHumidity(defaultHumidityRange.max);
    } else {
      setHumidity(newHumidity);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);

    const updatedData = {
      currentTemperature:
        temperatureUnit === "Fahrenheit"
          ? convertToFahrenheit(temperature)
          : temperature,
      currentHumidity: humidity,
    };

    try {
      const response = await fetch(`/api/room/${room._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Cannot update parameters");
      }

      const updatedRoom = await response.json();
      setRoomData(updatedRoom);

      toast.success("Changes saved");
    } catch (error) {
      toast.error("Cannot update parameters");
    }
  }

  return (
    <>
      <button onClick={handleEdit}>{isEditing ? "Cancel" : "Edit"}</button>
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <h4>
              Temperature:{" "}
              <input
                type="number"
                value={temperature}
                onChange={handleTemperatureChange}
              />
            </h4>
            <h4>
              Humidity:{" "}
              <input
                type="number"
                step={5}
                value={humidity}
                onChange={handleHumidityChange}
              />
            </h4>
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <h4>
              Temperature:{" "}
              {temperatureUnit === "Fahrenheit"
                ? convertToFahrenheit(roomData.currentTemperature)
                : roomData.currentTemperature}
              {temperatureUnit === "Fahrenheit" ? " °F" : " °C"}
            </h4>
            <h4>Humidity: {roomData.currentHumidity}</h4>
          </div>
        )}
      </div>
    </>
  );
}
