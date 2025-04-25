import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function MaintenanceLogs() {
  const { deviceId } = useParams();  // Oikea parametri nimeltään deviceId
  const [maintenanceLogs, setMaintenanceLogs] = useState([]);

  useEffect(() => {
    if (!deviceId) return;  // Varmista, että deviceId on määritelty ennen kuin teet fetch-kutsun

    const fetchMaintenanceLogs = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/device/${deviceId}/maintenance`);
        const data = await res.json();
        setMaintenanceLogs(data); // Asetetaan haetut tiedot tilaan
      } catch (error) {
        console.error('Virhe huoltotietojen hakemisessa:', error);
      }
    };

    fetchMaintenanceLogs();
  }, [deviceId]);  // Tämä varmistaa, että effect suoritetaan, kun deviceId muuttuu

  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Huoltotiedot laiteyksikölle: {deviceId}</h2>

      {/* Jos huoltotiedot löytyvät */}
      {maintenanceLogs.length > 0 ? (
        <ul>
          {maintenanceLogs.map((log, index) => (
            <li key={index} className="mb-4">
              <p><strong>Huoltopäivämäärä:</strong> {log.maintenance_date}</p>
              <p><strong>Huoltotiedot:</strong> {log.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ei huoltotietoja.</p>
      )}
    </div>
  );
}
