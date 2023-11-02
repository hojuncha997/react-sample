//src/components/Clock.tsx
import {useState, useEffect, useLayoutEffect} from 'react'

//타이머가 호출된느 주기를 1초로 한다.
const UPDATE_CYCLE = 1000

//로컬 스토리지에서 사용하는 키
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    KR = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.KR:
            return Locale.KR
        default:
            return Locale.US
    }
}

const Clock = () => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    // useEffect 훅 사용: 타이머를 설정하기 위한 부가 작용
    useEffect(() => {
        // 타이머 설정
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        // 클린업 함수를 전달하고 언마운트 시에 타이머 해제
        return () => {
            clearInterval(timer)
        }
        //초기 렌더링 시에만 실행
    }, [])

    // 로컬 스토리지에서 값을 로딩
    // useEffect(() => {
    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            setLocale(getLocaleFromString(savedLocale))
        }
    }, [])

    // 로케일이 바뀌었을 때 로컬 스토리지에 값을 저장
    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
        //의존 배열에 로케일을 전달하고, 로케일이 변할 때마다 실행
    })

    return (
        <div>
            <p>
                <span id="current-time-label">현재 시각</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                <select
                    value={locale}
                    onChange={(e) => 
                        setLocale(getLocaleFromString(e.target.value))}
                >
                    <option value="en-US">en-US</option>
                    <option value="ko-KR">ko-KR</option>
                </select>
            </p>
        </div>
    )
}
export default Clock