import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

// Components

import { LatestBlocks, LatestTransactions } from '~/components';

const Home: NextPageWithLayout = () => {
	return (
		<div className='my-24 p-4 max-w-screen-2xl mx-auto'>
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
