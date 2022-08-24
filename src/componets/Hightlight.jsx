import React from 'react';
import imageTest from '../assets/testImg.png';
const data = [
	{
		url: imageTest,
		data: 'News - Jul 2022',
		text: 'Show our science initiative for measurement',
	},
	{
		url: imageTest,
		data: 'News - Jul 2022',
		text: 'Show our blue carbon initiatives',
	},
	{
		url: imageTest,
		data: 'News - Jul 2022',
		text: 'Show our on the ground MPA stuff',
	},
];

const Hightlight = () => {
	return (
		<div className='my-20'>
			<div className='container mx-auto'>
				<h3 className='text-[30px] md:text-[80px] mb-10'>
					Ocean News
				</h3>

				<div className='flex flex-wrap justify-between items-center mx-2'>
					{data.map((card) => (
						<div className='max-w-2xl mx-auto my-2'>
							<img
								src={card.url}
								alt='imgtest'
								className='object-cover h-60 w-96 '
							/>
							<p className='my-10 text-[18px] '>
								<a href='#'>{card.text}</a>
							</p>
							<p>{card.data}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Hightlight;
