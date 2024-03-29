import React from 'react';
import BarProjet from '../components/barprojet/BarProjet';
import CardProjet from '../components/cardProjet/CardProjet';

function Projet() {
	const data = [
		{
			img: 'img.png',
			tech: 'React',
			date: '3 days ago',
			title: 'App Students Projets',
			desc: 'Une application qui regroupes tous les project effectuer par les etudiant de la Goma digital Academy',
			avatar: 'Avatar.png',
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
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
			auth: 'Samuel mbabhazi',
			clean: 75,
			fonct: 64,
			design: 82,
		},
	];
	return (
		<section className='py-32 bg-blue-100'>
			<BarProjet />
			<CardProjet data={data} />
		</section>
	);
}

export default Projet;
