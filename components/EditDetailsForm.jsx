"use client";

import { useState } from "react";

export default function EditDetailsForm({ room }) {
  const [isEditing, setIsEditing] = useState(false);
  const [temperature, setTemperature] = useState(room.currentTemperature);
  const [humidity, setHumidity] = useState(room.currentHumidity);

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
    console.log("Saving data:", { temperature, humidity });

    // try {
    // } catch (error) {}
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
            <h4>Temperature: {room.currentTemperature}</h4>
            <h4>Humidity: {room.currentHumidity}</h4>
          </div>
        )}
      </div>
    </>
  );
}
