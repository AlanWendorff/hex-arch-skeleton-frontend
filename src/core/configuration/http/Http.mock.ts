import { INFO_MOCK } from '../mocks/Info.mock';

const httpMock = {
  get: async <T>(url: string, body?: any) => {
    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            info: INFO_MOCK,
            results: []
          }),
        1000
      )
    );
    return (await response) as T;
  },
  post: async <T>(url: string, body: any) => {
    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: INFO_MOCK,
            results: []
          }),
        1000
      )
    );
    return (await response) as T;
  },
  put: async <T>(url: string, body: any) => {
    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: INFO_MOCK,
            results: []
          }),
        1000
      )
    );
    return (await response) as T;
  },
  delete: async <T>(url: string, body: any) => {
    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: INFO_MOCK,
            results: []
          }),
        1000
      )
    );
    return (await response) as T;
  }
};

export default httpMock;
