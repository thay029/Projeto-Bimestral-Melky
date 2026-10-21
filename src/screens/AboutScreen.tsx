import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import { colors, spacing } from '../theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Sobre'>;

const paragraphs = [
  'Sou a Joana Santos, desenvolvedora Front-end apaixonada por transformar ideias em interfaces funcionais, acessíveis e bem pensadas. Trabalho principalmente com React, HTML e CSS, criando experiências digitais que não só funcionam bem, mas também fazem sentido para quem usa.',
  'Gosto de colaborar de perto com pequenos negócios, designers e times criativos, ajudando a tirar projetos do papel e levá-los para a web de forma prática e eficiente. Acredito que um bom produto nasce do equilíbrio entre código bem escrito, atenção aos detalhes e uma comunicação clara ao longo de todo o processo.',
  'Estou sempre buscando evoluir, aprender novas tecnologias e aprimorar minhas soluções, seja otimizando performance, melhorando a usabilidade ou explorando novas formas de construir interfaces mais escaláveis. Se você tem uma ideia e quer transformá-la em algo real, vamos conversar.',
];

export default function AboutScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <Header />
          <ProfileImage source={require('../assets/perfil.png')} />

          <Text style={styles.title}>Sobre mim</Text>

          {paragraphs.map((text, index) => (
            <Text key={index} style={styles.paragraph}>
              {text}
            </Text>
          ))}

          <View style={styles.back}>
            <PrimaryButton title="Voltar" onPress={() => navigation.goBack()} />
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
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  paragraph: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 24,
    marginTop: spacing.md,
  },
  back: { marginTop: spacing.xl },
});
