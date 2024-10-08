import ICharacterRepository from '../domain/repositories/Character.repository';
import characterService from '../domain/services/Character.service';

interface ICharacterController extends ICharacterRepository {}

const characterController = (repository: ICharacterRepository): ICharacterController => ({
  getCharacter: () => {
    return characterService(repository).getCharacter();
  }
});

export default characterController;
