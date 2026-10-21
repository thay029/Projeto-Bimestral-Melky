import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DEV.SPOT</Text>
      <MaterialCommunityIcons
        name="star-four-points-outline"
        size={36}
        color={colors.primary}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
  },
  logo: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  icon: { marginLeft: 4, marginTop: 6 },
});
