import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function DeviceDetail() {
  const { deviceId } = useParams();
  const [device, setDevice] = useState(null);
  const [isOperational, setIsOperational] = useState(true);
  const [maintenanceDescription, setMaintenanceDescription] = useState('');
  const [faultDescription, setFaultDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevice = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/device-units/${deviceId}`);
        const data = await res.json();
        setDevice(data);
        setIsOperational(data.is_operational);
      } catch (error) {
        console.error('Virhe haettaessa laitetta:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevice();
  }, [deviceId]);

  const handleOperationalChange = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/device/${deviceId}/operational`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isOperational: !isOperational }),
      });
      const data = await res.json();
      setIsOperational(data.is_operational);
    } catch (error) {
      console.error('Virhe päivitettäessä käyttökelpoisuutta:', error);
    }
  };

  const handleMaintenanceSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/device/${deviceId}/maintenance`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceUnitId: deviceId,
          maintenanceDescription,
        }),
      });
      await res.json();
      setMaintenanceDescription('');
    } catch (error) {
      console.error('Virhe huollon lisäämisessä:', error);
    }
  };

  const handleFaultSubmit = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/device/${deviceId}/fault`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deviceUnitId: deviceId,
          faultDescription,
          status: 'pending',
        }),
      });
      await res.json();
      setFaultDescription('');
    } catch (error) {
      console.error('Virhe lisättäessä vikailmoitusta:', error);
    }
  };

  
  if (loading) return <p>Ladataan tietoja...</p>;

  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 font-poppins">Laiteyksikkö: {device.identifier}</h1>

      {/* Käyttökelvottomuuden vaihto */}
      <button onClick={handleOperationalChange} className="p-2 bg-red-500 rounded mb-4">
        {isOperational ? 'Merkitse käyttökelvottomaksi' : 'Merkitse käyttökelpoiseksi'}
      </button>

      {/* Linkit erillisiin näkymiin */}
      <div className="space-y-4 mb-6">
        <Link
          to={`/main/device/${deviceId}/maintenanceLogs`}
          state={{ identifier: device.identifier }}
          className="block p-2 bg-blue-600 rounded text-center hover:bg-blue-500"
        >
          Näytä huoltotiedot
        </Link>
        <Link
          to={`/main/device/${deviceId}/faultReports`}
          state={{ identifier: device.identifier }}
          className="block p-2 bg-red-600 rounded text-center hover:bg-red-500"
        >
          Näytä vikailmoitukset
        </Link>
      </div>

      {/* Huollon lisääminen */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Lisää huoltotieto</h2>
        <textarea
          value={maintenanceDescription}
          onChange={(e) => setMaintenanceDescription(e.target.value)}
          placeholder="Lisää huoltotieto"
          className="p-2 w-full mb-2 text-black rounded"
        />
        <button onClick={handleMaintenanceSubmit} className="p-2 bg-blue-500 rounded">
          Lisää huoltotieto
        </button>
      </div>

      {/* Vikailmoituksen lisääminen */}
      <div>
        <h2 className="text-xl font-semibold">Lisää vikailmoitus</h2>
        <textarea
          value={faultDescription}
          onChange={(e) => setFaultDescription(e.target.value)}
          placeholder="Lisää vikailmoitus"
          className="p-2 w-full mb-2 text-black rounded"
        />
        <button onClick={handleFaultSubmit} className="p-2 bg-red-500 rounded">
          Lisää vikailmoitus
        </button>
      </div>
    </div>
  );
}
