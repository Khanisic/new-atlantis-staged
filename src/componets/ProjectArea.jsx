import React from 'react';
import ocean from '../assets/ocean.png';
const data = [
	{
		project: 'Project',
		title: 'Ocena Program',
		text: 'Show our science initiative for measurement',
	},
	{
		project: 'Project',
		title: 'Ocena Program',
		text: 'Show our blue carbon initiatives',
	},
	{
		project: 'Project',
		title: 'Ocena Program',
		text: 'Show our on the ground MPA stuff',
	},
	{
		project: 'Project',
		title: 'Ocena Program',
		text: 'Show our on the ground MPA stuff',
	},
];

const ProjectArea = () => {
	return (
		<div className='bg-[#4ec0fb] backgroundFirst'>
			<div className='container mx-auto'>
				<h3 className='text-[#fff] text-[20px] lg:text-[80px] md:w-[80%] text-center py-5 md:text-left md-py-0'>
					{' '}
					Our initiatives toward ocean restoration
				</h3>

				<div className='flex justify-between flex-wrap items-center'>
					{data.map((item) => (
						<div className='flex items-center justify-center from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br w-[400px] my-5 mx-3 md:mx-0'>
							<div className='overflow-hidden aspect-auto bg-red-400 cursor-pointer rounded-[30px] relative group       h-[350px]  md:h-[400px] bg-[#032f50] px-0 py-6'>
								<p className='text-[#fff] ml-2'>{item.project}</p>
								<div className='rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end'>
									<div>
										<div className='transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out bg-darkBlue  w-[400px] sm:w-[400px] h-[150px] md:h-[150px]'>
											<div className=' font-bold text-[#fff]'>
												{item.title}
											</div>

											<div className='opacity-60 text-sm text-[#fff] '>
												{item.text}
											</div>
										</div>
									</div>
								</div>

								<img
									alt=''
									className='object-cover w-full aspect-video group-hover:scale-110 transition duration-300 ease-in-out mt-5'
									src={ocean}
								/>
								<p className='text-[#fff] ml-2  text-[14px] '>
									Lorem ipsum dolor, sit amet consectetur adipisicing
									elit. Ut fuga sapiente voluptatum architecto quasi
									sint delectus repudiandae nisi temporibus esse?
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectArea;
