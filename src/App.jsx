import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { fetchCustomers } from "./asyncActions/customers"
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer"

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    console.log(cash)

    const getCash = (cash) => {
        dispatch({type:'GET_CASH',payload: cash})
    }

    const addCash = (cash) => {
        dispatch({type:'ADD_CASH',payload: cash})
    }

    const addCustomer = (name) =>{
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className='app'>
            <div className='display'><p>{cash}</p></div>
            <div className='bottons'>
                <button onClick={() => addCash(Number(prompt()))}>Add money</button>
                <button onClick={() => getCash(Number(prompt()))}>Take money</button>
                <button onClick={() => addCustomer(prompt())}>Add client</button>
                <button onClick={() => dispatch(fetchCustomers())}>Get clients from DB</button>
            </div>
            {customers.length>0 ?
            <div>
                {customers.map(customer =>
                    <div onClick={()=>removeCustomer(customer)} className='customer'>{customer.name}</div>
                )}
            </div>
            :
            <div style={{fontSize:'2rem'}}>
                no clients
            </div>}
        </div>
    )
}

export default App;
