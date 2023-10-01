import { View, Text, StyleSheet, Button } from "react-native";
import router from "../../routers";
function Home({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      {router.map((r) => {
        if (r.name !== "Home")
          return (
            <Button
              title={r.options.title}
              onPress={() => navigation.navigate(r.name)}
            />
          );
      })}
    </View>
  );
}

export default Home;
