import {Pie} from 'react-chartjs-2'
import { lineChartData } from '../Data/lineChartData'
import {Chart as Chartjs,Tooltip,Legend,ArcElement} from 'chart.js'
Chartjs.register(
ArcElement,
Tooltip,
Legend
)

export const Piechart=()=>{
    const options={}
    return<>
    <Pie options={options}data={lineChartData}/>
    </>
}