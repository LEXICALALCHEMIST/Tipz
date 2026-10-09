import { Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav({
  screen,
  onThread,
  onTop,
  onCreate,
  onProfile,
  onSettings,
}) {
  return (
    <View style={styles.bar}>
      <Pressable onPress={onThread} style={styles.side}>
        <Ionicons
          name={screen === 'thread' ? 'chatbubbles' : 'chatbubbles-outline'}
          size={24}
          color={screen === 'thread' ? '#7ef0e8' : '#8aa8a6'}
        />
      </Pressable>

      <Pressable onPress={onTop} style={styles.side}>
        <Ionicons
          name={screen === 'top' ? 'star' : 'star-outline'}
          size={24}
          color={screen === 'top' ? '#7ef0e8' : '#8aa8a6'}
        />
      </Pressable>

      <Pressable onPress={onCreate} style={styles.plus}>
        <Ionicons name="add" size={36} color="#0c1214" />
      </Pressable>

      <Pressable onPress={onProfile} style={styles.side}>
        <Ionicons
          name={screen === 'profile' ? 'person' : 'person-outline'}
          size={24}
          color={screen === 'profile' ? '#7ef0e8' : '#8aa8a6'}
        />
      </Pressable>

      <Pressable onPress={onSettings} style={styles.side}>
        <Ionicons
          name={screen === 'settings' ? 'settings' : 'settings-outline'}
          size={24}
          color={screen === 'settings' ? '#7ef0e8' : '#8aa8a6'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 36,
    backgroundColor: '#0c1214',
    borderTopWidth: 1,
    borderTopColor: '#1e3332',
    marginBottom: 30,
  },
  side: { width: 48, alignItems: 'center' },
  plus: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#7ef0e8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -28,
  },
});