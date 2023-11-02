//src/components/Parent.tsx
import React, {memo, useState} from 'react'
type FizzProps = {
    isFizz: boolean
}
//Fizz는 보통의 함수 컴포넌트이다. isFizz의 변화와 무관히
// 부모가 재렌더링되면 Fizz도 재렌더링된다.
const Fizz = (props: FizzProps) => {
    const {isFizz} = props
    console.log(`Fizz 재렌더링 -> isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz': ''}</span>
}

type BuzzProps = {
    isBuzz: boolean
    //props에 onClick을 추가
    onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
    const {isBuzz} = props
    console.log(`Buzz 재렌더링 -> isBuzz=${isBuzz}`)
    return (
        <span>{isBuzz ? 'Buzz': ''}</span>
    )
})

export const Parent = () => {
    const [count, setCount] = useState(1)
    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0
    //이 함수는 Parent가 재렌더링 될 때마다 작성된다.
    const onBuzzClick = () => {
        console.log(`Buzz가 클릭 -> isBuzz=${isBuzz}`)
    }
    console.log(`Parent가 재렌더링 -> count=${count}`)

    return (
        <div>
            <button onClick={() => setCount((c) => c+1)}>+1</button>
            <p>{`현재 카운트: ${count}`}</p>
            <p>
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
            </p>
        </div>
    )
}
export default Parent