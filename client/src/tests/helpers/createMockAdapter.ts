import MockAdapter from 'axios-mock-adapter';

export const createMockAdapter = (entity: any) => {
   return new MockAdapter(entity);
};