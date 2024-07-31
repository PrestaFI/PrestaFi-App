import CoolComponent from "@/components/Cool";
import HeroComponent from "@/components/Hero";
import HowWorksComponent from "@/components/HowWorks";
import ContactUsComponent from "@/components/ContactUs";
import MenuNonAuthComponent from "@/components/MenuNonAuth";
import { Label } from "@radix-ui/react-label";
import { Contact } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r  min-h-screen from-blue-300 via-purple-300 to-purple-500">
      <MenuNonAuthComponent />
      <HeroComponent />
      <CoolComponent />
      <HowWorksComponent />
      <ContactUsComponent />
    </main>
  );
}
