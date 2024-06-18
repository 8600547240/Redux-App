import React, {useRef} from 'react'
import { store } from './store';
export const A = () => {
  const nameRef = useRef();
  const fnClick = () => {
      const name = nameRef.current.value;
      store.dispatch({
        type: 'NAME_UPDATE' /*object and type property is mandatory */,
        payload: name
      })
  }
  return (
    <div>
       <h1>A</h1>
       <p>
            Name: <input ref={nameRef} />
       </p>
       <p>
            <input onClick={fnClick} type="button" value="submit" />
       </p>
    </div>
  )
}

  
