import React, { Fragment } from "react";
import Provider from "./provider";
import Context from "./context";

//! 1
const Agents = () => { //? NOT USED
  return (
    <AgentOne />
  );
}

//! 2
const AgentOne = () => { //? NOT USED
  return (
    <AgentTwo />
  );
}

//! 3
const AgentTwo = () => { //? NOT USED
  return (
    <AgentBond />
  );
}

//* This is also be used
// //! 4
// const AgentBond = () => { //? Directly Used here
//   return (
//     <Provider>
//       <Context.Consumer>
//         {
//           (context) => (
//             <Fragment>
//               <h3>Agent Information</h3>
//               <p>Mission Name: {context.data.mname}</p>
//               <h2>Mission Status: {context.data.accept}</h2>
//               <button onClick={context.isMissionAccepted} >Press To Accept</button>
//             </Fragment>
//           )
//         }
//       </Context.Consumer>
//     </Provider>
//   );
// }

// const App = () => { //* Started with Agent
//   return (
//     <div>
//       <h1>Context API</h1>
//       <Agents />
//     </div>
//   )
// }

//! 4
const AgentBond = () => { //? Directly Used here
  return (
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
            <h3>Agent Information</h3>
            <p>Mission Name: {context.data.mname}</p>
            <h2>Mission Status: {context.data.accept}</h2>
            <button onClick={context.isMissionAccepted} >Press To Accept</button>
          </Fragment>
        )
      }
    </Context.Consumer>
  );
}

const App = () => { //* Started with Agent
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  )
}

export default App;