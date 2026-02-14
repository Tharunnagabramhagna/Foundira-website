const { useMemo } = React;

function AuthPage({ mode = "login", onSuccess }) {
    const ImageSlider = window.ImageSlider;
    const LogoHeader = window.LogoHeader;
    const Form = mode === "signup" ? window.Signup : window.Login;
    const images = useMemo(
        () => [
            "https://chatgpt.com/backend-api/estuary/content?id=file_00000000c8e0720986b65e6c094560b8&ts=491966&p=fs&cid=1&sig=ba4c12d438f1c082a602e1c5be0c061d08b8fd13a5f16f840116ccdf51ca3af1&v=0",
        ],
        []
    );

    return (
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12 transition-colors duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
                <section>
                    <ImageSlider images={images} />
                </section>
                <section aria-labelledby="app-title" className="w-full">
                    <div className="rounded-2xl shadow-2xl ring-1 p-6 md:p-8 transition-colors duration-300 bg-white/80 ring-slate-200 dark:bg-slate-900/70 dark:ring-white/10 backdrop-blur">
                        <LogoHeader />
                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base mb-5 transition-colors duration-300">
                            Reconnecting People with What They Lost
                        </p>
                        <Form onSuccess={onSuccess} />
                        <div className="mt-6 text-center text-xs text-slate-600 dark:text-slate-500 transition-colors duration-300">
                            © <span>{new Date().getFullYear()}</span> Foundira
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

window.AuthPage = AuthPage;
