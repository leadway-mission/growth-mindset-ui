import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
const state = {
    labels: ['1','2','3','4', '5'],
    datasets: [
        {
            label: 'Growth in Mindset',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [3,3,5,12, 6]
        }
    ]
}

 const Chart = () => {
        return (
            <div>
                <Bar
                    data={state}
                    options={{
                        title:{
                            display:true,
                            text:'Average Employee Salary per Month',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }}
                />
            </div>
        );
}

export default Chart