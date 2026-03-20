import React from 'react'
import { Link,useSearchParams } from 'react-router-dom'

const Home = () => {
    const [query,setQuery]= useSearchParams();

  return (
    <div>
        <h1>HOME 페이지 입니다</h1>
        <h2>{query.get('nick')}</h2>
        <ul>
            <li>
                <Link to='/login'>Login 이동</Link>
            </li>
            <li>
                {/* 비동기 통신으로 주소 변경(컴포넌트만 교체) */}
                <Link to='/join'>Join 이동</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home