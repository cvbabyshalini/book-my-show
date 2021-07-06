import User from "./components/user"

//JSX
function App() {
  return ( 
  <div>
    <h1>Users</h1>
    <User name="Shalini" description="FSWD" />
    <User name="Yoshita" description="CIVILS" />
  </div>
  );
}

export default App;

// Props - A data that is being passed from one component to another
// state - A set of data that an individual component holds.
