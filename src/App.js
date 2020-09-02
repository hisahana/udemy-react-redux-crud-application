import React, { Component } from 'react';

// Class Component
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Cat />
        <Cat />
        <Cat />
        <Cat />
        <Cat />
      </React.Fragment>
    )
  }
}

// Functional Component
// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={() => console.log('I am clicked')} />
//     </React.Fragment>
//   )
// }

const Cat = () => {
  return <div>Meow!</div>;
}

export default App;
