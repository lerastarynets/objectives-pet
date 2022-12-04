// import { useState } from 'react';

// const Paginator = ({ totalItemsCount, pageSize, portionSize }) => {
//     const pagesCount = Math.ceil(totalItemsCount / pageSize);
//     const pages = [];

//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i);
//     }

//     const portionsCount = Math.ceil(totalItemsCount / portionSize);
//     const [portionNumber, setPortionNumber] = useState(1);
//     const leftNumber = (portionNumber - 1) * portionSize + 1;
//     const rightNumber = portionNumber * portionSize;

//     return (
//         <div className={s.paginator}>
//             {portionNumber > 1 && (
//                 <button className={s.paginationButton} onClick={() => setPortionNumber(portionNumber - 1)}>
//                     PREV
//                 </button>
//             )}
//             {pages
//                 .filter((p) => p >= leftNumber && p <= rightNumber)
//                 .map((p, idx) => {
//                     return (
//                         <span
//                             key={idx}
//                             className={props.currentPage === p ? s.selectedItem + ' ' + s.paginationItem : s.paginationItem}
//                             onClick={() => {
//                                 props.onPageChanged(p);
//                             }}
//                         >
//                             {p}
//                         </span>
//                     );
//                 })}
//             {portionsCount > portionNumber && (
//                 <button className={s.paginationButton} onClick={() => setPortionNumber(portionNumber + 1)}>
//                     NEXT
//                 </button>
//             )}
//         </div>
//     );
// };

// export default Paginator;
