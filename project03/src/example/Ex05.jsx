import React from 'react'
import Ex05Box from '../components/Ex05Box'
import Ex05LunchBox from '../components/Ex05LunchBox'

const Ex05 = () => {

    // map 함수? JS에 내장되어있는 배열함수 
    //          배열 안에서 내가 원하는 규칙에 따라 새로운 배열을 생성한다. 
    // * 사용 방법 : 배열이름.map(규칙콜백함수)

    let numList = [1,2,3,4,5]
    console.log('numList', numList)

    let doubledList = numList.map(item => item*2)
    console.log('doubledList', doubledList)

    let numText = numList.map(item => <button key={item}>{item}</button>)
    console.log('numText', numText)

    // 반복되는 컴포넌트 중, 고정되어야하는 부분과 바뀔 부분을 인지 
    //  - 바뀔부분은 선생님들의 이름! => 배열화 
    let trList = ['강규남', '선영표', '임다이', '채수민']
    let renderTr = trList.map(item => <Ex05Box key={item} tr={item}></Ex05Box>)

    // 실습 
    let lunchList = ['로제엽떡', '닭발', '치즈오븐스파게티', '봄동비빔밥']
    let renderLunch = lunchList.map(item => <Ex05LunchBox lunch={item} key={item}></Ex05LunchBox>)

    // 보통은 배열 안에 객체가 들어있는 경우 map을 활용하기 좋다 ★
    let students = [
      {name : '홍길동', age : 20, bloodType : 'A'},
      {name : '둘리', age : 10, bloodType : 'B'},
      {name : '뽀로로', age : 5, bloodType : 'AB'},
      {name : '나루토', age : 35, bloodType : 'O'},
      {name : '라이토', age : 17, bloodType : 'A'},
    ]

    console.log('students', students)

    // 해당 배열안에 이름만 꺼내서 새로 배열로 만들어주고싶다면? 
    let nameList = students.map(item => item.name)
    console.log('nameList', nameList)



  return (
    <div>
        <p>numList {numList}</p>
        <p>numText {numText}</p>
        {renderTr}
        {renderLunch}
        <table border={1}>
          <tbody>
            <tr bgcolor="pink">
              <th>이름</th>
              <th>나이</th>
              <th>혈액형</th>
            </tr>

            {/* 반복되는 내용을 map함수로 렌더링 */}
            {students.map(item => 
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.bloodType}</td>
              </tr>
            )}
            </tbody>
        </table>
    </div>
  )
}

export default Ex05