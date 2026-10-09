import { StyleSheet, Text, View } from 'react-native';

export default function TipCard({ tip }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.ticker}>{tip.ticker}</Text>
        <Text style={styles.price}>${tip.price}</Text>
      </View>
      <Text style={styles.body}>{tip.body}</Text>
      <Text style={styles.by}>
        {tip.at} · {tip.username || tip.email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#1e3332',
    backgroundColor: '#10191b',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ticker: { color: '#7ef0e8', fontWeight: '700', fontSize: 16 },
  price: { color: '#e7f6f5', fontWeight: '700', fontSize: 16 },
  body: { color: '#e7f6f5', marginTop: 6, fontSize: 16 },
  by: { color: '#8aa8a6', marginTop: 8, fontSize: 12 },
});