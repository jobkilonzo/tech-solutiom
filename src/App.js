import Nav from './component/Nav';
import { Contact, Footer, Home, Products, Portofolio, About} from './sections'


function App() {
  return (
    <div >
      <Nav />
      <div>
      <Home />
      </div>
      
      <div className='xl:px-16'>
        <Portofolio />
      </div>
      <div className="xl:px-16">
        <Products />
      </div>
      <div  className="bg-pale-blue xl:px-16 ">
        <Contact />
      </div>
      <div className='bg-red-500 pt-5 padding-x pb-8'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
