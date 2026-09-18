
import "leaflet/dist/leaflet.css";


export function BrandMap() {
  return (
    <div className="w-full overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.583678044092!2d27.106923!3d38.4741717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd90020281fe9%3A0xd59e9c768218107d!2sNew%20Napoli%20Pizza%20Kar%C5%9F%C4%B1yaka!5e0!3m2!1str!2str!4v1789713678930!5m2!1str!2str"
        className="block h-[600px] w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}