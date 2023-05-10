import { useDispatch, useSelector } from "react-redux"
import './App.css'

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    console.log(cash)

    const getCash = (cash) => {
        dispatch({type:'GET_CASH',payload:cash})
    }

    const addCash = (cash) => {
        dispatch({type:'ADD_CASH',payload:cash})
    }

    return (
        <div className='app'>
            <div className='display'><p>{cash}</p></div>
            <div className='bottons'>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Cнять со счета</button>
            </div>
        </div>
    )
}

export default App;
