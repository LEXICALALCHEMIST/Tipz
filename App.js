import { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import LoginScreen from './screens/LoginScreen';
import ThreadScreen from './screens/ThreadScreen';
import CreateTipScreen from './screens/CreateTipScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import TopTwenty from './screens/TopTwenty';
import BottomNav from './components/BottomNav';
import { createTip, listTips } from './services/tips';
import { signIn, signOut, signUp } from './services/auth';

function SignUpScreen({ onSignUp, onLogin }) {
  const [ready] = useFonts({
    Tipz: require('./assets/fonts/tipz.ttf'),
  });
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    if (!username.trim() || !email.trim() || !password) return;
    onSignUp({
      username: username.trim(),
      email: email.trim(),
      password,
    });
  }

  if (!ready) return null;

  return (
    <LinearGradient
      colors={['#0c1214', '#0c1214', '#000000']}
      locations={[0, 0.5, 1]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safe}>
        <View style={styles.brand}>
          <Image source={require('./assets/logo.jpg')} style={styles.logo} />
          <Text style={styles.mark}>TIPZ</Text>
        </View>
        <Text style={styles.sub}>Pick a name once.</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="name"
            placeholderTextColor="#5d7370"
            style={styles.input}
          />
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
            <Text style={styles.buttonText}>Create account</Text>
          </Pressable>
          <Pressable onPress={onLogin}>
            <Text style={styles.link}>Already have an account</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [gate, setGate] = useState('login');
  const [screen, setScreen] = useState('thread');
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (!session) return;
    listTips().then(setTips).catch((err) => console.log(err.message));
  }, [session]);

  async function handleLogin({ email, password }) {
    try {
      setSession(await signIn({ email, password }));
    } catch (err) {
      Alert.alert('Log in failed', err.message);
    }
  }

  async function handleSignUp({ email, username, password }) {
    try {
      setSession(await signUp({ email, username, password }));
    } catch (err) {
      Alert.alert('Sign up failed', err.message);
    }
  }

  async function addTip(tip) {
    try {
      await createTip(tip);
      setTips(await listTips());
      setScreen('thread');
    } catch (err) {
      Alert.alert('Save failed', err.message);
    }
  }

  async function logout() {
    try {
      await signOut();
    } catch (err) {
      Alert.alert('Log out failed', err.message);
    }
    setScreen('thread');
    setGate('login');
    setSession(null);
  }

  if (!session && gate === 'signup') {
    return (
      <>
        <StatusBar style="light" />
        <SignUpScreen onSignUp={handleSignUp} onLogin={() => setGate('login')} />
      </>
    );
  }

  if (!session) {
    return (
      <>
        <StatusBar style="light" />
        <LoginScreen onLogin={handleLogin} onSignUp={() => setGate('signup')} />
      </>
    );
  }

  if (screen === 'create') {
    return (
      <>
        <StatusBar style="light" />
        <CreateTipScreen
          onClose={() => setScreen('thread')}
          onSave={addTip}
          email={session.email}
          username={session.username}
        />
      </>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#0c1214' }}>
      <StatusBar style="light" />
      {screen === 'profile' ? (
        <ProfileScreen
          email={session.email}
          username={session.username}
          tips={tips}
          onBack={() => setScreen('thread')}
        />
      ) : null}
      {screen === 'top' ? (
        <TopTwenty tips={tips} onBack={() => setScreen('thread')} username={session.username} />
      ) : null}
      {screen === 'settings' ? (
        <SettingsScreen onBack={() => setScreen('thread')} onLogout={logout} username={session.username} />
      ) : null}
      {screen === 'thread' ? (
        <ThreadScreen
          email={session.email}
          username={session.username}
          tips={tips}
        />
      ) : null}
      <BottomNav
        screen={screen}
        onThread={() => setScreen('thread')}
        onTop={() => setScreen('top')}
        onCreate={() => setScreen('create')}
        onProfile={() => setScreen('profile')}
        onSettings={() => setScreen('settings')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, paddingHorizontal: 24, paddingTop: 48 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  logo: { width: 48, height: 48, borderRadius: 10 },
  mark: { fontFamily: 'Tipz', fontSize: 42, color: '#7ef0e8', letterSpacing: 4 },
  sub: { fontFamily: 'Tipz', color: '#8aa8a6', marginTop: 8, marginBottom: 36 },
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