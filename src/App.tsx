import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import { Provider } from "react-redux";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Navigation } from "./navigation";
import { store } from "./app/store";

Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <Provider store={store}>
      <Navigation
        linking={{
          enabled: "auto",
          prefixes: ["helloworld://"],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </Provider>
  );
}
