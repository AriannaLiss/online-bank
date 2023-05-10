import { useDispatch, useSelector } from "react-redux"

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)
    console.log(cash)

    const getCash = (cash) => {
        dispatch({type:'GET_CASH',payload:cash})
    }

    const addCash = (cash) => {
        dispatch({type:'ADD_CASH',payload:cash})
    }

    return (
        <div className='app'>
            Hello world
            <div style={{fontSize:'3rem'}}>{cash}</div>
            <div style={{display:'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
                <button onClick={() => getCash(Number(prompt()))}>Cнять со счета</button>
            </div>
        </div>
    )
}

export default App;