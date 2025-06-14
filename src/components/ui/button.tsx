"use client"; 

import React from 'react';



const Button: React.FC = ({ buttonText })  => {
	
  return (
  <>
	<button
	className="mb-5 block mx-auto mt-5 w-32 h-10 border-2 rounded-lg border-white hover:bg-gray-400 cursor-pointer "
	type="submit">
		{buttonText}
	</button>
  </>
  );
};

export default Button;
