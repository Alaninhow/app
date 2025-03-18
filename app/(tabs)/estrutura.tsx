import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabEstruturaScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">ESTRUTURA</ThemedText>
      </ThemedView>
      <ThemedText>Claro! Aqui está uma breve explicação sobre o que cada pasta ou arquivo pode representar em um projeto, especialmente em um contexto de desenvolvimento com Expo (uma ferramenta para criar aplicativos React Native):
 - **expo**: Pode conter configurações específicas do Expo.
 - **app**: Provavelmente o diretório principal onde o código do aplicativo reside, incluindo telas e navegação.
 - **assets**: Armazena recursos estáticos como imagens, ícones e fontes.
 - **components**: Contém componentes reutilizáveis da interface do usuário.
 - **constants**: Armazena valores constantes, como strings ou configurações que não mudam frequentemente.
 - **hooks**: Contém hooks personalizados do React para reutilização de lógica.
 - **node_modules**: Contém todas as dependências do projeto instaladas via npm ou yarn.
 - **scripts**: Pode conter scripts personalizados para automatizar tarefas.
 - **.gitignore**: Especifica quais arquivos e diretórios o Git deve ignorar.
 - **app.json**: Configurações do aplicativo para o Expo.
 - **expo-env.d.ts**: Arquivo de definição de tipos para ambiente Expo.
 - **package-lock.json**: Mantém o controle exato das versões das dependências instaladas.
 - **package.json**: Contém metadados do projeto e lista de dependências.
 - **README.md**: Documentação do projeto, geralmente com instruções de uso.
 - **tsconfig.json**: Configurações do TypeScript para o projeto.
 Esses são os usos típicos, mas podem variar dependendo da estrutura específica do projeto.</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#456690',
    bottom: -50,
    left: -50,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
