function LogoHeader() {
  return (
    <>
      <style>
        {`
        @keyframes logoIntro {
          0% { opacity: 0; transform: translateY(4px) scale(.95); filter: drop-shadow(0 0 0 rgba(124,58,237,0)); }
          60% { opacity: 1; transform: translateY(0) scale(1); filter: drop-shadow(0 8px 18px rgba(124,58,237,.25)); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: drop-shadow(0 6px 14px rgba(124,58,237,.2)); }
        }`}
      </style>
      <div className="flex items-center justify-between mb-1">
        <div
          className="flex items-center gap-3"
          style={{ animation: "logoIntro 600ms ease-out both" }}
        >
          <img
            src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000c8e0720986b65e6c094560b8&ts=491966&p=fs&cid=1&sig=ba4c12d438f1c082a602e1c5be0c061d08b8fd13a5f16f840116ccdf51ca3af1&v=0"
            alt="Foundira"
            className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-contain"
          />
          <h1
            id="app-title"
            className="text-xl md:text-2xl font-semibold tracking-wide text-slate-900 dark:text-slate-100 transition-colors duration-300"
          >
            Foundira
          </h1>
        </div>
        <window.ThemeToggle />
      </div>
    </>
  );
}

window.LogoHeader = LogoHeader;
