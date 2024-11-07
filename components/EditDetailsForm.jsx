"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function EditDetailsForm({ room }) {
  const [isEditing, setIsEditing] = useState(false);
  const [temperature, setTemperature] = useState(room.currentTemperature);
  const [humidity, setHumidity] = useState(room.currentHumidity);
  const [roomData, setRoomData] = useState(room);
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  function handleEdit() {
    setIsEditing((prev) => !prev);
  }

  function handleTemperatureChange(e) {
    const newTemperature = +e.target.value;

    if (isNaN(newTemperature)) {
      toast.error("Please enter the number");
      return;
    }

    setTemperature(newTemperature);
  }

  function handleHumidityChange(e) {
    const newHumidity = +e.target.value;

    if (isNaN(newHumidity)) {
      toast.error("Please enter the number");
      return;
    }

    setHumidity(newHumidity);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);

    if (temperature < room.temperatureRange.min || temperature > room.temperatureRange.max) {
      toast.error("Temperature must be within the allowed range. See the Settings.");
      setTemperature(Math.max(room.temperatureRange.min, Math.min(temperature, room.temperatureRange.max)));
      return;
    }
  
    if (humidity < room.humidityRange.min || humidity > room.humidityRange.max) {
      toast.error("Humidity must be within the allowed range. See the Settings.");
      setHumidity(Math.max(room.humidityRange.min, Math.min(humidity, room.humidityRange.max)));
      return;
    }
    
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
      <div className="mt-5 flex justify-between">
        <Button variant="back" onClick={handleBack}>
          &larr; Back
        </Button>
        <Button variant={isEditing ? "cancel" : "edit"} onClick={handleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </div>
      {isEditing ? (
        <form
          onSubmit={handleSubmit}
          className="mt-5 rounded-lg p-4 shadow-[0_1px_5px_rgba(178,178,178,0.2)]"
        >
          <h3 className="text-paleGrey pb-5 text-center uppercase tracking-wider">
            Temperature:
            <input
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
              className="focus:border-paleYellow bg-darkBlue border-paleGrey text-paleGrey mt-1 w-full rounded-md border p-2 text-base focus:shadow-[0_0_10px_rgba(243,249,210,1)] focus:outline-none"
            />
          </h3>
          <h3 className="text-paleGrey pb-5 text-center uppercase tracking-wider">
            Humidity:{" "}
            <input
              type="number"
              step={5}
              value={humidity}
              onChange={handleHumidityChange}
              className="focus:border-paleYellow bg-darkBlue border-paleGrey text-paleGrey mt-1 w-full rounded-md border p-2 text-base focus:shadow-[0_0_10px_rgba(243,249,210,1)] focus:outline-none"
            />
          </h3>
          <Button type="submit" variant="save">
            Save
          </Button>
        </form>
      ) : (
        <section className="mt-12 rounded-lg p-4 text-center shadow-[0_1px_5px_rgba(178,178,178,0.2)]">
          <h3 className="text-paleGrey uppercase tracking-wider">
            Current Temperature:{" "}
            <span className="text-paleGrey rounded px-2 py-1 text-xl font-bold shadow-md">
              {roomData.currentTemperature}
            </span>{" "}
            &deg;C
          </h3>
          <h3 className="text-paleGrey uppercase tracking-wider">
            Current Humidity:{" "}
            <span className="text-paleGrey rounded px-2 py-1 text-xl font-bold shadow-md">
              {roomData.currentHumidity}
            </span>{" "}
            %
          </h3>
        </section>
      )}
    </>
  );
}