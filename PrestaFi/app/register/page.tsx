import RegisterComponent from "@/components/Register";
import MenuNonAuthComponent from "@/components/MenuNonAuth";

export default function Home() {
  return (
    <main className="">
      <MenuNonAuthComponent />
      <RegisterComponent />
    </main>
  );
}
