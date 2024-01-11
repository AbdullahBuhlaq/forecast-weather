import Footer from "./Footer";
import Header from "./Header";
import WeatherContent from "./WeatherContent";

function App() {
  return (
    <>
      <div className="container col">
        <Header />
        <WeatherContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
