"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import Button from "./Button";
import styled from "styled-components";
import { useRouter } from "next/navigation";

const FormSection = styled.form`
  margin: 20px 0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(178, 178, 178, 0.2);
`;

const Title = styled.h4`
  text-align: center;
  padding-bottom: 20px;
  color: #ebd8da;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #b9929f;
  border-radius: 4px;
  font-size: 16px;
  color: #ebd8da;

  &:focus {
    border-color: #f3f9d2;
    box-shadow: 0 0 10px #f3f9d2;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
`;

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

    if (isNaN(newHumidity)) {
      toast.error("Please enter the number");
      return;
    }

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
      <ButtonContainer>
        <Button variant="back" onClick={handleBack}>
          &larr; Back
        </Button>
        <Button variant={isEditing ? "cancel" : "edit"} onClick={handleEdit}>
          {isEditing ? "Cancel" : "Edit"}
        </Button>
      </ButtonContainer>
      {isEditing ? (
        <FormSection onSubmit={handleSubmit}>
          <Title>
            Temperature:
            <Input
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
            />
          </Title>
          <Title>
            Humidity:{" "}
            <Input
              type="number"
              step={5}
              value={humidity}
              onChange={handleHumidityChange}
            />
          </Title>
          <Button type="submit" variant="save">
            Save
          </Button>
        </FormSection>
      ) : (
        <div className="current-parameters">
          <Title>
            Current Temperature: <span>{roomData.currentTemperature}</span>{" "}
            &deg;C
          </Title>
          <Title>
            Current Humidity: <span>{roomData.currentHumidity}</span> %
          </Title>
        </div>
      )}
    </>
  );
}
