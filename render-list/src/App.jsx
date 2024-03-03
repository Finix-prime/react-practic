import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "orange", cal: "aa" },
    { id: 2, name: "apple", cal: 95 },
    { id: 3, name: "grape", cal: 15 },
    { id: 4, name: "coconut", cal: 120 },
    { id: 5, name: "banana", cal: 100 },
    { id: 6, name: "pineapple", cal: 60 },
  ];

  const vegetables = [
    { id: 7, name: "potatoes", cal: 110 },
    { id: 8, name: "celery", cal: 15 },
    { id: 9, name: "carrots", cal: 25 },
    { id: 10, name: "corn", cal: 65 },
    { id: 11, name: "brocolli", cal: 35 },
    { id: 12, name: "kelh", cal: 10 },
  ];

  return (
    <>
      {fruits.length > 0 && <List item={fruits} category="Fruits" />}
      {fruits.length > 0 && <List item={vegetables} category="Vegetables" />}
    </>
  )
}

export default App
