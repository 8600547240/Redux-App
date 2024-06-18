import React, {useRef} from 'react'
import { store } from './store';
export const B = () => {
  const locRef = useRef();
  const fnClick = () => {
      const loc = locRef.current.value;
      store.dispatch({
          type: 'LOC_UPDATE',
          payload: loc
      })
  }
  return (
    <div>
       <h1>B</h1>
       <p>
            Location: <input ref={locRef}/>
       </p>
       <p>
            <input onClick={fnClick} type="button" value="submit" />
       </p>
    </div>
  )
}

  
