"use client"; 

import React from 'react';
import { theme } from '@/theme/theme';


const Title: React.FC = () => {

	
  return (
  <>
	<h1 className="hidden md:block text-4xl">{theme.navbar.title}</h1>
	<h1 className="block md:hidden text-m">{theme.navbar.title}</h1>


  </>
  );
};

export default Title;
