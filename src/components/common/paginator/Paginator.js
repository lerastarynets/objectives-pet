import { number, func } from 'prop-types';

const Paginator = ({ pageNumber, setPageNumber }) => {
    return (
        <div className="flex justify-between items-center w-36 mb-16">
            <button
                disabled={pageNumber < 1}
                className="font-bold bg-black text-yellow-100 rounded-sm p-2"
                onClick={() => setPageNumber((prevNum) => prevNum - 1)}
            >
                PREV
            </button>
            {/* {pages
                .filter((p) => p >= leftNumber && p <= rightNumber)
                .map((p, idx) => {
                    return (
                        <span
                            key={idx}
                            className={props.currentPage === p ? s.selectedItem + ' ' + s.paginationItem : s.paginationItem}
                            onClick={() => {
                                props.onPageChanged(p);
                            }}
                        >
                            {p}
                        </span>
                    );
                })} */}
            <button
                className="font-bold bg-black text-yellow-100 rounded-sm p-2"
                onClick={() => setPageNumber((prevNum) => prevNum + 1)}
            >
                NEXT
            </button>
        </div>
    );
};

Paginator.propTypes = {
    pageNumber: number.isRequired,
    setPageNumber: func.isRequired,
};

export default Paginator;
