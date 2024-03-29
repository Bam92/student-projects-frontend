import React from 'react';
import SmallCard from '../SmallCard/SmallCardProjet';

function CardProjet({ data }) {
	return (
		<div className='mx-auto container  flex max-[680px]:flex-col justify-between flex-wrap items-center'>
			{data &&
				data.map((projet) => (
					<div className='w-1/3 p-10 '>
						<div className='text-left relative  w-full  bg-white duration-1000 rounded-2xl shadow-[-10px_-10px_30px_4px_#00000019,_10px_10px_30px_4px_#2d4eff26]  hover:shadow-[#2d4cff4b_0px_30px_90px]'>
							<a href='#'>
								<img className='rounded-t-2xl w-full' src={projet.img} alt='' />
							</a>

							<div className='flex justify-between mt-2 pl-5 pr-5'>
								<div className='ext-sm font-light text-gray-500 '>
									{projet.tech}
								</div>
								<div className='text-sm font-light text-gray-500 '>
									{projet.date}
								</div>
							</div>
							<div className='p-5'>
								<a href='#'>
									<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
										{projet.title}
									</h5>
								</a>
								<p className='mb-3  text-gray-500 max-[680px]:text-[13px]'>
									{projet.desc}
								</p>
								<div className='flex  justify-between'>
									<div className='flex gap-2 justify-start items-center mt-2 mb-2'>
										<img
											className='rounded-full border border-primary w-12 h-12'
											src={projet.avatar}
											alt='profile picture'
										/>
										<div className='space-y-0.5 font-medium  text-left'>
											<div className='ext-sm font-light text-[#D92950]'>
												{projet.auth}
											</div>
										</div>
									</div>
									<a
										href='#'
										className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#D92950]'
									>
										Voir plus
										<svg
											aria-hidden='true'
											className='w-4 h-4 ml-2 -mr-1'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fill-rule='evenodd'
												d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
												clip-rule='evenodd'
											></path>
										</svg>
									</a>
								</div>
							</div>
							<div className='absolute top-20 -right-12'>
								<SmallCard
									clean={projet.clean}
									fonct={projet.fonct}
									design={projet.design}
								/>
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default CardProjet;
