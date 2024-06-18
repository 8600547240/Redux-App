import React from 'react'
import { connect } from 'react-redux'
let C = (props) => { 
  return (
    <div>
       <h1>C</h1>
       <h3>Name: {props.name}</h3>
       <h3>Location: {props.loc}</h3>
    </div>
  )
}

C = connect(    
    (state) => {
      return {
       name: state.appReducer.name,
       loc: state.appReducer.loc
      }
    },
    (dispatch) => {

    }
 )(C)
 
export default C;
