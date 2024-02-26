import IProductsRepository from '../domain/repositories/Products.repository';
import ProductsService from '../domain/services/Products.service';

interface IProductsController extends IProductsRepository {}

const ProductsController = (repository: IProductsRepository): IProductsController => ({
  getProducts: () => {
    return ProductsService(repository).getProducts();
  }
});

export default ProductsController;
