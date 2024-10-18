import { View, Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-red-100">Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

