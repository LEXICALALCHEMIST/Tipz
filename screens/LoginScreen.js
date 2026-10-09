import { useState } from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ onLogin, onSignUp }) {
  const [ready] = useFonts({
    Tipz: require('../assets/fonts/tipz.ttf'),
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    if (!email.trim() || !password) return;
    onLogin({ email: email.trim(), password });
  }

  if (!ready) return null;

  return (
    <LinearGradient
      colors={['#0c1214', '#0c1214', '#000000']}
      locations={[0, 0.5, 1]}
      style={styles.screen}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.brand}>
          <Image source={require('../assets/logo.jpg')} style={styles.logo} />
          <Text style={styles.mark}>TIPZ</Text>
        </View>
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

          <Pressable onPress={onSignUp}>
            <Text style={styles.link}>Create account</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  safe: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 10,
  },
  mark: {
    fontFamily: 'Tipz',
    fontSize: 42,
    color: '#7ef0e8',
    letterSpacing: 4,
  },
  sub: {
    fontFamily: 'Tipz',
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
  link: { color: '#7ef0e8', textAlign: 'center', marginTop: 16 },
});