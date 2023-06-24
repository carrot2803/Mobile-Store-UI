import { SafeAreaView, Switch, Text, View } from "react-native";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import List from "./components/List";

export default function App() {
	const { colorScheme, toggleColorScheme } = useColorScheme();
	return (
		<SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
			<View className="flex-row w-full justify-between items-center px-7">
				<Text className="text-2xl font-bold dark:text-white">New Releases</Text>
				<Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
			</View>
			<List />
			<StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
}
