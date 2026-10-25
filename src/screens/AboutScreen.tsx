import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfileImage from '../components/ProfileImage';
import PrimaryButton from '../components/PrimaryButton';
import { spacing } from '../theme';
import { useTheme } from '../context/ThemeContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Sobre'>;

const paragraphs = [
  'Somos Giovanna, Giuliana Sbrissa e Thayssa Fernanda, três amigas de 21 anos e estudantes de Análise e Desenvolvimento de Sistemas na FATEC Itu. Compartilhamos o interesse por tecnologia e estamos construindo nossos caminhos profissionais, cada uma com suas próprias experiências e descobertas.',
  'Atualmente, trabalhamos em empresas diferentes: a Giu na SAP, a Thay na Círculo e a Gi na RenaSoft. Mesmo atuando em áreas distintas, temos em comum a vontade de aprender, desenvolver novas habilidades e explorar as possibilidades da tecnologia. Entre trabalho, faculdade e vida pessoal, seguimos compartilhando experiências e ajudando umas às outras nessa jornada.',
  'Atualmente, também estamos desenvolvendo nosso Trabalho de Graduação (TG), um site de adoção de animais que busca aproximar ONGs e pessoas interessadas em adotar. Queremos tornar esse processo mais fácil e ajudar mais animais a encontrarem um lar. É uma oportunidade de colocar em prática o que aprendemos na faculdade e transformar nossas ideias em algo útil, enquanto seguimos aprendendo e crescendo na área.',
];

export default function AboutScreen({ navigation }: Props) {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <Header />
          <ProfileImage source={require('../assets/perfil.png')} />

          <Text style={[styles.title, { color: colors.text }]}>Sobre nós</Text>

          {paragraphs.map((text, index) => (
            <Text key={index} style={[styles.paragraph, { color: colors.textMuted }]}>
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
  safe: { flex: 1 },
  scroll: { flexGrow: 1, justifyContent: 'space-between' },
  content: { paddingHorizontal: spacing.lg, paddingBottom: spacing.xl },
  title: { fontSize: 24, fontWeight: '700', marginTop: spacing.lg, marginBottom: spacing.xs },
  paragraph: { fontSize: 14, lineHeight: 24, marginTop: spacing.md },
  back: { marginTop: spacing.xl },
});