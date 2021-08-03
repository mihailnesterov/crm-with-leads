import React, {FC, useState, useRef, useCallback } from 'react';
//import { createStyles, lighten, makeStyles, withStyles, Theme, StyleRules } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {
  DataTypeProvider,
  PagingState,
  IntegratedPaging,
  FilteringState,
  IntegratedFiltering,
  SearchState,
  SortingState,
  IntegratedSorting,
  IntegratedSelection,
  SelectionState,
  IntegratedSummary,
  SummaryState,
} from '@devexpress/dx-react-grid';
import {
  scaleBand,
} from '@devexpress/dx-chart-core';
import {
  ArgumentScale,
  Stack,
  ValueScale,
  EventTracker
} from '@devexpress/dx-react-chart';
import {
    Chart,
    BarSeries,
    LineSeries,
    ArgumentAxis,
    ValueAxis,
    Legend,
    Title,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import {
  Grid, 
  Table, 
  TableHeaderRow,
  PagingPanel,
  TableFilterRow,
  Toolbar,
  SearchPanel,
  TableSelection,
  ExportPanel,
  TableSummaryRow,
} from '@devexpress/dx-react-grid-material-ui';
import { GridExporter } from '@devexpress/dx-react-grid-export';
import { saveAs } from 'file-saver';

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
        "client": "ООО Магнит",
        "document": "15689",
        "amount": 295680.00,
        "tags": ["#АкцияЛето2020"],
        "comment": "По акции Лето2020",
        "created": "05.08.2020",
    },
    {
        "_id": "d65r84gg6f21ds2d56d",
        "manager": "608af5e931f85fb848ae1079",
        "client": "ООО Магнит",
        "document": "18965",
        "amount": 180600.59,
        "tags": ["#допродажа"],
        "comment": "Дорофеев П.С. +79150568976",
        "created": "25.11.2020",
    },
    {
        "_id": "t65df321d5g4d5gdr89",
        "manager": "608af5e931f85fb848ae1079",
        "client": "Красцветмет",
        "document": "19301",
        "amount": 160508.40,
        "tags": ["#екатеринбург", "#филиал"],
        "comment": "Поставка в филиал в Екатеринбурге",
        "created": "16.03.2021",
    },
    {
        "_id": "g65gsf5d46a8we78r6ew",
        "manager": "608af5e931f85fb848ae1079",
        "client": "Красцветмет",
        "document": "13236",
        "amount": 456890.00,
        "tags": ["#красноярск"],
        "comment": "45463",
        "created": "10.07.2020",
    },
    {
        "_id": "6fd45gf4vf54g8fs9sf",
        "manager": "608af5e931f85fb848ae1079",
        "client": "ООО Роса",
        "document": "15689",
        "amount": 286609.50,
        "tags": ["#АкцияЛето2020"],
        "comment": "По акции Лето2020",
        "created": "12.06.2020",
    }
]

const arrayToStringFormatter = ({ value }: any ) => (
    value.join(', ')
);
const ArrayToStringProvider = (props: any) => (
    <DataTypeProvider
        {...props}
        formatterComponent={arrayToStringFormatter}
    />
)
const CurrencyFormatter = ({ value }: any ) => (
    <span style={{ color: '#2b8554' }}>
        { value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' }) }
    </span>
);
const CurrencyTypeProvider = (props: any) => (
    <DataTypeProvider
      formatterComponent={CurrencyFormatter}
      {...props}
    />
);
/*const DateFormatter = ({ value }: any ) => {
    const _date: any = new Date(value);
    return(`${_date.getDay()}.${_date.getMonth()}.${_date.getFullYear()}`)
};
const DateTypeProvider = (props: any) => (
  <DataTypeProvider
    formatterComponent={DateFormatter}
    {...props}
  />
);*/

const getRowId = (row: ISales) => row._id;

const onSave = (workbook: any) => {
    workbook.xlsx.writeBuffer().then((buffer: any) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Sales.xlsx');
    });
};

