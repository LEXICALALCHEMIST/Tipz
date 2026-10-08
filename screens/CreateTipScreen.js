import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function CreateTipScreen({ onClose }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={onClose}>
          <Text style={styles.back}>Back</Text>
        </Pressable>
        <Text style={styles.mark}>TIPZ</Text>
      </View>

      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>Create a tip</Text>
        <Text style={styles.emptyBody}>Ticker and body land here.</Text>
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
  back: { color: '#7ef0e8', fontSize: 16 },
  mark: {
    color: '#7ef0e8',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80,
  },
  emptyTitle: { color: '#e7f6f5', fontSize: 18, fontWeight: '600' },
  emptyBody: { color: '#8aa8a6', marginTop: 6 },
});