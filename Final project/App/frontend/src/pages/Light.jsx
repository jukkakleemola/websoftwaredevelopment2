import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Light() {
  const [categories, setCategories] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [devices, setDevices] = useState([]);
  const [deviceUnits, setDeviceUnits] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Virhe haettaessa kategorioita:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchManufacturers = async () => {
      if (selectedCategory) {
        try {
          const res = await fetch(`http://localhost:5000/api/manufacturers?category=${selectedCategory}`);
          const data = await res.json();
          setManufacturers(data);
        } catch (error) {
          console.error('Virhe haettaessa valmistajia:', error);
        }
      }
    };

    fetchManufacturers();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchDevices = async () => {
      if (selectedCategory && selectedManufacturer) {
        try {
          const res = await fetch(`http://localhost:5000/api/devices/byManufacturer?category=${selectedCategory}&manufacturer=${selectedManufacturer}`);
          const data = await res.json();
          setDevices(data);
        } catch (error) {
          console.error('Virhe haettaessa laitemalleja:', error);
        }
      }
    };

    fetchDevices();
  }, [selectedCategory, selectedManufacturer]);

  useEffect(() => {
    const fetchDeviceUnits = async () => {
      if (selectedDevice) {
        setLoading(true);
        try {
          const res = await fetch(`http://localhost:5000/api/device-units?deviceId=${Number(selectedDevice)}`);
          const data = await res.json();
          setDeviceUnits(data);
        } catch (error) {
          console.error('Virhe haettaessa laiteyksiköitä:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDeviceUnits();
  }, [selectedDevice]);

  return (
    <div className="bg-gray-900 text-white p-4 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 font-poppins">Light</h1>

      {/* Kategoria */}
      <div className="mb-6">
        <label htmlFor="category" className="block mb-2 font-poppins">Valitse kategoria:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setManufacturers([]);
            setSelectedManufacturer('');
            setDevices([]);
            setSelectedDevice('');
            setDeviceUnits([]);
          }}
          className="p-2 w-full rounded bg-gray-700 text-white font-poppins"
        >
          <option value="">-- Valitse --</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat.category}>{cat.category}</option>
          ))}
        </select>
      </div>

      {/* Valmistaja */}
      {selectedCategory && (
        <div className="mb-6">
          <label htmlFor="manufacturer" className="block mb-2 font-poppins">Valitse valmistaja:</label>
          <select
            id="manufacturer"
            value={selectedManufacturer}
            onChange={(e) => {
              setSelectedManufacturer(e.target.value);
              setDevices([]);
              setSelectedDevice('');
              setDeviceUnits([]);
            }}
            className="p-2 w-full rounded bg-gray-700 text-white font-poppins"
          >
            <option value="">-- Valitse --</option>
            {manufacturers.map((man, index) => (
              <option key={index} value={man.manufacturer}>{man.manufacturer}</option>
            ))}
          </select>
        </div>
      )}

      {/* Laitemalli */}
      {selectedManufacturer && (
        <div className="mb-6">
          <label htmlFor="device" className="block mb-2 font-poppins">Valitse laitemalli:</label>
          <select
            id="device"
            value={selectedDevice}
            onChange={(e) => {
              setSelectedDevice(e.target.value);
              setDeviceUnits([]);
            }}
            className="p-2 w-full rounded bg-gray-700 text-white font-poppins"
          >
            <option value="">-- Valitse --</option>
            {devices.map((dev) => (
              <option key={dev.id} value={dev.id}>{dev.model}</option>
            ))}
          </select>
        </div>
      )}

      {/* Laiteyksiköt listana */}
      {selectedDevice && (
        <div className="space-y-2">
          {loading ? (
            <p>Ladataan laiteyksiköitä...</p>
          ) : deviceUnits.length > 0 ? (
            deviceUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-800 p-2 rounded-md hover:bg-gray-700">
                <Link to={`/main/device/${unit.id}`} className="text-white font-poppins">
                  {unit.identifier} 
                </Link>
              </div>
            ))
          ) : (
            <p className="text-red-400">Ei laiteyksiköitä saatavilla.</p>
          )}
        </div>
      )}
    </div>
  );
}
