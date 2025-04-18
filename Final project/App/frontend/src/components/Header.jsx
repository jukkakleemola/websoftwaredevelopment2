import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    // Tyhjennetään esimerkiksi localStorage jos käytössä
    // localStorage.clear();
    navigate('/');
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-gray-800 shadow">
        <div className="flex items-center space-x-2">
       
          <span className="text-xl font-bold ">Varastonhallinta</span>
        </div>
        <button
          className="p-2 hover:bg-gray-700 rounded"
          onClick={() => setShowModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
            />
          </svg>
        </button>
      </header>

      {/* Logout Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-gray-800 shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Kirjaudu ulos</h2>
            <p className="mb-6">Haluatko varmasti kirjautua ulos?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Peruuta
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Kirjaudu ulos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
