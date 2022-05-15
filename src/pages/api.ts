import axios, { AxiosResponse } from 'axios';

import { Block } from '../types';

const blocksApiUrl = 'http://localhost:3000/blocks';

export async function getBlocks(): Promise<Block[]> {
  const response = await axios.get(blocksApiUrl);
  return response.data;
}

export async function saveBlock(block: Block): Promise<AxiosResponse<any>>{
  const response = await axios.post(blocksApiUrl, block);
  return response;
}