"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function FloorPlan() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch("/api/room");
        
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }

        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }

    fetchRooms();
  }, []);

  const handleKeyDown = (e, roomId) => {
    if (e.key === "Enter" || e.key === " ") {
      window.location.href = `/room/${roomId}`;
    }
  };

  return (
    <div className="relative z-10">
      <figure>
        <Image
          src="/plan.jpg"
          alt="floor plan"
          width={530}
          height={633}
          useMap="#imageMap"
          priority={true}
        />
      </figure>
      
      <svg
          width="530"
          height="633"
          viewBox="0 0 530 633"
          className="absolute top-0 left-0 pointer-events-none"
        >
          {rooms.map((room) => (
            <polygon
              key={room._id}
              points={room.coordinates}
              className="fill-transparent hover:fill-softGreen hover:opacity-50 pointer-events-auto cursor-pointer focus:fill-softGreen focus:opacity-50 focus:outline-none"
              onClick={() => window.location.href = `/room/${room._id}`}
              tabIndex="0"
              onKeyDown={(event) => handleKeyDown(event, room._id)}
            />
          ))}
        </svg>
      
    </div>
  );
}

export default FloorPlan;