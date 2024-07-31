import Link from "next/link"

export default function MenuNonAuthComponent() {
    return (
      <div className="bg-[#7D4AEA] text-white p-4 flex justify-between items-center">
        <Link href="/">
          <div className="text-2xl font-bold ml-4">PrestaFI</div>
        </Link>
        <div className="flex space-x-4  mr-8">
          <a href="/login" className="hover:underline mx-4">
            Login
          </a>
          <a href="/register" className="hover:underline mx-4">
            Register
          </a>
        </div>
      </div>
    )
  }