import { ScrollView, View } from "react-native"
import Profile from "./Profile"
import { getBottomSpace } from "react-native-iphone-x-helper";
import Margin from "./Margin";

const bottomSpace = getBottomSpace();

//반복 컴포넌트 돌리는 법 
//1. map 함수 사용
//하나씩 순차적으로 순회 후 배열의 길이 만큼 리턴
 export default(props)=>{
    return(
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:bottomSpace}}>
            {/*첫번째 오브젝트
            uri: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
            name: "김민호",
            introduction: "Minho Kim",
            */}
            {/*각 아이템의 키에는 인덱스를 넣어줌 */}
          
            {props.data.map((item,index) => (
                  <View>
                <Profile
                key={index}
                uri={item.uri}
                name={item.name}
                introduction={item.introduction}  
                />
                <Margin height={13}/>
                 </View>
                 
            ))}
           
            
        </ScrollView>
    )
}