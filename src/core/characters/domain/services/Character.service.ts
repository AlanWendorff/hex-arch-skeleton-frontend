import ICharactersRepository from '../repositories/Characters.repository';

interface ICharactersService extends ICharactersRepository {}

const charactersService = (repository: ICharactersRepository): ICharactersService => ({
  getCharacters: () => {
    return repository.getCharacters();
  }
});

export default charactersService;
