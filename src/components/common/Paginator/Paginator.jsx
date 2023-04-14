import React, { useState } from "react";
import s from "./Paginator.module.css";
import cn from "classnames";

let Paginator = ({portionSize = 10, ...props}) => {
                                                                                  //https://youtu.be/heDew37aWb0?t=410
      let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
 // https://youtu.be/ap8HxJPwJhY?t=1783
      let pages = [];
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }

      let portionCount = Math.ceil(pagesCount / portionSize);
      let [portionNumber, setPortionNumber] = useState(1); //https://youtu.be/heDew37aWb0?t=886 кнопки 
      let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //https://youtu.be/heDew37aWb0?t=665
      let rightPortionPageNumber = portionNumber * portionSize; //https://youtu.be/heDew37aWb0?t=850

    return (

      <div className={s.pagination}>

      {portionNumber > 1 && <button className={s.paginatorBtn} onClick={() => {setPortionNumber(portionNumber - 1)}}>prev</button>}
        

        { pages //https://youtu.be/ap8HxJPwJhY?t=1843 
          .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber) //https://youtu.be/heDew37aWb0?t=510
          .map( (p) => {  //

                return <span className={cn({ [s.selectedPage] : props.currentPage === p}, s.pageNumber)} //https://youtu.be/ap8HxJPwJhY?t=1983
                key={p}
                onClick={(e) => {props.onPageChanged(p)}}  //https://youtu.be/ap8HxJPwJhY?t=2925
                
                >{p}</span>

          })}

      {portionCount > portionNumber && <button className={s.paginatorBtn} onClick={() => {setPortionNumber(portionNumber + 1)}}>next</button>}
        
         

      </div>
)
}
export default Paginator;
// lesson 93 https://youtu.be/heDew37aWb0?t=526 скрін до після пагінатора