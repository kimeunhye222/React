import React from 'react'

const Ex06 = () => {
    // filter 함수 : 자바스크립트 배열의 내장함수
    //               주어진 함수의 테스트를 통과하는 요소를 모아서
    //               true면 유지, fals면 버리고 새로운 배열로 반환

    let numList =[1,2,3,4,5]

    let evenList = numList.filter(item => item%2 === 0)
    console.log('evenList',evenList)

     let evenList2 = numList.map(item => item%2 === 0)
    console.log('evenList',evenList2)

    let students = [
      {name : '홍길동', age : 20, bloodType : 'A'},
      {name : '둘리', age : 10, bloodType : 'B'},
      {name : '뽀로로', age : 5, bloodType : 'AB'},
      {name : '나루토', age : 35, bloodType : 'O'},
      {name : '라이토', age : 17, bloodType : 'A'},
    ]
  
    // Q. students 배열에서 나이가 10살보다 많은 사람들만 표로 출력
    //  filter -> map
    let adult = students.filter(item => item.age > 19)
    console.log('adult',adult)
    
    // 예제!! students에서 혈액형이 A인 사람들만 모아서 표로 만들어보자
    //         표 디자인은 자유~
    // bloodType이 'A'인 데이터만 남기기!
let aTypeStudents = students.filter(item => item.bloodType === 'A')

  return (
    <div>
        <h3>아래 목록 인원은 음주와 흡연이 가능합니다.</h3>
        {adult.map(item => <p key={item.name}>{item.name}</p>)}

        <h3> 혈액형이 A형인 학생 명단 </h3>
        <table border={1} style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
            <tr bgcolor="skyblue">
                <th style={{ padding: '5px 15px' }}>이름</th>
                <th style={{ padding: '5px 15px' }}>나이</th>
                <th style={{ padding: '5px 15px' }}>혈액형</th>
            </tr>
            
            {/* 3. A형 학생들만 map으로 하나씩 그려주기! */}
            {aTypeStudents.map((item, index) => (
                <tr key={index}>
                    <td style={{ padding: '5px' }}>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.bloodType}</td>
                </tr>
            ))}
        </table>
        

    </div>
  )
}

export default Ex06