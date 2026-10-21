import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import { colors, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [enabled, setEnabled] = useState(false);

  const handleSwitch = (value: boolean) => {
    setEnabled(value);
    Alert.alert('Switch pressionado');
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <Header />
          <ProfileImage source={require('../assets/perfil.png')} />

          <Text style={styles.title}>
            Eleve seu negócio digital a outro nível{' '}
            <Text style={styles.highlight}>com um Front-end de qualidade!</Text>
          </Text>

          <Text style={styles.paragraph}>
            Olá! Sou Joana Santos, desenvolvedora Front-end com especialidade em
            React, HTML e CSS. Ajudo pequenos negócios e designers a colocarem em
            prática boas ideias. Vamos conversar?
          </Text>

          <View style={styles.buttons}>
            <PrimaryButton title="Sobre mim" onPress={() => navigation.navigate('Sobre')} />
            <PrimaryButton title="Entre em contato!" onPress={() => Alert.alert('Entre em contato')} />
          </View>

          <Text style={styles.sectionTitle}>Acesse minhas redes:</Text>

          <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Alterar visualização</Text>
            <Switch
              value={enabled}
              onValueChange={handleSwitch}
              trackColor={{ false: '#3A4A5C', true: colors.primary }}
              thumbColor={colors.text}
            />
          </View>

          <View style={styles.socials}>
            <SocialButton title="GitHub" icon="logo-github" url="https://github.com" />
            <SocialButton title="Linkedin" icon="logo-linkedin" url="https://www.linkedin.com" />
            <SocialButton title="Instagram" icon="logo-instagram" url="https://www.instagram.com" />
            <SocialButton title="Twitch" icon="logo-twitch" url="https://www.twitch.tv" />
          </View>
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { flexGrow: 1, justifyContent: 'space-between' },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: spacing.lg,
  },
  highlight: { color: colors.primary },
  paragraph: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 24,
    marginTop: spacing.md,
  },
  buttons: { gap: spacing.sm, marginTop: spacing.lg },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: spacing.xl,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: spacing.md,
  },
  switchLabel: { color: colors.textMuted, fontSize: 14 },
  socials: { gap: spacing.sm },
});
