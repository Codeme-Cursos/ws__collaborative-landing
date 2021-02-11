import Banner from "./Banner";
import Cards from "./Cards";
import Footer from "./Footer";
import Form from "./Form";
import Modal from "./Modal";
import Navbar from "./Navbar";
import Table from "./Table";



function App() {
  return (
    <div className="container">
      <Navbar />
      <Banner/>
      <Cards/>
      <Table/>
      <Modal/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
