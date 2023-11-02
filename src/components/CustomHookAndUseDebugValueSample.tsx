// src/components/CustomHookAndUseDebugValueSample
import React, {useState, useCallback, useDebugValue} from 'react'

// 커스텀 훅 정의: input용으로 콜백과 현재의 입력 내용을 모은 훅
const useInput = () => {
    // useState: 현재 입력값을 저장
    const [state, setState] = useState('')
    // input이 변화하면 훅 내부의 상태를 업데이트
    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value)
    }, [])

    // useDebugValue 훅 사용: 브라우저 개발자 도구 Components 탭 확인
    useDebugValue(`Input: ${state}`)

    // 현재 입력 내용과 콜백 함수만 반환
    return [state, onChange] as const
}

const Input = () => {
    const [text, onChangeText] = useInput()
    return (
        <div>
            <input type="text" value={text} onChange={onChangeText}/>
            <p>Input: {text}</p>
        </div>
    )
}
export default Input