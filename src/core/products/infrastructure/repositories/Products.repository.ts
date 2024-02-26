import httpMock from '../../../configuration/http/Http.mock';
import IProductsRepository from '../../domain/repositories/Products.repository';
import IProductsDTO from '../../../configuration/http/dto/Products.dto';
import { BASE_URL } from '../../../configuration/constants/env';

const productsRepository = (): IProductsRepository => ({
  getProducts: async () => {
    try {
      return await httpMock.get<IProductsDTO>(`${BASE_URL}/products`);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default productsRepository;
