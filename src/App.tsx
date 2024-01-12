// import ListGroup from "./Components/ListGroup";

import Alert from "./Components/Alert";
import Buttons from "./Components/Buttons";
import { useState } from "react";

// function App() {
//   let items = ["New york", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// import Alert from "./Components/Alert";

// const App = () => {
//   return (
//     <div>
//       <Alert>Hello World</Alert>
//     </div>
//   );
// };

// export default App;

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Buttons onClick={() => setAlertVisibility(true)}>My Button</Buttons>
    </div>
  );
}

export default App;
