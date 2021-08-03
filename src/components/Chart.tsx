import React, {FC} from 'react';
import CanvasJSReact from '../vendors/canvasjs/canvasjs.react';

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface IChartProps {
    options: any,
}

const Chart: FC<IChartProps> = ({options}: IChartProps) => {

    return (
        <div style={{
            "marginBottom":"20px",
            "padding":"15px",
            "boxShadow":"3px 3px 4px rgba(0,0,0,0.1)",
            "backgroundColor":"#fff"
        }}>
            <CanvasJSChart options = {options} />
        </div>
    );
}

export default React.memo(Chart);