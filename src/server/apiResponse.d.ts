import { Block } from '../types';

export interface ApiResponse {
  statusCode: number;
  data: Block[] | Block | { message: string };
}
