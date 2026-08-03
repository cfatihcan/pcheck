import { Container } from "@/components/ui";

import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
import { FooterSocial } from "./FooterSocial";
import { FooterBottom } from "./FooterBottom";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer
    id="contact"
      className="
        relative
        mt-32
        overflow-hidden
        bg-zinc-950
      "
    >
      {/* Top Gradient */}
      <div
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-red-600
          to-transparent
        "
      />

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-16
          h-80
          w-80
          rounded-full
          bg-red-600/10
          blur-3xl
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />

      <Container>
        <motion.div
    initial={{
        opacity: 0,
        y: 60,
    }}
    whileInView={{
        opacity: 1,
        y: 0,
    }}
    viewport={{
        once: true,
        amount: .2,
    }}
    transition={{
        duration: .8,
    }}
    className="relative z-10 py-20"
>

          {/* Başlık */}
          <div className="mb-16 text-center">

            <span
              className="
                inline-flex
                rounded-full
                bg-red-600/10
                px-5
                py-2
                text-sm
                font-semibold
                text-red-500
              "
            >
              🍕 Napoli Pizza
            </span>

            <h2
              className="
                mt-6
                text-4xl
                font-black
                text-white
              "
            >
              Lezzetin Son Durağı
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Odun ateşinde pişen gerçek Napoli pizzalarıyla her lokmada
              unutulmaz bir lezzet deneyimi sunuyoruz.
            </p>

          </div>

          <div
            className="
              grid
              gap-12
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            <FooterBrand />
            <FooterLinks />
            <FooterContact />
            <FooterSocial />
          </div>

          <FooterBottom />

        </motion.div>
      </Container>
    </footer>
  );
}