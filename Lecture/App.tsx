// JSX = JavaScript + XML
// JSX 구문이 있는 타입스크립트 코드의 확장자는 .tsx
import React from 'react'; // JSX 구문이 있는 코드를 사용하기 위해 필요함
import {SafeAreaView, Text} from 'react-native'; // 사용할 컴포넌트 추가

export default function App() {
  const text = [<Text>Hello</Text>, <Text>JSX</Text>, <Text>world!</Text>]; // 배열
  // JSX는 XML 마크업 구조에 {}를 사용하여 자바스크립트 코드를 감쌀 수 있음
  const message = <SafeAreaView>{text}</SafeAreaView>;
  return message;
}
