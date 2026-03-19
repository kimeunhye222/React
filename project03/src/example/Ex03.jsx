import React,{useState, useEffect} from 'react'

const Ex03 = () => {
  

    // 실습) 랜덤한 숫자를 맞추는 랜덤게임을 만들어보자.
    // 1. 우리에게 필요한 state들을 미리 선언 (랜덤한 숫자 ranNum. 내가 선택한 숫자 myNum)
    // 2. 버튼을 누르면 ranNum에는 1~3중 랜덤한 값이 세팅되도록 할 것
    // 3.             myNum에는 내가 누른 그 숫자가 세팅되도록 할 것 (참고 : e.target.innerText)
    // 4. 랜덤한 수와 내가 누른 숫자가 같다면 '정답입니다'를 출력하고.
    //    다르다면 '땡..'을 출력
    // 주의사항! if문 사용x, 삼항연산자를 사용해서 return 문안에서 비교
    //      삼항연산자 코드 (React - project01 - src -App.jsx 참고!)

    // 다 되신분들은 정답입니다~ 상황을 캡쳐해서 업로드!
        const [ranNum, setRanNum] = useState(0)
        const [myNum, setMyNum] = useState(0)
        const [count, setCount] = useState(0)

        useEffect(()=>{
        if(count === 3){
            alert('목표 도달!')
        }
       },[count])


    const gamestart = (e)=>{
        const random = parseInt(Math.random() * 3) + 1;
        const my = parseInt(e.target.innerText);

        console.log('게임 시작!')
        console.log('랜덤 숫자', random)
        console.log('내가 누른 숫자는?', e.target.innerText)

        setRanNum(random);
        setMyNum(my);

         if(random === my){
            setCount(prev => prev + 1)

       
        }

       
         
        
      
    }
  return (
    <div>
        <h3>랜덤게임</h3>
        <button onClick={gamestart}>1</button>
        <button onClick={gamestart}>2</button>
        <button onClick={gamestart}>3</button>
        <hr/>
        <p>내가 입력한 숫자 : {myNum}</p>
        <p>컴퓨터가 입력한 숫자 : {ranNum}</p>
        <h3>
            {myNum == ranNum ? '정답입니다~' : '땡!'}
            {/* 1. 정답을 맞힐때마다 정답횟수 1증가 
                2. 정답횟수가 3이 된다면 알림창으로 '목표 도달' 출력 */}
        </h3>
        <h3>
            정답 횟수 : {count}
        </h3>
    </div>
  )
}

export default Ex03