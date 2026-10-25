import React from 'react';
import { Alert, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import SocialButton from '../components/SocialButton';
import { spacing } from '../theme';
import { useTheme } from '../context/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const { colors, isDark, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <Header />
          <ProfileImage source={require('../assets/perfil.png')} />

          <Text style={[styles.title, { color: colors.text }]}>
            Eleve seu negócio digital a outro nível{' '}
            <Text style={{ color: colors.primary }}>com um Front-end de qualidade!</Text>
          </Text>

          <Text style={[styles.paragraph, { color: colors.textMuted }]}>
            Olá! Somos Giovanna, Giuliana e Thayssa, desenvolvedoras Front-end com especialidade em
            React, HTML e CSS. Ajudamos pequenos negócios e designers a colocarem em
            prática boas ideias. Vamos conversar?
          </Text>

          <View style={styles.buttons}>
            <PrimaryButton title="Sobre nós" onPress={() => navigation.navigate('Sobre')} />
            <PrimaryButton title="Entre em contato!" onPress={() => Alert.alert('Entre em contato')} />
          </View>

          <Text style={[styles.sectionTitle, { color: colors.text }]}>Acesse minhas redes:</Text>

          <View style={styles.switchRow}>
            <Text style={[styles.switchLabel, { color: colors.textMuted }]}>
              Alterar visualização
            </Text>
            <Switch
              value={isDark}
              onValueChange={toggleTheme}
              trackColor={{ false: colors.track, true: colors.primary }}
              thumbColor="#FFFFFF"
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
  safe: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'space-between' },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
  title: { fontSize: 24, fontWeight: '700', lineHeight: 32, marginTop: spacing.lg },
  paragraph: { fontSize: 14, lineHeight: 24, marginTop: spacing.md },
  buttons: { gap: spacing.sm, marginTop: spacing.lg },
  sectionTitle: {
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
  switchLabel: { fontSize: 14 },
  socials: { gap: spacing.sm },
});