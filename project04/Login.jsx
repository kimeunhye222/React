import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [id,setId] = useState('')
  const [pw,setPw] = useState('')

  const handleLogin = () => {
    console.log('아이디:',id)
    console.log('비밀번호:',pw)

  }
  // ID : smhrd, PW : 123
  // 일때만 Home 페이지로 이동!
  // 둘중 하나라도 다르다면 alter('아이디 비밀번호 다시입력')출력
  
  return (
    <div>
      <h1>즐거운 React 로그인</h1>
      ID : <input></input>
      <br></br>
      PW : <input></input>
      <button>로그인</button>
    
    </div>
  )
}

export default Login