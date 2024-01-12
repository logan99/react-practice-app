// PascalCasing -- where the React dev expects us to follow

// function Message() {
//   //where the UI looks like and where we use the component
//   const name = "Nitish";
//   return <h1>Hello, {name}</h1>;
//   // Why are we returning HTML in the middle of JavaScript? Well, React takes care of it.
//   // This is the JSX syntax. So, when it runs, it is converted to JavaScript.
// }

// export default Message;

// if statement example

function Message() {
  const name = "";
  if (name) return <h1>Hello, {name}</h1>;
  return <h1>Hello, World!</h1>;
}

export default Message;
