export const getTimeAgo = (timestamp: string) => {
	// convert timestamp in milliseconds to 1s ago, 1 min age etc
	const time = new Date(parseInt(timestamp) * 1000).getTime();
	const now = new Date().getTime();
	const diff = now - time;
	const seconds = Math.floor(diff / 1000);
	return `${seconds} secs ago`;
};
