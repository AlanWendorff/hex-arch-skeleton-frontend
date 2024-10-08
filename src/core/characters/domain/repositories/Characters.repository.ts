import TCharacters from '../models/Characters.model';

interface ICharactersRepository {
  getCharacters: () => Promise<TCharacters>;
}

export default ICharactersRepository;
