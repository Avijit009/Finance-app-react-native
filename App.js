import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store from "./redux/store";
import React from "react";

import Navigator from "./components/Navigator";



const navigationRef = React.createRef();

export const navigate = (name) => {
  navigationRef.current && navigationRef.current.navigate(name)
}




export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer ref={navigationRef}>
        <Navigator />
      </NavigationContainer>

    </Provider>
  );
}
