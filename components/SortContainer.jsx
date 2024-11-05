"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const SortButton = styled(motion.button)`
  margin-right: 1rem;
`;

const SortList = styled(motion.ul)`
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 1000;
`;

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function SortContainer({ setSortOption }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortOption = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <SortButton whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>
        Sort By
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </SortButton>

      {isOpen && (
        <SortList
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li
            variants={itemVariants}
            onClick={() => handleSortOption("")}
          >
            No sorting
          </motion.li>
          <motion.li
            variants={itemVariants}
            onClick={() => handleSortOption("date")}
          >
            Sort by date
          </motion.li>
          <motion.li
            variants={itemVariants}
            onClick={() => handleSortOption("room")}
          >
            Sort by room
          </motion.li>
        </SortList>
      )}
    </Container>
  );
}

// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const SortButton = styled(motion.button)`
//   margin-right: 1rem;
// `;

// const SortList = styled(motion.ul)`
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   z-index: 1000;
// `;

// const itemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 300, damping: 24 },
//   },
//   closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
// };

// export default function SortContainer({ setSortOption }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSortOption = (option) => {
//     setSortOption(option);
//     setIsOpen(false);
//   };

//   return (
//     <motion.div
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       className="menu"
//     >
//       <motion.button
//         whileTap={{ scale: 0.97 }}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Sort By
//         <motion.div
//           variants={{
//             open: { rotate: 180 },
//             closed: { rotate: 0 },
//           }}
//           transition={{ duration: 0.2 }}
//           style={{ originY: 0.55 }}
//         >
//           <svg width="15" height="15" viewBox="0 0 20 20">
//             <path d="M0 7 L 20 7 L 10 16" />
//           </svg>
//         </motion.div>
//       </motion.button>

//       <motion.ul
//         variants={{
//           open: {
//             clipPath: "inset(0% 0% 0% 0% round 10px)",
//             transition: {
//               type: "spring",
//               bounce: 0,
//               duration: 0.7,
//               delayChildren: 0.3,
//               staggerChildren: 0.05,
//             },
//           },
//           closed: {
//             clipPath: "inset(10% 50% 90% 50% round 10px)",
//             transition: {
//               type: "spring",
//               bounce: 0,
//               duration: 0.3,
//             },
//           },
//         }}
//         style={{ pointerEvents: isOpen ? "auto" : "none" }}
//       >
//         <motion.li variants={itemVariants} onClick={() => handleSortOption("")}>
//           No sorting
//         </motion.li>
//         <motion.li
//           variants={itemVariants}
//           onClick={() => handleSortOption("date")}
//         >
//           Sort by date
//         </motion.li>
//         <motion.li
//           variants={itemVariants}
//           onClick={() => handleSortOption("room")}
//         >
//           Sort by room
//         </motion.li>
//       </motion.ul>
//     </motion.div>
//   );
// }
