import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <CardPizza 
              name="Napolitana" 
              price={5950} 
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]} 
              img="https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&auto=format&fit=crop" 
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza 
              name="Española" 
              price={6950} 
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} 
              img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop" 
            />
          </div>
          <div className="col-12 col-md-4">
            <CardPizza 
              name="Pepperoni" 
              price={6950} 
              ingredients={["mozzarella", "pepperoni", "orégano"]} 
              img="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop" 
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;