import Review from "./Review";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <h2> Our Reviews </h2>
        <div className="underline"></div>
        <Review />
      </section>
    </div>
  );
}

export default App;
