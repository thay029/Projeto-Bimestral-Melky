import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { colors } from '../theme';

type Props = { source: ImageSourcePropType };

export default function ProfileImage({ source }: Props) {
  return (
    <View style={styles.wrapper}>
      {/* moldura azul deslocada atrás da foto */}
      <View style={styles.frame} />
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: '100%', aspectRatio: 1, marginVertical: 8 },
  frame: {
    ...StyleSheet.absoluteFillObject,
    top: -6,
    left: 6,
    right: -6,
    bottom: 6,
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: 20,
  },
  image: { width: '100%', height: '100%', borderRadius: 20 },
});
