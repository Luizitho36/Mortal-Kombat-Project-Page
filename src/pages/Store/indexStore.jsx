import CartCount from "../../components/CartCount/CartCount";
import MapProducts from "../../components/MapProducts/MapProducts";

export const StorePage = () => {
  return (
    <div className="e-Commerce-principal">
      <CartCount />
      <br></br> <br></br>
      <MapProducts />
      <br></br>
    </div>
  );
};
