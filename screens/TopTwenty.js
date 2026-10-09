import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TipCard from '../components/TipCard';

export default function TopTwenty({ tips, onBack }) {
  const top = [...tips]
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 20);

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={onBack} hitSlop={12}>
          <Ionicons name="arrow-back" size={26} color="#7ef0e8" />
        </Pressable>
        <Text style={styles.mark}>TIPZ</Text>
      </View>
      <Text style={styles.sub}>Top 20</Text>

      <FlatList
        data={top}
        keyExtractor={(item) => item.id}
        contentContainerStyle={top.length ? styles.list : styles.emptyWrap}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyTitle}>No tips yet</Text>
            <Text style={styles.emptyBody}>The ranking fills from the thread.</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <View>
            <Text style={styles.rank}>{index + 1}</Text>
            <TipCard tip={item} />
          </View>
        )}
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
  sub: { color: '#8aa8a6', marginTop: 12, marginBottom: 16 },
  list: { paddingBottom: 24 },
  emptyWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyTitle: { color: '#e7f6f5', fontSize: 18, fontWeight: '600' },
  emptyBody: { color: '#8aa8a6', marginTop: 6 },
  rank: { color: '#7ef0e8', fontSize: 12, marginBottom: 4 },
});