export type BlockType = 'header' | 'hero' | 'footer';
export interface Block {
  id?: number;
  type: BlockType;
  position: number;
  configData: any;
};