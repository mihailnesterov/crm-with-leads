import React, {FC} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {
    scaleBand,
} from '@devexpress/dx-chart-core';
import {
    ArgumentScale,
    Stack,
    ValueScale,
    EventTracker,
    Palette
} from '@devexpress/dx-react-chart';
import {
    Chart,
    BarSeries,
    LineSeries,
    PieSeries,
    ArgumentAxis,
    ValueAxis,
    Legend,
    Title,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';

interface ISales {
    _id: string;
    manager: string;
    client: string;
    document?: string;
    amount: number;
    tags?: any[];
    comment?: string;
    created?: string;
}
const sales: ISales[] = [
    {
        "_id": "6fd45gf4vf54g8fs9sf",
        "manager": "608af5e931f85fb848ae1079",
        "client": "x9dew6hjg877k5g4k3h",
        "document": "15689",
        "amount": 295680.00,
        "tags": ["#АкцияЛето2020"],
        "comment": "По акции Лето2020",
        "created": "05.08.2020",
    },
    {
        "_id": "d65r84gg6f21ds2d56d",
        "manager": "608af5e931f85fb848ae1079",
        "client": "x9dew6hjg877k5g4k3h",
        "document": "18965",
        "amount": 180600.59,
        "tags": ["#допродажа"],
        "comment": "Дорофеев П.С. +79150568976",
        "created": "25.11.2020",
    },
    {
        "_id": "t65df321d5g4d5gdr89",
        "manager": "608af5e931f85fb848ae1079",
        "client": "x9dew6hjg877k5g4k3h",
        "document": "19301",
        "amount": 160508.40,
        "tags": ["#екатеринбург", "#филиал"],
        "comment": "Поставка в филиал в Екатеринбурге",
        "created": "16.03.2021",
    }
    ,
    {
        "_id": "g65gsf5d46a8we78r6ew",
        "manager": "608af5e931f85fb848ae1079",
        "client": "56dfr6gr56rcvb4g7b5",
        "document": "13236",
        "amount": 456890.00,
        "tags": ["#красноярск"],
        "comment": "45463",
        "created": "10.07.2020",
    }
]

interface ISalesByRegions {
    month: string;
    region1: number;
    region2: number; 
    region3: number; 
    region4: number; 
    region5: number; 
    price: number;
}
const salesByRegions: ISalesByRegions[] = [
    {
        month: 'январь', 
        region1: 241.142, 
        region2: 482.150, 
        region3: 230.174, 
        region4: 23.640, 
        region5: 23.640, 
        price: 70050,
    }, {
        month: 'февраль', region1: 511.334, region2: 437.343, region3: 175.97, region4: 108.24, region5: 525.07, price: 100400
    }, {
        month: 'март', region1: 324.359, region2: 374.867, region3: 165.24, region4: 141.06, region5: 516.040, price: 230580
    }, {
        month: 'апрель', region1: 410.060, region2: 297.513, region3: 196.87, region4: 159.63, region5: 312.82, price: 208450
    }, {
        month: 'май', region1: 813.505, region2: 279.225, region3: 200.38, region4: 144.97, region5: 487.10, price: 198000
    }, {
        month: 'июнь', region1: 516.157, region2: 437.966, region3: 142.87, region4: 121.57, region5: 512.77, price: 525580
    },
  ];

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        //backgroundColor: theme.palette.background.paper,
        //backgroundColor: '#ddd',
        border: '1px #f5f5f5 solid',
        //border: '1px #3f51b5 solid',
        borderRadius: '4px',
        //boxShadow: '2px 2px 3px rgba(0,0,0,0.15)',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    width100: {
        width: '100%',
        border: '1px #f5f5f5 solid',
        padding: theme.spacing(2),
    },
    flex1: {
        flex: 1,
        border: '1px #f5f5f5 solid',
        padding: theme.spacing(2),
    },
}));

const Label = (symbol: any) => (props: any) => {
    const { text } = props;
    return (
      <ValueAxis.Label
        {...props}
        text={text + symbol}
      />
    );
  };
  
  const PriceLabel = Label(' руб.');
  const LabelWithThousand = Label(' k');
  
  const modifyOilDomain = (domain: any) => [domain[0], 2200];
  const modifyPriceDomain = () => [0, 1000000];

interface IProps {
    data?: any,
}

const TopBar: FC<IProps> = ({data}: IProps) => {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                <Chart
                    data={salesByRegions}
                >
                <ValueScale name="oil" modifyDomain={modifyOilDomain} />
                <ValueScale name="price" modifyDomain={modifyPriceDomain} />

                <ArgumentAxis />
                <ValueAxis
                    scaleName="oil"
                    labelComponent={LabelWithThousand}
                />
                <ValueAxis
                    scaleName="price"
                    position="right"
                    labelComponent={PriceLabel}
                />

                <Title
                    text="Продажи по регионам"
                />

                <BarSeries
                    name="Москва"
                    valueField="region1"
                    argumentField="month"
                    scaleName="oil"
                />
                <BarSeries
                    name="Краснодарский край"
                    valueField="region2"
                    argumentField="month"
                    scaleName="oil"
                />
                <BarSeries
                    name="Новосибирская область"
                    valueField="region3"
                    argumentField="month"
                    scaleName="oil"
                />
                <BarSeries
                    name="Красноярский край"
                    valueField="region4"
                    argumentField="month"
                    scaleName="oil"
                />
                <BarSeries
                    name="Забайкальский край"
                    valueField="region5"
                    argumentField="month"
                    scaleName="oil"
                />
                <LineSeries
                    name="Средний чек"
                    valueField="price"
                    argumentField="month"
                    scaleName="price"
                />
                <Stack
                    stacks={[
                    { series: ['Москва', 'Краснодарский край', 'Новосибирская область', 'Красноярский край', 'Забайкальский край'] },
                    ]}
                />
                <Legend />
                </Chart>
                </Paper>
            </Grid>
             
        </Grid>
    );
}

export default React.memo(TopBar);