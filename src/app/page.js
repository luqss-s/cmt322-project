import Navbar from './navbar';


export default function Home() {
  return (
    <div className="min-h-full relative">
      <Navbar />
      
      <main>
        <div className="w-screen h-full bg-gray-700 overflow-hidden">
          <div className="opacity-100 w-full max-h-full relative">
            
            <picture className="w-full h-full bg-cover">
              <source srcSet="bg3.jpg" />
              <img src="botb.jpg" alt="EV charging" className="w-full h-full object-cover" />
              
              
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                <img src="tittle4.png" alt="Title" className="w-full" />
              </div>

              
              <div className="absolute top-72 left-1/2 transform -translate-x-1/2">
              <p className="font-lacquer..">The quick brown fox ...</p>
              </div>
            </picture>
            
            
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6 px-10 py-4">
              <div className="flex overflow-x-auto space-x-16">
                <div className="flex-shrink-0 w-72 h-72 bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
                  <img src="bc2.jpeg" alt="Band member 1" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="flex-shrink-0 w-72 h-72 bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
                  <img src="Wings.jpeg" alt="Band member 2" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="flex-shrink-0 w-72 h-72 bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
                  <img src="bc3.jpg" alt="Band member 3" className="w-full h-full object-cover rounded-3xl" />
                </div>
                <div className="flex-shrink-0 w-72 h-72 bg-gray-800 rounded-3xl overflow-hidden shadow-lg">
                  <img src="bc3.jpeg" alt="Band member 4" className="w-full h-full object-cover rounded-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
