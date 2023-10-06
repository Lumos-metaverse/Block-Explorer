import React from 'react';

const BlockCard = () => {
	return (
		<div className='flex flex-col gap-4 mt-2'>
			<div className='flex items-center justify-between'>
				<div className='flex flex-col gap-1'>
					<span className='text-primary opacity-85 cursor-pointer text-sm'>
						Block #48411300
					</span>
					<span className='text-xs font-semibold text-slate-400'>14 sec ago</span>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm'>
						Validated by
						<span className='text-primary opacity-85 cursor-pointer'>#48411300</span>
					</span>
					<span className='text-xs font-semibold text-slate-400'>77 txns</span>
				</div>
				<div className='rounded-md bg-slate-200 px-2 py-[1px] text-xs text-gray-500'>
					0.54657 MATIC
				</div>
			</div>
			<div className='w-full border-t-[1px] border-gray-300' />
		</div>
	);
};

export default BlockCard;
