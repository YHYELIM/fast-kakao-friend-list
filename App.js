import { StatusBar } from 'expo-status-bar';
import { Platform,  StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

//상단바 높이 게산 : iphone 상단 노치 영역 포함
//히단 안전 영역 높이 계산  
const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

//위 아래 높이 확인 콘솔 
console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);

//상단, 좌우 가장자리에서 안전 영역 적용 
//SafeAreaProvider : 안전 영역 컨텍스트 제공 
export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex: 1 }} edges={['top','right', 'left']} >
      <Header/>
    </SafeAreaView>
    
    </SafeAreaProvider>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});

