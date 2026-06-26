export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Your App" },
      { name: "description", content: "Replace this with a one-sentence description of your app." },
      { property: "og:title", content: "Your App" },
      { property: "og:description", content: "Replace this with a one-sentence description of your app." },
      { title: "KINGDOM SMP Tier List" },
      { name: "description", content: "Official player tier list for the KINGDOM SMP Minecraft PVP server." },
      { property: "og:title", content: "KINGDOM SMP Tier List" },
      { property: "og:description", content: "Official player tier list for the KINGDOM SMP Minecraft PVP server." },
    ],
  }),
  component: Index,
});
// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
type Tier = "S" | "A" | "B" | "C" | "D" | "F";
const TIERS: { tier: Tier; label: string; color: string; players: string[] }[] = [
  { tier: "S", label: "S TIER", color: "bg-red-500", players: [] },
  { tier: "A", label: "A TIER", color: "bg-orange-500", players: [] },
  { tier: "B", label: "B TIER", color: "bg-yellow-400", players: ["TemWasntHere"] },
  { tier: "C", label: "C TIER", color: "bg-green-500", players: ["TAMEME"] },
  { tier: "D", label: "D TIER", color: "bg-blue-500", players: [] },
  { tier: "F", label: "F TIER", color: "bg-purple-600", players: ["Poplizard2"] },
];
function PlayerCard({ name }: { name: string }) {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
    <div className="flex items-center gap-3 rounded-md border-2 border-stone-900 bg-stone-800 px-3 py-2 shadow-[3px_3px_0_0_rgba(0,0,0,0.6)]">
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
        src={`https://mc-heads.net/avatar/${encodeURIComponent(name)}/40`}
        alt={`${name} Minecraft head`}
        className="h-10 w-10 [image-rendering:pixelated]"
      />
      <span className="font-mono text-base font-bold tracking-wide text-stone-100">
        {name}
      </span>
    </div>
  );
}
function Index() {
  return (
    <div className="min-h-screen bg-stone-950 bg-[radial-gradient(circle_at_top,rgba(120,80,40,0.25),transparent_60%)] py-10 px-4 text-stone-100">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-amber-400">
            Minecraft PVP Server
          </p>
          <h1 className="mt-2 font-mono text-5xl font-black uppercase tracking-tight text-amber-300 drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)] sm:text-6xl">
            Kingdom SMP
          </h1>
          <p className="mt-3 font-mono text-lg text-stone-300">
            Official Player Tier List
          </p>
        </header>
        <div className="overflow-hidden rounded-xl border-4 border-stone-900 bg-stone-900/80 shadow-[6px_6px_0_0_rgba(0,0,0,0.8)]">
          {TIERS.map(({ tier, label, color, players }) => (
            <div
              key={tier}
              className="grid grid-cols-[110px_1fr] border-b-2 border-stone-950 last:border-b-0"
            >
              <div
                className={`flex items-center justify-center ${color} border-r-2 border-stone-950`}
              >
                <span className="font-mono text-4xl font-black text-stone-900 drop-shadow-[2px_2px_0_rgba(255,255,255,0.3)]">
                  {tier}
                </span>
              </div>
              <div className="flex min-h-[90px] flex-wrap items-center gap-3 bg-stone-800/60 p-4">
                {players.length === 0 ? (
                  <span className="font-mono text-sm italic text-stone-500">
                    {label} — empty
                  </span>
                ) : (
                  players.map((p) => <PlayerCard key={p} name={p} />)
                )}
              </div>
            </div>
          ))}
        </div>
        <footer className="mt-8 text-center font-mono text-xs text-stone-500">
          ⛏ Rankings based on PVP performance on Kingdom SMP
        </footer>
      </div>
    </div>
  );
}
