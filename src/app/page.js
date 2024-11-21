import Navbar from './navbar';

export default function Home() {
  return (
    <div className="min-h-full">
      <Navbar />
      <div className="ml-10 ">
        <div className="absolute w-1/2 pt-20 ">
            <span className="text-6xl font-thin tracking-tight text-white"></span><br />
            <p className="text-white font-thin pt-10 text-2xl mt-4">
             
            </p>
        </div>
      </div>

      <main>
        <div className="w-screen h-screen bg-gray-700 overflow-hidden">
          <div className="opacity-100 w-full max-h-full">
            <picture className="w-full h-full bg-cover">
              <source srcSet="botb.jpg"  />
              <img src="botb.jpg" alt="EV charging" className="w-full h-full object-cover" />
            </picture>
          </div>
        </div>
      </main>
    </div>
  );
}
