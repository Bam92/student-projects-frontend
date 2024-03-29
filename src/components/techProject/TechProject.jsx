import React from 'react'
import js from '../../../public/javascript.svg.svg'
import sass from '../../../public/sass.svg.svg'
import b from '../../../public/b.png'
import react from '../../../public/react.png'
import f from '../../../public/f.png'

import n from '../../../public/n.png'
import node from '../../../public/node.png'
import red from '../../../public/red.png'
import first from '../../../public/first.png'

import redis from '../../../public/redis.png'
import ts from '../../../public/ts.png'
import v from '../../../public/v.png'
import post from '../../../public/post.png'
import mongo from   '../../../public/mongo.png'
const TechProject = () => {
	return (
		<div className='flex pt-[240px]  md:flex-column lg:flex-row xd:flex-row  '>
			<div>
				<section id='center' className='text-left w-[100%] max-[680px]:w-[100%]'>
				<h1 className='text-[28px] max-[680px]:text-[32px] w-[70%] font-bold'>
					Les technologies  utiliser dans leurs differents projets
				</h1>
					<p className=' text-[18px] text-[#263238]'>
						Nous utiisons differentes technologies pour créer
						la plus part<br/>
						de nos projets, on est polyvalents.
						vous trouverai une panoplis <br/>des
						technos utiliser qui vont cadrer avec vos attentes
				
				</p>
			</section>
			</div>
			<main className='flex flex-col gap-5'>
				<section className='flex flex-row  gap-7'>
					<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={sass} alt="" className='bg-center ' />
					</div>
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={js} alt="" className='bg-center ' />
					</div>
					
					
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={ts} alt="" className='bg-center ' />
					</div>
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={first} alt="" className='bg-center ' />
					</div>
					<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={b} alt="" className='bg-center ' />
					</div>
				</section>
				
				
				
				
				
				
				<section className='flex flex-row  gap-7'>
					<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={react} alt="" className='bg-center ' />
					</div>
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={n} alt="" className='bg-center ' />
					</div>
					
					
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={v} alt="" className='bg-center ' />
					</div>
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={f} alt="" className='bg-center ' />
					</div>
					<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={node} alt="" className='bg-center ' />
					</div>
				</section>
				
				
				
				
				
				
				
				
					<section className='flex flex-row  gap-7 px-[30px]'>
					<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={red} alt="" className='bg-center ' />
					</div>
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={redis} alt="" className='bg-center ' />
					</div>
					
					
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={post} alt="" className='bg-center ' />
					</div>
						<div className='bg-white drop-shadow-md text-center flex justify-center items-center w-[70px] h-[70px] '>
							<img src={mongo} alt="" className='bg-center ' />
					</div>
					
				</section>
				
				
				
					<section>
						
					</section>
					<section>
						
					</section>
				</main>
		</div>
	)
}

export default TechProject
