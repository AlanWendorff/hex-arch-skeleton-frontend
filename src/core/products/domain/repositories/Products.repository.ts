import TProducts from '../models/Products.model';

interface IProductsRepository {
  getProducts: () => Promise<TProducts>;
}

export default IProductsRepository;
