import * as React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Product } from "../constants/utils";
import Price from "./Price";

export default function ProductCard({ image, category, title, price }: Product) {
	return (
		<View className={"w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5"}>
			<View className="rounded-xl">
				<Image source={image} className={"w-full h-72"} style={{ resizeMode: "contain" }} />
			</View>
			<View className="mt-5">
				<Text className={"text-sm text-black/60 dark:text-white/70"}>{category}</Text>
				<Text className={"text-lg font-semibold dark:text-white"}>{title}</Text>
				<Price price={price} />
				<TouchableOpacity className="flex-row justify-center rounded-full bg-black/90 dark:bg-white/90 p-3 w-10/12 self-center mt-5">
					<Text className="text-white dark:text-black font-bold">Add To Cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
