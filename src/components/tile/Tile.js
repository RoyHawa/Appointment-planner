import React from "react";

//receives appointment or contact object
export const Tile = ({ obj }) => {
  return (
    <div className="tile-container">
      {Object.values(obj).map((info, index) => {
        return (
          <p key={index} className={`${index === 0 ? "tile-title" : "tile"}`}>
            {info}
          </p>
        );
      })}
    </div>
  );
};
