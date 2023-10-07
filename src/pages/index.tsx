import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

import { publicClient } from '~/providers/web3';
// Stores
import { useLatestBlocksStore } from '~/stores';

// Components
import { LatestBlocks, LatestTransactions } from '~/components';

const Home: NextPageWithLayout = () => {
	const { addBlock } = useLatestBlocksStore();

	const unwatch = publicClient.watchBlocks({
		emitMissed: false,
		includeTransactions: true,
		blockTag: 'latest',
		onError: (err) => console.log(err),
		onBlock: (block) => addBlock(block),
	});

	return (
		<div className='mx-auto my-24 max-w-screen-2xl p-4'>
			<div className='flex flex-col gap-8 lg:flex-row'>
				<div className='w-full basis-1/2'>
					<LatestBlocks />
				</div>
				<div className='w-full basis-1/2'>
					<LatestTransactions />
				</div>
			</div>
		</div>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Home;
