// import React from "react";
import Card from "./Card";
import {Grid} from 'react-virtualized';
import 'react-virtualized/styles.css';




function Cardgrid({ itemsTodisplay }) {
  const columnCount=itemsTodisplay.length<3?itemsTodisplay.length:3;
let total_rows=Math.floor((itemsTodisplay.length)/columnCount);
total_rows=total_rows==0?1:total_rows;


const cellRenderer=({columnIndex,key,rowIndex,style})=>{
   const index=rowIndex*columnCount+columnIndex;
    return<div key={key} style={{...style}}>
    <Card card={itemsTodisplay[index]} key={itemsTodisplay[index].id}/>
    </div>
}

  return (<>
   
  <Grid columnCount={columnCount} columnWidth={380} rowHeight={450} rowCount={total_rows}
  width={1300} height={540} cellRenderer={cellRenderer}
  />
    </>
  );
}

export default Cardgrid;
