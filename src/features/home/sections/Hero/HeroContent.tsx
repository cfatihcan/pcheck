import { motion } from "framer-motion";

import { HeroData } from "./HeroData";
import type { HeroContentProps } from "./HeroTypes";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";

export function HeroContent({
  align = "left",
}: HeroContentProps) {
  const textAlign =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: .18,
          },
        },
      }}
      className={[
        "flex flex-col",
        textAlign,
      ].join(" ")}
    >
      <motion.span
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="
inline-flex
items-center
gap-2
rounded-full
bg-white/70
px-5
py-2.5
text-sm
font-semibold
text-red-600
backdrop-blur-md
shadow-md
border
border-red-100
"
      >
        {HeroData.badge}
      </motion.span>

      <motion.h1
        variants={{
          hidden: {
            opacity: 0,
            y: 30,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="
    mt-4
    text-[46px]
    font-extrabold
    leading-[0.92]
    tracking-[-0.03em]
    uppercase
    text-zinc-900
    sm:text-[58px]
  "
      >
        <span className="block">
          {HeroData.title.first}
        </span>



        <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
          {HeroData.title.second}
        </span>
<motion.div
  initial={{ scaleX: 0 }}
  animate={{ scaleX: 1 }}
  transition={{
    delay: 0.8,
    duration: 0.5,
    ease: "easeOut",
  }}
  className="
    mt-5
    h-1
    w-full
    origin-left
    rounded-full
    bg-gradient-to-r
    from-red-600
    via-orange-500
    to-yellow-400
  "
/>
      </motion.h1>
      <motion.p
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="mt-5 max-w-md text-base leading-7 text-zinc-600 font-medium"
      >

        {HeroData.description}


        {/* <HeroActions /> */}

        {/* <HeroStats /> */}
      </motion.p>
    </motion.div>
  );
}