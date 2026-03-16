import React, {useState} from 'react'
import srcPic from '../img/pic jpeg.jpg'

const Ex02 = () => {


    // React에서 이미지 경로를 설정하는 방법 3가지
    // 1. src안에 외부주소를 입력하기
    // 2. src 폴더 사용하기
    // 3. public 폴더 사용하기
    //      - public 폴더는 서버와 연동이 되어있기 때문에 그 폴더에 들어가있기만해도
    //        본인의 절대주소가 생긴다 => src안에 주소를 입력하면 됨!
    //        앞에 주소는 생략 가능

    // 예제) 좋아요 구현을 해보자.
    // 1. state 선언 (하트를 담당하는 emoji, 숫자를 담당하는 num)
    // 2. 함수 선언 (handleLike)  
    // 3. 비어있는 하트 클릭 시, 'handleLike' 함수 실행 
    // 4. handleLike 함수 실행 시, 만약 하트가 비워져있다면 채워주고 ♥, 0을 1로 변경
    // 5. handleLike 함수 실행 시, 만약 하트가 채워져있다면 비워주고 ♡, 1을 0으로 변경 
    // 다 된 사람들은 좋아요가 채워진채로 캡쳐해서 단톡방에 업로드!

  
    const [emoji, setEmoji] = useState('♡')
    const [num, setNum] = useState(0)

    const handleLike = () => {
        if (emoji === '♡') {
            setEmoji('♥')
            setNum(1)
        }else {
            setEmoji('♡')
            setNum(0)
        }
    }


  return (
    <div>
        {/* <img src={srcPic} width= '300px'></img> */}
        <img src = "http://localhost:5173/img/pic%20jpeg.jpg" width='300px'></img>

        <p>
            <span onClick={handleLike} style={{cursor: 'pointer',fontSize :'30px'}}>
                {emoji}
            </span>
            {" "}
            <span>좋아요 {num}개</span>
        </p>
    </div>
  )
}

export default Ex02