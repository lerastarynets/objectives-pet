import { useState } from 'react';
import { useGetCharactersQuery } from '../../serviceQueries/characters';
import Paginator from '../common/paginator/Paginator';
import { SinglePage } from './singlePage';

const RickAndMorty = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data = { info: {}, results: [] } } = useGetCharactersQuery({ pageNumber }, { refetchOnMountOrArgChange: true });
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <Paginator pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <SinglePage data={data} />
        </div>
    );
};

export default RickAndMorty;
