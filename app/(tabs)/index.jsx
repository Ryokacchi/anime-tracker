import { Ionicons } from '@expo/vector-icons'; // İkonlar için
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Index() {
  return (
    <SafeAreaView className="bg-[#0a090e] flex-1">
      <View className="flex-1 justify-center items-center">
        <Text className="text-[#fafafa]">ekli anime listeniz yok eklemek için artıya bas</Text>
      </View>

      <Pressable
        className="absolute bottom-6 right-6 bg-[#111113] w-[60px] h-[60px] rounded-full flex justify-center items-center shadow-md shadow-black/20"
        onPress={() => {
          alert('FAB clicked!');
        }}
      >
        <Ionicons name="add" size={30} color="#fff" />
      </Pressable>

      <StatusBar />
    </SafeAreaView>
  );
}
