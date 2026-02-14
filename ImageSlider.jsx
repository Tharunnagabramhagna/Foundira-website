const { useEffect, useState, useMemo, useRef } = React;

function ImageSlider({ images, interval = 3000 }) {
  const defaultImages = useMemo(
    () => [
      "/public/images/foundira_slide_1.png",
      "/public/images/foundira_slide_2.png",
      "/public/images/foundira_slide_3.png",
    ],
    []
  );
  const list = useMemo(() => {
    if (Array.isArray(images) && images.length) return images;
    return defaultImages;
  }, [images, defaultImages]);

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (list.length < 2) return;
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % list.length);
    }, interval);
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [list.length, interval]);

  function goTo(i) {
    setIndex(i % list.length);
  }

  return (
    <div className="w-full">
      <div
        role="region"
        aria-label="Promotional images"
        className="relative aspect-[4/3] md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-slate-800"
      >
        {list.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className={
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-700 will-change-opacity " +
              (i === index ? "opacity-100" : "opacity-0")
            }
            onError={(e) => {
              const s = e.currentTarget.getAttribute("data-fallback");
              if (!s) {
                e.currentTarget.setAttribute("data-fallback", "1");
                const altPath = src.replace("/images/", "/public/images/");
                e.currentTarget.src = altPath;
              } else {
                e.currentTarget.style.objectFit = "contain";
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(99,102,241,.35), rgba(139,92,246,.35))";
              }
            }}
            onClick={() => goTo((index + 1) % list.length)}
          />
        ))}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        {list.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {list.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={
                  "h-2.5 w-2.5 rounded-full transition " +
                  (i === index ? "bg-white" : "bg-white/40 hover:bg-white/70")
                }
                style={{ pointerEvents: "auto" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

window.ImageSlider = ImageSlider;
