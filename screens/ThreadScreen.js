import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import TipCard from '../components/TipCard';

export default function ThreadScreen({ email, tips }) {
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.mark}>TIPZ</Text>
      <Text style={styles.sub}>{email}</Text>

      <FlatList
        data={tips}
        keyExtractor={(item) => item.id}
        contentContainerStyle={tips.length ? styles.list : styles.emptyWrap}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyTitle}>No tips yet</Text>
            <Text style={styles.emptyBody}>Hit + and post one.</Text>
          </View>
        }
        renderItem={({ item }) => <TipCard tip={item} />}
      />
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
  sub: { color: '#8aa8a6', marginTop: 4, marginBottom: 16 },
  list: { paddingBottom: 24 },
  emptyWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyTitle: { color: '#e7f6f5', fontSize: 18, fontWeight: '600' },
  emptyBody: { color: '#8aa8a6', marginTop: 6 },
});