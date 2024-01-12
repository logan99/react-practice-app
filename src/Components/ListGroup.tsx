// import { MouseEvent } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void

  onSelectItem: (item: string) => void; // similar to onClick property
}

import { useState } from "react";

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0; // -1 means no items is selected, 0 means first item
  // Hook -- tap into built-in feature in React
  // use State will tell that the value can change
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = [];

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>List </h1>
  //       <p> No items found</p>
  //     </>
  //   );

  // const message = items.length === 0 ? <p>No items found</p> : null;

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No items found</p> : null;
  // };

  //EventHandler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No items found</p> : null}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
