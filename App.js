import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform,  StyleSheet, Text, TextComponent, View } from 'react-native';
import Header from './src/Header';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from './src/Profile';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Division from './src/Division';
import FriendSection from './src/FriendSection';
import FriendList from './src/FriendList';
import { useState } from 'react';
import TabBar from './src/TabBar';


//상단바 높이 게산 : iphone 상단 노치 영역 포함
//히단 안전 영역 높이 계산  
const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

//위 아래 높이 확인 콘솔 
// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`);




//상단, 좌우 가장자리에서 안전 영역 적용 
//SafeAreaProvider : 안전 영역 컨텍스트 제공 
export default function App() {
  
  const [isOpened, setIsOpened]= useState(true);
  //기존 state가 열려있는것으로 세팅 
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  //0,1,2,3 으로 세팅하면 각각 탭이 선택된 인덱스를 저장 
  //탭바 입장에서는 selectedTabIdx,  selectedTabIdx 둘다 알고 있어야함 


  const onPressArrow =()=>{
    //console.log('clicked arrow');
    setIsOpened(!isOpened);// 현재 열린 값에서 반대값으로 세팅 
  }

  const ItemSeparatorComponent = ()=><Margin height ={13}/>
  
  const renderItem =({item})=> (
    <Profile
      uri={item.uri}
      name={item.name}
      introduction={item.introduction} 
      isMe={false}
    />
  )
  const ListHeaderComponent =()=> (
    <View style={{backgroundColor:"white"}}>
      <Header/>
     <Margin height={10}/>
     {/*Margin 높이 10 넘김 */}
     <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15}/>

      <Division/>
      <Margin height={12}/>
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}  
      />
      <Margin height ={5}/>

    </View>
  )

  const ListFooterComponent =()=> <Margin height ={10}/>

  return (
    <View style={styles.container}>
      

      <FlatList 
        data={isOpened? friendProfiles : []} //isOpened True -> friendProfiles 그렇지 않으면 배열을 0 으로 만든다
        contentContainerStyle={{ paddingHorizontal:15}}
        keyExtractor={(_, index) => index}
        stickyHeaderIndices={[0]}//고정할 Header index 
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false} //스크롤 막대 안보이게 


      />
      <TabBar
        selectedTabIdx = {selectedTabIdx}
        setSelectedTabIdx = {setSelectedTabIdx}
      />
      

    </View>
  );
};

  //스크롤 뷰 로 설계 
  // return (
  //   <SafeAreaProvider>
  //   <SafeAreaView style={styles.container} edges={['top','right', 'left','bottom']} >
      
  //     <Header/>
  //     <Margin height={10}/>
  //     {/*Margin 높이 10 넘김 */}
  //     <Profile
  //       uri={myProfile.uri}
  //       name={myProfile.name}
  //       introduction={myProfile.introduction}
  //     />
  //     <Margin height={15}/>

  //     <Division/>
  //     <Margin height={12}/>
  //     <FriendSection
  //       friendProfileLen={friendProfiles.length}
  //       onPressArrow={onPressArrow}
  //       isOpened={isOpened}  
  //     />

  //     <FriendList
  //       data={friendProfiles}
  //       isOpened={isOpened}
  //     />
      
  //     <TabBar
  //       selectedTabIdx = {selectedTabIdx}
  //       setSelectedTabIdx = {setSelectedTabIdx}
    
  //     />
        

  //   </SafeAreaView>


    
  //   </SafeAreaProvider>  
  // );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    paddingHorizontal:15, 
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});


