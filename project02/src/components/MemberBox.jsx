function MemberBox(props) {
    return (
        <div style={{border: 'solid blue', margin : '2%',padding:'10ox'}}>
            <h3>팀명 : {props.team}</h3>
            <p>이름 : {props.name}</p>
            <p>혈액형 : {props.bloodType}</p>
        </div>
    )
}
export default MemberBox;