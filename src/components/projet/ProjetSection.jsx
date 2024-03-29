import React from 'react';
import BarProjet from '../barprojet/BarProjet';
import CardProjet from '../cardProjet/CardProjet';

function ProjetSection() {
	const data = [
		{
			img: 'img.png',
			tech: 'React',
			date: '3 days ago',
			title: 'App Students Projets',
			desc: 'Une application qui regroupes tous les project effectuer par les etudiant de la Goma digital Academy',
			avatar: 'https://avatars.githubusercontent.com/u/83704005?v=4',
			auth: 'Cedric Karungu',
			clean: 75,
			fonct: 64,
			design: 82,
		},
		{
			img: 'img.png',
			tech: 'React',
			date: '3 days ago',
			title: 'App Students Projets',
			desc: 'Une application qui regroupes tous les project effectuer par les etudiant de la Goma digital Academy',
			avatar: 'Avatar.png',
			auth: 'Arick Bulakali',
			clean: 75,
			fonct: 64,
			design: 82,
		},
		{
			img: 'img.png',
			tech: 'React',
			date: '3 days ago',
			title: 'App Students Projets',
			desc: 'Une application qui regroupes tous les project effectuer par les etudiant de la Goma digital Academy',
			avatar: 'https://avatars.githubusercontent.com/u/111171386?s=60&v=4',
			auth: 'Samuel mbabhazi',
			clean: 75,
			fonct: 64,
			design: 82,
		},
	];
	return (
		<div className='w-full flex items-center bg-blue-100 h-screen'>
			<section className='mx-auto w-full container flex-col justify-center items-center   flex-center mt-24 max-[680px]:mt-0'>
				<h2 className='  text-[#263238] font-bold text-[30px]'>Nos Projets</h2>
				<BarProjet />
				<CardProjet data={data} />
			</section>
		</div>
	);
}

export default ProjetSection;
