import clsx from 'clsx';
import React from 'react';

import { useState } from 'react';
function BarProjet() {
	const tech = ['HTML/CSS', 'Javascript', 'React', 'Node', 'Fullstack'];
	const [isActive, setActive] = useState({
		keyAct: 0,
	});
	return (
		<section className='  mb-9 flex'>
			<div className='flex mx-auto shadow-default  max-[680px]:mx-auto max-[680px]:mt-[5%] mt-[2%] max-[680px]:text-[12px] z-50   justify-between p-1 rounded-full shadow-lg items-center bg-[#303030]'>
				{tech &&
					tech.map((techno, key) => (
						<span
							onClick={() => {
								setActive({ keyAct: key });
							}}
							className={clsx(
								'cursor-pointer',
								isActive.keyAct === key
									? 'bg-[#D92950] text-white p-2 duration-500 px-8 rounded-full'
									: 'text-white hover:bg-[#d9294f9a] p-2 duration-500 px-8 rounded-full'
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
