import { Link } from "react-router-dom";
import { FooterData } from "./FooterData";

export function FooterLinks() {
    return (
        <div>
            <h4 className="mb-6 text-lg font-bold text-white">
                Menü
            </h4>

 <ul className="space-y-2">
{FooterData.links.map((item) => (
  <li key={item.target}>
    <Link
      to={`#${item.target}`}
      className="text-white"
    >
      <span>{item.title}</span>
    </Link>
  </li>
))}
</ul>
        </div>
    );
}