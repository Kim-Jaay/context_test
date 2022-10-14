import React, { useContext, useState } from 'react'
import { createContext } from 'react'
const BABA = createContext();
console.log(BABA)

// createContext로 Context 생성
// 이름.Provider 로 하위 구조를 감싼다
// value값 지정
// useContext(이름) 으로 불러온다

const Thedeepsub = () => {
  const { state, setState } = useContext(BABA);

  return (
    <>
      제이
      {state}
      <button onClick={() => setState('지니어스... 띠용')}>지니어스</button>
    </>
  )
}

const Deepsub = () => {
  return (
    <><Thedeepsub /></>
  )
}

const Sub = () => {

  return (
    <>
      <Deepsub />
    </>
  )
}


const App = () => {
  const [state, setState] = useState('바보');
  return (
    <div>
      <BABA.Provider value={{ state, setState }}>
        <Sub />
      </BABA.Provider>
    </div>
  )
}

export default App