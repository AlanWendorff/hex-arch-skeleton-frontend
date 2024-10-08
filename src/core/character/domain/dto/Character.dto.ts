import IInfoDTO from '@/core/configuration/http/dto/Info.dto';

interface ICharacterDTO {
  info: IInfoDTO;
  results: ISingleCharacter[];
}

interface ISingleCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: IOrigin;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IOrigin {
  name: string;
  url: string;
}

export default ICharacterDTO;
