import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
         <Tabs.Screen
        name="index"
        options={{
          title: 'Emulator',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="umbrella" 
          color={color} />,
        }}
      />
            <Tabs.Screen
        name="emulator"
        options={{
          title: 'Emulator',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="umbrella" 
          color={color} />,
        }}
      />
            <Tabs.Screen
        name="estrutura"
        options={{
          title: 'Estrutura',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="umbrella" 
          color={color} />,
        }}
      />
                        <Tabs.Screen
        name="config"
        options={{
          title: 'Config',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="umbrella" 
          color={color} />,
        }}
      />
    </Tabs>
  );
}
