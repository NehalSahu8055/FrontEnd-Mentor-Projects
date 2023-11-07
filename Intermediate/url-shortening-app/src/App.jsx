import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  );
}

// use translate instead of top in navbar so that overlay can work properly
