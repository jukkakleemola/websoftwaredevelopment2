import { NavLink } from "react-router-dom";
import scanIcon from "../assets/scan.png";
import lightIcon from "../assets/light.png";
import hoistIcon from "../assets/hoist.png";
import soundIcon from "../assets/sound.png";

function NavButton({ to, label, icon, activeStyleClasses, defaultStyleClasses }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center ${isActive ? activeStyleClasses : defaultStyleClasses}`
      }
    >
      <img src={icon} alt={`${label} icon`} className="w-6 h-6 mb-1" />
      <span className="text-xs">{label}</span>
    </NavLink>
  );
}

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-900 p-3 flex justify-around">
      <NavButton
        to="/main/scan"
        label="Scan"
        icon={scanIcon}
        activeStyleClasses="text-teal-600 font-normal font-poppins"
        defaultStyleClasses="text-white font-normal font-poppins"
      />
      <NavButton
        to="/main/light"
        label="Light"
        icon={lightIcon}
        activeStyleClasses="text-teal-600 font-normal font-poppins"
        defaultStyleClasses="text-white font-normal font-poppins"
      />
      <NavButton
        to="/main/hoist"
        label="Hoist"
        icon={hoistIcon}
        activeStyleClasses="text-teal-600 font-normal font-poppins"
        defaultStyleClasses="text-white font-normal font-poppins"
      />
      <NavButton
        to="/main/sound"
        label="Sound"
        icon={soundIcon}
        activeStyleClasses="text-teal-600 font-normal font-poppins"
        defaultStyleClasses="text-white font-normal font-poppins"
      />
    </nav>
  );
}
