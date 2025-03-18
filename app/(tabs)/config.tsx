import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabConfigScreen() {
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
        <ThemedText type="title">SOBRE</ThemedText>
      </ThemedView>
      <ThemedText>Passo 1: Instalar o Android Studio
Baixe o Android Studio no site oficial: developer.android.com/studio.
 
Siga o instalador e configure o SDK (Software Development Kit) durante a instalação.
 
Passo 2: Criar um Novo Projeto
Abra o Android Studio.
 
Na tela inicial, clique em "New Project".
 
Escolha um template (por exemplo, "Empty Activity") e clique em Next.
 
Configure o projeto:
 
Name: Nome do seu app (ex: "MeuApp").
 
Package name: Nome do pacote (ex: "com.exemplo.meuapp").
 
Save location: Onde o projeto será salvo.
 
Language: Escolha entre Kotlin ou Java (recomendo Kotlin).
 
Minimum SDK: Escolha a versão mínima do Android que seu app suportará.
 
Clique em Finish.
 
Passo 3: Configurar o Emulador (AVD - Android Virtual Device)
No Android Studio, vá em Tools  Device Manager.
 
Clique em Create Device.
 
Escolha um modelo de dispositivo (ex: Pixel 5) e clique em Next.
 
Selecione uma imagem do sistema Android (ex: Android 13 - API 33) e clique em Next.
 
Dê um nome ao seu AVD e ajuste configurações como RAM, armazenamento, etc.
 
Clique em Finish.
 
Passo 4: Executar o Projeto no Emulador
No Android Studio, clique no botão Run (ícone de play ▶️) na barra de ferramentas.
 
Selecione o emulador que você configurou na lista de dispositivos.
 
O emulador será iniciado automaticamente (pode demorar na primeira vez).
 
Após o emulador carregar, o app será instalado e executado.
 
Passo 5: Visualizar o App
O app será aberto no emulador, e você verá a tela inicial do projeto (geralmente uma tela em branco, se você escolheu o template "Empty Activity").
 
Agora você pode começar a desenvolver e testar seu app diretamente no emulador.</ThemedText>
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
