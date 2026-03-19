import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
//useRef : 태그 참조 변수를 만들 수 있는 기능 

const Ex02 = () => {
    const [movieData, setMovieData] = useState([])
    const [inputDay ,setInputDay] = useState('')

    const inputRef = useRef();

    useEffect(()=>{
        getData('20200101');
    },[])

    const getData = (movieDay) =>{
       axios({
        url:'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f2c6810f4dc43bc07509716d3ca4e0df&targetDt='+movieDay,
       })
       .then((res)=>{
        console.log(res)
        setMovieData(res.data.boxOfficeResult.dailyBoxOfficeList)
       })
    }

    const searchDay = () =>{
    
        // input태그에 적은 날짜 가져오기
        // inputRef.current : inputRef변수가 가르키고 있는 태그를 가져오겠다
        // inputRef.current.value
        // inputDay

        getData(inputRef.current.value)


        // document.querySelector('input').value

    }

  return (
    <div>
        <h1>axios 실습2</h1>
        
        <table>
            <tr>
                <td>순위</td>
                <td>제목</td>
                <td>개봉일</td>
            </tr>

            {movieData.map(item=>
                <tr>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                </tr>
            )}
        </table>

            {/* 값이 바뀔때마다 setInputDay실행
                e.target : 이벤트를 발생시킨 주체(input 태그)
                e.target.value : input태그에 적힌 값
            */}
            {/* 
                ref={inputRef} 
                -> inputRef 라는 변수와 input태그를 연결해줬다
            */}
        <input  ref={inputRef} onChange={(e)=>setInputDay(e.target.value)} ></input>
        <button onClick={searchDay}>검색</button>
    </div>
  )
}

export default Ex02