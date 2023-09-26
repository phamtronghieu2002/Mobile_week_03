import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

import Bai1 from './src/Bai01/Bai1.js';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {

    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#E3C000',
        },
        textBtn: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: '#000',
        },

    });

    return (


        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 60

        }}>


            <LinearGradient
                // Background Linear Gradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.background}
            />

            <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="70" cy="70" r="62.5" stroke="black" stroke-width="15" />
            </svg>

            <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 700 }}> Grow {'\n'} Your BUSINESS.</Text>
            <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 700 }}> We will help you to grow your business using
                {'\n'} online server.</Text>

            <View style={{ flexDirection: 'row', gap: 20 }}>
                <Pressable style={styles.button}>
                    <Text style={styles.text}>Login</Text>
                </Pressable>

                <Pressable style={styles.button}>
                    <Text style={styles.textBtn}>SignUp</Text>
                </Pressable>
                <Bai1 />
            </View>

        </View>

    );




}