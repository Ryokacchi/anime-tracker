import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Index() {
  return (
    <SafeAreaView>
      <View className="h-full flex justify-center">
        <Text className="text-4xl font-semibold text-center">Başlangıç Sayfası</Text>
        <Pressable onPress={() => router.push("/sa")}>
          <Text className="text-center mt-2 underline">Geri dön</Text>
        </Pressable>
      </View>
      <StatusBar />
    </SafeAreaView>
  )
}