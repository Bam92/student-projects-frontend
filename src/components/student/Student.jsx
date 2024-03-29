import React from 'react';

function Student() {
	return (
		<div className='h-screen flex items-center'>
			<div className='w-full overflow-hidden'>
				<div className=' relative h-[18rem] my-6 w-full'>
					<div className='flex gap-6 absolute -left-10'>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000 '>
							<img src='im.jpg' alt='' className='w-full h-full object-cover' />
						</div>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000 '>
							<img
								src='im2.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
					<div className='flex gap-6 absolute -right-10'>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000'>
							<img
								src='cedric.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000'>
							<img
								src='im3.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
				</div>
				<div className='relative h-[18rem] my-6 w-full'>
					<div className='flex gap-6 absolute -left-40'>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000'>
							<img
								src='im3.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000'>
							<img
								src='cedric.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
					</div>
					<div className='absolute left-1/2 translate-x-[-50%] -top-20 w-[40%]'>
						<h2 className=' text-5xl leading-[4rem] max-[680px]:text-lg font-bold'>
							Rencontrez nos diplômés qui ont réalisé leur rêve emploi dans la
							technologie
						</h2>
						<p className='text-[gray] text-lg my-4 max-[680px]:hidden'>
							Découvrez les parcours de nos 188 diplômés <br /> de tous horizons
							vers de nouvelles carrières dans la tech.
						</p>
					</div>
					<div className='flex gap-6 absolute -right-40'>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000'>
							<img
								src='im2.jpg'
								alt=''
								className='w-full h-full object-cover'
							/>
						</div>
						<div className='w-[18rem] h-[18rem] rounded-[2rem] shadow-2xl overflow-hidden  hover:rotate-6 duration-1000'>
							<img src='im.jpg' alt='' className='w-full h-full object-cover' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Student;
