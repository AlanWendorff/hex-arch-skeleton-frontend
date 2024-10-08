import http from '../../../configuration/http/Http.axios';
import ICharactersRepository from '../../domain/repositories/Characters.repository';
import ICharactersDTO from '../../domain/dto/Characters.dto';
import charactersAdapter from '../adapters/Characters.adapter';
import { BASE_URL } from '../../../configuration/constants/env';

const charactersRepository = (): ICharactersRepository => ({
  getCharacters: async () => {
    try {
      const response = await http.get<ICharactersDTO>(`${BASE_URL}/character`);
      return charactersAdapter(response);
    } catch (error) {
      throw new Error(`Error getting user: ${error}`);
    }
  }
});

export default charactersRepository;
