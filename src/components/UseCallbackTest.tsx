// src/components/UseCallbackTest.tsx
import React, {useState, useCallback} from 'react'

type ButtonProps = {
    onClick: () => void
}

// DecrementButton은 보통의 함수 컴포넌트로 표시
const DecrementButton = (props: ButtonProps) => {
    const {onClick} = props
    console.log('DecrementButton 재렌더링')
    return <button onClick={onClick}>Decrement</button>
}
// IncrementButton은 메모이제이션 함수 컴포넌트로 표시
const IncrementButton = React.memo((props: ButtonProps) => {
    const {onClick} = props
    console.log('IncrementButton 재렌더링')
    return <button onClick={onClick}>Increment</button>
})
// DoubleButton은 메모이제이션 함수 컴포넌트로 표시
const DoubleButton = React.memo((props: ButtonProps) => {
    const {onClick} = props
    console.log('DoubleButton 재렌더링')
    return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
    const [count, setCount] = useState(0)

    const decrement = () => { setCount((c) => c-1) }
    const increment = () => { setCount((c) => c+1) }

    // useCallback을 사용해 함수 메모이제이션
    const double = useCallback(() => {
        setCount((c) => c * 2)
        // 두 번째 인수는 빈 배열이므로 useCallback은 항상 같은 함수 반환
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            {/* 일반 컴포넌트에 함수 전달 */}
            <DecrementButton onClick={decrement}/>
            {/* 메모이제이션 된 컴포넌트에 함수 전달 */}
            <IncrementButton onClick={increment}/>
            {/* 메모이제이션 된 컴포넌트에 메모이제이션된 함수 전달 */}
            <DoubleButton onClick={double}/>
        </div>
    )
}
export default Parent