import "./Chart.css";
import ChartBar from "./ChartBar.js";
const Chart=(props)=>{
    const dataPointValues=props.datapoints.map(datapoint=>datapoint.value);
    const totalMaximum=Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
                props.datapoints.map((datapoint)=>
                    (<ChartBar key={datapoint.lable} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label}/>)
                )
            }
        </div>
    )
}
export default Chart;