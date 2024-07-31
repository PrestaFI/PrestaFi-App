import LoginComponent from "@/components/Login";
import MenuNonAuthComponent from "@/components/MenuNonAuth";

export default function Home() {
  return (
    <main className="">
      <MenuNonAuthComponent />
      <LoginComponent />
    </main>
  );
}
