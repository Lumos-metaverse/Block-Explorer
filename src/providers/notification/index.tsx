import React from 'react';
import { Toaster } from 'react-hot-toast';
s
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
