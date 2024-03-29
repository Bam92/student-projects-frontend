import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

function SmallCard({ clean, fonct, design }) {
	return (
		<div
			className='container w-[220px] max-[680px]:w-[180px] max-[680px]:h-[100px] h-[130px] p-6 gap-2 bg flex  shadow-md  rounded-lg transform 
    transition hover:shadow-2xl backdrop-blur-md'
		>
			<div className='flex-col'>
				<span className='text-bold flex-col gap-2 justify-between text-md'>
					<span className='flex items-center gap-2'>
						<BsCheck2Circle color='green' />
						{clean}% Clean Code
					</span>
					<span className='flex items-center gap-2'>
						<BsCheck2Circle color='blue' />
						{fonct}% Fonctionalités
					</span>
					<span className='flex items-center gap-2'>
						<BsCheck2Circle color='yellow' />
						{design}% Design
					</span>
				</span>
			</div>
		</div>
	);
}

export default SmallCard;
