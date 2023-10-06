import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from './_app';

// Components

import { LatestBlocks, LatestTransactions } from '~/components';

const Home: NextPageWithLayout = () => {
	return (
		<div className='m-24 border-2 p-16'>
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
