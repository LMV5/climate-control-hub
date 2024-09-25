"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function FloorPlan() {
  const [rooms, setRooms] = useState([]);
  const [hoveredArea, setHoveredArea] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchRooms() {
      try {
        const response = await fetch("/api/room");
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    }

    fetchRooms();
  }, []);

  function handleMouseEnter(area) {
    setHoveredArea(area);
  }

  function handleMouseLeave() {
    setHoveredArea(null);
  }

  function handleAreaClick(roomId) {
    router.push(`/room/${roomId}`);
  }

  return (
    <div>
      <Image
        src="/plan.jpg"
        alt="floor plan"
        width={530}
        height={633}
        useMap="#imageMap"
        priority={true}
      ></Image>
      <map name="imageMap">
        {rooms.map((room) => (
          <area
            key={room._id}
            shape="poly"
            coords={room.coordinates}
            alt={room.name}
            style={{
              outline: hoveredArea === room.name ? "2px solid red" : "none",
              cursor: "pointer",
            }}
            onMouseEnter={() => handleMouseEnter(room.name)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleAreaClick(room._id)}
          />
        ))}
      </map>
    </div>
  );
}

export default FloorPlan;

// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// function FloorPlan() {
//   const [hoveredArea, setHoveredArea] = useState(null);
//   const router = useRouter();

//   function handleMouseEnter(area) {
//     setHoveredArea(area);
//   }

//   function handleMouseLeave() {
//     setHoveredArea(null);
//   }

//   function handleAreaClick(area) {
//     router.push(`/room/${area}`);
//   }

//   return (
//     <div>
//       <Image
//         src="/plan.jpg"
//         alt="floor plan"
//         width={530}
//         height={633}
//         useMap="#imageMap"
//         priority={true}
//       ></Image>
//       <map name="imageMap">
//         <area
//           shape="poly"
//           coords="41,41,232,41,232,232,41,232"
//           alt="bedroom"
//           //   href="/bedroom"
//           style={{
//             outline: hoveredArea === "bedroom" ? "2px solid red" : "none",
//             cursor: "pointer",
//           }}
//           onMouseEnter={() => handleMouseEnter("bedroom")}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => handleAreaClick("bedroom")}
//         />
//         <area
//           shape="poly"
//           coords="245,40,458,40,458,458,245,458"
//           alt="living room"
//           style={{
//             outline: hoveredArea === "livingroom" ? "2px solid green" : "none",
//             cursor: "pointer",
//           }}
//           //   href="/livingroom"
//           onMouseEnter={() => handleMouseEnter("livingroom")}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => handleAreaClick("livingroom")}
//         />
//         <area
//           shape="poly"
//           coords="40,248,230,248,230,340,40,340"
//           alt="bathroom"
//           //   href="/bathroom"
//           style={{
//             outline: hoveredArea === "bathroom" ? "2px solid blue" : "none",
//             cursor: "pointer",
//           }}
//           onMouseEnter={() => handleMouseEnter("bathroom")}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => handleAreaClick("bathroom")}
//         />
//         <area
//           shape="poly"
//           coords="37,476,264,476,264,570,37,570"
//           alt="hallway"
//           //   href="/hallway"
//           style={{
//             outline: hoveredArea === "hallway" ? "2px solid brown" : "none",
//             cursor: "pointer",
//           }}
//           onMouseEnter={() => handleMouseEnter("hallway")}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => handleAreaClick("hallway")}
//         />
//       </map>
//     </div>
//   );
// }

// export default FloorPlan;
