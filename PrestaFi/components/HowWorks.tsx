import Link from "next/link"


export default function HowWorksComponent() {
    return (
      <section className="p-8 text-center my-16">
        <div className="max-w-3xl mx-auto">

            <h2 className="mb-8 text-3xl font-bold text-purple-700">How the traditional system works vs our system</h2>
            <div className="mb-6">

            <Link href="/send-money">
              <div className="inline-block px-4 py-2 mb-4 text-white bg-purple-500 rounded-full">Situation</div>
            </Link>

            <p className="text-lg">Pedro needs to send $400 to Peru to help his family but he doesn&apos;t have the money...</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
            <div>
                <div className="inline-block px-4 py-2 mb-4 text-white bg-purple-500 rounded-full">
                Option 1 - Payday loan
                </div>
                <p className="text-lg">
                He applies for a payday loan at Company A. He has 30 days to pay the loan and pays $220 in fees, so the
                total was $620.
                </p>
            </div>
            <div>
                <div className="inline-block px-4 py-2 mb-4 text-white bg-blue-500 rounded-full">Option 2 - PrestaFi</div>
                <p className="text-lg">
                Request a PrestaFi credit, you can pay the credit in 4 monthly installments and pay $16 in fees, so the
                total is $416.
                </p>
            </div>
            </div>

        </div>
      </section>
    )
  }