import React from 'react';

const LatestTransactions = () => {
	return (
		<div className='flex flex-col gap-2 border-2'>
			<div className='flex items-center justify-between'>
				<div className='text-2xl font-bold'>Latest Transactions</div>
				<div className='text-sm text-gray-500'>View All</div>
			</div>
		</div>
	);
};

export default LatestTransactions;
