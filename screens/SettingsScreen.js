import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default function SettingsScreen({ onBack, onLogout, username, email }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Header onBack={onBack} username={username} />
      <Text style={styles.sub}>Settings</Text>
      <View style={styles.empty}>
        <Pressable onPress={onLogout}>
          <Text style={styles.logout}>Log out</Text>
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
    paddingTop: 24,
  },
  sub: { color: '#8aa8a6', marginTop: 12 },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  logout: { color: '#7ef0e8', fontSize: 16 },
});