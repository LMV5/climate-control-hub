"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

function FloorPlan() {
  const [rooms, setRooms] = useState([]);
  const [hoveredArea, setHoveredArea] = useState(null);

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

  function handleMouseEnter(roomName) {
    setHoveredArea(roomName);
  }

  function handleMouseLeave() {
    setHoveredArea(null);
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
      />
      <map name="imageMap">
        {rooms.map((room) => (
          <area
            key={room._id}
            shape="poly"
            coords={room.coordinates}
            alt={room.name}
            style={{
              cursor: "pointer",
            }}
            onMouseEnter={() => handleMouseEnter(room.name)}
            onMouseLeave={handleMouseLeave}
            href={`/room/${room._id}`}
          />
        ))}
      </map>
    </div>
  );
}

export default FloorPlan;

// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";

// function FloorPlan() {
//   const [rooms, setRooms] = useState([]);
//   const [hoveredArea, setHoveredArea] = useState(null);

//   useEffect(() => {
//     async function fetchRooms() {
//       try {
//         const response = await fetch("/api/room");
//         const data = await response.json();
//         setRooms(data);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//       }
//     }

//     fetchRooms();
//   }, []);

//   function handleMouseEnter(area) {
//     setHoveredArea(area);
//   }

//   function handleMouseLeave() {
//     setHoveredArea(null);
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
//       />
//       <map name="imageMap">
//         {rooms.map((room) => (
//           <area
//             key={room._id}
//             shape="poly"
//             coords={room.coordinates}
//             alt={room.name}
//             style={{
//               outline: hoveredArea === room.name ? "2px solid red" : "none",
//               cursor: "pointer",
//             }}
//             onMouseEnter={() => handleMouseEnter(room.name)}
//             onMouseLeave={handleMouseLeave}
//             href={`/room/${room._id}`}
//           />
//         ))}
//       </map>
//     </div>
//   );
// }

// export default FloorPlan;
