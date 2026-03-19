import React, { useState , useEffect } from 'react'
import Ex04Box from '../components/Ex04Box'

const Ex04 = () => {


    // 주사위 게임을 해보자! 
    // 1. 유저가 '던지기' 버튼을 누르면 throwDice 함수 실행 
    // 1-1) 두개의 주사위 눈이 랜덤으로 표시 (myDice, comDice)
    // 1-2) 두개의 주사위 눈을 Ex04Box 로 전달 

    // 2. Ex04Box로가서 주사위 눈을 전달 받고 내용을 수정 (props)
    // 3.아래에 결과를 출력해보자. 
    //  내가 더 크면 승리, 내가 더 작으면 패배, 같으면 동점 
    //  ※ 이 때, 내가 원하는 결과가 정확하게 나오지 않아도 괜찮습니다 
    // 4. 유저가 초기화버튼을 누르면 다시 주사위는 1-1 로 돌아간다. (resetDice)

    const [myDice, setMyDice] = useState(1)
    const [comDice, setComDice] = useState(1)

    const [myScore , setMyScore] = useState(0)
    const [comScore, setComScore] = useState(0)

    const [result, setResult] = useState('게임 전')

    /** random한 숫자를 뽑아내는 자판기 */
    const makeRandom= ()=>{
      return parseInt(Math.random()*6)+1
    }

    // useEffect(()=>{
    //   if(myDice>comDice){
    //     setMyScore(myScore+1)       
    //   }
    //   else if(comDice>myDice){
    //     setComScore(comScore+1)
    //   }
    // },[myDice,comDice])


    useEffect(()=>{
      if(myScore==10){
        setResult('User Win')       
      }
      else if(comScore == 10){
        setResult('Com Win')        
      }
    }, [myScore, comScore])

    const throwDice = ()=>{
      console.log('던지기', makeRandom())

      let myRan = makeRandom()
      let comRan = makeRandom()
      setMyDice(myRan)
      setComDice(comRan)

      if(myRan>comRan){
        setMyScore(myScore+1)
      }
      else if(comRan>myRan){
        setComScore(comScore+1)
      }


      if(myRan === comRan){
        setResult('동점')
      } else if (myRan > comRan){
        setResult('승리')
      } else {
        setResult('패배..')
      }

    }
    
    const resetDice = ()=>{
        setMyDice(1)
        setComDice(1)
    }

    const myStyle={
      position: 'absolute',
      left: '50px',
      top: '128px',
    }

  return (
    <div>
        <h1>주사위게임</h1>
        <button onClick={throwDice}>던지기</button>
        <button onClick={resetDice}>초기화</button>

        <hr/>   
        {/* 
          1. 던지기 버튼 클릭시 더 높은 주사위에 따라 score 증가
          2. score값이 10에 먼저 도달하는 결과를 출력
          ->  "User Win"  or "Com Win"
        */}
        <div style={{display : 'flex'}}>

            <Ex04Box name="나" dice={myDice}/>
            <h2 style={{position: 'absolute',
                        left: '50px',
                        top: '128px',}}>{myScore}</h2>

            <Ex04Box name="컴퓨터" dice={comDice} />
            <h2 style={{position: 'absolute',
                        left: '320px',
                        top: '128px',}}>{comScore}</h2>
        </div>

        <h2>{result}</h2>
        
    </div>
  )
}

export default Ex04