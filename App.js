import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import ThreadScreen from './screens/ThreadScreen';
import CreateTipScreen from './screens/CreateTipScreen';
import ProfileScreen from './screens/ProfileScreen';
import TopTwenty from './screens/TopTwenty';
import BottomNav from './components/BottomNav';
import { createTip, listTips } from './services/tips';


function SettingsScreen({ onBack, onLogout }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={12}>
          <Ionicons name="arrow-back" size={26} color="#7ef0e8" />
        </Pressable>
        <Text style={styles.mark}>TIPZ</Text>
      </View>
      <Text style={styles.sub}>Settings</Text>
      <View style={styles.empty}>
        <Pressable onPress={onLogout}>
          <Text style={styles.logout}>Log out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  const [session, setSession] = useState(null);
  const [screen, setScreen] = useState('thread');
  const [tips, setTips] = useState([]);

  useEffect(() => {
    if (!session) return;
    listTips().then(setTips).catch((err) => console.log(err.message));
  }, [session]);

  async function addTip(tip) {
    try {
      await createTip(tip);
      setTips(await listTips());
      setScreen('thread');
    } catch (err) {
      Alert.alert('Save failed', err.message);
    }
  }

  function logout() {
    setScreen('thread');
    setSession(null);
  }

  if (!session) {
    return (
      <>
        <StatusBar style="light" />
        <LoginScreen onLogin={setSession} />
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
        />
      </>
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      {screen === 'profile' ? (
        <ProfileScreen
          email={session.email}
          tips={tips}
          onBack={() => setScreen('thread')}
        />
      ) : null}
      {screen === 'top' ? (
        <TopTwenty tips={tips} onBack={() => setScreen('thread')} />
      ) : null}
      {screen === 'settings' ? (
        <SettingsScreen onBack={() => setScreen('thread')} onLogout={logout} />
      ) : null}
      {screen === 'thread' ? (
        <ThreadScreen email={session.email} tips={tips} />
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
  root: { flex: 1, backgroundColor: '#0c1214' },
  screen: {
    flex: 1,
    backgroundColor: '#0c1214',
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mark: {
    color: '#7ef0e8',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
  },
  sub: { color: '#8aa8a6', marginTop: 12 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logout: { color: '#7ef0e8', fontSize: 16 },
})