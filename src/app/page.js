import Upload from "@/components/upload";
import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header/>
        

      <Upload />
      <div className="flex gap-4 text-blue-600">
        <Link href="/license" className="hover:underline">
          LICENSE
        </Link>
        <Link href="https://aistarter.dev" className="hover:underline">
          AIStarter.dev
        </Link>
        <Link href="https://aistarter.dev" className="hover:underline">
          AIStarter.dev
        </Link>
      </div>
    </div>
  );
}
