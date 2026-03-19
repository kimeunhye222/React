import axios from 'axios'
import React, { useState } from 'react'

// axios : 비동기 통신 라이브러리

const Ex01 = () => {

    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getData(); // 화면이 켜지자마자 실행!
    }, []);
    const getData = () =>{
        axios({
            url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=59f23f0b092d0666c8d263db49886854&targetDt=20120101', 
            //  어디랑 통신할껀지?
            // method : 'get',
            // 어떤 방법으로 통신할껀지?
            // data:{

            // } 
        
        })
 
        // 통신 성공시 실행시킬 로직
        .then((res)=>{
            console.log('통신성공')
            console.log(res)
            setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList);
            console.log(res.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)
        })

    }
  return (
    <div>
        <h1>axios 영화데이터</h1>
        <button onClick={getData}>데이터가져오기</button>
        <hr/>
       <table border="1" >
  <thead>
    <tr>
      <th>영화 순위</th>
      <th>제목</th>
      <th>개봉일</th>
    </tr>
  </thead>
  <tbody>
    {movieList.map((movie) => (
      <tr key={movie.movieCd}>
        <td>{movie.rank}</td>
        <td>{movie.movieNm}</td>
        <td>{movie.openDt}</td>
      </tr>
    ))}
  </tbody>
</table>
       
        </div>
  )
}

export default Ex01