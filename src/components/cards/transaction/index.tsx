import Link from 'next/link';
import React from 'react';
import type { Transaction } from 'viem';

const TransactionCard = ({
	blockNumber,
	hash,
	from,
	to,
	value,
}: Transaction<bigint, number, boolean>) => {
	return (
		<div className='mt-2 flex flex-col gap-4'>
			<div className='flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between'>
				<div className='flex flex-col gap-1'>
					<Link
						className='opacity-85 text-sm text-primary'
						href={`https://etherscan.com/tx/${hash}`}
						rel='noopener noreferrer'
						target='_blank'
					>
						{hash.slice(0, 18)}
						...
					</Link>
					<span className='text-xs font-semibold text-slate-400'>
						Block #{blockNumber?.toString()}
					</span>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='text-sm'>
						From{' '}
						<span className='opacity-85 cursor-pointer text-primary'>
							{from.slice(0, 8)}
							...
							{from.slice(-8)}
						</span>
					</span>
					<span className='text-sm'>
						To{' '}
						<span className='opacity-85 cursor-pointer text-primary'>
							{to?.slice(0, 8)}
							...
							{to?.slice(-8)}
						</span>
					</span>
				</div>

				<div className='w-fit rounded-md bg-slate-200 px-2 py-[1px] text-xs text-gray-500'>
					{(parseInt(value.toString()) / 10 ** 9).toFixed(4)} ETH
				</div>
			</div>
			<div className='w-full border-t-[1px] border-gray-300' />
		</div>
	);
};

export default TransactionCard;
