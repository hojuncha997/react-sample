//src/components/CounterSample.tsx
import {useReducer} from 'react'

//reducer가 받을 action 타입을 정의한다.
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

//현재 상태와 action에 기반해 다음 상태를 반환한다.
const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case 'INCREMENT':
            return currentCount + 1
        case 'DECREMENT':
            return currentCount - 1
        case 'DOUBLE':
            return currentCount * 2
        case 'RESET':
            return 0
        default:
            return currentCount
    }
}

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const {initialValue} = props
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/* dispatch함수에 action을 전달해 상태를 업데이트한다 */}
            <button onClick={() => dispatch('DECREMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}
export default Counter