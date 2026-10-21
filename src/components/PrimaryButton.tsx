import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

type Props = { title: string; onPress: () => void };

export default function PrimaryButton({ title, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
  },
  pressed: { opacity: 0.8 },
  text: { color: colors.onPrimary, fontSize: 16, fontWeight: '600' },
});
