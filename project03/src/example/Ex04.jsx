import React, {useState} from 'react'
import Ex04Box from '../components/Ex04Box'

const Ex04 = () => {

    const [myDice, setMyDice] = useState(1)
    const [comDice, setComDice] = useState(1)
    // 주사위 게임을 해보자!
    // 1.유저가 '던지기' 버튼을 누르면 thowDice 함수 실행
    // 1-1) 두개의 주사위 눈이 랜덤으로 표시 (myDice.cenDice)
    // 1-2) 두개의 주사위 눈을 Ex04Box 로 전달

    // 2. Ex04Box로가서 주사위 눈을 전달 받고 내용을 수정 (props)
    // 3. 아래에 결과를 출력해보자.
    //  내가 더 크면 승리, 내가 더 작으면 패배, 같으면 동점
    //  이 때 내가 원하는 결과가 정확하게 나오지 않아도 괜찮습니다
    // 4. 유저가 초기화버튼을 누르면 다시 주사위는 1:1 로 돌아간다. (resetDice)
    const throwDice = () => {
       setMyDice(parseInt(Math.random()*6)+1)
       setComDice(parseInt(Math.random()*6)+1)

      
    }
    let result = ""
if(myDice > comDice){
  result = "승리!"
}else if(myDice < comDice){
  result = "패배!"
}else{
  result = "무승부!"
}
    
  return (
    <div>
        <h1>주사위게임</h1>
        <button onClick={throwDice}>던지기</button>
        <button onClick={()=> {setMyDice(1); setComDice(1);}}>
            초기화</button>

        <hr/>   
        <div>
            <Ex04Box dice={myDice}/>
            <Ex04Box dice={comDice}/>
        </div>

        <h2>결과 :{result}</h2>

        
    </div>
  )
}

export default Ex04