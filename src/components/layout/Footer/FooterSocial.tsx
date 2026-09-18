import {
  FaInstagram,
} from "react-icons/fa6";

export function FooterSocial() {
  const items = [
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/napolipizza.karsiyaka/",
    },
  ];

  return (
    <div>
      <h4 className="mb-6 text-lg font-bold text-white">
        Bizi Takip Edin
      </h4>

      <div className="flex gap-4">
        {items.map(({ Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-zinc-700
              bg-zinc-900/70
              backdrop-blur
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-110
              hover:border-red-500
              hover:bg-red-600
              hover:shadow-[0_0_30px_rgba(239,68,68,.45)]
            "
          >
            <Icon
              size={20}
              className="
                text-zinc-400
                transition-all
                duration-300
                group-hover:rotate-12
                group-hover:text-white
              "
            />
          </a>
        ))}
      </div>
    </div>
  );
}