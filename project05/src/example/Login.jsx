import React from 'react'
import { useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Login = () => {

  // ID : smhrd,pw:123
  // 일때만 Home 페이지로 이동!
  // 둘중 하나라도 다르다면 alter('아아디 비밀번호 다시입력')

  const inputIDRef = useRef();
  const inputPWRef = useRef();
  const nav = useNavigate();

  const [query,setQuery] = useSearchParams();

  const tryLogin = () => {

    let inputId = inputIDRef.current.value
    let inputPw = inputPWRef.current.value

    let joinId = query.get('id')
    let joinPw = query.get('pw')

    if(inputId == joinId && inputPw == joinPw){
      nav('/?nick='+query.get('nick'))   // 또는 '/home'
    } else {
      alert('아이디 비밀번호 다시입력')
    }
  }

  return (
    <div>
      <h1>Login 페이지</h1>

      ID : <input ref={inputIDRef} /><br />
      PW : <input type="password" ref={inputPWRef} /><br />

      <button onClick={tryLogin}>로그인</button>
    
    </div>
  )
}

export default Login