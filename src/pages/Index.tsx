import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import StarCard from "@/components/StarCard"

const Index = () => {
  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-7 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">
            +
          </div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">
            +
          </div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">
            +
          </div>

          <div className="px-6 md:px-16 lg:px-32">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-10 mt-4">
              <StarCard count={100} />
              <StarCard count={500} />
              <StarCard count={1000} />
            </div>

            <div className="flex flex-col gap-2 max-w-5xl">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Имя</span>
                <span className="text-foreground font-mono text-sm">w1nMARKET</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm">Контакт</span>
                <a
                  href="https://t.me/W1nget"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-mono text-sm hover:opacity-70 transition-opacity"
                >
                  @W1nget
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-accent font-mono text-sm">О нас</span>
                <span className="text-foreground font-mono text-sm">
                  Маркетплейс нового поколения. Нажми на звёзды и открой наш Telegram.
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index
