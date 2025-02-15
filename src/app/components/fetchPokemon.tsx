export default async function Pokemon() {
  const getPokemon = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu/");
    return response.json();
  };

  const data = await getPokemon();
  console.log(data);

  return (
    <>
      <div>
        <input
          type="text"
          id="search-pokemon"
          className="border border-black rounded-md m-5 w-96  p-1"
          placeholder="Search by Pokemon name..."
        />
        <button className="bg-indigo-500 py-1 px-3 rounded-md">Search!</button>
      </div>

      {/* map through list */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
        <div className="bg-indigo-300 shadow-md rounded-lg border border-indigo-800 m-3 p-6 w-48 text-center">
          <img
            src={data.sprites.front_default}
            alt="Pokemon Image"
            id="spriteImage"
            className="w-24 h-24 bg-white rounded-full mx-auto mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
          <p className="text-sm">{data.weight}</p>
        </div>
      </div>
    </>
  );
}
