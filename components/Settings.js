"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function Settings() {
  const [temperatureUnit, setTemperatureUnit] = useState("Celsius");
  const [language, setLanguage] = useState("en");
  const [temperatureRange, setTemperatureRange] = useState({
    min: 16,
    max: 26,
  });
  const [humidityRange, setHumidityRange] = useState({
    min: 30,
    max: 60,
  });
  const [settings, setSettings] = useState({});

  function handleTemperatureUnit(e) {
    setTemperatureUnit(e.target.value);
  }

  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }

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

  //   useEffect(() => {
  //     const fetchSettings = async () => {
  //       try {
  //         const response = await fetch(`/api/room/settings`);
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch settings");
  //         }
  //         const data = await response.json();
  //         setSettings(data[0]);
  //       } catch (error) {
  //         toast.error("Cannot load settings");
  //         console.error(error);
  //       }
  //     };

  //     fetchSettings();
  //   }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const updatedData = {
      temperatureUnit,
      temperatureRange,
      humidityRange,
      language,
    };

    try {
      const response = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      setSettings(updatedData);

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
      <h3>Settings</h3>

      <div>
        <p>Temperature Unit</p>
        <label>
          <input
            type="radio"
            value="Celsius"
            checked={temperatureUnit === "Celsius"}
            onChange={handleTemperatureUnit}
          />
          Celsius
        </label>
        <label>
          <input
            type="radio"
            value="Fahrenheit"
            checked={temperatureUnit === "Fahrenheit"}
            onChange={handleTemperatureUnit}
          />
          Fahrenheit
        </label>
      </div>

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

      <div>
        <p>Language</p>
        <label>
          <input
            type="radio"
            value="en"
            checked={language === "en"}
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="slo"
            checked={language === "slo"}
            onChange={handleLanguageChange}
          />
          Slovenian
        </label>
      </div>

      <button type="submit">Save</button>
    </form>
  );
}
