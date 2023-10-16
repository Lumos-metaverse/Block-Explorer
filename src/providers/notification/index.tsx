import React from 'react';
import { Toaster } from 'react-hot-toast';
interface Props {
	children: React.ReactNode;
}

const NotificationProvider = ({ children }: Props) => {
	return (
		<>
			{children}
			<Toaster position='bottom-left' />
		</>
	);
};

export default NotificationProvider;
