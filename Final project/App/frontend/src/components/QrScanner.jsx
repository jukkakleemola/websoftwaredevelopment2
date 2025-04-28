import { useState, useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QrScanner = ({ onScanSuccess, onScanError }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const html5QrCodeRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isScanning) {
      const qrCodeRegionId = "qr-reader";
      html5QrCodeRef.current = new Html5Qrcode(qrCodeRegionId);

      Html5Qrcode.getCameras()
        .then(cameras => {
          if (cameras && cameras.length > 0) {
            html5QrCodeRef.current.start(
              { facingMode: "environment" },
              {
                fps: 10,
                qrbox: { width: 250, height: 250 }
              },
              (decodedText) => {
                clearTimeout(timeoutRef.current);
                setScannedData(decodedText);
                setIsScanning(false);
                onScanSuccess(decodedText); // Callback for successful scan
                stopScanner();
              },
              (errorMessage) => {
                onScanError(errorMessage); // Callback for scan error
              }
            );

            timeoutRef.current = setTimeout(() => {
              console.warn("Ei löydetty QR-koodia 20 sekunnissa.");
              setIsScanning(false);
              stopScanner();
            }, 20000);
          } else {
            console.error("Ei löydetty kameroita.");
            setIsScanning(false);
          }
        })
        .catch(err => {
          console.error("Kameran hakeminen epäonnistui", err);
          setIsScanning(false);
        });
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      stopScanner();
    };
  }, [isScanning]);

  const stopScanner = () => {
    if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
      html5QrCodeRef.current.stop()
        .then(() => {
          try {
            html5QrCodeRef.current.clear();
          } catch (err) {
            console.error("Clear error", err);
          }
        })
        .catch((err) => console.error("Stop error", err));
    }
  };

  const handleStartScan = () => {
    setScannedData('');
    setIsScanning(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="mb-8">
        {isScanning ? (
          <div id="qr-reader" className="w-[300px] h-[300px]" />
        ) : scannedData ? (
          <div className="text-white text-lg font-bold break-words max-w-[300px] text-center">
            Scanned: {scannedData}
          </div>
        ) : (
          <p className="text-white text-xl">QR Code scanner</p>
        )}
      </div>

      {!isScanning && (
        <button
          className="px-6 py-3 bg-gradient-to-br from-slate-700 to-gray-800 rounded-[10px] text-white text-xl font-bold mb-4"
          onClick={handleStartScan}
        >
          {scannedData ? "SCAN AGAIN" : "SCAN QR"}
        </button>
      )}
    </div>
  );
};

export default QrScanner;
