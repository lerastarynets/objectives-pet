import { useGetCharactersQuery } from '../../serviceQueries/characters';

const RickAndMorty = () => {
    const { data } = useGetCharactersQuery({}, { refetchOnMountOrArgChange: true });
    return <div>{data}</div>;
};

export default RickAndMorty;
