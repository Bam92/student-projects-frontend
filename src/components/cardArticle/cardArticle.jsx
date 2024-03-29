import React from 'react';
import Bed from '../../assets/img.png';
import Bed1 from '../../assets/imgs.png';
import Bed3 from '../../assets/imgss.png';
const CardArticle = () => {
	return (
		<div className='w-full bg-gray-100 h-screen flex items-center'>
			<article className='mx-auto container  w-full flex flex-row justify-between py-8'>
				<section className='flex flex-col  gap-12  w-2/3 p-8 '>
					<div className='flex flex-row w-full h-[24rem] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white'>
						<div className='w-2/5 h-full'>
							<img
								src={Bed3}
								alt='bed'
								className='bg-cover w-full h-full rounded-l-2xl cursor-pointer'
							/>
						</div>
						<div className='w-3/5 flex flex-col gap-4 items-start p-8'>
							<p className='font-bold  text-xl text-start'>
								Netus vestibulum a vulputate sollicitudin id vitae convallis
							</p>
							<p className='text-md text-gray-500 text-start'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
								accusamus odit expedita illo quo praesentium voluptatem itaque
								nostrum ipsam. Quibusdam iste repudiandae dolor reprehenderit
								architecto mollitia ducimus numquam pariatur labore.
							</p>
							<div className='flex flex-row justify-start gap-6 items-center mt-3'>
								<img
									className='cursor-pointer inline-block h-20 w-20 rounded-full ring-2 ring-white m-auto mt-1 ml-4'
									src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									alt=''
								/>
								<div className=' flex flex-col items-start justify-center gap-0'>
									<p className='cursor-pointer font-semibold text-start p-0 '>
										Cedric vb
									</p>
									<p className=' text-gray-500 text-start '>
										FullStack developpeur
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-row w-full h-[24rem] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white'>
						<div className='w-2/5 h-full'>
							<img
								src={Bed}
								alt='bed'
								className='bg-cover w-full h-full rounded-l-2xl cursor-pointer'
							/>
						</div>
						<div className='w-3/5 flex flex-col gap-4 items-start p-8'>
							<p className='font-bold  text-xl text-start'>
								Netus vestibulum a vulputate sollicitudin id vitae convallis
							</p>
							<p className='text-md text-gray-500 text-start'>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
								accusamus odit expedita illo quo praesentium voluptatem itaque
								nostrum ipsam. Quibusdam iste repudiandae dolor reprehenderit
								architecto mollitia ducimus numquam pariatur labore.
							</p>
							<div className='flex flex-row justify-start gap-6 items-center mt-3'>
								<img
									className='cursor-pointer inline-block h-20 w-20 rounded-full ring-2 ring-white m-auto mt-1 ml-4'
									src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									alt=''
								/>
								<div className=' flex flex-col items-start justify-center gap-0'>
									<p className='cursor-pointer font-semibold text-start p-0 '>
										Cedric vb
									</p>
									<p className=' text-gray-500 text-start '>
										FullStack developpeur
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='w-1/3 p-8'>
					<div className='flex flex-col justify-center  h-full w-full rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white'>
						<div className='h-1/2 w-full'>
							<img
								src={Bed1}
								alt='bed'
								className='bg-cover h-full w-full object-cover rounded-t-2xl cursor-pointer'
							/>
						</div>
						<div className='h-1/2 flex flex-col justify-start  text-center gap-4 w-full px-8 py-4 '>
							<p className='font-bold text-start text-xl'>
								Netus vestibulum a vulputate sollicitudin id vitae convallis
							</p>
							<p className='text-md text-gray-500 text-start'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
								blanditiis molestias, eos natus itaque deleniti error maiores
								architecto. Sequi esse repellat amet hic quos voluptate
								blanditiis quibusdam, quaerat rem veritatis.
							</p>
							<div className='flex flex-row justify-start gap-6 items-center mt-3 self-start '>
								<img
									className='cursor-pointer inline-block h-20 w-20 rounded-full ring-2 ring-white m-auto mt-1'
									src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									alt=''
								/>
								<div className=' flex flex-col items-start justify-center gap-0'>
									<p className='cursor-pointer font-semibold text-start p-0 '>
										Cedric vb
									</p>
									<p className=' text-gray-500 text-start '>
										FullStack developpeur
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</article>
		</div>
	);
};

export default CardArticle;
