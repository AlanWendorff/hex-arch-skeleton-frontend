import getCharacters from '@/services/getCharacters';

const Root = async () => {
  const response = await getCharacters();
  console.log(response);

  return <div>ROOT</div>;
};

export default Root;
