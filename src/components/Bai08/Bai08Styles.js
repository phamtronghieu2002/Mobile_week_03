
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
container: {
 flex:1,
 justifyContent:'center',
 paddingLeft:30,
 paddingRight:30,
 backgroundColor:'#fff',

},
wpIMG: {
   alignItems:'center',
   marginBottom:30
},
InputGroup: {
  display:'flex',
  flexDirection:'row',
  gap:1,
  alignItems:'center',
  marginBottom:52,
  borderBottomColor:'#C4C4C4',
  borderBottomWidth:1,
  paddingBottom:5
},
InputText: {
  color:'#C4C4C4',
  paddingLeft:15,
  flex:1,
  outlineStyle: 'none',
  fontSize:18
},
IconInput: {
 
},
actions: {
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:20
} ,
TextAction: {
  fontSize:18,
  fontWeight:400
} ,
methods:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
}
})