import clsx from 'clsx';
import React from 'react';

import { useState } from 'react';
function BarProjet() {
	const tech = ['Compentences', 'Outils'];
	const [isActive, setActive] = useState({
		keyAct: 0,
	});
	return (
		<section className='flex py-2 my-4'>
			<div className='flex  p-1 rounded-full shadow-lg items-center bg-[#303030]'>
				{tech &&
					tech.map((techno, key) => (
						<span
							onClick={() => {
								setActive({ keyAct: key });
							}}
							className={clsx(
								'duration-500 transition-all',
								isActive.keyAct === key
									? 'bg-[#D92950] text-white p-2 px-3 rounded-full'
									: 'text-white hover:bg-[#d9294f9a] p-1 px-3 rounded-full'
							)}
							key={key}
						>
							{techno}
						</span>
					))}
			</div>
		</section>
	);
}

export default BarProjet;
