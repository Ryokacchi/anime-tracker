import '@/assets/styles/globals.css';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarStyle: { display: "none" } }}>
      <Tabs.Screen
        name="index"
        options={{ headerShown: false }}
      />
    </Tabs>
  );
}
