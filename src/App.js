import { useState, useEffect } from "react";
function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((users) => {
        return users.json()
    }).then((data) => {
      
      setData(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  const [data, setData] = useState([])
  // const [filteredData, setFilteredData] = useState([])

const handleClick = () => {
  setData([
    {
      id : 1,
      name : 'today',
      age : 31
    },
    {
      id : 8,
      name : 'today',
      age : 31
    },
    {
      id : 7,
      name : 'today',
      age : 31
    },
    {
      id : 6,
      name : 'today',
      age : 31
    },
    {
      id : 5,
      name : 'today',
      age : 31
    },
    {
      id : 2,
      name : 'today',
      age : 31
    },
    {
      id : 3,
      name : 'today',
      age : 31
    },
    {
      id :4 ,
      name : 'neeche wala',
      age : 31
    },
  ])
}

const handleFilter = () => {
  const filtData =  data.filter((item) => {
    return item.id < 6 
  })
  setData(filtData);
}
  return (
    <>
      <h1 key={1}>hello world {data.name}</h1>
      <h1 >hello world {data.age}</h1>
      {
        data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        ))  

      }

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleFilter}>Filter data</button>
    </>
  );
}

export default App;
