"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "./Button";

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
    <form onSubmit={handleSubmit}>
      {/* <h3>Settings</h3> */}

      <div>
        <p>Temperature Range</p>
        <label>
          Min:
          <input
            type="number"
            name="min"
            value={temperatureRange.min}
            min={16}
            max={temperatureRange.max}
            onChange={handleTemperatureRangeChange}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            name="max"
            value={temperatureRange.max}
            min={temperatureRange.min}
            max={26}
            onChange={handleTemperatureRangeChange}
          />
        </label>
      </div>

      <div>
        <p>Humidity Range</p>
        <label>
          Min:
          <input
            type="number"
            name="min"
            value={humidityRange.min}
            min={30}
            max={humidityRange.max}
            step={5}
            onChange={handleHumidityRangeChange}
          />
        </label>
        <label>
          Max:
          <input
            type="number"
            name="max"
            value={humidityRange.max}
            min={humidityRange.min}
            max={60}
            step={5}
            onChange={handleHumidityRangeChange}
          />
        </label>
      </div>

      <Button type="submit" variant="save">
        Save
      </Button>
    </form>
  );
}
