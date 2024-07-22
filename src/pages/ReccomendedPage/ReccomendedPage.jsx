import { useStore } from 'src/app/zustand/store';

export const ReccomendedPage = () => {
  const token = useStore(state => state.token);
  const changeToken = useStore(state => state.setToken);
  let newt = 'morororo';

  return (
    <>
      <>Reccomended page</>
      <h1>{token} is currentTOken</h1>
      <button
        onClick={e => {
          changeToken(newt);
        }}
      >
        change token
      </button>
    </>
  );
};
