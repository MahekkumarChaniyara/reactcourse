import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart=(props)=>{
    return (
        <div className="chart">
            {
                props.datapoint.map((datapoint)=>
                    (<ChartBar key={datapoint.lable} value={datapoint.value} maxValue={null} label={datapoint.label}/>)
                )
            }
        </div>
    )
}
export default Chart;