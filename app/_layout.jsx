import '@/assets/styles/globals.css';
import { Stack } from 'expo-router/stack';

export default function Layout() {
  return (
   <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="+not-found" options={{ headerShown: false }} />
   </Stack>
  );
}
