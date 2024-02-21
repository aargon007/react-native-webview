import * as React from "react";
import { WebView } from "react-native-webview";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle={"default"} />
			<WebView
				style={styles.webview}
				bounces={false}
				source={{ uri: "https://muhaiminul101.vercel.app" }}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "rgb(0, 0, 0)",
	},
	webview: {
		flex: 1,
		// marginTop: 20,
	},
});
