import React from 'react'
import Gda from '../../assets/GDA_Project.svg'

const NavBar = () => {
	return (
		<div className=' container  flex flex-row  justify-between  items-center  bg-white  '>
			<img src={Gda} alt="" className='w-[155.22px] h-[23.66px]' />
			<div  className='hidden sm:flex lg:flex xl:flex container w-1/4  md:w-1/5  h-24 font-[IBM Plex Sans] opacity-80 text-[16px] text-[#1F2325]  font-normal flex justify-center items-center flex-row gap-[31px]'>
				<h3 className='font-bold '>Projects</h3>
				<h3 className='font-bold'>Blogs</h3>
				<h3 className='font-bold'>{ 'A propos'}</h3>
			</div>
		</div>
	)
}

export default NavBar
