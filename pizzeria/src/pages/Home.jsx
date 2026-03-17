import { useContext } from "react";
import Header from "../assets/Components/Header";
import CardPizza from "../assets/Components/CardPizza";
import { PizzaContext } from "../context/PizzaContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-4" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;