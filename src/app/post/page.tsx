import Image from "next/image";

import fs from 'fs';
import path from 'path';

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import Markdown from 'markdown-to-jsx';


import { notFound } from 'next/navigation';




export default async function Post(props: { searchParams: Promise<{ id?: string }> }) {


	const searchParams = await props.searchParams;
	const idQuery: string = await searchParams?.id || "";

	const postsDirectory = path.join(process.cwd(), 'public', 'posts');
	const postDirs = fs.readdirSync(postsDirectory);

	const pageFilePath = path.join(postsDirectory, idQuery, 'postPage', 'postPage.md');

	let fileContent: string;

	try{

	fileContent = fs.readFileSync(pageFilePath, 'utf-8');

	} catch {
	 notFound();
	}


	
    return (
      <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
		<header className="w-full">
			<Navbar/>
		</header>
		<main className="max-w flex-grow gap-8 sm:items-start">
			<div className="hidden md:grid grid-cols-5 pb-100">
				<div className="markdown-content col-start-2 col-span-3">
					<Markdown>{fileContent}</Markdown>
				</div>		
			</div>
			
			<div className="md:hidden p-2 pb-50">
				<div className="markdown-content">
					<Markdown>{fileContent}</Markdown>
				</div>		
			</div>
			

		</main>
		<footer className="mt-auto gap-6 w-full">
			<Footer/>
		</footer>
		</div>
  );
}


