import { Block } from '../types';

export const getHeaderBlock = (id: number, position = 0): Block => ({
  id,
  type: "header",
  position,
  configData: {
    title: 'mock header'
  }
});

export const getHeroBlock = (id: number): Block => ({
  id,
  type: "hero",
  position: 1,
  configData: {
    title: 'mock title',
    subtitle: 'mock subtitle',
  }
});

export const getFooterBlock = (id: number): Block => ({
  id,
  type: "footer",
  position: 2,
  configData: null
});

export const getDefaultBlocks = (): Block[] => ([
  getHeaderBlock(1),
  getHeroBlock(2),
  getFooterBlock(3)
]);