const DxSalesList: FC = () => {
 
    const [columns] = useState([
        { name: 'client', title: 'Клиент' },
        { name: 'document', title: '№ документа' },
        { name: 'amount', title: 'Сумма, руб.' },
        { name: 'created', title: 'Дата' },
        { name: 'tags', title: 'Теги' },
        { name: 'comment', title: 'Комментарий' },
    ]);

    const [totalColumns] = useState([
        { columnName: 'amount', type: 'count' },
        { columnName: 'amount', type: 'sum' },
        { columnName: 'amount', type: 'avg' },
        { columnName: 'amount', type: 'max' },
        { columnName: 'amount', type: 'min' },
    ]);

    const [arrayToStringColumns] = useState<string[]>(['tags']);

    const [dateColumns] = useState<string[]>(['created']);

    const [tableColumnExtensions] = useState<any[]>([
        { columnName: 'tags', wordWrapEnabled: true },
        { columnName: 'comment', wordWrapEnabled: true },
    ]);

    const [currencyColumns] = useState<string[]>(['amount']);

    const [rows] = useState<any>(sales);

    const [pageSizes] = useState<number[]>([10, 20, 50, 0]);

    const [selection, setSelection] = useState<any[]>([]);

    const exporterRef = useRef<any>(null);
    
    const startExport = useCallback(() => {
        exporterRef.current.exportGrid();
    }, [exporterRef]);

    

    return (
        <Paper style={{
            "boxShadow": "3px 3px 4px rgba(0,0,0,0.15)", 
            "padding":"20px", 
            "marginBottom":"40px"
        }}>
            {
                selection.length > 0 ? <span>
                    Выбрано:
                    {' '}
                    {selection.length}
                </span> : <span>
                    Всего:
                    {' '}
                    {rows.length}
                </span>
            }
            {/*<div>
                <Chart
                    data={sales}
                >

                    <ValueScale name="created" />
                    <ValueScale name="amount" />

                    
                    <ArgumentAxis
                        showTicks={false}
                    />

                    <ValueAxis scaleName="amount" showGrid={true} showLine showTicks />
                    <ValueAxis scaleName="created" position="right" showGrid={true} showLine showTicks />


                    <BarSeries
                        name="Сумма, руб."
                        valueField="amount"
                        argumentField="created"
                        color="#54b962"
                        scaleName="created"
                    />
                    
                    <Stack
                        stacks={[
                            { series: sales.map((item: any) => item.sum) },
                        ]}
                    />
                    
                    <Legend />
                    
                    <Title text="Отчет по продажам" />
                    
                    <EventTracker />
                    <Tooltip />
                    
                </Chart>
            </div>*/}
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
            >
                
                <CurrencyTypeProvider
                    for={currencyColumns}
                />

                <ArrayToStringProvider
                    for={arrayToStringColumns}
                />

                {/*<DateTypeProvider
                    for={dateColumns}
                />*/}
                
                <PagingState
                    defaultCurrentPage={0}
                    defaultPageSize={pageSizes[0] || 10}
                />
                <SelectionState
                    selection={selection}
                    onSelectionChange={setSelection}
                />
                <IntegratedSelection />
                <IntegratedPaging />

                <SearchState defaultValue="" />

                <SortingState
                    defaultSorting={[{ columnName: 'created', direction: 'asc' }]}
                />
                <IntegratedSorting />

                <FilteringState defaultFilters={[]} />
                <IntegratedFiltering />

                <SummaryState
                    totalItems={totalColumns}
                />
                <IntegratedSummary />

                <Table
                    messages={ {noData: 'Не найдено'}  } 
                    columnExtensions={tableColumnExtensions}
                />
                
                <TableFilterRow messages={ {filterPlaceholder: 'Фильтр'}  } />

                <TableHeaderRow 
                    showSortingControls 
                    messages={ {sortingHint: 'Сортировка'}  }
                />

                <TableSummaryRow 
                    messages={{
                        count: 'Кол-во',
                        sum: 'Итого',
                        min: 'Минимум',
                        max: 'Максимум',
                        avg: 'Средний чек'
                    }}
                />

                <TableSelection showSelectAll highlightRow={true} />

                <Toolbar />
                <SearchPanel 
                    messages={{
                        searchPlaceholder: 'Найти...'
                    }} 
                />

                <ExportPanel 
                    startExport={startExport} 
                    messages={{
                        showExportMenu: 'Экспорт в Excel',
                        exportAll: 'Все строки',
                        exportSelected: 'Отмеченные строки'
                    }} 
                />

                <PagingPanel 
                    pageSizes={pageSizes} 
                    messages={{
                        rowsPerPage: 'Кол-во строк:', 
                        showAll: 'Все' 
                    }} 
                />
            </Grid>
            <GridExporter
                ref={exporterRef}
                rows={sales}
                columns={columns}
                onSave={onSave}
            />
      </Paper>
    );
}

export default React.memo(DxSalesList);
