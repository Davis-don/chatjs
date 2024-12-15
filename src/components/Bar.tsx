import {Bar} from 'react-chartjs-2'
import { lineChartData } from '../Data/lineChartData'
import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
PointElement,
BarElement,
Title,
Tooltip,
Legend,
} from 'chart.js'



Chartjs.register(
CategoryScale,
LinearScale,
PointElement,
BarElement,
Title,
Tooltip,
Legend
)

export const BarChart=()=>{
    const options = {}
    return<>
    <Bar options={options} data={lineChartData}/>
    </>
}