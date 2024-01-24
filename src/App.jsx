
import Nav from "./Components/Nav";
import{
  Hero,
  Footer,
  Popularproducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
  CustomerReview} from "./sections";

  
const App =() =>{
  return (
<main className="relative">
  <Nav/>
  <section className="xl:padding-l wide: padding-r padding-b">
   <Hero/>
  </section>
  
  <section className="padding">
   <Popularproducts/>
  </section>
  <section className="padding">
   <SuperQuality/>
  </section>
  <section className="padding-x py-10">
   <Services/>
  </section>
  <section className="padding">
   <SpecialOffers/>
  </section>
  <section className=" bg-pale-blue padding">
   <CustomerReview/>
  </section>
  <section className="padding-x sm:py-13 py-16 w-full">
   <Subscribe/>
  </section>
  <section className="bg-black padding-x padding-t pb-8">
  <Footer/>
  </section>
 
</main>
);
};
export default App;