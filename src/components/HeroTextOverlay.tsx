export default function HeroTextOverlay() {
  return (
    <div className="absolute top-30 md:top-48 left-8 z-10">
      <h1
        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-3.5 opacity-100"
        style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgb(0, 0, 0)",
          WebkitTextStroke: "4px white",
          paintOrder: "stroke fill",
        }}
      >
        w1nMARKET
      </h1>
      <p className="text-foreground font-mono text-sm md:text-base max-w-xs tracking-widest lg:text-base">
        Твой маркетплейс
        <br />
        нового поколения
      </p>
    </div>
  )
}