import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import TipCard from '../components/TipCard';

export default function ProfileScreen({ email, username, tips, onBack }) {
  const mine = tips.filter((tip) => tip.email === email);

  return (
    <SafeAreaView style={styles.screen}>
      <Header username={username} onBack={onBack} />
      <Text style={styles.count}>{mine.length} tips</Text>

      <FlatList
        data={mine}
        keyExtractor={(item) => item.id}
        contentContainerStyle={mine.length ? styles.list : styles.emptyWrap}
        ListEmptyComponent={
          <View>
            <Text style={styles.emptyTitle}>No tips yet</Text>
            <Text style={styles.emptyBody}>Posts from this login show here.</Text>
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
  sub: { color: '#e7f6f5', marginTop: 16, fontSize: 16 },
  count: { color: '#8aa8a6', marginTop: 4, marginBottom: 16 },
  list: { paddingBottom: 24 },
  emptyWrap: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyTitle: { color: '#e7f6f5', fontSize: 18, fontWeight: '600' },
  emptyBody: { color: '#8aa8a6', marginTop: 6 },
});