import React from 'react'
import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div className='my-3'>
            <h3>Deposite/Update Money</h3>
            <button className="btn btn-primary btn-sm mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Update Money
            <button className="btn btn-primary btn-sm mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
    )
}

export default Shop;