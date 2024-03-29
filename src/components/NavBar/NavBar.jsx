import React from 'react';
import { Link } from 'react-router-dom';
import Gda from '../../assets/Logo.svg';
import clsx from 'clsx';

const NavBar = () => {
	const link = [
		{ text: 'Accueil', link: '/' },
		{ text: 'Projets', link: 'projets' },
		{ text: 'Blogs', link: 'blogs' },
		{ text: 'A propos', link: 'apropos' },
	];
	const [isActive, setActive] = React.useState({
		keyAct: 0,
	});
	return (
		<nav className=' px-12 shadow-sm fixed w-full z-[9000] bg-[#ffffff1c] backdrop-blur-md'>
			<div className='container mx-auto flex justify-between items-center '>
				<Link to={'/'}>
					<img src={Gda} alt='' className='' />
				</Link>
				<ul className='hidden sm:flex  justify-center items-center  gap-0'>
					{link &&
						link.map((item, key) => (
							<li
								onClick={() => {
									setActive({ keyAct: key });
								}}
								className={clsx(
									'px-8 py-8 hover:bg-red-100 border-b-4 border-[#ffffff1c]  hover:border-primary duration-200',
									isActive.keyAct === key
										? 'text-[#D92950] '
										: ' hover:text-[#d9294f9a] '
								)}
								key={key}
							>
								<Link to={item.link}>{item.text}</Link>
							</li>
						))}
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
