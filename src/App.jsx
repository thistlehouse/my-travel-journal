
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'
import data from './data/data'

function App() {

  const cards = data.map(item => {
    return <Card 
      key = {item.id}
      {...item}
    />
  })

  return (
    <div className="app">
      <Navbar />
      <section className="card-list">
        {cards}                
      </section>  
    </div>
  )
}

export default App
