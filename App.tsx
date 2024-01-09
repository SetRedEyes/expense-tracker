import { StatusBar } from "expo-status-bar";
import { MainNavigatorContainer } from "./src/navigators/MainNavigatorContainer";

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <MainNavigatorContainer />
    </>
  );
}
