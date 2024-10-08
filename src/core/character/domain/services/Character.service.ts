import ICharacterRepository from '../repositories/Character.repository';

interface ICharacterService extends ICharacterRepository {}

const characterService = (repository: ICharacterRepository): ICharacterService => ({
  getCharacter: () => {
    return repository.getCharacter();
  }
});

export default characterService;
