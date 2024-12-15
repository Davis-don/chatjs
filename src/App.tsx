
import './App.css'
import { LineGraph } from './components/Line'
import { BarChart } from './components/Bar'
import { Piechart } from './components/Pie'

function App() {
 
  return (
   <div className="app">
    <h1 style={{textAlign:'center'}}>Linegraph</h1>
    <LineGraph/>
    <h1 style={{textAlign:'center'}}>Bargraph</h1>
    <BarChart/>
    <h1 style={{textAlign:'center'}}>Piechart</h1>
    <Piechart/>
   </div>
  )
}

export default App
