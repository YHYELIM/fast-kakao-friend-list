import { Touchable, TouchableOpacity, View } from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';

/*
COPY
<Fontisto name="person" size={24} color="black" /> */
//버튼을 클릭했을때 onPress 함수 필요
//버튼 클릭 유무 boolean 필요
//버튼 선택 유무에 따라 아이콘 변경 필요 
const TabButton=({ 
    isSelected, 
    onPress, 
    activeIconName, 
    inactiveIconName, 
    isIconFontisto,
    isIconIonicons,
    isOtherBgColor,


})=>{
    return(
        //터치 가능 
        <TouchableOpacity 
        activeOpacity={1}
        onPress={onPress}
        style={{flex: 1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical: 10,
        
        }}>
            {isIconFontisto && <Fontisto name ={isSelected ?activeIconName : inactiveIconName} size={24} color="black"/>}
            {isIconIonicons && <Ionicons name ={isSelected ? activeIconName : inactiveIconName} size={24} color="black"/>}

        </TouchableOpacity>
    );
};

export default ({selectedTabIdx, setSelectedTabIdx})=>{
    return(
        <View style = {{flexDirection: "row", width:"100%", height: 50, borderTopWidth : 0.5, borderTopColor: "grey"}}>

            <TabButton
        
                isSelected={selectedTabIdx === 0}
                onPress={()=>setSelectedTabIdx(0)}
                activeIconName={"person"}
                inactiveIconName={"persons"}
                isIconFontisto // Fontisto의 모든 아이콘 이름 출력
            />
            <TabButton
            isOtherBgColor
                isSelected={selectedTabIdx ===1}
                onPress={()=>setSelectedTabIdx(1)}
                activeIconName={"chatbubble"}
                inactiveIconName={"chatbubble-outline"}
                isIconIonicons
            />
            <TabButton
                isSelected={selectedTabIdx ===2}
                onPress={()=>setSelectedTabIdx(2)}
                activeIconName={"pricetag"}
                inactiveIconName={"pricetag-outline"}
               isIconIonicons
            />
            <TabButton
            isOtherBgColor
                isSelected={selectedTabIdx ===3}
                onPress={()=>setSelectedTabIdx(3)}
                activeIconName={"add-circle"}
                inactiveIconName={"add-circle-outline"}
                isIconIonicons
            
            />

        </View>
    );
};
