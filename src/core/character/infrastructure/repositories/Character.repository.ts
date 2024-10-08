import http from '../../../configuration/http/Http.axios';
import ICharacterRepository from '../../domain/repositories/Character.repository';
import ICharacterDTO from '../../domain/dto/Character.dto';
import characterAdapter from '../adapters/Character.adapter';
import { BASE_URL } from '../../../configuration/constants/env';

const characterRepository = (): ICharacterRepository => ({
  getCharacter: async () => {
    try {
      const response = await http.get<ICharacterDTO>(`${BASE_URL}/character`);
      return characterAdapter(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default characterRepository;
