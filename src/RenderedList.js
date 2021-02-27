import React from "react";

const RenderedList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((prop) => (
        <tr key={prop.id}>
          <td>{prop.category}</td>
          <td>{prop.title}</td>
          <td>{prop.description}</td>
          <td>{prop.price}</td>
          <td>
            <img
              src={prop.image}
              alt={prop.title}
              style={{ height: "100px", width: "100px" }}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderedList;
