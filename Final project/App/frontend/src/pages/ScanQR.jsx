import { QrCode } from 'lucide-react';

export default function ScanQr() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* QR-skannausalue tai kuva */}
      <div className="mb-8">
        <QrCode size={64} className="text-white" />
      </div>
      <button
        className="px-6 py-3 bg-gradient-to-br from-slate-700 to-gray-800 rounded-[10px] text-white text-xl font-bold font-poppins"
        onClick={() => alert('Avaa QR-skanneri')}
      >
        SCAN QR
      </button>
    </div>
  );
}
