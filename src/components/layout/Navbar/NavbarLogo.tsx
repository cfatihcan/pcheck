import { NapoliLogo } from "@/assets/images/hero";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function NavbarLogo() { return ( 
<Link to="/" className="flex shrink-0 flex-col items-center leading-none transition-opacity duration-300 hover:opacity-80" >
 <img src={NapoliLogo} alt="Napoli Pizza" className="h-14 w-auto shrink-0 object-contain" /> 
 <motion.span className=" -mt-5 bg-[linear-gradient(90deg,#d90429_0%,#ff4d6d_20%,#ffffff_45%,#ffffff_55%,#009246_80%,#00b85a_100%)] bg-[length:250%_100%] bg-clip-text text-[9px] font-black tracking-[0.35em] text-transparent drop-shadow-[0_0_4px_rgba(255,255,255,0.8)] " 
 animate={{ backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"], 
  filter: [ "drop-shadow(0 0 2px rgba(217,4,41,0.2))", "drop-shadow(0 0 7px rgba(255,255,255,0.9))", 
    "drop-shadow(0 0 4px rgba(0,146,70,0.5))", "drop-shadow(0 0 2px rgba(217,4,41,0.2))", ], }} 
    transition={{ backgroundPosition: { duration: 5, repeat: Infinity, ease: "easeInOut", }, 
    filter: { duration: 2.5, repeat: Infinity, ease: "easeInOut", }, }} > KARŞIYAKA </motion.span> </Link> ); }