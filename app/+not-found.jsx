import '@/assets/styles/globals.css';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFound() {
  return (
   <SafeAreaView>
    <View>
      <Text>404, isteğe ulaşlımaladı.</Text>
      <Pressable onPress={() => router.push("/")}>
          <Text className="mt-2 underline">Ana Sayfa</Text>
        </Pressable>
    </View>
    <StatusBar />
   </SafeAreaView>
  );
}
