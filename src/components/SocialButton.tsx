import React from 'react';
import { Pressable, Text, StyleSheet, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext';

type Props = {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>['name'];
  url: string;
};

export default function SocialButton({ title, icon, url }: Props) {
  const { colors } = useTheme();

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
      style={({ pressed }) => [
        styles.button,
        { borderColor: colors.primary },
        pressed && { opacity: 0.7 },
      ]}
    >
      <Ionicons name={icon} size={22} color={colors.primary} />
      <Text style={[styles.text, { color: colors.text }]}>{title}</Text>
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
    borderRadius: 10,
    paddingVertical: 14,
    width: '100%',
  },
  text: { fontSize: 16, fontWeight: '600' },
});