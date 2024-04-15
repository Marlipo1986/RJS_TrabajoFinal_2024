import { useEffect, useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });

        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={"containerNavbar nav-container navbar"}>
        <Link to="/">
          <h4 className="navbar-logo">Restaurapp</h4>
        </Link>
        <ul className="categories listaNav">
          <Link to={"/"} className="listaNav">
            <li>Menú Completo</li>
          </Link>
          {categories.map((category) => (
            <Link key={category.id} to={category.path} className="listaNav">
              <li>{category.name}</li>
            </Link>
          ))}
          <CartWidget />
        </ul>
      </div>
    </>
  );
};
