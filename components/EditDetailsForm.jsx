"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function EditDetailsForm({ room }) {
  const [isEditing, setIsEditing] = useState(false);
  const [temperature, setTemperature] = useState(room.currentTemperature);
  const [humidity, setHumidity] = useState(room.currentHumidity);
  const [roomData, setRoomData] = useState(room);

  function handleEdit() {
    setIsEditing((prev) => !prev);
  }

  function increaseTemperature() {
    setTemperature((prev) => prev + 1);
  }

  function decreaseTemperature() {
    setTemperature((prev) => prev - 1);
  }

  function increaseHumidity() {
    setHumidity((prev) => prev + 1);
  }

  function decreaseHumidity() {
    setHumidity((prev) => prev - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    // console.log("Saving data:", { temperature, humidity });

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
      <button onClick={handleEdit}>{isEditing ? "Cancel" : "Edit"}</button>
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <h4>
              Temperature:{" "}
              <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(+e.target.value)}
              />
            </h4>
            <button type="button" onClick={decreaseTemperature}>
              -
            </button>
            <button type="button" onClick={increaseTemperature}>
              +
            </button>
            <h4>
              Humidity:{" "}
              <input
                type="number"
                value={humidity}
                onChange={(e) => setHumidity(+e.target.value)}
              />
            </h4>
            <button type="button" onClick={decreaseHumidity}>
              -
            </button>
            <button type="button" onClick={increaseHumidity}>
              +
            </button>
            <button type="submit">Save</button>
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
