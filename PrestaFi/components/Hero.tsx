

export default function HeroComponent() {
    return (
      <section className="relative flex items-center justify-center h-[550px]">
        {/* <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <img src="/placeholder.svg" alt="Left hand" className="w-40 h-40" />
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <img src="/placeholder.svg" alt="Right hand with coin" className="w-40 h-40" />
        </div> */}
        <div className="text-center text-[#7c25cc] max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight">Send money now to LATAM, and pay later at fair rates</h1>
          <p className="mt-4 text-lg">
            Instant credit. No credit score check. Up to $400. 4 monthly installments. No hidden fees (1% monthly, 4% fee
            total).
          </p>
        </div>
      </section>
    )
  }