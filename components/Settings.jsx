"use client";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Button from "@/components/Button";

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
    <>
      <h2 className="text-paleRed mb-6 text-center text-2xl uppercase tracking-widest">
        Settings
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg rounded-lg p-5 shadow-[0_1px_5px_rgba(178,178,178,0.2)]"
      >
        <div className="mb-5 grid grid-cols-2 gap-4 rounded-md p-4 shadow-sm">
          <p className="text-paleRed col-span-2 text-lg tracking-wide">
            Temperature:
          </p>
          <label className="text-paleRed mb-2 block font-bold">
            Min:
            <input
              type="number"
              name="min"
              value={temperatureRange.min}
              min={16}
              max={temperatureRange.max}
              onChange={handleTemperatureRangeChange}
              className="border-paleYellow text-paleRed focus:border-paleYellow mt-1 w-full rounded-md border bg-black p-2 focus:shadow-[0_0_10px_rgba(243,249,210,1)] focus:outline-none"
            />
          </label>
          <label className="text-paleRed mb-2 block font-bold">
            Max:
            <input
              type="number"
              name="max"
              value={temperatureRange.max}
              min={temperatureRange.min}
              max={26}
              onChange={handleTemperatureRangeChange}
              className="border-paleYellow text-paleRed focus:border-paleYellow mt-1 w-full rounded-md border bg-black p-2 focus:shadow-[0_0_10px_rgba(243,249,210,1)] focus:outline-none"
            />
          </label>
        </div>

        <div className="mb-5 grid grid-cols-2 gap-4 rounded-md p-4 shadow-sm">
          <p className="text-paleRed col-span-2 text-lg tracking-wide">
            Humidity:
          </p>
          <label className="text-paleRed mb-2 block font-bold">
            Min:
            <input
              type="number"
              name="min"
              value={humidityRange.min}
              min={30}
              max={humidityRange.max}
              step={5}
              onChange={handleHumidityRangeChange}
              className="border-paleYellow text-paleRed focus:border-paleYellow mt-1 w-full rounded-md border bg-black p-2 focus:shadow-[0_0_10px_rgba(243,249,210,1)] focus:outline-none"
            />
          </label>
          <label className="text-paleRed mb-2 block font-bold">
            Max:
            <input
              type="number"
              name="max"
              value={humidityRange.max}
              min={humidityRange.min}
              max={60}
              step={5}
              onChange={handleHumidityRangeChange}
              className="border-paleYellow text-paleRed focus:border-paleYellow mt-1 w-full rounded-md border bg-black p-2 focus:shadow-[0_0_10px_rgba(243,249,210,1)] focus:outline-none"
            />
          </label>
        </div>

        <div className="mt-5 flex justify-end">
          <Button type="submit" variant="save">
            Save
          </Button>
        </div>
      </form>
    </>
  );
}
