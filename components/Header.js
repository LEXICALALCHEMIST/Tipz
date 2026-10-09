import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Header({ onBack, username }) {
  const [ready] = useFonts({
    Tipz: require('../assets/fonts/tipz.ttf'),
  });

  if (!ready) return null;

  return (
    <View style={styles.header}>
      {onBack ? (
        <Pressable onPress={onBack} hitSlop={12}>
          <Ionicons name="arrow-back" size={26} color="#7ef0e8" />
        </Pressable>
      ) : (
        <View style={styles.spacer} />
      )}
      <View style={styles.user}>
        <Image source={require('../assets/user.jpg')} style={styles.face} />
        <Text style={styles.name}>{username}</Text>
      </View>
      <Text style={styles.mark}>TIPZ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  spacer: { width: 26 },
  user: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  face: { width: 28, height: 28, borderRadius: 14 },
  name: { color: '#e7f6f5', fontSize: 16 },
  mark: {
    fontFamily: 'Tipz',
    color: '#7ef0e8',
    fontSize: 28,
    letterSpacing: 4,
  },
});