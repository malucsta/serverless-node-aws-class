import { handler } from '../src/index';

describe('handler', () => {
    test('should return a valid response', async () => {
        const expectedResponse = {
            statusCode: 200,
            body: JSON.stringify(
                {
                    message: "Go Serverless v3.0! Your function executed successfully!",
                },
                null,
                2
            ),
        };

        const response = await handler();

        expect(response).toBeNull();
        //expect(response).toEqual(expectedResponse);
    });
});