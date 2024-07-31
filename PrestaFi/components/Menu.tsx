import Link from "next/link"

export default function MenuComponent() {
    return (
      <div className="bg-[#7D4AEA] text-white p-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold ml-4">PrestaFI</div>
        </Link>
        <div className="flex space-x-4">
          <a href="/send-money" className="hover:underline">
            Send(Money)
          </a>
          <a href="/pay-credit" className="hover:underline">
            Pay(Credit)
          </a>
          <a href="#" className="hover:underline">
            Profile
          </a>
          <a href="#" className="hover:underline">
            Logout
          </a>
        </div>
      </div>
    )
  }