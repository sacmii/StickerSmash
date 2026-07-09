import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="explore"
          options={{ title: "Explore", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="profile"
          options={{ title: "Profile", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="notifications"
          options={{ title: "Notifications", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="gallery"
          options={{ title: "Gallery", headerBackTitle: "Home" }}
        />
        <Stack.Screen
          name="settings"
          options={{ title: "Settings", headerBackTitle: "Home" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
