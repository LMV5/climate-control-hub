"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";

export default function EditDetailsForm({ room }) {
  const [isEditing, setIsEditing] = useState(false);
  const [temperature, setTemperature] = useState(room.currentTemperature);
  const [humidity, setHumidity] = useState(room.currentHumidity);
  const [roomData, setRoomData] = useState(room);

  function handleEdit() {
    setIsEditing((prev) => !prev);
  }

  function handleTemperatureChange(e) {
    const newTemperature = +e.target.value;

    if (newTemperature < room.temperatureRange.min) {
      toast.error("Temperature cannot be lower than the minimum allowed value");
      setTemperature(room.temperatureRange.min);
    } else if (newTemperature > room.temperatureRange.max) {
      toast.error("Temperature exceeds the maximum allowed value");
      setTemperature(room.temperatureRange.max);
    } else {
      setTemperature(newTemperature);
    }
  }

  function handleHumidityChange(e) {
    const newHumidity = +e.target.value;

    if (newHumidity < room.humidityRange.min) {
      toast.error("Humidity cannot be lower than the minimum allowed value");
      setHumidity(room.humidityRange.min);
    } else if (newHumidity > room.humidityRange.max) {
      toast.error("Humidity exceeds the maximum allowed value");
      setHumidity(room.humidityRange.max);
    } else {
      setHumidity(newHumidity);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);

    const updatedData = {
      currentTemperature: temperature,
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
      <Button variant={isEditing ? "cancel" : "edit"} onClick={handleEdit}>
        {isEditing ? "Cancel" : "Edit"}
      </Button>
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
            <Button type="submit" variant="primary">
              Save
            </Button>
          </form>
        ) : (
          <div>
            <h4>Temperature: {roomData.currentTemperature}</h4>
            <h4>Humidity: {roomData.currentHumidity}</h4>
          </div>
        )}
      </div>
    </>
  );
}
