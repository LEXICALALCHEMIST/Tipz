import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    if (!email.trim() || !password) return;
    onLogin({ email: email.trim() });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.mark}>TIPZ</Text>
      <Text style={styles.sub}>Post Day Trade Stock tips. Get TIPZ.</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          placeholder="you@email.com"
          placeholderTextColor="#5d7370"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="password"
          placeholderTextColor="#5d7370"
          style={styles.input}
        />

        <Pressable onPress={submit} style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#0c1214',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  mark: {
    color: '#7ef0e8',
    fontSize: 42,
    fontWeight: '700',
    letterSpacing: 6,
  },
  sub: {
    color: '#8aa8a6',
    marginTop: 8,
    marginBottom: 36,
  },
  form: { gap: 8 },
  label: { color: '#c9e7e4', marginTop: 12, fontSize: 13 },
  input: {
    borderWidth: 1,
    borderColor: '#1e3332',
    backgroundColor: '#10191b',
    color: '#e7f6f5',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    marginTop: 22,
    backgroundColor: '#7ef0e8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: { color: '#0c1214', fontWeight: '700', fontSize: 16 },
});