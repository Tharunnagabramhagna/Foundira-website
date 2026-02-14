function AppLogo({ className = "w-16 h-16", color = "" }) {
    // Reverting to image based on user request
    return (
        <img
            src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000c8e0720986b65e6c094560b8&ts=491966&p=fs&cid=1&sig=ba4c12d438f1c082a602e1c5be0c061d08b8fd13a5f16f840116ccdf51ca3af1&v=0"
            alt="Foundira"
            className={`${className} object-contain`}
            onError={(e) => { e.target.style.display = 'none'; }}
        />
    );
}

window.AppLogo = AppLogo;
