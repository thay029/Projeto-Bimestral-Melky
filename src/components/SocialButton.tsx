import React from 'react';
import { Pressable, Text, StyleSheet, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

type Props = {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  url: string;
};

export default function SocialButton({ title, icon, url }: Props) {
  const handlePress = async () => {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert('Erro', 'Não foi possível abrir o link.');
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      accessibilityRole="link"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={22} color={colors.primary} />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    width: '100%',
  },
  pressed: { backgroundColor: 'rgba(34, 211, 255, 0.15)' },
  text: { color: colors.text, fontSize: 16, fontWeight: '600' },
});
