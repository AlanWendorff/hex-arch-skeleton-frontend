import TCharacter from '../models/Character.model';

interface ICharacterRepository {
  getCharacter: () => Promise<TCharacter>;
}

export default ICharacterRepository;
