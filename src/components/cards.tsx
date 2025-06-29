"use client";

import Image from "next/image";
import Link from 'next/link'
import React, { useState } from "react";

import Markdown from 'markdown-to-jsx';

export default function Cards({
				  posts,
				}: {
				  posts: Array<{ name: string; content: string }>;
				}) {
				
	const [search, setSearch] = useState('');

	return (

	<div className=" w-full  flex flex-col items-center border-b-2 border-gray-500 h-full  background-img pb-10">	
		<div className=" w-full min-h-screen md:hidden ">
			<ul className="h-full w-full flex flex-col items-center">
			  {posts.map((post) => (
				<li className="secondary-color pl-5 pb-5 pt-5 m-5 border-2" key={post.name}>
				  <Link href={`/post/?id=${post.name}`} className="w-full">
					<Image
					  className="w-full h-auto pb-5 pr-5 mx-auto"
					  src={`/posts/${post.name}/card/pic.jpeg`} 
					  alt={`Image for ${post.name}`}
					  width={600} 
					  height={400} 
					/>
					<Markdown>{post.content}</Markdown>
				  </Link>
				</li>
			  ))}
			</ul>
		</div>
		<div className="w-full min-h-screen hidden md:grid grid-cols-5">
			<ul className="col-start-2 col-span-3">
			  {posts.map((post) => (
				<li className="grid grid-cols-4 gap-4 pl-5 secondary-color pb-5 pt-5 mt-5 mb-5 border-2 hover:border-5 rounded-lg " key={post.name}>
				  <Link href={`/post?id=${post.name}`} className="flex w-full col-span-4">
					<div className="col-start-1 pr-5 col-span-1">
					  <Image
						src={`/posts/${post.name}/card/pic.jpeg`} // Dynamic image source
						alt={`Image for ${post.name}`}
						width={250}
						height={150}
						layout="responsive" // Automatically scale the image
					  />
					</div>
					<Markdown className="markdown-content text-center">{post.content}</Markdown>
				  </Link>
				</li>
			  ))}
			</ul>
		</div>
	</div>

  );
}




