import { useState } from 'react';
import { useGetCharactersQuery } from '../../serviceQueries/characters';
import { Paginator } from '../common/paginator';
import { SinglePage } from './singlePage';

const Characters = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { data = { info: { pages: 0 }, results: [] } } = useGetCharactersQuery(
        { pageNumber },
        { refetchOnMountOrArgChange: true }
    );
    return (
        <div className="flex flex-col justify-center items-center p-8">
            <Paginator pagesCount={data.info.pages} pageNumber={pageNumber} setPageNumber={setPageNumber} />
            <SinglePage data={data} />
        </div>
    );
};

export default Characters;
