export function FooterBottom() {
  return (
    <div
      className="
        mt-14
        border-t
        border-zinc-800
        pt-8
        text-center
      "
    >
      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()} Napoli Pizza
        <br />
        Tüm hakları saklıdır.
      </p>
    </div>
  );
}