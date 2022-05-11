import { ApiResponse } from '../../apiResponse';
import * as db from '../../datastore';
import { Block } from '../../../types';

export async function getBlocks(): Promise<ApiResponse> {
  try {
    const blocks: Block[] = await db.getBlocks();
    return { statusCode: 200, data: blocks };
  } catch (err) {
    return { statusCode: 500, data: { message: err.message }};
  }
}
