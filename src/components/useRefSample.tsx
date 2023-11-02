// src/components/useRefSample.tsx
import React, {useState, useRef} from 'react'

const sleep = (ms: number) => 
new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000

const ImageUploader = () => {
    // 숨겨진 input요소에 접근하기 위한 ref
    const inputImageRef = useRef<HTMLInputElement | null>(null)
    // 선택된 파일 데이터를 저장하는 ref
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<string | null>('')

    // '이미지 업로드'라는 텍스트가 클릭됐을 때의 콜백
    const onClickText = () => {
        if (inputImageRef.current !== null) {
            // input의 DOM에 접근해서, 클릭 이벤트를 트리거한다.
            inputImageRef.current.click()
        }
    }

    // 파일이 선택된 이후에 호출되는 콜백
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files !== null && files.length > 0) {
            // fileRef.current에 값을 저장한다.
            // fileRef.current가 변화해도 재렌더링이 발생하지 않는다.
            fileRef.current = files[0]
        }
    }
    // 업로드 버튼이 클릭됐을 때 호출되는 콜백
    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            // 보통은 여기에서 API를 호출하고 파일을 서버에 업로드 한다.
            // 여기에서는 의도적으로 일정 시간 기다린다.
            await sleep(UPLOAD_DELAY)
            setMessage(`${fileRef.current?.name} has been uploaded`)
        }
    }

    return (
        <div>
            <p style={{textDecoration: 'underline'}} onClick={onClickText}>
                이미지 업로드
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept='image/*'
                onChange={onChangeImage}
                style={{visibility: 'hidden'}}
            />
            <br />
            <button onClick={onClickUpload}>업로드 한다</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}
export default ImageUploader