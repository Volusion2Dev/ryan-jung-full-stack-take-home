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

export async function saveBlock(block: Block): Promise<ApiResponse> {
  const blockCheck = checkBlockValidity(block);
  if(!blockCheck.valid){
    return { statusCode: 400, data: {message: blockCheck.reason}};
  }
  try{
    const addedBlock = await db.saveBlock(block);
    return { statusCode: 201, data: addedBlock};
  }catch(err){
    return {statusCode: 500, data: {message: err.message}};
  }
}

const checkBlockValidity = (block: Block) => {
  if(!block){
    return {valid: false, reason: 'Missing required block object'};
  }
  if(!(['header','hero','footer']).includes(block.type)){
    return {valid: false, reason: 'Invalid block type'};
  }
  return {valid: true};
}