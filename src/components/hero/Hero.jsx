import React from 'react';
import SmallCard from '../SmallCard/SmallCard';
import { AiOutlineUser, AiFillProject } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';

function Hero() {
	return (
		<section className='w-full h-[70vh]'>
			<div className='mx-auto h-full container w-full flex flex-row  items-center  mt-36'>
				<section
					id='left'
					className='h-full text-left w-1/2 flex  flex-col justify-center '
				>
					<h1 className='text-[4rem] max-[680px]:text-[32px] w-[100%] font-bold'>
						VENEZ VOIR <br /> LES{' '}
						<span className='text-[#D92950]'>PROJETS </span> DES ALMUNIS
					</h1>
					<p className='text-2xl leading-10 text-[#263238]'>
						Créez des applications réelles qui attireront les employeurs. <br />
						Votre portfolio est votre arme secrète quand il s'agit
						d'interviewer.
						<br /> C’est une vitrine factuelle de vos capacités.
					</p>
				</section>
				<section className='hidden sm:block w-1/2 p-2'>
					<div className='relative h-full w-full '>
						<div className='absolute left-3 top-12 z-50 max-[680px]:top-3 max-[680px]:left-0'>
							<SmallCard
								title={'Etudians'}
								num={'20+ '}
								icon={<AiOutlineUser size={25} color={'red'} />}
							/>
						</div>
						<div className='absolute right-0 top-48 z-50 max-[680px]:top-24'>
							<SmallCard
								title={'Projets'}
								num={'50+ '}
								icon={<AiFillProject size={25} color={'green'} />}
							/>
						</div>
						<div className='absolute top-64 right-96  z-50 max-[680px]:right-48 max-[680px]:top-48'>
							{' '}
							<SmallCard
								title={'Technos'}
								num={'10+ '}
								icon={<BiCodeAlt size={25} color={'blue'} />}
							/>
						</div>
						<div className=' top-0 left-0'>
							<img src='heroImg.png' alt='Hero image' />
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}

export default Hero;
