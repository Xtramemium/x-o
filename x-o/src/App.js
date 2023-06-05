import { useState } from 'react';
import style from './App.module.css'
import Field from "./Components/Field";

function App() {
    const [fields, setFields] = useState(new Array(9).fill(''))
    const [currentPlayer, setCurrentPlayer] = useState(Math.round(Math.random()))
    const [status, setStatus] = useState('Ходит')

    const checkWin = (fill, player) => {

        const patterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        return patterns.some((pattern) =>
            pattern.every((cellIndex) =>
                fill[cellIndex] === player))

    }

    const handleRestart = () => {
        setFields(Array(9).fill(''))
        setCurrentPlayer(Math.round(Math.random()))
        setStatus('Ходит')
    }

    const handleClick = (index) => {

        if (status === 'Победа') {
            return
        }

        const newFields = [...fields]
        newFields[index] = currentPlayer

        setFields(newFields)

        if (checkWin(newFields, currentPlayer)) {
            setStatus('Победа')
        } else if (currentPlayer === 1) {
            setCurrentPlayer(0)
        } else {
            setCurrentPlayer(1)
        }

    }

    return (
        <div>
            <div className={style.Info}><h1>{`${status} ${currentPlayer === 1 ? "X" : "0"}`}</h1>
                <button disabled={status !== 'Победа'} onClick={handleRestart}>Начать заново!</button>
            </div>
            <div className={style.App}>

                <div className={style.Container}>
                    {fields.map((field, index) => (
                        <Field
                            key={index}
                            idx={index}
                            player={field}
                            handleClick={handleClick}
                        />
                    ))}
                </div>
            </div >
        </div>
    );
}

export default App;
