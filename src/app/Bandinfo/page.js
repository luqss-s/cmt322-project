'use client';
import { useState } from 'react';
import Navbar from '../navbar';

export default function Home() {
  const [votedBand, setVotedBand] = useState(null); // Track the band voted by the user
  const bands = [
    { id: 1, name: "Hijjaz", members: "Member 1, Member 2", origin: "USM" },
    { id: 2, name: "Raihan", members: "Member 3, Member 4", origin: "UKM" },
    { id: 3, name: "Rabbani", members: "Member 5, Member 6", origin: "UTM" },
    { id: 4, name: "Unic", members: "Member 1, Member 2", origin: "UIA" },
    { id: 5, name: "Global Ikhwan", members: "Member 3, Member 4", origin: "UM" },
    { id: 6, name: "Madani", members: "Member 5, Member 6", origin: "USM" },
    // Add more bands here
  ];

  const handleVote = (bandId) => {
    if (!votedBand) {
      setVotedBand(bandId);
      // Here you would save the vote to the database or update the backend
      alert(`You voted for Band ${bandId}`);
    } else {
      alert("You can only vote for one band.");
    }
  };

  return (
    <div className="bg-gray-400 h-screen text-black">
      <Navbar />

      <div className="container mx-auto px-8">
        <div className="flex justify-center ">
          <picture className="w-96 h-48 bg-cover">            
            <img src="tittle2.png" className="w-96 h-full object-cover" />
          </picture>
        </div>
        
        <table className="w-full table-auto border-collapse bg-black text-white">
          <thead>
            <tr>
              <th className="border px-4 py-2 ">Band Name</th>
              <th className="border px-4 py-2">Band Members</th>
              <th className="border px-4 py-2">Origin</th>
              <th className="border px-4 py-2">Vote</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band) => (
              <tr key={band.id}>
                <td className="border px-4 py-2 font-bold">{band.name}</td>
                <td className="border px-4 py-2 font-bold">{band.members}</td>
                <td className="border px-4 py-2 font bold">{band.origin}</td>
                <td className="border px-4 py-2 font bold">
                  <button
                    className={`${
                      votedBand === band.id ? "bg-gray-500" : "bg-blue-500"
                    } text-white py-2 px-4 rounded`}
                    onClick={() => handleVote(band.id)}
                    disabled={votedBand !== null && votedBand !== band.id}
                  >
                    {votedBand === band.id ? "Voted" : "Vote"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
