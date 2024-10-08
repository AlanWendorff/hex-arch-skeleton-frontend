import ICharactersRepository from '../domain/repositories/Characters.repository';
import charactersService from '../domain/services/Character.service';

interface ICharactersController extends ICharactersRepository {}

const charactersController = (repository: ICharactersRepository): ICharactersController => ({
  getCharacters: () => {
    return charactersService(repository).getCharacters();
  }
});

export default charactersController;
