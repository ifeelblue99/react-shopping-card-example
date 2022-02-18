import "./styles.css";
import Card from "./Card";
import data from "./data";

export default function App() {
  //let dataUrl = "https://fakestoreapi.com/products";

  const cards = data.map((el) => {
    return <Card key={el.id} data={el} />;
  });

  return <div className="App">{cards}</div>;
}
