import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function ThreadScreen({ email, onCreate }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <View>
          <Text style={styles.mark}>TIPZ</Text>
          <Text style={styles.sub}>{email}</Text>
        </View>
      </View>

      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>No tips yet</Text>
        <Text style={styles.emptyBody}>The feed renders here.</Text>
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
  sub: { color: '#8aa8a6', marginTop: 4 },
  create: {
    backgroundColor: '#7ef0e8',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  createText: { color: '#0c1214', fontWeight: '700' },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  emptyTitle: { color: '#e7f6f5', fontSize: 18, fontWeight: '600' },
  emptyBody: { color: '#8aa8a6', marginTop: 6 },
});