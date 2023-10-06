import React from 'react';

// Icons
import { PiPolygonBold } from 'react-icons/pi';

const Navbar = () => {
	return (
		<div className='p-4 px-6'>
			<div className='flex flex-row items-center justify-between'>
				<div className='flex flex-row items-center gap-2'>
					<PiPolygonBold className='text-primary text-4xl' />
					<div className='hidden text-2xl font-bold sm:flex'>Polyscan</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
