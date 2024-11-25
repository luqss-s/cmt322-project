'use client';
import { useState } from 'react';
import Navbaradmin from '../navadminbar';

export default function Home() {
  const [bands, setBands] = useState([
    { name: 'Band A', members: 'Ali, Abu', origin: 'City A', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false },
    { name: 'Band B', members: 'Ali, Abu', origin: 'City B', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false },
    { name: 'Band C', members: 'Ali, Abu', origin: 'City C', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false },
  ]);
  const [editBand, setEditBand] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isFinalPopupOpen, setIsFinalPopupOpen] = useState(false);
  const [stage, setStage] = useState('initial');
  const [qualifiedBands, setQualifiedBands] = useState([]);
  const [newBand, setNewBand] = useState({ name: '', members: '', origin: '', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false });

  const handleScoreChange = (e, bandName) => {
    const value = parseInt(e.target.value) || 0;
    setBands((prevBands) =>
      prevBands.map((band) =>
        band.name === bandName
          ? { ...band, scores: { ...band.scores, [stage]: value } }
          : band
      )
    );
  };

  const handleDisqualifyBand = (bandName) => {
    setBands((prevBands) =>
      prevBands.map((band) =>
        band.name === bandName ? { ...band, disqualified: true } : band
      )
    );
  };

  const computeRankings = () => {
    const sortedBands = [...bands]
      .filter((band) => !band.disqualified)
      .sort((a, b) => b.scores[stage] - a.scores[stage]);

    const qualifyingCount = stage === 'initial' ? 3 : 2;
    return sortedBands.map((band, index) => ({
      ...band,
      qualifies: index < qualifyingCount,
    }));
  };

  const handleAdvanceStage = () => {
    const rankings = computeRankings();
    const qualified = rankings.filter((band) => band.qualifies);

    setQualifiedBands(qualified);

    if (stage === 'initial') {
      setStage('preliminary');
    } else if (stage === 'preliminary') {
      setStage('final');
    }

    setBands((prevBands) =>
      prevBands.map((band) => ({
        ...band,
        qualifies: qualified.some((q) => q.name === band.name),
      }))
    );

    if (stage === 'preliminary') {
      setIsFinalPopupOpen(true); // Open final popup
    }
  };

  const handleAddOrEditBand = () => {
    if (editBand) {
      // Update existing band
      setBands((prevBands) =>
        prevBands.map((band) =>
          band.name === editBand.name ? { ...band, ...newBand } : band
        )
      );
    } else {
      // Add new band
      setBands((prevBands) => [...prevBands, newBand]);
    }
    setEditBand(null);
    setNewBand({ name: '', members: '', origin: '', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false });
    setIsPopupOpen(false);
  };

  const openAddPopup = () => {
    setEditBand(null);
    setNewBand({ name: '', members: '', origin: '', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false });
    setIsPopupOpen(true);
  };

  const openEditPopup = (band) => {
    setEditBand(band);
    setNewBand(band);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };


  const rankings = computeRankings();
  const prelimBands = bands.filter((band) => band.qualifies && stage === 'preliminary');
  const finalBands = bands.filter((band) => band.qualifies && stage === 'final');

  return (
    <div className="bg-gray-400 h-full w-full text-black overflow-y-auto">
      <Navbaradmin />
      <div className="flex justify-center">
          <picture className="w-96 h-48 bg-cover">            
            <img src="tittle6.png" className="w-96 h-full object-cover" />
          </picture>
        </div>

      {/* Add Band Button */}


      {/* Display Bands */}
      <section className="mb-8 px-16">
        <div className='flex justify-between items-center'>
      <h2 className="text-2xl font-semibold mb-4">All Bands</h2>
      <button 
        onClick={openAddPopup}
        className="bg-blue-600 text-white rounded px-6 py-2 mb-4 hover:bg-blue-700 right-0"
      >
        Add Band
      </button>
      </div>
        
        <table className="w-full bg-white rounded-lg shadow-md ">
          <thead className="bg-black text-white">
            <tr>
              <th>Name</th>
              <th>Members</th>
              <th>Origin</th>
              <th>Score ({stage})</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band) => (
              <tr key={band.name} className={`${band.disqualified ? 'bg-red-500 text-gray-200' : 'bg-gray-100'}`}>
                <td className="text-black  px-4 py-2 font-bold">{band.name}</td>
                <td className="text-black  px-4 py-2 font-bold">{band.members}</td>
                <td className="text-black px-4 py-2 font-bold">{band.origin}</td>
                <td className='flex justify-center'>
                  <input
                    type="number"
                    value={band.scores[stage]}
                    onChange={(e) => handleScoreChange(e, band.name)}
                    disabled={band.disqualified}
                    className="w-16 text-black"
                  />
                </td>
                <td>
                  <div className='flex justify-center gap-4'>
                  <button
                    onClick={() => openEditPopup(band)}
                    className="bg-yellow-500 text-white rounded px-4 py-1 hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDisqualifyBand(band.name)}
                    className="bg-red-600 text-white rounded px-4 py-1 hover:bg-red-700"
                  >
                    Disqualify
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Rankings */}
      <section className="mb-8 px-14">
        <h2 className="text-2xl font-semibold mb-4">Rankings</h2>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-black text-white">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score ({stage})</th>
              <th>Qualified</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((band, index) => (
              <tr key={band.name} className={`${band.qualifies ? 'bg-green-500' : 'bg-white'}`}>
                <td className="text-black  px-4 py-2 font-bold">{index + 1}</td>
                <td className="text-black  px-4 py-2 font-bold text-center">{band.name}</td>
                <td className="text-black  px-4 py-2 font-bold text-center">{band.scores[stage]}</td>
                <td className="text-black  px-4 py-2 font-bold text-center ">{band.qualifies ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Preliminary and Final Bands */}
      <section className="mb-8 px-14">
        <h3 className="text-xl font-semibold mb-4">Preliminary Bands</h3>
        <ul>
          {prelimBands.map((band) => (
            <li key={band.name}>{band.name}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-4 mt-8">Final Bands</h3>
        <ul>
          {finalBands.map((band) => (
            <li key={band.name}>{band.name}</li>
          ))}
        </ul>
      </section>

      {/* Submit & Advance */}
      <div className="mb-8 px-14">
        <button
          onClick={handleAdvanceStage}
          className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700"
        >
          Submit & Proceed
        </button>
      </div>

      {/* Add/Edit Band Popup */}
      {isPopupOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-black text-white p-6 rounded-lg max-w-lg relative">
      {/* Close button */}
      <button
        onClick={handleClosePopup}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
      >
        &times; {/* This represents the "X" */}
      </button>
      <h2 className="text-xl font-semibold mb-4">{editBand ? 'Edit Band' : 'Add Band'}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={newBand.name}
          onChange={(e) => setNewBand({ ...newBand, name: e.target.value })}
          className="w-full mb-4"
        />
      </div>
      <div>
        <label>Members:</label>
        <input
          type="text"
          value={newBand.members}
          onChange={(e) => setNewBand({ ...newBand, members: e.target.value })}
          className="w-full mb-4"
        />
      </div>
      <div>
        <label>Origin:</label>
        <input
          type="text"
          value={newBand.origin}
          onChange={(e) => setNewBand({ ...newBand, origin: e.target.value })}
          className="w-full mb-4"
        />
      </div>
      <button
        onClick={handleAddOrEditBand}
        className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
      >
        Save
      </button>
    </div>
  </div>
)}

      {/* Final Popup */}
      {isFinalPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Congratulations to Finalists!</h2>
            <ul>
              {finalBands.map((band) => (
                <li key={band.name}>{band.name}</li>
              ))}
            </ul>
            <button
              onClick={() => setIsFinalPopupOpen(false)}
              className="bg-red-600 text-white rounded px-6 py-2 hover:bg-red-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


