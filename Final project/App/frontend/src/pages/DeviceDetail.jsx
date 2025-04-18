// src/pages/DeviceDetail.jsx
import { ArrowLeft, User } from "lucide-react";

export default function DeviceDetail() {
  return (
    <div className="relative min-h-screen bg-darkbg text-white flex flex-col">
      {/* Yläpalkki */}
      <div className="flex justify-between items-center p-4 bg-black/30">
        <button onClick={() => window.history.back()}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <span className="font-bold">Device Info</span>
        <button>
          <User className="w-6 h-6" />
        </button>
      </div>

      {/* Laitekuva */}
      <div className="p-4">
        <img
          src="/images/device.jpg"
          alt="Device"
          className="rounded-md w-full object-cover mb-4"
        />
        <h2 className="text-xl font-semibold">Valopää XYZ123</h2>
        <p className="mt-2 text-sm text-gray-200">
          Tärkeät tiedot laitteesta. Kategoria: Light, Sijainti: varasto 1, ...
        </p>

        {/* Vikailmoitus tai huoltohistoria */}
        <button className="bg-brand hover:bg-brand-dark rounded-full px-6 py-2 text-white mt-4">
          Tee vikailmoitus
        </button>
      </div>
    </div>
  );
}
