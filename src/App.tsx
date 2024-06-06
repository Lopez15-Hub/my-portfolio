import Body from "./components/body.component";
import Footer from "./components/footer.component";
import Header from "./components/header.component";

const App = () => {
  return (
    <div className="container mx-auto shadow-xl">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
