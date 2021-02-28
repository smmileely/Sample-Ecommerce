import React, { useState, useEffect } from "react";
import RenderedList from "./RenderedList";
import { Button, Title, Wrapper } from "./styles";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
// import About from "./About";
import Pricing from "./Pricing";
import { Container } from "./styles/Container";
import { GlobalStyle } from "./styles/Global";

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
      <Router>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Container>
            <Route path="/" exact component={Home} />
            <Route path="/pricing" component={Pricing} />
          </Container>
        </Switch>
      </Router>

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
      <Wrapper>
        <Title>Hello</Title>
      </Wrapper>
    </>
  );
};

export default App;
