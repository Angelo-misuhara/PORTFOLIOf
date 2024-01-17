import React from 'react';

const Sidebar = () => {
	return (
		<div className=' flex flex-col'>
			<h1 className='text-3xl font-thin'>Yocor,Angelo T.</h1>
			<div className='mt-[10rem]'>
				<ul  className='flex flex-col gap-4 p-2 pt-3'>
					<li className='text-[1.4rem] font-[#C8BAAB] hover:text-[2.5rem]'>
					<a href="">	Main</a>
					</li>
						<li className='text-[1.4rem] font-[#C8BAAB] hover:text-[2.5rem]'>
						<a href="">Projects</a>
					</li>
						<li className='text-[1.4rem] font-[#C8BAAB] hover:text-[2.5rem]'>
						<a href="">Contact</a>
					</li>
						<li className='text-[1.4rem] font-[#C8BAAB] hover:text-[2.5rem]'>
						<a href="">About</a>
					</li>
				</ul>
					<h1 className='text-4xl mt-[10rem] font-thin'>2024</h1>
			</div>
		</div>
	);
};

export default Sidebar;
