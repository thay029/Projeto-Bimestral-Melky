import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { useTheme } from '../context/ThemeContext';

type Props = { source: ImageSourcePropType };

export default function ProfileImage({ source }: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.frame, { borderColor: colors.primary }]} />
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%', aspectRatio: 1, marginVertical: 8 },
  frame: {
    ...StyleSheet.absoluteFill,
    top: -6,
    left: 6,
    right: -6,
    bottom: 6,
    borderWidth: 2,
    borderRadius: 20,
  },
  image: { width: '100%', height: '100%', borderRadius: 20 },
});