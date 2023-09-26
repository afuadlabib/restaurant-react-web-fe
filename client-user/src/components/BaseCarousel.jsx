import { Carousel } from "@material-tailwind/react";
 
export default function BaseCarousel() {
  return (
    <Carousel
      autoplay={true}
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-red-900" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://nos.jkt-1.neo.id/mcdonalds/promos/June2023/3VsYtLuP06act4mi2Pz8.png"
        alt="image 1"
        className="h-full w-full object-fill"
      />
      <img
        src="https://nos.jkt-1.neo.id/mcdonalds/promos/September2023/wvMqcGwdzRxH59HWxabo.png"
        alt="image 2"
        className="h-full w-full object-fill"
      />
      <img
        src="https://nos.jkt-1.neo.id/mcdonalds/promos/June2023/3VsYtLuP06act4mi2Pz8.png"
        alt="image 3"
        className="h-full w-full object-fill"
      />
    </Carousel>
  );
}