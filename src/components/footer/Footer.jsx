import React from 'react';
import Gda from '../../assets/GDA_Project.svg';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

function Footer() {
	return (
		<div className='w-full  shadow-default'>
			<footer className='mx-auto container bg-white  flex flex-col justify-center mt-12 px-12 gap-6 max-[680px]:w-[100%]  '>
				<section className='flex justify-between items-center '>
					<div id='logo'>
						<img src={Gda} alt='' className='w-[155.22px] h-[23.66px]' />
					</div>
					<div className='flex justify-end items-center gap-4'>
						<h3 className='max-[680px]:hidden'>Prêt à demarrer ?</h3>
						<button className='bg-primary hover:bg-white text-white hover:text-primary border-2 border-primary duration-500 font-bold px-4 p-2 rounded-md'>
							Commencer
						</button>
					</div>
				</section>
				<hr />
				<section className='flex justify-between items-start max-[680px]:flex-wrap'>
					<div className='flex flex-col justify-start items-start  gap-4 '>
						<h3>Recevez les dernières nouvelles de nous</h3>
						<div className='flex border-2 border-primary rounded-lg'>
							<input
								type='text'
								placeholder='Votre adresse mail'
								className='px-3 p-2 bg-gray-200 max-[680px]:w-[75%] focus:outline-none  appearance-none bg-transparent border-none '
							/>
							<button className='bg-primary text-white font-bold px-3 p-2 rounded-r-md'>
								S’abonner
							</button>
						</div>
					</div>
					<div className='flex w-1/2 flex-row gap-8'>
						<div className='flex-1 flex flex-col justify-start text-left gap-2 max-[680px]:mt-6'>
							<h3 className='text-primary'>Nos Projets</h3>
							<ul className='flex flex-col gap-2'>
								<li>HTML/CSS</li>
								<li>Javascript</li>
								<li>FullStack</li>
								<li>Spécialisation</li>
							</ul>
						</div>
						<div className='flex-1 flex flex-col justify-start text-left gap-2 max-[680px]:mt-6'>
							<h3 className='text-primary'>A Propos</h3>
							<ul className='flex flex-col gap-2'>
								<li>Notre blog</li>
								<li>Etudiant</li>
								<li>Partenaires</li>
								<li>Nos projets</li>
							</ul>
						</div>
						<div className='flex-1 flex flex-col justify-start text-left gap-2 max-[680px]:mt-6'>
							<h3 className='text-primary'>Aide</h3>
							<ul className='flex flex-col gap-2'>
								<li>FAQs</li>
								<li>Nous contater</li>
							</ul>
						</div>
					</div>
				</section>
				<section
					id='termeCondition'
					className='flex justify-between items-center mt-12 pb-12'
				>
					<div>
						<span>gda_render&copy;2023</span>
					</div>
					<div className='flex justify-between items-center gap-3'>
						<FiFacebook />
						<FiTwitter />
						<FiInstagram />
					</div>
				</section>
			</footer>
		</div>
	);
}

export default Footer;
