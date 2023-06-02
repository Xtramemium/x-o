import './App.css';
import style from './App.modules.css'

function App() {
  const newArr = new Array(9).fill('')
    return (
        <div className={style.App}>
            <div className={style.Container}>
                {newArr.map((field, index) =>
                    <button key={index}>
                        {field}
                    </button>
                )}
            </div>
        </div>
    )

}


export default App;
