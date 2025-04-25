import { useState } from 'react';
import { QrCode } from 'lucide-react';
import QRCode from 'react-qr-code';

export default function ScanQr() {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState('');

  const handleScan = () => {
    // Simuloi QR-koodin skannausta
    setIsScanning(true);

    // Simuloidaan skannaus ja annetaan satunnainen QR-koodidata
    setTimeout(() => {
      const dummyQrData = 'https://example.com';
      setScannedData(dummyQrData);
      setIsScanning(false);
    }, 2000); // Skannaus kestää 2 sekuntia
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* QR-skannausalue */}
      <div className="mb-8">
        {isScanning ? (
          <div className="text-white text-lg font-bold">Scanning...</div>
        ) : scannedData ? (
          <div className="text-white text-lg font-bold">Scanned URL: {scannedData}</div>
        ) : (
          <QrCode size={64} className="text-white" />
        )}
      </div>

      {/* Skannausnappi */}
      <button
        className="px-6 py-3 bg-gradient-to-br from-slate-700 to-gray-800 rounded-[10px] text-white text-xl font-bold font-poppins"
        onClick={handleScan}
      >
        SCAN QR
      </button>

      {/* Näytetään skannattu data */}
      {scannedData && (
        <div className="mt-4 text-white font-semibold">
          <a href={scannedData} target="_blank" rel="noopener noreferrer">
            Open Scanned URL
          </a>
        </div>
      )}
    </div>
  );
}
