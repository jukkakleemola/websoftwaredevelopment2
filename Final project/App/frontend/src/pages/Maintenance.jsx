import { useNavigate } from "react-router-dom";
import { QrCode, Lightbulb, MoveVertical, Volume2 } from "lucide-react";

export default function ScanQR() {
  const navigate = useNavigate();

  return (
    <div className="w-96 h-[640px] bg-slate-800 rounded-[50px] overflow-hidden relative mx-auto flex flex-col items-center">
      {/* Ylälaidan koriste tai logoalue */}
      <div className="w-80 h-52 mt-8 bg-gradient-to-b from-slate-700/60 to-gray-800/60 rounded-[20px] shadow-[0_20px_60px_rgba(16,20,28,0.6)] border-2 border-white backdrop-blur-[50px] flex justify-center items-center">
        <img
          className="w-64 h-40 object-contain"
          src="https://placehold.co/251x155"
          alt="Logo"
        />
      </div>

      {/* Keskiosan QR-kuvake */}
      <div className="relative mt-8">
        <img
          className="w-36 h-36 blur-sm absolute"
          src="https://placehold.co/150x150"
          alt="QR blur"
        />
        <img
          className="w-36 h-36"
          src="https://placehold.co/150x150"
          alt="QR"
        />
      </div>

      {/* SCAN QR -nappi */}
      <button
        className="mt-8 px-6 py-3 bg-gradient-to-br from-slate-700 to-gray-800 rounded-[10px] text-white text-xl font-bold outline outline-1 outline-white"
        onClick={() => alert("Scan-nappi toimii")}
      >
        SCAN QR
      </button>

      {/* Alavalikko */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-br from-slate-700 to-gray-800 border-t-2 border-white backdrop-blur-[50px] flex justify-around items-center">
        <NavButton icon={<QrCode size={24} />} label="Scan" active />
        <NavButton icon={<Lightbulb size={24} />} label="Light" onClick={() => navigate("/light")} />
        <NavButton icon={<MoveVertical size={24} />} label="Hoist" onClick={() => navigate("/hoist")} />
        <NavButton icon={<Volume2 size={24} />} label="Sound" onClick={() => navigate("/sound")} />
      </div>
    </div>
  );
}

// Napin komponentti
function NavButton({ icon, label, onClick, active = false }) {
  return (
    <button
      className={`flex flex-col items-center text-xs ${
        active ? "text-teal-400" : "text-white"
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="mt-1">{label}</span>
    </button>
  );
}
