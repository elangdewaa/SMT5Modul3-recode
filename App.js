import { useState } from "react";
import { StatusBar } from "react-native";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import Header from "./components/header";
import Separator from "./components/separator";
import List from "./screens/list";
import Article from "./screens/article";
import { config } from "@gluestack-ui/config"

// Functional Component
const App = () => {
  // State Declaration
  const [page, setPage] = useState("list");

  // Arrow Function inside Functional Component
  const changePage = (pageName) => {
    // Change state value
    setPage(pageName);
  };

  return (
    <GluestackUIProvider config={config}>
      <StatusBar style="light" backgroundColor="#AA0002" />
      <Header onListPress={() => changePage("list")} onArticlePress={() => changePage("article")} />
      <Separator height={30} />
      {page === "list" ? <List /> : page === "article" ? <Article /> : null}
    </GluestackUIProvider>
  );
};

export default App;
