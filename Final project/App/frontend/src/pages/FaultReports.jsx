import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FaultReports() {
  const { deviceId } = useParams();
  const [faultReports, setFaultReports] = useState([]);

  useEffect(() => {
    const fetchFaultReports = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/device-units/${deviceId}/faults`);
        const data = await res.json();
        setFaultReports(data); // Asetetaan haetut vikailmoitukset tilaan
      } catch (error) {
        console.error('Virhe vikailmoitusten hakemisessa:', error);
      }
    };

    fetchFaultReports();
  }, [deviceId]);

  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-3xl font-bold mb-4">Vikailmoitukset laiteyksikölle: {deviceId}</h2>

      {/* Jos vikailmoituksia löytyy */}
      {faultReports.length > 0 ? (
        <ul>
          {faultReports.map((report, index) => (
            <li key={index} className="mb-4">
             <p><strong>Ilmoitettu:</strong> {new Date(report.reported_at).toLocaleString('fi-FI')}</p>

              <p><strong>Vika:</strong> {report.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ei vikailmoituksia.</p>
      )}
    </div>
  );
}
