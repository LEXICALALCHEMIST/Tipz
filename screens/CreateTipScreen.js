import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function nowLabel() {
  return new Date().toLocaleString();
}

export default function CreateTipScreen({ onClose, onSave, email }) {
  const [ticker, setTicker] = useState('');
  const [price, setPrice] = useState('');
  const [at, setAt] = useState(nowLabel);
  const [body, setBody] = useState('');

  function save() {
    if (!ticker.trim() || !body.trim() || !price.trim() || !at.trim()) return;
      onSave({
        ticker: ticker.trim().toUpperCase(),
        body: body.trim(),
        price: price.trim(),
        at: at.trim(),
        email,
        username,
      });
  }

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Pressable onPress={onClose}>
          <Text style={styles.back}>Back</Text>
        </Pressable>
        <Text style={styles.mark}>TIPZ</Text>
      </View>

      <Text style={styles.label}>Ticker</Text>
      <TextInput
        value={ticker}
        onChangeText={setTicker}
        autoCapitalize="characters"
        placeholder="AAPL"
        placeholderTextColor="#5d7370"
        style={styles.input}
      />

      <Text style={styles.label}>Price point</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="decimal-pad"
        placeholder="189.20"
        placeholderTextColor="#5d7370"
        style={styles.input}
      />

      <Text style={styles.label}>Date and time</Text>
      <TextInput
        value={at}
        onChangeText={setAt}
        placeholder="10/8/2026, 7:09 PM"
        placeholderTextColor="#5d7370"
        style={styles.input}
      />

      <Text style={styles.label}>Tip</Text>
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="What is the tip?"
        placeholderTextColor="#5d7370"
        multiline
        style={[styles.input, styles.body]}
      />

      <Pressable onPress={save} style={styles.button}>
        <Text style={styles.buttonText}>Post tip</Text>
      </Pressable>
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
    marginBottom: 28,
  },
  back: { color: '#7ef0e8', fontSize: 16 },
  mark: {
    color: '#7ef0e8',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 4,
  },
  label: { color: '#c9e7e4', marginTop: 12, fontSize: 13 },
  input: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#1e3332',
    backgroundColor: '#10191b',
    color: '#e7f6f5',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  body: { minHeight: 120, textAlignVertical: 'top' },
  button: {
    marginTop: 22,
    backgroundColor: '#7ef0e8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: { color: '#0c1214', fontWeight: '700', fontSize: 16 },
});