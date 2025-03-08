import {useState, useEffect} from 'react'

const UseStateUseEffect = () => {

    const [value, setVaule] = useState(0)

    useEffect(() => {
    
        console.log('call useEffect')
        document.title = 'Increment ${value}'
}, [value]);

  return <div>
      <h2>{value}</h2>
      <button onClick={() => setVaule(value + 1)}>Click me</button>
      <button onClick={() => setVaule(value - 1)}>Click me -</button>
    </div>
  
}

export default UseStateUseEffect
