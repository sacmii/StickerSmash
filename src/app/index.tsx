import { router } from "expo-router";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AnimatedIcon } from "@/components/animated-icon";
import { WebBadge } from "@/components/web-badge";
import { MaxContentWidth, Spacing } from "@/constants/theme";

const SCREENS: {
  label: string;
  href: string;
  color: string;
  description: string;
}[] = [
  {
    label: "Explore",
    href: "/explore",
    color: "#3B82F6",
    description: "Browse features & docs",
  },
  {
    label: "Profile",
    href: "/profile",
    color: "#E8453C",
    description: "Your personal profile",
  },
  {
    label: "Notifications",
    href: "/notifications",
    color: "#1A9E7A",
    description: "Alerts & updates",
  },
  {
    label: "Gallery",
    href: "/gallery",
    color: "#F59E0B",
    description: "Sticker collection",
  },
  {
    label: "Settings",
    href: "/settings",
    color: "#6C3FC5",
    description: "App preferences",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.root}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.heroSection}>
            <AnimatedIcon />
            <Text style={styles.title}>StickerSmash</Text>
            <Text style={styles.subtitle}>Choose a screen to get started</Text>
          </View>

          <View style={styles.screensGrid}>
            {SCREENS.map(({ label, href, color, description }) => (
              <Pressable
                key={href}
                onPress={() => router.push(href as any)}
                style={({ pressed }) => [
                  styles.screenCard,
                  { backgroundColor: color },
                  pressed && styles.screenCardPressed,
                ]}
              >
                <Text style={styles.cardLabel}>{label}</Text>
                <Text style={styles.cardDescription}>{description}</Text>
              </Pressable>
            ))}
          </View>

          {Platform.OS === "web" && <WebBadge />}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    width: "100%",
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.six,
    gap: Spacing.five,
  },
  heroSection: {
    alignItems: "center",
    paddingTop: Spacing.six,
    gap: Spacing.three,
  },
  title: {
    textAlign: "center",
    color: "#F8FAFC",
    fontSize: 48,
    fontWeight: "700",
    lineHeight: 52,
  },
  subtitle: {
    textAlign: "center",
    color: "#94A3B8",
    fontSize: 16,
    fontWeight: "500",
  },
  screensGrid: {
    gap: Spacing.three,
    alignSelf: "stretch",
  },
  screenCard: {
    borderRadius: Spacing.four,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.four,
    gap: Spacing.one,
  },
  screenCardPressed: {
    opacity: 0.82,
  },
  cardLabel: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "700",
  },
  cardDescription: {
    color: "rgba(255,255,255,0.82)",
    fontSize: 14,
    fontWeight: "500",
  },
});
