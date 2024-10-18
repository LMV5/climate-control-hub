import * as motion from "framer-motion/client";

export default function Loading() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      LOADING...
    </motion.p>
  );
}
