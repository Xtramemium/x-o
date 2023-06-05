import React from "react";
import style from "./Field.module.css";

const Field = ({ player, handleClick, idx }) => {
    return (
        <div className={style.Field} onClick={() => handleClick(idx)}>
            {player && (player === 1 ? "X" : "0")}
        </div>
    );
};

export default Field;
