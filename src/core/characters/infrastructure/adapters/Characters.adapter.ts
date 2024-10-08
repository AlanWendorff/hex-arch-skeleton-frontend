import ICharactersDTO from '../../domain/dto/Characters.dto';
import TCharactersModel from '../../domain/models/Characters.model';

const charactersAdapter = (dto: ICharactersDTO): TCharactersModel => {
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

export default charactersAdapter;
