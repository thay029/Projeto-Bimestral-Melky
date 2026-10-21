import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por Alura.</Text>
      <Text style={styles.text}>Projeto fictício sem fins comerciais.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    alignItems: 'center',
    width: '100%',
  },
  text: { color: colors.onPrimary, fontSize: 12, textAlign: 'center' },
});
