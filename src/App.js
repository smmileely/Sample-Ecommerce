import React, { useState, useEffect } from "react";
import RenderedList from "./RenderedList";
import { Button, TitleWrapper } from "./styles";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        "https://my-json-server.typicode.com/smmileely/fakeapi/db"
      )
        .then((res) => res.json())
        .catch((err) => {
          console.log(err);
        });
      //   console.log(data);
      setProducts(data.products);
      //   console.log(products);
    };
    getData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>s
          </tr>
        </thead>
        <tbody>
          <RenderedList items={products} />
        </tbody>
      </table>
      <Button pink>Search</Button>
      <TitleWrapper>Hello</TitleWrapper>
    </>
  );
};

export default App;
