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

  return (
    <div className="relative">
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
              className="fill-transparent hover:fill-softGreen hover:opacity-50 pointer-events-auto cursor-pointer"
              onClick={() => window.location.href = `/room/${room._id}`}
            />
          ))}
        </svg>
      
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
        
//         if (!response.ok) {
//           throw new Error("Failed to fetch rooms");
//         }

//         const data = await response.json();
//         setRooms(data);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//       }
//     }

//     fetchRooms();
//   }, []);

//   // function handleMouseEnter(roomName) {
//   //   setHoveredArea(roomName);
//   // }

//   // function handleMouseLeave() {
//   //   setHoveredArea(null);
//   // }

//   return (
//     <div>
//       <figure>
//         <Image
//           src="/plan.jpg"
//           alt="floor plan"
//           width={530}
//           height={633}
//           useMap="#imageMap"
//           priority={true}
//         />
//       </figure>
//       <figcaption>Floor plan of the apartment</figcaption>
//       <map name="imageMap">
//         {rooms.map((room) => (
//           <area
//             key={room._id}
//             shape="poly"
//             coords={room.coordinates}
//             alt={room.name}
//             href={`/room/${room._id}`}
//             aria-label={`Go to ${room.name}`}
//             style={{
//               cursor: "pointer",
//             }}
//             // onMouseEnter={() => handleMouseEnter(room.name)}
//             // onMouseLeave={handleMouseLeave}
//           />
//         ))}
//       </map>
//     </div>
//   );
// }

// export default FloorPlan;