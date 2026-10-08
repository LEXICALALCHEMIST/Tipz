import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import ThreadScreen from './screens/ThreadScreen';
import CreateTipScreen from './screens/CreateTipScreen';
import BottomNav from './components/BottomNav';

function ProfileScreen({ email }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.mark}>TIPZ</Text>
      <Text style={styles.sub}>Profile</Text>
      <View style={styles.empty}>
        <Text style={styles.title}>{email}</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({ onLogout }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.mark}>TIPZ</Text>
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
        <CreateTipScreen onClose={() => setScreen('thread')} />
      </>
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      {screen === 'profile' ? <ProfileScreen email={session.email} /> : null}
      {screen === 'settings' ? (
        <SettingsScreen onLogout={() => setSession(null)} />
      ) : null}
      {screen === 'thread' ? <ThreadScreen email={session.email} /> : null}
      <BottomNav
        screen={screen}
        onProfile={() => setScreen('profile')}
        onCreate={() => setScreen('create')}
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
  mark: {
    color: '#7ef0e8',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
  },
  sub: { color: '#8aa8a6', marginTop: 4 },
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { color: '#e7f6f5', fontSize: 18 },
  logout: { color: '#7ef0e8', fontSize: 16 },
});