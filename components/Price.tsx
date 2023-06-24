import React, { useState } from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "nativewind";
import { itemPrice } from "../constants/utils";

export default function Price({ price }: itemPrice) {
	const [count, setCount] = useState(1);
	const { colorScheme } = useColorScheme();
	return (
		<View className="flex-row justify-between items-center my-3">
			<View className="flex-row items-center gap-3">
				<AntDesign
					name="minuscircleo"
					size={24}
					color={colorScheme === "light" ? "black" : "white"}
					onPress={() => setCount(count - 1)}
				/>
				<Text className="text-xl dark:text-white">{count}</Text>
				<AntDesign
					name="pluscircleo"
					size={24}
					color={colorScheme === "light" ? "black" : "white"}
					onPress={() => setCount(count + 1)}
				/>
			</View>
			<Text className="text-2xl font-extrabold dark:text-white">${price * count}</Text>
		</View>
	);
}
