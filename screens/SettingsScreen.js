import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen({ onLogout }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.mark}>TIPZ</Text>
      <Text style={styles.sub}>Settings</Text>
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>Settings</Text>
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
  mark: {
    color: '#7ef0e8',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
  },
  sub: { color: '#8aa8a6', marginTop: 4 },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  emptyTitle: { color: '#e7f6f5', fontSize: 18, fontWeight: '600' },
  logout: { color: '#7ef0e8', marginTop: 12, fontSize: 16 },
});