export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Ana Glow */}
      <div
        className="
          absolute
          left-1/2
          top-24
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-orange-300/40
          blur-[60px]
          animate-pulse
        "
      />

      {/* Sol Blob */}
      <div
        className="
          absolute
          -left-24
          top-40
          h-56
          w-56
          rounded-full
          bg-red-300/20
          blur-[80px]
        "
      />

      {/* Sağ Blob */}
      <div
        className="
          absolute
          -right-24
          top-52
          h-64
          w-64
          rounded-full
          bg-yellow-300/20
          blur-[80px]
        "
      />
    </div>
  );
}