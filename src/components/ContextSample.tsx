// src/components/ContextSample
import React from "react"
//Title을 전달하기 위해 Context 작성
const TitleContext = React.createContext('')

// Title컴포넌트 안에서 Context 값을 참조한다. 실제로 값을 렌더링하는 녀석
const Title = () => {
    // Consumer를 사용해 Context 값을 참조한다. 
    return (
        <TitleContext.Consumer>
        {/* Consumer를 바로 아래 함수로 두고, Context 값을 참조한다*/}
            {(title) => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
        {/*Header에서 Title론느 아무런 데이터를 전달하지 않는다.  */}
        <Title/>
        </div>
    )
}

//Page 컴포넌트 안에서 Context에 값을 전달한다.
const Page = () => {
    const title = 'React Book'
    // Provider를 사용해 Context에 값을 설정한다.
    // Provider 이하의 컴포넌트로부터 값을 참조할 수 있다.
    return (    
        <TitleContext.Provider value={title}>
            <Header/>
        </TitleContext.Provider>
    )
}
export default Page