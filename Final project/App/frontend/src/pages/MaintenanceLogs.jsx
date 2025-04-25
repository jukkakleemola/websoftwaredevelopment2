import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function MaintenanceLogs() {
  const { deviceId } = useParams();
  const location = useLocation();
  const identifier = location.state?.identifier || deviceId; // fallback

  const [maintenanceLogs, setMaintenanceLogs] = useState([]);

  useEffect(() => {
    if (!deviceId) return;

    const fetchMaintenanceLogs = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/device/${deviceId}/maintenance`);
        const data = await res.json();
        setMaintenanceLogs(data);
      } catch (error) {
        console.error('Virhe huoltotietojen hakemisessa:', error);
      }
    };

    fetchMaintenanceLogs();
  }, [deviceId]);

  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">
        Huoltotiedot: {identifier}
      </h2>

      {maintenanceLogs.length > 0 ? (
        <ul>
          {maintenanceLogs.map((log, index) => (
            <li key={index} className="mb-4">
              <p><strong>Huoltopäivämäärä:</strong> {new Date(log.maintenance_date).toLocaleString('fi-FI')}</p>
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
