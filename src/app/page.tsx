import FetchPokemon from "@/app/components/fetchPokemon";

export default function Home() {
  return (
    <div>
      <header>
        <div className="bg-indigo-500 p-7 font-mono">
          <h1 className="text-4xl font-bold text-white">Pokémon Fetch</h1>
        </div>
      </header>
      <main>
        <FetchPokemon />
      </main>
    </div>
  );
}
