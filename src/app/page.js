"use client"
import { A } from './A'
import { B } from './B'
import  C  from './C'
import { store } from './store'
import { Provider } from 'react-redux'
export default function App() {
  return (
     <div>
      <Provider store={store}>
       <A />
       <B />
       <C />
       </Provider>
     </div>
  )
}
