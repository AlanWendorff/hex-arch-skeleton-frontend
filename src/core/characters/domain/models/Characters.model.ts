type TCharactersModel = {
  results: TSingleCharacter[];
};

type TSingleCharacter = {
  id: number;
  name: string;
  image: string;
  extra: string;
};

export default TCharactersModel;
