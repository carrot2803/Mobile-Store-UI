import * as React from "react";
import { Text, FlatList } from "react-native";
import { products } from "../constants/data";
import Card from "./Card";
import { Product } from "../constants/utils";

export default function List() {
	return (
		<FlatList
			data={products}
			keyExtractor={(product: Product) => product.id}
			renderItem={({ item }) => <Card {...item} />}
			contentContainerStyle={{ paddingHorizontal: 15 }}
		/>
	);
}
