import axios from 'axios';

function getNextPosition(blocks: { position: number }[]): number {
    const maxPosition = blocks.reduce((acc: number, block: { position: number }) => Math.max(acc, block.position), 0);
    return maxPosition + 1;
}

describe('blocks', (): void => {
    describe('read', (): void => {
        it('should get blocks', async (): Promise<void> => {
            const blockResp = await axios.get('http://localhost:3000/blocks');

            expect(blockResp.status).toBe(200);
            expect(blockResp.data.length).toBeGreaterThanOrEqual(1);
        });
    });

    describe('add', (): void => {
        it('should add a block', async (): Promise<void> => {
            const blockResp = await axios.get('http://localhost:3000/blocks');
            const nextPosition = getNextPosition(blockResp.data);
            const block = {
                type: "header",
                data: {
                    title: "Slice of Life/Pizza"
                },
                position: nextPosition
            };

            const addedBlockResp = await axios.post('http://localhost:3000/blocks', block);
            const addedBlock = addedBlockResp.data;

            expect(addedBlockResp.status).toBe(201);
            expect(addedBlock.id).toBeGreaterThanOrEqual(1);
            expect(addedBlock.position).toBe(nextPosition);
        });

        it('should fail when adding a block with an invalid block type', async (): Promise<void> => {
            const blockResp = await axios.get('http://localhost:3000/blocks');
            const nextPosition = getNextPosition(blockResp.data);
            const block = {
                type: "invalid-block-type",
                data: {
                    title: "Invalid Block Type"
                },
                position: nextPosition
            };

            try {
                await axios.post('http://localhost:3000/blocks', block);
                fail(`should have thrown 'invalid block type' error`);
            } catch (err) {
                expect(err.response.status).toBe(400);
                expect(err.response.data.message).toMatch(/invalid block type/);
            }
        });
    });
});
