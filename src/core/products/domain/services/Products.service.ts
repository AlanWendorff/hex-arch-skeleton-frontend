import IProductsRepository from '../repositories/Products.repository';

interface IProductsService extends IProductsRepository {}

const productsService = (repository: IProductsRepository): IProductsService => ({
  getProducts: () => {
    return repository.getProducts();
  }
});

export default productsService;
