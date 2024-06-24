import { View, Text, StyleSheet } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen"; 
import Ionicons from '@expo/vector-icons/Ionicons';

//각 아이콘 마다 padding 적용 
//paddingHorizontal: 각 요소의 왼쪽, 오른쪽 동일 크기 padding 적용 
const IconButton = (props)=>{
return(
    <View style={{paddingHorizontal:6}}>
       <Ionicons name={props.name} size={24} color="black" />
    </View>
)
}

//paddingVertical : 위아래 동시에 padding 적용

export default ()=>{
    return(
        <View style = {{flexDirection: "row", justifyContent:"space-between", paddingVertical: 10, backgroundColor:"white"
        }}>
            <Text style={{fontSize:22, fontWeight:"bold"}}>친구</Text>
            
            <View>
            <View style={{flexDirection: "row"}}>
                <IconButton name = "search-outline"/>
                <IconButton name = "person-add-outline"/>
                <IconButton name = "musical-notes-outline"/>
                <IconButton name = "settings-outline"/>
            </View>
            </View>
         
        </View>
    )
}

