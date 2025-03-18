import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabEmulatorScreen() {
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
        <ThemedText type="title">EMULATOR</ThemedText>
      </ThemedView>
      <ThemedText>Claro! Vou te guiar passo a passo de forma resumida sobre como criar um projeto no Android Studio e rodá-lo no emulador. Vamos lá:
 
 ---
  
 ### **Passo 1: Instalar o Android Studio**
 1. Baixe o Android Studio no site oficial: [developer.android.com/studio](https://developer.android.com/studio).
 2. Siga o instalador e configure o SDK (Software Development Kit) durante a instalação.
  
 ---
  
 ### **Passo 2: Criar um Novo Projeto**
 1. Abra o Android Studio.
 2. Na tela inicial, clique em **"New Project"**.
 3. Escolha um template (por exemplo, **"Empty Activity"**) e clique em **Next**.
 4. Configure o projeto:
    - **Name**: Nome do seu app (ex: "MeuApp").
    - **Package name**: Nome do pacote (ex: "com.exemplo.meuapp").
    - **Save location**: Onde o projeto será salvo.
    - **Language**: Escolha entre Kotlin ou Java (recomendo Kotlin).
    - **Minimum SDK**: Escolha a versão mínima do Android que seu app suportará.
 5. Clique em **Finish**.
  
 ---
  
 ### **Passo 3: Configurar o Emulador (AVD - Android Virtual Device)**
 1. No Android Studio, vá em **Tools Device Manager**.
 2. Clique em **Create Device**.
 3. Escolha um modelo de dispositivo (ex: Pixel 5) e clique em **Next**.
 4. Selecione uma imagem do sistema Android (ex: Android 13 - API 33) e clique em **Next**.
 5. Dê um nome ao seu AVD e ajuste configurações como RAM, armazenamento, etc.
 6. Clique em **Finish**.
  
 ---
  
 ### **Passo 4: Executar o Projeto no Emulador**
 1. No Android Studio, clique no botão **Run** (ícone de play ▶️) na barra de ferramentas.
 2. Selecione o emulador que você configurou na lista de dispositivos.
 3. O emulador será iniciado automaticamente (pode demorar na primeira vez).
 4. Após o emulador carregar, o app será instalado e executado.
  
 ---
  
 ### **Passo 5: Visualizar o App**
 - O app será aberto no emulador, e você verá a tela inicial do projeto (geralmente uma tela em branco, se você escolheu o template "Empty Activity").
 - Agora você pode começar a desenvolver e testar seu app diretamente no emulador.
  
 ---
  
 ### **Dicas Importantes**
 - **Aceleração de Hardware**: Para melhorar o desempenho do emulador, habilite a aceleração de hardware (HAXM no Intel ou Hyper-V no Windows).
 - **Atualizações**: Mantenha o Android Studio e o SDK atualizados para evitar problemas.
 - **Dispositivo Físico**: Se preferir, você pode testar o app em um dispositivo físico conectado via USB.
  
 ---
  
 Pronto! Agora você já sabe como criar um projeto no Android Studio e rodá-lo no emulador. Se tiver dúvidas ou quiser explorar mais funcionalidades, é só perguntar! 😊</ThemedText>
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
