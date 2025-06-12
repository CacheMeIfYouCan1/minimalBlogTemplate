import Image from "next/image";

import Navbar from '@/components/navbar'
import HomePage from './homepage/page'
import Footer from '@/components/footer'



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">

		<main className="w-screen overflow-hidden flex-grow gap-8 sm:items-start">
			<HomePage/>
		</main>

	</div>
  );
}
