import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const add = (userName) => `@${userName}`;
  //const midudev = {isFollowin: false, userName:}
  const [name, setName] = useState("midudev");
  return (
    <section className="App">
      <TwitterFollowCard
        isFollowin={true}
        userName={name}
        addAt={add}
        name="Miguel Angel Durán"
      >
        Miguel Angel Durán
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowin={false}
        userName="pheralb"
        addAt={add}
        name="Pablo Hernandez"
      >
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowin
        userName="elonmusk"
        name="Elon Musk"
        addAt={add}
      >
        Elon Musk
      </TwitterFollowCard>
      <TwitterFollowCard
        isFollowin={false}
        userName="supermanuelo"
        addAt={add}
        name="Manuel Llano"
      >
        Manuel Llano
      </TwitterFollowCard>
      <button onClick={() => setName("pedromichel")}>Cambio nombre</button>
    </section>
  );
}
