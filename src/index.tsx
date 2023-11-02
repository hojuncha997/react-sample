import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hello from './components/Hello'
import Name from './components/Name'
import Message from './components/Message'
import ContextSample from './components/ContextSample'
import ContainerSample from './components/ContainerSample'
import Counter from './components/CounterSample'
import UseMemoSample from './components/UseMemoSample'
import Clock from './components/Clock'
// import Parent from './components/useContextSample'
import ImageUploader from './components/useRefSample'
import Parent from './components/UseImperativeHandleSample'
import Input from './components/CustomHookAndUseDebugValueSample'
// import {Parent} from './components/Parent'
// import {Parent} from './components/UseCallbackTest'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Input></Input>
  // <ImageUploader></ImageUploader>
  // <Parent></Parent>
  // <Clock></Clock>
  // <UseMemoSample></UseMemoSample>
  // <Parent/>

  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <h1>제목</h1> */}
  //   {/* <Hello/> */}
  //   {/* <Name/> */}
  //   {/* <Message/> */}
  //   {/* <ContainerSample/> */}
  //   {/* <ContextSample/> */}
  //   {/* <Counter initialValue={0}/> */}
  //   <Parent/>
  // </React.StrictMode>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
