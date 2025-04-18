import { useState } from 'react';

export default function Light() {
  // Luodaan taulukko kategorioille
  const categories = ['Spot', 'Wash', 'Beam', 'FX'];
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Light</h1>

      {/* Alasvetovalikko kategorian valitsemiseksi */}
      <div className="mb-6">
        <label 
          htmlFor="category" 
          className="block mb-2 text-sm font-medium text-white font-poppins"
        >
          Valitse kategoria:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 w-full rounded bg-gray-700 text-white font-poppins"
        >
          <option value="">-- Valitse --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Näytetään valitun kategorian tiedot */}
      {selectedCategory ? (
        <div>
          <h2 className="text-xl font-semibold mb-2 font-poppins">
            {selectedCategory} -kategoriassa olevat laitemallit:
          </h2>
          {/* Tähän tulevat tietokantahaut, tällä hetkellä demo-tekstiä */}
          <p className="font-poppins">Tässä osassa listattaisiin kyseisen kategorian laitemallit tietokannasta.</p>
        </div>
      ) : (
        <p className="font-poppins">Valitse kategoria nähdäksesi laitemallit.</p>
      )}
    </div>
  );
}
