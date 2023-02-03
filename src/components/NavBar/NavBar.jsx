import React from 'react'
import Gda from '../../assets/GDA_Project.png'

const NavBar = () => {
	return (
		<div className=' container flex flex-row  justify-between  items-center  bg-[#FFFFFF;]  '>
			<img src={Gda} alt="" className='w-[155.22px] h-[23.66px]   h-[23.66px]' />
			<div className='container w-[357px] h-[24px] font-[IBM Plex Sans] text-[] flex justify-center items-center flex-row gap-[31px]'>
				<h3 className='font-[600] font-[IBM Plex Sans] text-[#1F2325] opacity-[80%]'>Projects</h3>
				<h3 className='font-[600]'>Blogs</h3>
				<h3 className='font-[600]'>{ 'A propos'}</h3>
			</div>
		</div>
	)
}

export default NavBar
