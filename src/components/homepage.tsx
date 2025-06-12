"use client";

import Image from "next/image";
import Link from 'next/link';
import { theme } from '@/theme/theme';


export default function HomePage() {


	return (
		<div className="w-full flex flex-col items-center">
			<p className="max-w-156 pt-30 text-center font-bold text-4xl">
				{theme.homepage.title}
			</p>
			<p className="max-w-156 pt-5 text-center font-bold text-xl">
				{theme.homepage.subtitle}
			</p>

			
			<a
				href = "/contact"
				className=" mt-5 mt-5 w-52 h-auto border-2 rounded-lg border-white text-xl text-center font-bold  hover:bg-gray-400 "
			>
			{theme.homepage.buttonText}
			</a>	 
		</div>
  );
}




