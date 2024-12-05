import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, Image, TextInput, Touchable, TouchableOpacity, Alert } from "react-native";

export default function App()
{
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eBecf4' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image
                        source={{ uri: 'https://withfra.me/android-chrome-512x512.png' }}
                        style={styles.headerImg}
                        alt="logo"
                    />

                    <Text style={styles.title}>Sign in</Text>

                    <Text style={styles.subtitle}>Get Access to your things</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Email Address</Text>

                        <TextInput
                            autoCapitalize="none"
                            keyboardType="email-address"
                            autoCorrect={false}
                            style={styles.inputControl}
                            placeholder="name@example.com"
                            placeholderTextColor="#8b7280"
                            value={form.email}
                            onChange={email => setForm({...form, email})}
                        />
                    </View>

                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Password</Text>

                        <TextInput
                            secureTextEntry
                            style={styles.inputControl}
                            placeholder="Password"
                            placeholderTextColor="#8b7280"
                            value={form.password}
                            onChange={password => setForm({...form, password})}
                        />
                    </View>

                    <View style={styles.formAction}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert('Successfully logged in!');
                        }}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>Sign in</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ marginTop: 'auto' }} onPress={() => {

                    }}>
                        <Text style={styles.formFooter}>Don't have an account? <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
    },

    header: {
        marginVertical: 36,
    },

    headerImg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 36,
    },

    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#1e1e1e',
        marginBottom: 6,
        textAlign: 'center',
    },

    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
    },

    input: {
        marginBottom: 16,
    },

    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },

    inputControl: {
        height: 44,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
    },

    form: {
        marginBottom: 24,
        flex: 1,

    },

    formAction: {
        marginVertical: 24,
    },

    btn: {
        backgroundColor: '#075eec',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#075eec',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    btnText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },

    formFooter: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
});