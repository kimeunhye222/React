import React from 'react'
import { useSearchParams } from 'react-router-dom'
// useSeachParams : 주소값에 있는 쿼리스트링 데이터 사용 도와주는 기능
// http://localhost:5173/about?data=mm....


const About = () => {

  const [query,setQuery] = useSearchParams();
  console.log(query)
  // query : 쿼리스트링 데이터
  // setQuery : query를 바꿀 수 있는 함수(자주 사용 x)

  return (
    <div>
        <h1>About 페이지</h1>
        {/* get 함수 : 쿼리스트링에 있는 데이터를 꺼내서 사용하겠습니다! */}
        <h3>이전 페이지 클릭 : {query.get('data')}</h3>
    </div>
  )
}

export default About