import ICharacterDTO from '../../domain/dto/Character.dto';
import TCharacterModel from '../../domain/models/Character.model';

const characterAdapter = (dto: ICharacterDTO): TCharacterModel => {
  const results = dto.results.map(({ id, name, image }) => ({
    id,
    name,
    image,
    extra: 'I can add or format what I want'
  }));

  return {
    results
  };
};

export default characterAdapter;
