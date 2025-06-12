import Image from "next/image";


import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HomePage from '@/components/homepage'

import { notFound } from 'next/navigation';


export default async function Home() {
   
    return (
      <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
		<header className="w-full">
			<Navbar/>
		</header>
		<main className="w-full flex-grow gap-8 sm:items-start background-img">
			<HomePage />
		</main>
		<footer className="mt-auto gap-6 w-full">
			<Footer/>
		</footer>
		</div>
  );
}


