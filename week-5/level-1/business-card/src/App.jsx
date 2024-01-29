import Card from './components/Card-Component/Card';
import './App.css'
function App() {


  return (
    <>
      <Card
        fullName="Yash"
        description="A full Stack developer"
        interests={["Backend","Open Source"]}
        linkedin="https://linkedin.com"
        twitter="https://twitter.com"
      />
      
    </>

  )
}

export default App
