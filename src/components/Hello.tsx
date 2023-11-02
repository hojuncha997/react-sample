// src/components/Hello.tsx

const Hello = () => {
    // 클릭 시 호출되는 함수
    const onClick = () => {
        alert('hello')
    }

    const text = 'Hello, React'

    //텍스트를 자식으로 갖는 div 요소를 반환한다
    return (
        //div의 onClick 시의 콜백 함수를 반환한다.
        <div onClick={onClick}>
            {text}

        </div>
    )
}

//외부로부터 Hello를 읽을 수 있도록 export 한다.
export default Hello