import React from 'react';
import { Button } from 'antd';
import { TransactionCard } from '../cards';

// Icons
import { PiScroll } from 'react-icons/pi';
import { useLatestBlocksStore } from '~/stores';

// Types
import type { Transaction } from 'viem';

const LatestTransactions = () => {
	const { blocks } = useLatestBlocksStore();
	const latestTxns = (blocks?.at(0)?.transactions.map((tx) => tx) ??
		[]) as Transaction<bigint, number, boolean>[];

	return (
		<div className='flex flex-col gap-2'>
			<div className='mx-1 flex items-center justify-between'>
				<div className='flex items-center gap-2 text-slate-700'>
					<PiScroll size={22} />
					<div className='text-xl font-medium'>Latest Transactions</div>
				</div>
				<Button type='primary' size='middle' className='bg-primary'>
					View all
				</Button>
			</div>
			<div className='box-shadow scrollbar-hide my-4 flex max-h-[36rem] flex-col gap-2 overflow-hidden rounded-sm border-[1px] border-slate-100 p-4 hover:overflow-y-scroll'>
				{latestTxns.map((tx, index) => (
					<TransactionCard key={index} {...tx} />
				))}
			</div>
		</div>
	);
};

export default LatestTransactions;
