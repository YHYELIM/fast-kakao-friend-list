import { View, Image, Text } from "react-native"
import Margin from "./Margin"


export default({uri, name, introduction, isMe})=>{
    const size = isMe? 50: 40;
    return(
        
    <View style={{flexDirection: "row", backgroundColor:"white"}}>
        <Image source={{uri}} style={{width: size, height:size, borderRadius: size*0.4}}/>
        <View style={{justifyContent:"center", marginLeft:10}}>
            <Text style={{fontWeight: isMe ? "bold": undefined, fontSize: isMe ? 16 : 15}}>{name}</Text>
            {!!introduction && (
          <View>
            <View style={{ height: isMe ? 6 : 2 }} />
            <Text style={{ fontSize: 12, color: 'grey' }}>{introduction}</Text>
          </View>
        )}
    </View>
    </View>
    )

}