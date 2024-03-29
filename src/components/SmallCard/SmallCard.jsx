import React from 'react';

function SmallCard({ title, num, icon }) {
	return (
		<div
			className='
      container w-[220px] max-[680px]:w-[150px] max-[680px]:h-[100px] h-[110px] p-6 
      gap-2 bg-gradient-to-b   from-[#fecacabb] to-[#ffffffba] drop-shadow-lg flex duration-500   
      rounded-lg transform transition hover:drop-shadow-2xl'
		>
			<div className='flex-col'>
				<span> {icon} </span>
				<span className='text-bold text-[24px] max-[680px]:text-[16px]'>
					{num}
					{title}
				</span>
			</div>
		</div>
	);
}

export default SmallCard;
