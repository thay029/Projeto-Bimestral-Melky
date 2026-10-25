import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { spacing } from '../theme';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Text style={[styles.text, { color: colors.onPrimary }]}>Desenvolvido por Giovanna, Giuliana e Thayssa.</Text>
      <Text style={[styles.text, { color: colors.onPrimary }]}>
        Projeto fictício sem fins comerciais.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing.md,
    alignItems: 'center',
    width: '100%',
  },
  text: { fontSize: 12, textAlign: 'center' },
});