const { useState, useEffect } = React;

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Slide every 2 seconds

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return <div className="w-full h-64 md:h-[500px] bg-slate-200 rounded-2xl animate-pulse" />;

    return (
        <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-white dark:bg-slate-900 group border border-slate-200 dark:border-white/10">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className={`w-full h-full ${index === 2 ? 'object-cover' : 'object-contain'} bg-slate-100 dark:bg-slate-900 transform scale-100 transition-transform duration-[2000ms]`}
                        onError={(e) => {
                            e.target.style.display = 'none';
                        }}
                    />

                </div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white w-6'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

window.ImageSlider = ImageSlider;
