import IMeta from './shared/Meta.dto';

interface IProductsDTO {
  meta: IMeta;
  response: IResponse;
}

interface IResponse {
  products: IProduct[];
}

interface IProduct {
  id: number;
  name: string;
  thumbnail_url: string;
}

export default IProductsDTO;
