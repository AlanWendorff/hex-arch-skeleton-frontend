import charactersRepository from '@core/characters/infrastructure/repositories/Characters.repository';
import charactersController from '@core/characters/application/Characters.controller';

const getCharacters = () => charactersController(charactersRepository()).getCharacters();

export default getCharacters;
