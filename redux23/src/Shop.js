import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actionCreators } from './state/index'
import { withdrawmoney } from './state/action'

const Shop = () => {
    const dispatch =useDispatch()
    const actions=bindActionCreators(actionCreators,dispatch)
  return (
    <>
    <div className='container'>
    <h2>Add to cart</h2>
    {/* <button className='btn-primary' onClick={()=>{dispatch(actionCreators.depositmoney(100))}}>+</button> */}
    {/* BUY This Item */}
    {/* <button className='btn-primary'onClick={()=>{dispatch(actionCreators.withdrawmoney(100))}}>-</button> */}

    <button className='btn-primary' onClick={()=>{actions.depositmoney(100)}}>+</button>
BUY This Item
<button className='btn-primary'onClick={()=>{actions.withdrawmoney(100)}}>-</button>
    </div>
    </>
  )
}

export default Shop