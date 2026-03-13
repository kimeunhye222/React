
import './App.css'
// 컴포넌트 불러오기
// import 별칭 from '경로'
import MenuBox from './components/MenuBox'

import MemberBox  from './components/MemberBox'
function App() {
  //  컴포넌트 (component)
  //  리액트로 만들어진 앱의 최소 단위
  //  반복되는 코드를 하나로 묶어서 우리는 컴포넌트로 만든다
  //  내가 원하는 코드를 묶어서 '태그화'
  // ★ 반드시 대문자로 시작 => 기존의 html 태그와 구분하기 위함

  let iced = "아이스"
  let hot = "핫"

  let teamName = "핏팜"

  return (
    <>
      <MenuBox name="아메리카노" temp={iced} price='3500'></MenuBox>
      <MenuBox name="카페라떼" temp={hot} price='4000'></MenuBox>
      <MenuBox name="초코라떼" temp={iced} price='5000'></MenuBox>

      <hr/>
         <MemberBox name="김은헤" team={teamName} bloodType='A'></MemberBox>
        <MemberBox name="문병근" team={teamName}bloodType='B'></MemberBox>
        <MemberBox name="임주은" team={teamName}bloodType='B'></MemberBox>
        <MemberBox name="한동한" team={teamName}bloodType='B'></MemberBox>
    </>
    // (실습문제) 팀원을 소개하는 컴포넌트를 생성하자
    // 1. components 폴더에 'MemberBox' 라는 파일을 생성하고 컴포넌트화
    // 2. 본인의 팀원 수대로 해당 컴포넌트를 App에 작성하고
    // 3. props를 통해 각 팀원의 정보를 작성
    //  팀 이름, 팀원 이름, 혈액형
    //  이 때, 팀이름은 teamName 이라는 변수 안에 내용을 저장해서 보내 줄것
    //  다 되신 분들은 '완료' 체크
    // 그 뒤로 디자인은 자유롭게 해서 캡쳐해서 업로드!
  )
  
}


export default App
