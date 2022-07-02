import React from "react";
import {Tile} from '../tile/Tile';

//receives contacts or appointments array
export const TileList = ({arr}) => {
  return (
    <div>
      {arr.map((obj,index)=>{
        return <Tile key={index} obj={obj}/>
      })}
    </div>
  );
};
