import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div className="bg-indigo-500 p-7 font-mono">
          <h1 className="text-4xl font-bold text-white">Pokemon Fetch</h1>
        </div>
      </header>
      <main>
        <div>
          <input
            type="text"
            id="search-pokemon"
            className="border border-black rounded-md m-5 w-96  p-1"
            placeholder="Search by Pokemon name..."
          />
          <button className="bg-indigo-500 py-1 px-3 rounded-md">
            Search!
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
          <div className="bg-white shadow-md rounded-lg border border-indigo-800 m-3 p-6 w-48 text-center">
            <img
              src=""
              alt="Pokemon Image"
              id="spriteImage"
              className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"
            />
            <h2 id="spriteName" className="text-lg font-semibold text-gray-800">
              Pokemon
            </h2>
            <p className="text-sm text-gray-500">Additional</p>
          </div>
          <div className="bg-white shadow-md rounded-lg border border-indigo-800 m-3 p-6 w-48 text-center">
            <img
              src=""
              alt="Pokemon Image"
              id="spriteImage"
              className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"
            />
            <h2 id="spriteName" className="text-lg font-semibold text-gray-800">
              Pokemon
            </h2>
            <p className="text-sm text-gray-500">Additional</p>
          </div>
          <div className="bg-white shadow-md rounded-lg border border-indigo-800 m-3 p-6 w-48 text-center">
            <img
              src=""
              alt="Pokemon Image"
              id="spriteImage"
              className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"
            />
            <h2 id="spriteName" className="text-lg font-semibold text-gray-800">
              Pokemon
            </h2>
            <p className="text-sm text-gray-500">Additional</p>
          </div>
          <div className="bg-white shadow-md rounded-lg border border-indigo-800 m-3 p-6 w-48 text-center">
            <img
              src=""
              alt="Pokemon Image"
              id="spriteImage"
              className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"
            />
            <h2 id="spriteName" className="text-lg font-semibold text-gray-800">
              Pokemon
            </h2>
            <p className="text-sm text-gray-500">Additional</p>
          </div>
        </div>
      </main>
    </div>
  );
}
