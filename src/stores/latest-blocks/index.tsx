import { create } from 'zustand';
import type { Block } from 'viem';

interface LatestBlocksState {
	blocks: Block[];
	addBlock: (block: Block) => void;
}

export const useLatestBlocksStore = create<LatestBlocksState>((set) => ({
	blocks: [],
	addBlock: (block) =>
		set((state) => {
			if (state.blocks.length < 10) {
				const newBlocks = Array.from(new Set([block, ...(state.blocks ?? [])]));
				return {
					blocks: newBlocks,
				};
			} else {
				const newBlocks = Array.from(
					new Set([block, ...(state.blocks.slice(0, 9) ?? [])])
				);
				return {
					blocks: newBlocks,
				};
			}
		}),
}));
