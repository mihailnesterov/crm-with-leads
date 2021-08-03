import React, {FC, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    LineSeries,
    Legend,
    Title,
    ZoomAndPan,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';

interface IChartProps {
    data?: any,
}


const DxChart: FC<IChartProps> = ({data}: IChartProps) => {

    const [viewport, setViewport] = useState();
    
    return (
        <div style={{
            "marginBottom":"20px",
            "padding":"25px",
            "boxShadow":"3px 3px 4px rgba(0,0,0,0.1)",
            "backgroundColor":"#fff"
        }}>
            <Paper>
                <Chart data={data}>
                    <ValueScale name="sale" />
                    <ValueScale name="total" />

                    <ArgumentAxis />
                    <ValueAxis scaleName="sale" showGrid={false} showLine showTicks />
                    <ValueAxis scaleName="total" position="right" showGrid={false} showLine showTicks />

                    <BarSeries
                        name="Units Sold"
                        valueField="sale"
                        argumentField="month"
                        scaleName="sale"
                    />

                    <LineSeries
                        name="Total Transactions"
                        valueField="total"
                        argumentField="month"
                        scaleName="total"
                    />

                    <ZoomAndPan viewport={viewport} onViewportChange={() => setViewport} />

                    <Legend />
                    <Title text="Title" />
                </Chart>
            </Paper>
        </div>
    );
}

export default React.memo(DxChart);