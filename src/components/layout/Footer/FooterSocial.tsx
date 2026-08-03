import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

export function FooterSocial() {
const items = [
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
];

  return (
    <div>
      <h4 className="mb-6 text-lg font-bold text-white">
        Bizi Takip Edin
      </h4>

      <div className="flex gap-4">
        {items.map((Icon, index) => (
          <button
            key={index}
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
            <Icon size={20}  className="
text-zinc-400
transition-all
duration-300
group-hover:text-white
group-hover:rotate-12
"/>
          </button>
        ))}
      </div>
    </div>
  );
}