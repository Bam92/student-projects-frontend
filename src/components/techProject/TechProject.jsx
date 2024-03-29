import React from 'react';
import js from '../../../public/javascript.svg.svg';
import sass from '../../../public/sass.svg.svg';
import b from '../../../public/b.png';
import react from '../../../public/react.png';
import f from '../../../public/f.png';

import n from '../../../public/n.png';
import node from '../../../public/node.png';
import red from '../../../public/red.png';
import first from '../../../public/first.png';

import redis from '../../../public/redis.png';
import ts from '../../../public/ts.png';
import v from '../../../public/v.png';
import post from '../../../public/post.png';
import mongo from '../../../public/mongo.png';
import BarProjet from './BarProjet';
const TechProject = () => {
	return (
		<div className='w-full flex items-center bg-[#f7f7f7] h-[60vh]'>
			<div className='mx-auto container flex justify-between'>
				<div>
					<section className='text-left max-[680px]:w-[100%] flex flex-col '>
						<h1 className='text-5xl leading-[1.4] my-4 w-[70%] font-bold'>
							Les technologies utiliser dans leurs differents projets
						</h1>
						<p className=' text-lg text-gray-500'>
							Nous utiisons differentes technologies pour créer la plus part
							<br />
							de nos projets, on est polyvalents. vous trouverai une panoplis{' '}
							<br />
							des technos utiliser qui vont cadrer avec vos attentes
						</p>
						<BarProjet />
					</section>
				</div>
				<main className='flex flex-col gap-5'>
					<section className='flex flex-row  gap-7'>
						<div className='bg-white flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={sass} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={js} alt='' className=' w-full h-full object-cover' />
						</div>

						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={ts} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={first} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={b} alt='' className=' w-full h-full object-cover' />
						</div>
					</section>

					<section className='flex flex-row  justify-center gap-7'>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={react} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={n} alt='' className=' w-full h-full object-cover' />
						</div>

						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={v} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={f} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={node} alt='' className=' w-full h-full object-cover' />
						</div>
					</section>

					<section className='flex flex-row  justify-center gap-7 px-[30px]'>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={red} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={redis} alt='' className=' w-full h-full object-cover' />
						</div>

						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={post} alt='' className=' w-full h-full object-cover' />
						</div>
						<div className='bg-white  flex justify-center items-center w-28 h-28 rounded-xl drop-shadow-2xl overflow-hidden '>
							<img src={mongo} alt='' className=' w-full h-full object-cover' />
						</div>
					</section>

					<section></section>
					<section></section>
				</main>
			</div>
		</div>
	);
};

export default TechProject;
