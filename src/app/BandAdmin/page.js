// 'use client';
// import { useState } from 'react';
// import Navbaradmin from '../navadminbar';

// export default function Home() {
//   const [bands, setBands] = useState([]);
//   const [newBand, setNewBand] = useState({ name: "", members: "", origin: "" });
//   const [editBand, setEditBand] = useState(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [stage, setStage] = useState("preliminary");
//   const [qualifiedPreliminary, setQualifiedPreliminary] = useState([]);
//   const [qualifiedFinal, setQualifiedFinal] = useState([]);

//   const handleRegisterBand = (e) => {
//     e.preventDefault();
//     if (!newBand.name || !newBand.members || !newBand.origin) return;
//     setBands([
//       ...bands,
//       { ...newBand, scores: { preliminary: 0, final: 0 }, disqualified: false },
//     ]);
//     setNewBand({ name: "", members: "", origin: "" });
//   };

//   const handleEditClick = (band) => {
//     setEditBand(band);
//     setIsPopupOpen(true);
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditBand((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEditSubmit = () => {
//     setBands((prevBands) =>
//       prevBands.map((band) => (band.name === editBand.name ? editBand : band))
//     );
//     setIsPopupOpen(false);
//   };

//   const handleScoreChange = (e, bandName) => {
//     const value = parseInt(e.target.value) || 0;
//     setBands((prevBands) =>
//       prevBands.map((band) => {
//         if (band.name === bandName && !band.disqualified) {
//           if (
//             stage === "preliminary" ||
//             (stage === "final" && qualifiedPreliminary.some((b) => b.name === bandName))
//           ) {
//             return { ...band, scores: { ...band.scores, [stage]: value } };
//           }
//         }
//         return band;
//       })
//     );
//   };

//   const handleDisqualify = (bandName) => { 
//     setBands((prevBands) => 
//         prevBands.map((band) => 
//             band.name === bandName 
//                 ? { ...band, disqualified: true, scores: { ...band.scores, [stage]: 0 } } 
//                 : band 
//         ) 
//     ); 
//     computeRankings(); 
//     };

//   const computeRankings = () => {
//     const sortedBands = [...bands].sort((a, b) => b.scores[stage] - a.scores[stage]);
//     const qualifyingCount = stage === "preliminary" ? 10 : 5;
//     return sortedBands.map((band, index) => ({
//       ...band,
//       qualifies: index < qualifyingCount && !band.disqualified,
//     }));
//   };

//   const handleNextStage = () => {
//     const rankings = computeRankings();
//     if (stage === "preliminary") {
//       setQualifiedPreliminary(rankings.filter((band) => band.qualifies));
//       setStage("final");
//     } else if (stage === "final") {
//       setQualifiedFinal(rankings.filter((band) => band.qualifies));
//       setStage("complete");
//     }
//   };

//   const rankings = computeRankings();

//   return (
//     <div className="bg-gray-100 h-screen text-black">
//       <Navbaradmin />
//       <h1 className="text-center text-3xl font-bold my-8">Admin Dashboard</h1>

//       {/* Section 1: Register Band */}
//       <section className="bg-white p-6 rounded-lg max-w-lg mx-auto shadow-lg mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Register Band</h2>
//         <form onSubmit={handleRegisterBand} className="space-y-4">
//           <div>
//             <label className="block font-medium">Band Name:</label>
//             <input
//               type="text"
//               value={newBand.name}
//               onChange={(e) => setNewBand({ ...newBand, name: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Band Members:</label>
//             <input
//               type="text"
//               value={newBand.members}
//               onChange={(e) => setNewBand({ ...newBand, members: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Origin:</label>
//             <input
//               type="text"
//               value={newBand.origin}
//               onChange={(e) => setNewBand({ ...newBand, origin: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 w-full"
//           >
//             Add Band
//           </button>
//         </form>
//       </section>

//       {/* Section 2: Display All Bands */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">All Bands</h2>
//         <table className="w-full bg-white text-black rounded-lg shadow-md">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Members</th>
//               <th className="py-3 px-6">Origin</th>
//               <th className="py-3 px-6">Score ({stage})</th>
//               <th className="py-3 px-6">Edit</th>
//               <th className="py-3 px-6">Disqualify</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bands.map((band) => (
//               <tr
//                 key={band.name}
//                 className={`${band.disqualified ? "bg-red-500 text-gray-200" : "bg-gray-100"} text-center`}
//               >
//                 <td className="py-3 px-6">{band.name}</td>
//                 <td className="py-3 px-6">{band.members}</td>
//                 <td className="py-3 px-6">{band.origin}</td>
//                 <td className="py-3 px-6">
//                   <input
//                     type="number"
//                     value={band.scores[stage]}
//                     onChange={(e) => handleScoreChange(e, band.name)}
//                     disabled={band.disqualified || stage === "complete"}
//                     className="w-16 text-black"
//                   />
//                 </td>
//                 <td className="py-3 px-6">
//                   <button
//                     onClick={() => handleEditClick(band)}
//                     className="bg-yellow-500 text-white rounded px-4 py-1"
//                   >
//                     Edit
//                   </button>
//                 </td>
//                 <td className="py-3 px-6">
//                   <button
//                     onClick={() => handleDisqualify(band.name)}
//                     disabled={band.disqualified}
//                     className="bg-red-600 text-white rounded px-4 py-1"
//                   >
//                     Disqualify
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Rankings Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Rankings</h2>
//         <table className="w-full bg-white text-black rounded-lg shadow-md">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-6">Rank</th>
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Score ({stage})</th>
//               <th className="py-3 px-6">Qualified</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rankings.map((band, index) => (
//               <tr
//                 key={band.name}
//                 className={`${band.qualifies ? "bg-green-500" : "bg-gray-200"} text-center`}
//               >
//                 <td className="py-3 px-6">{index + 1}</td>
//                 <td className="py-3 px-6">{band.name}</td>
//                 <td className="py-3 px-6">{band.scores[stage]}</td>
//                 <td className="py-3 px-6">{band.qualifies ? "Yes" : "No"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Next Stage Button */}
//       <button
//         onClick={handleNextStage}
//         className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
//       >
//         Proceed to {stage === "preliminary" ? "Final" : "Complete"} Stage
//       </button>

//       {/* Edit Band Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg max-w-lg">
//             <h2 className="text-xl font-semibold mb-4">Edit Band</h2>
//             <form onSubmit={handleEditSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Band Name:</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={editBand.name}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-300 rounded p-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Band Members:</label>
//                 <input
//                   type="text"
//                   name="members"
//                   value={editBand.members}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-300 rounded p-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium">Origin:</label>
//                 <input
//                   type="text"
//                   name="origin"
//                   value={editBand.origin}
//                   onChange={handleEditChange}
//                   className="w-full border border-gray-300 rounded p-2"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700 w-full"
//               >
//                 Save Changes
//               </button>
//             </form>
//             <button
//               onClick={() => setIsPopupOpen(false)}
//               className="mt-4 text-red-600"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client';
// import { useState } from 'react';
// import Navbaradmin from '../navadminbar';

// export default function Home() {
//   const [bands, setBands] = useState([]);
//   const [newBand, setNewBand] = useState({ name: "", members: "", origin: "", initialScore: 0 });
//   const [stage, setStage] = useState("initial"); // initial, preliminary, final
//   const [rankings, setRankings] = useState([]);

//   const handleRegisterBand = (e) => {
//     e.preventDefault();
//     if (!newBand.name || !newBand.members || !newBand.origin) return;
//     setBands([
//       ...bands,
//       {
//         ...newBand,
//         initialScore: parseInt(newBand.initialScore),
//         scores: { preliminary: 0 },
//         disqualified: false,
//       },
//     ]);
//     setNewBand({ name: "", members: "", origin: "", initialScore: 0 });
//   };

//   const handleScoreChange = (e, bandName, scoreType) => {
//     const value = parseInt(e.target.value) || 0;
//     setBands((prevBands) =>
//       prevBands.map((band) => {
//         if (band.name === bandName && !band.disqualified) {
//           return { ...band, scores: { ...band.scores, [scoreType]: value } };
//         }
//         return band;
//       })
//     );
//   };

//   const computeRankings = () => {
//     let sortedBands;
//     if (stage === "initial") {
//       sortedBands = [...bands].sort((a, b) => b.initialScore - a.initialScore);
//     } else if (stage === "preliminary") {
//       sortedBands = [...bands].sort((a, b) => b.scores.preliminary - a.scores.preliminary);
//     }
//     const qualifyingCount = stage === "initial" ? 3 : 2;
//     return sortedBands.map((band, index) => ({
//       ...band,
//       qualifies: index < qualifyingCount && !band.disqualified,
//     }));
//   };

//   const handleSubmitScores = () => {
//     const updatedRankings = computeRankings();
//     setRankings(updatedRankings);
//   };

//   const handleNextStage = () => {
//     if (stage === "initial") {
//       setStage("preliminary");
//     } else if (stage === "preliminary") {
//       setStage("final");
//     }
//   };

//   return (
//     <div className="bg-gray-100 h-screen text-black">
//       <Navbaradmin />
//       <h1 className="text-center text-3xl font-bold my-8">Admin Dashboard</h1>

//       {/* Section: Register Band */}
//       <section className="bg-white p-6 rounded-lg max-w-lg mx-auto shadow-lg mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Register Band</h2>
//         <form onSubmit={handleRegisterBand} className="space-y-4">
//           <div>
//             <label className="block font-medium">Band Name:</label>
//             <input
//               type="text"
//               value={newBand.name}
//               onChange={(e) => setNewBand({ ...newBand, name: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Band Members:</label>
//             <input
//               type="text"
//               value={newBand.members}
//               onChange={(e) => setNewBand({ ...newBand, members: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Origin:</label>
//             <input
//               type="text"
//               value={newBand.origin}
//               onChange={(e) => setNewBand({ ...newBand, origin: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <div>
//             <label className="block font-medium">Initial Score:</label>
//             <input
//               type="number"
//               value={newBand.initialScore}
//               onChange={(e) => setNewBand({ ...newBand, initialScore: e.target.value })}
//               className="w-full border border-gray-300 rounded p-2"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700 w-full"
//           >
//             Add Band
//           </button>
//         </form>
//       </section>

//       {/* Section: All Bands */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">All Bands</h2>
//         <table className="w-full bg-white text-black rounded-lg shadow-md">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Members</th>
//               <th className="py-3 px-6">Origin</th>
//               <th className="py-3 px-6">Initial Score</th>
//               {stage !== "initial" && <th className="py-3 px-6">Preliminary Score</th>}
//             </tr>
//           </thead>
//           <tbody>
//             {bands.map((band) => (
//               <tr key={band.name} className="bg-gray-100 text-center">
//                 <td className="py-3 px-6">{band.name}</td>
//                 <td className="py-3 px-6">{band.members}</td>
//                 <td className="py-3 px-6">{band.origin}</td>
//                 <td className="py-3 px-6">{band.initialScore}</td>
//                 {stage !== "initial" && (
//                   <td className="py-3 px-6">
//                     <input
//                       type="number"
//                       value={band.scores.preliminary}
//                       onChange={(e) => handleScoreChange(e, band.name, "preliminary")}
//                       disabled={stage === "final"}
//                       className="w-16 text-black"
//                     />
//                   </td>
//                 )}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Rankings Section */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-semibold mb-4">Rankings</h2>
//         <table className="w-full bg-white text-black rounded-lg shadow-md">
//           <thead className="bg-gray-800 text-white">
//             <tr>
//               <th className="py-3 px-6">Rank</th>
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Score</th>
//               <th className="py-3 px-6">Qualified</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rankings.map((band, index) => (
//               <tr key={band.name} className={`${band.qualifies ? "bg-green-500" : "bg-gray-200"} text-center`}>
//                 <td className="py-3 px-6">{index + 1}</td>
//                 <td className="py-3 px-6">{band.name}</td>
//                 <td className="py-3 px-6">
//                   {stage === "initial" ? band.initialScore : band.scores.preliminary}
//                 </td>
//                 <td className="py-3 px-6">{band.qualifies ? "Yes" : "No"}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </section>

//       {/* Submit and Next Stage Buttons */}
//       <div className="flex space-x-4 justify-center">
//         <button
//           onClick={handleSubmitScores}
//           className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700"
//         >
//           Submit Scores
//         </button>
//         <button
//           onClick={handleNextStage}
//           className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
//         >
//           Proceed to Next Stage
//         </button>
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import Navbaradmin from '../navadminbar';

export default function Home() {
  const [bands, setBands] = useState([]);
  const [editBand, setEditBand] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [stage, setStage] = useState('initial');
  const [qualifiedBands, setQualifiedBands] = useState([]);

  const handleAddBand = () => {
    setEditBand({ name: '', members: '', origin: '', scores: { initial: 0, preliminary: 0, final: 0 }, disqualified: false });
    setIsPopupOpen(true);
  };

  const handleEditClick = (band) => {
    setEditBand({ ...band }); 
    setIsPopupOpen(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBand((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault(); 
    if (!editBand.name) return; 
    setBands((prevBands) => {
      const exists = prevBands.some((band) => band.name === editBand.name);
      return exists
        ? prevBands.map((band) => (band.name === editBand.name ? editBand : band))
        : [...prevBands, editBand];
    });
    setIsPopupOpen(false);
  };

  const handleDeleteBand = (bandName) => {
    setBands((prevBands) => prevBands.filter((band) => band.name !== bandName));
  };

  const handleDisqualify = (bandName) => {
    setBands((prevBands) =>
      prevBands.map((band) =>
        band.name === bandName ? { ...band, disqualified: true } : band
      )
    );
  };

  const handleScoreChange = (e, bandName) => {
    const value = parseInt(e.target.value) || 0;
    setBands((prevBands) =>
      prevBands.map((band) =>
        band.name === bandName && !band.disqualified
          ? { ...band, scores: { ...band.scores, [stage]: value } }
          : band
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

    setBands(qualified);

    if (stage === 'preliminary') {
      setIsPopupOpen(true); 
    }
  };

  const rankings = computeRankings();

  return (
    <div className="bg-gray-100 h-screen text-black">
      <Navbaradmin />
      <h1 className="text-center text-3xl font-bold my-8">Admin Dashboard</h1>

      {/* Add Band Section */}
      <section className="mb-8">
        <button
          onClick={handleAddBand}
          className="bg-blue-600 text-white rounded px-6 py-2 hover:bg-blue-700"
        >
          Add Band
        </button>
      </section>

      {/* Display Bands */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">All Bands</h2>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>Name</th>
              <th>Members</th>
              <th>Origin</th>
              <th>Score ({stage})</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Disqualify</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band) => (
              <tr key={band.name} className={`${band.disqualified ? 'bg-red-500 text-gray-200' : 'bg-gray-100'}`}>
                <td>{band.name}</td>
                <td>{band.members}</td>
                <td>{band.origin}</td>
                <td>
                  <input
                    type="number"
                    value={band.scores[stage]}
                    onChange={(e) => handleScoreChange(e, band.name)}
                    disabled={band.disqualified}
                    className="w-16 text-black"
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleEditClick(band)}
                    className="bg-yellow-500 text-white rounded px-4 py-1"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteBand(band.name)}
                    className="bg-red-600 text-white rounded px-4 py-1"
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDisqualify(band.name)}
                    disabled={band.disqualified}
                    className="bg-red-600 text-white rounded px-4 py-1"
                  >
                    Disqualify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Rankings */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Rankings</h2>
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score ({stage})</th>
              <th>Qualified</th>
            </tr>
          </thead>
          <tbody>
            {rankings.map((band, index) => (
              <tr key={band.name} className={`${band.qualifies ? 'bg-green-500' : 'bg-gray-200'}`}>
                <td>{index + 1}</td>
                <td>{band.name}</td>
                <td>{band.scores[stage]}</td>
                <td>{band.qualifies ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Submit & Advance */}
      <div className="mb-8">
        <button
          onClick={handleAdvanceStage}
          className="bg-green-600 text-white rounded px-6 py-2 hover:bg-green-700"
        >
          Submit & Proceed
        </button>
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg">
            {stage === 'final' ? (
              <>
                <h2 className="text-xl font-semibold mb-4">Qualified for Final</h2>
                <ul>
                  {qualifiedBands.map((band) => (
                    <li key={band.name}>{band.name}</li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-4">Edit Band</h2>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <label>Band Name:</label>
                    <input
                      type="text"
                      name="name"
                      value={editBand.name}
                      onChange={handleEditChange}
                      className="w-full border rounded px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label>Members:</label>
                    <input
                      type="text"
                      name="members"
                      value={editBand.members}
                      onChange={handleEditChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label>Origin:</label>
                    <input
                      type="text"
                      name="origin"
                      value={editBand.origin}
                      onChange={handleEditChange}
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      onClick={() => setIsPopupOpen(false)}
                      className="bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}



