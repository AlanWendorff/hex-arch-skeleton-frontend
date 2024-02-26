import { META_200 } from '../mocks/meta.api';

const httpMock = {
  get: async <T>(url: string, body?: any) => {
    const response = new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            meta: { ...META_200.get, endpoint: url },
            response: {
              products: []
            }
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
            meta: { ...META_200.post, endpoint: url },
            response: {
              products: []
            }
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
            meta: { ...META_200.put, endpoint: url },
            response: {
              products: []
            }
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
            meta: { ...META_200.delete, endpoint: url },
            response: {
              products: []
            }
          }),
        1000
      )
    );
    return (await response) as T;
  }
};

export default httpMock;
