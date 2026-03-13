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
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" 
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
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3" 
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;