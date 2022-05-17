import React, { useState, createContext, useEffect, useMemo } from "react";

import { productRequest, productTransform, userRequest } from "./product.service";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [driver, setDriver] = useState("");
  const [tire, setTire] = useState(0);
  const [pitStrategy, setpitStrategy] = useState(0);
  const [pitCount, setPitCount] = useState(0);

  const retrieveProducts = () => {
    setIsLoading(true);
    setTimeout(() => {
      productRequest()
        .then(productTransform)
        .then((results) => {
          setIsLoading(false);
          setProducts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  const retrieveUsers = () => {
    setIsLoading(true);
    setTimeout(() => {
      userRequest()
        .then(productTransform)
        .then((results) => {
          setIsLoading(false);
          setUsers(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveProducts();
    retrieveUsers();
  }, []);

  
  return (
    <ProductsContext.Provider
      value={{
        products,
        users,
        isLoading,
        error,
        config : {
          driver,
          setDriver,
          tire,
          setTire,
          pitStrategy,
          setpitStrategy,
          pitCount,
          setPitCount
        }
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
