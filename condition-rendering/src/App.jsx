import UserGreeting from "./UserGreeting"


function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} userName="BroCode" />
      {/* <UserGreeting /> */}
    </>
  )
}

export default App
