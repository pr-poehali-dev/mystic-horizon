import { useState } from "react"
import Icon from "@/components/ui/icon"

interface StarCardProps {
  count: number
}

export default function StarCard({ count }: StarCardProps) {
  const [burst, setBurst] = useState(false)

  const handleClick = () => {
    setBurst(true)
    setTimeout(() => setBurst(false), 600)
    window.open("https://t.me/W1nget", "_blank")
  }

  const stars = Array.from({ length: count >= 1000 ? 5 : count >= 500 ? 4 : 3 })

  return (
    <button
      onClick={handleClick}
      className="relative flex flex-col items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-8 py-8 cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 group w-full md:w-48"
    >
      <div className="relative flex items-center justify-center w-16 h-16">
        <div
          className={`absolute inset-0 rounded-full bg-white/10 transition-all duration-300 ${
            burst ? "scale-150 opacity-0" : "scale-100 opacity-100"
          }`}
        />
        <Icon
          name="Star"
          size={38}
          className={`text-white relative z-10 transition-all duration-300 ${
            burst ? "scale-125 text-yellow-200" : "scale-100"
          } group-hover:rotate-12`}
        />

        {burst && (
          <>
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-80 animate-ping"
                style={{
                  top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                  animationDuration: "0.5s",
                  animationDelay: `${i * 0.05}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="flex gap-1">
        {stars.map((_, i) => (
          <Icon key={i} name="Star" size={12} className="text-white fill-white" />
        ))}
      </div>

      <span className="text-white font-mono font-bold text-xl tracking-widest">{count}</span>
      <span className="text-white/50 font-mono text-xs">звёзд</span>
    </button>
  )
}
