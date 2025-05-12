// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import IrisConnector from 'iris-connector';

const client = new IrisConnector({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rpa', () => {
  // skipped: tests are disabled for the time being
  test.skip('batchExecute: only required params', async () => {
    const responsePromise = client.api.rpa.batchExecute({
      parameterSets: ['string', 'string'],
      recordingId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('batchExecute: required and optional params', async () => {
    const response = await client.api.rpa.batchExecute({
      parameterSets: ['string', 'string'],
      recordingId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
      actionDelay: 1500,
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('execute: only required params', async () => {
    const responsePromise = client.api.rpa.execute({ recordingId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('execute: required and optional params', async () => {
    const response = await client.api.rpa.execute({
      recordingId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
      actionDelay: 1500,
      parameterOverrides: { '2.action_inputs.content': 'Parameterized text input' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getParameterTemplate', async () => {
    const responsePromise = client.api.rpa.getParameterTemplate('a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getStatus', async () => {
    const responsePromise = client.api.rpa.getStatus('rpa_1695872345678');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('stopExecution', async () => {
    const responsePromise = client.api.rpa.stopExecution('rpa_1695872345678');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
