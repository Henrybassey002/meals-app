//import { React, useState } from "react";
//import Parent from "./components/Parent";
//import Child from "./components/Child";
//import { UserProvider } from "../Kontext/kontext";
//import GrandChild from "./components/GrandChild";
//import Parent from "./components/Parent";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Search from "./components/Search";
import Modal from "./components/Modal";
import { useGlobalContext } from "./context";
function App() {
  //const [user] = useState({ name: "John, Henry", age: 25 });
  const { showModal, favorites } = useGlobalContext();
  return (
    <main>
      <Search />
      {favorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
      {/* <Parent user={user} /> */}
    </main>
  );
}

export default App;
