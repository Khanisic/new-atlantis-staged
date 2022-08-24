import React from 'react';

import teams from '../assets/teams.png';
const Teams = () => {
	return (
		<div className='flex flex-col-reverse md:flex-row justify-center items-center flex-wrap pt-20'>
			<div className='ml-5 md:ml-0 flex-1 md:flex-[0.5]'>
				<h3 className='font-bold text-[42px] md:text-[80px] leading-none mb-5 md:mb-10'>
					Join a team of Earth's digital avengers.
				</h3>
				<p className='text-lg md:text-2xl'>
					Explore open positions, careers and internship
					opportunities.
				</p>
				<button className='mt-10 border-2 border-lightBlue rounded-full py-2 px-5 text-darkBlue'>
					Go to Discord
				</button>
			</div>
			<img src={teams} alt='teams' className='object-fit  my-5 ' />
		</div>
	);
};

export default Teams;
