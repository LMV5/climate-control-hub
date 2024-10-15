"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "./Button";

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
`;

const FormTitle = styled.h2`
  text-align: center;
  padding-bottom: 20px;
  color: #ebd8da;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
`;

const RangeSection = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(178, 178, 178, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #ebd8da;
`;

const P = styled.p`
  grid-column: span 2;
  font-size: 1.1rem;
  letter-spacing: 0.2rem;
  color: #ebd8da;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #b9929f;
  border-radius: 4px;
  font-size: 16px;
  background-color: #000000;
  color: #ebd8da;

  &:focus {
    border: 1px solid #f3f9d2;
    box-shadow: 0 0 10px #f3f9d2;
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 20px;
`;

export default function Settings({ settingsData }) {
  const [temperatureRange, setTemperatureRange] = useState({
    min: settingsData?.temperatureRange?.min || 16,
    max: settingsData?.temperatureRange?.max || 26,
  });
  const [humidityRange, setHumidityRange] = useState({
    min: settingsData?.humidityRange?.min || 30,
    max: settingsData?.humidityRange?.max || 60,
  });

  const handleTemperatureRangeChange = (e) => {
    const { name, value } = e.target;
    setTemperatureRange((prevRange) => ({
      ...prevRange,
      [name]: parseInt(value),
    }));
  };

  const handleHumidityRangeChange = (e) => {
    const { name, value } = e.target;
    setHumidityRange((prevRange) => ({
      ...prevRange,
      [name]: parseInt(value),
    }));
  };

  useEffect(() => {
    async function fetchSettings() {
      try {
        const response = await fetch("/api/settings", {
          method: "GET",
        });

        if (!response.ok) throw new Error("Failed to fetch settings");

        const data = await response.json();

        if (data.length > 0) {
          const settings = data[0];
          setTemperatureRange(settings.temperatureRange);
          setHumidityRange(settings.humidityRange);
        }
      } catch (error) {
        toast.error("Error fetching settings");
      }
    }

    fetchSettings();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedData = {
      temperatureRange,
      humidityRange,
    };

    try {
      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Cannot save settings");
      }
      toast.success("Changes saved");
    } catch (error) {
      toast.error("Cannot save settings");
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Settings</FormTitle>
      <RangeSection>
        <P>Temperature:</P>
        <Label>
          Min:
          <Input
            type="number"
            name="min"
            value={temperatureRange.min}
            min={16}
            max={temperatureRange.max}
            onChange={handleTemperatureRangeChange}
          />
        </Label>
        <Label>
          Max:
          <Input
            type="number"
            name="max"
            value={temperatureRange.max}
            min={temperatureRange.min}
            max={26}
            onChange={handleTemperatureRangeChange}
          />
        </Label>
      </RangeSection>

      <RangeSection>
        <P>Humidity:</P>
        <Label>
          Min:
          <Input
            type="number"
            name="min"
            value={humidityRange.min}
            min={30}
            max={humidityRange.max}
            step={5}
            onChange={handleHumidityRangeChange}
          />
        </Label>
        <Label>
          Max:
          <Input
            type="number"
            name="max"
            value={humidityRange.max}
            min={humidityRange.min}
            max={60}
            step={5}
            onChange={handleHumidityRangeChange}
          />
        </Label>
      </RangeSection>

      <ButtonContainer>
        <Button type="submit" variant="primary">
          Save
        </Button>
      </ButtonContainer>
    </FormContainer>
  );
}
