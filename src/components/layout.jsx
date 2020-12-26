import React from 'react'
import {connect} from "react-redux";
import {increase, decrease} from "../redux/count/count.actions"
const Layout = ({children, count, onIncrease, onDecrease}) => {
  console.log(count)
  return (
    <div>
      {children}    
      <div>
        <span style={{fontWeight: "bold"}}>Current Number: </span>
        <span style={{color:"red"}}>{count}</span>
      </div> 
      <div>
        <button onClick={onIncrease}>Increase</button>
        <button onClick={onDecrease}>Decrease</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  count : state.count.count
})
const mapDispatchToProps = dispatch => ({
  onIncrease : () => dispatch(increase()) , 
  onDecrease : () => dispatch(decrease())
})

export default connect(mapStateToProps,mapDispatchToProps)(Layout)
