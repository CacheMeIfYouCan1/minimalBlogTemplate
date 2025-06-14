"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import Button from '@/components/ui/button';
import { theme } from '@/theme/theme';

import Markdown from 'markdown-to-jsx';


export default function ContactForm() {

	const router = useRouter();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	
	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();

		const response = await fetch('/api/contact', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ name, email, message }),
		});

		if (response.ok) {
		  router.push('/mailsent');
		} else {
		  alert(response.status);
		}
	};



	return (
	<div>
	{/*Desktop*/}
	<div className="hidden md:grid grid-cols-5 ">

		<h1 className="col-start-3 mt-20 text-4xl justify-self-center   ">
			{theme.contact.title}
		</h1>
		<p className="pt-5 pb-10 text-center w-128 justify-self-center    col-start-2 col-span-3" >
			{theme.contact.text}
		</p>
		<form onSubmit={handleSubmit} className="col-start-2 col-span-3  flex flex-col items-center">
				<input
					name="name"
					placeholder="Name"
					type ="text"
					className=" col-start-2 col-span-1 justify-self-center w-64 px-4 py-2 mt-4 border-2 border-white rounded-lg   "
					value={name}
					onChange={(e) => setName(e.target.value)}
					>
				</input>
				<input
					name="email"
					placeholder="E-Mail address"
					type ="email"
					className="col-start-2 col-span-1 justify-self-center w-64 px-4 py-2 mt-4 border-2 border-white rounded-lg   "
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					
					>
				</input>
				<textarea
					name="message"
					placeholder="Message..."
					className="mb-10 col-start-1 col-span-3 justify-self-center w-128 px-4 py-2 mt-4 border-2 border-white rounded-lg   "
					rows={10}
					maxLength={600}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					
					>
				</textarea>
			<Button buttonText="SUBMIT" />
		</form>
		
		
	</div>
	<br/>
	<br/>
	{/*Mobile*/}
	<div className="md:hidden z-20 relative">

		<h1 className="mt-20 text-4xl text-center   ">
			{theme.contact.title}
		</h1>
		<p className="pt-5 pb-10 text-center " >
			{theme.contact.text}
		</p>
		<form onSubmit={handleSubmit} className="flex items-center">
				<input
					name="name"
					placeholder="Name"
					type ="text"
					className="block mx-auto w-64 px-4 py-2 mt-4 border-2 border-white rounded-lg   "
					required
					>
				</input>
				<input
					name="mail"
					placeholder="E-Mail address"
					type ="email"
					className="block mx-auto  w-64 px-4 py-2 mt-4 border-2 border-white rounded-lg   "
					required
					>
				</input>
				<textarea
					name="message"
					placeholder="Message..."
					className="mb-10 block mx-auto  w-64 px-4 py-2 mt-4 border-2 border-white rounded-lg   "
					rows={10}
					maxLength={100}
					required
					>
				</textarea>
			<Button buttonText="SUBMIT" />
		</form>
		
	
	</div>
	</div>
  );
}




