import { number, func } from 'prop-types';
import { useState } from 'react';
import { DEFAULT_PORTION_NUMBER, PORTION_SIZE } from '../../../constants/common';
import cn from 'classnames';

const Paginator = ({ pageNumber, setPageNumber, pagesCount }) => {
    const [portionNumber, setPortionNumber] = useState(DEFAULT_PORTION_NUMBER);
    const pagesArr = [...Array(pagesCount).keys()];

    const leftNumber = (portionNumber - 1) * PORTION_SIZE + 1;
    const rightNumber = portionNumber * PORTION_SIZE;
    const maxPortionNumber = Math.ceil(pagesCount / PORTION_SIZE);
    const isPageSelected = (pageNum) => pageNumber === pageNum;

    const prevNextBtnClassname = (portion) =>
        cn('font-bold bg-black text-yellow-100 rounded-sm p-2', portionNumber === portion && 'invisible');

    const handleClickNext = () => {
        setPortionNumber((prevNum) => prevNum + 1);
    };

    const handleClickPrev = () => {
        setPortionNumber((prevNum) => prevNum - 1);
    };

    const handleSelectPage = (page) => {
        setPageNumber(page);
    };
    return (
        <div className="flex justify-between items-center w-64 mb-16">
            <button className={prevNextBtnClassname(DEFAULT_PORTION_NUMBER)} onClick={handleClickPrev}>
                PREV
            </button>
            <div className="flex w-32 justify-around">
                {pagesArr
                    .filter((p) => p >= leftNumber && p <= rightNumber)
                    .map((p, idx) => (
                        <div
                            className={cn(
                                'cursor-pointer font-bold text-sm',
                                isPageSelected(p) ? 'text-black' : 'text-yellow-200'
                            )}
                            onClick={() => handleSelectPage(p)}
                            key={idx}
                        >
                            {p}
                        </div>
                    ))}
            </div>
            <button className={prevNextBtnClassname(maxPortionNumber)} onClick={handleClickNext}>
                NEXT
            </button>
        </div>
    );
};

Paginator.propTypes = {
    pageNumber: number.isRequired,
    pagesCount: number.isRequired,
    setPageNumber: func.isRequired,
};

export default Paginator;
