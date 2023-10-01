import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./Bai08Styles";
import { ImageBai8 } from "../Image/ImageBai8";
import {IconMethodFB, IconMethodUser, IconMethodWifi, IconPassword, IconUser} from "../Icons/IconBai8";
function Bai08() {
  return (
    <View style={styles.container}>
      <View style={styles.wpIMG}>
        <ImageBai8 />
      </View>
      <View style={styles.InputGroup}>
      <View style={styles.IconInput}>
          <IconUser />
        </View>
        <TextInput
          style={styles.InputText}
          placeholder="Please input username"
        />
     
      </View>
      <View style={styles.InputGroup}>
      <View style={styles.IconInput}>
          <IconPassword />
        </View>
        <TextInput
          style={styles.InputText}
          placeholder="Please input password"
        />
     
      </View>

      <Button title="Login" />
       <View style={styles.actions}>
        <Text style={styles.TextAction}>Register</Text>
        <Text style={styles.TextAction}>Forget password</Text>

        </View>

        <Text style={{marginTop:20,marginBottom:20,textAlign:'center'}}>
            Orther Login Methods
        </Text>
        <View style={styles.methods}>
          
             
               <IconMethodUser/>
               <IconMethodWifi/>
              <View style={{width:74, height:74,backgroundColor:'#3A579C',alignItems:'center',justifyContent:'center'}}>
              <IconMethodFB/>
              </View>
        </View>
    </View>
  );
}

export default Bai08;
