import Student from "./Student"

function App() {

  return (
    <>
      <Student name="prin" age={30} isStudent={true} />
      <Student name="wean" age={32} isStudent={false} />
      <Student name="net" age={42} isStudent={false} />
      <Student name="ploy" age={39} isStudent={true} />
      <Student age={12} isStudent={true} />
    </>
  )
}

export default App
