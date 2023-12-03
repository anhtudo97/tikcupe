import { Button } from "@/shared/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginButton from "./components/LoginButton";

export default function Home() {

  return (
    <section className="h-[100vh] flex justify-center items-center">
      <LoginButton />
    </section>
  );
}
