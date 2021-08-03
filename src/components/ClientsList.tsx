import React, {FC, useEffect, useMemo, useState, useCallback} from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import PersonIcon from '@material-ui/icons/Person';

import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Button from '@material-ui/core/Button';

import { useClientActions } from '../hooks/useClientActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Loader from './Loader';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


interface Data {
    idx: number;
    _id: string;
    name: string;
    inn: string;
    status: string;
    region: any;
    tags: any;
    contacts: any[];
    company: {suggestions: any, value: string};
    condition: object;
  }
  
  function createData(
    idx: number,
    _id: string,
    name: string,
    inn: string,
    status: string,
    region: any,
    tags: any,
    contacts: any[],
    company: any,
    condition: object,
  ): Data {
    return { idx, _id, name, inn, status, region, tags, contacts, company, condition };
  }
  
  const rows = [createData(0, '', '', '', '', [], [], [], {}, {})];
  
  function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  
  type Order = 'asc' | 'desc';
  
  function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
  ): (a: { [key in Key]: number | string | object | any }, b: { [key in Key]: number | string | object | any }) => number {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  
  function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  
  interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
    width: string;
  }
  
  const headCells: HeadCell[] = [
    { id: 'idx', numeric: true, disablePadding: false, width: '40px', label: '№' },
    { id: 'name', numeric: false, disablePadding: true, width: '25%', label: 'Наименование компании' },
    { id: 'inn', numeric: false, disablePadding: false, width: '12%', label: 'ИНН' },
    { id: 'status', numeric: false, disablePadding: false, width: '12%', label: 'Статус' },
    { id: 'region', numeric: false, disablePadding: false, width: 'auto', label: 'Регион' },
    { id: 'tags', numeric: false, disablePadding: false, width: 'auto', label: 'Теги' },
  ];
  
  interface EnhancedTableProps {
    classes: ReturnType<typeof useStyles>;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
  }
  
  function EnhancedTableHead(props: EnhancedTableProps) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

    
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" style={{"fontWeight":"bold","backgroundColor":"#f6f6f6"}}>
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'center' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              width={headCell.width}
              style={{"fontWeight":"bold","backgroundColor":"#f6f6f6"}}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
      },
      highlight:
        theme.palette.type === 'light'
          ? {
              color: theme.palette.secondary.main,
              backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
          : {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.secondary.dark,
            },
      title: {
        flex: '1 1 100%',
      },
    }),
  );
  
  interface EnhancedTableToolbarProps {
    numSelected: number;
  }
  
  const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
            {numSelected} клиентов выбрано
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
            <h3>Клиенты</h3>
          </Typography>
        )}
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: '100%',
      },
      paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
      table: {
        minWidth: 750,
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
    }),
  );
  
const ClientsList: FC = () => {

    const classes = useStyles();
    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('idx');
    const [selected, setSelected] = React.useState<string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const newSelecteds = rows.map((n) => n.name);
        setSelected(newSelecteds);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected: string[] = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
  
      setSelected(newSelected);
    };
  
    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDense(event.target.checked);
    };
  
    const isSelected = (name: string) => selected.indexOf(name) !== -1;
  
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    const {clients, loading, error} = useTypedSelector(state => state.client);
    const {fetchClients} = useClientActions();

    useEffect(() => {
        fetchClients();
        
        rows.splice(0, rows.length);
        
        for(let i=0; i < clients.length; i++) {
            rows.push(createData(
                (i+1),
                clients[i]._id, 
                clients[i].name, 
                clients[i].inn, 
                clients[i].status, 
                clients[i].region.join(', '), 
                clients[i].tags.join(' '),
                clients[i].contacts, 
                clients[i].company, 
                clients[i].condition, 
                )
            );
        }
    }, []);

    /*const [filials, setFilials] = useState(() => {
        const result = [];
        for(let i=0; i < rows.length; i++) {
            const suggestions = rows[i].company.suggestions;
            if( rows[i].company && suggestions !== undefined && suggestions.length > 1) {
                suggestions.shift();
                for(let j=0; j < suggestions.length; j++) {
                    result.push(suggestions[j]);
                }
            }
        }
        return result;
    });*/

    const getFilialsByInn = useCallback((inn) => {
        const result = [];
        for(let i=0; i < rows.length; i++) {        
            const suggestions = rows[i].company.suggestions;            
            if( rows[i].company && suggestions !== undefined && suggestions.length > 1) {
                suggestions.shift();
                for(let j=0; j < suggestions.length; j++) {
                    if(suggestions[j].data.inn === inn ) {
                        result.push(suggestions[j]);
                    }
                    
                }
            }
            
        }
        return result;
    },[rows]);


    if( loading ) {
        return <><Loader /></>;
    }

    if( error ) {
        return <><h1>{error}</h1></>
    }

    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? 'small' : 'medium'}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(rows[index].name);
                    const labelId = `enhanced-table-checkbox-${index}`;
  
                    return (
                        <>
                        <TableRow
                            hover
                            onClick={(event) => handleClick(event, rows[index].name)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={rows[index].name}
                            selected={isItemSelected}
                        >
                            
                            <TableCell padding="checkbox">
                            <Checkbox
                                checked={isItemSelected}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            </TableCell>

                            <TableCell align="left">{row.idx}</TableCell>
                            
                            <TableCell component="th" id={labelId} scope="row" padding="none">
                            {row.name}
                            <IconButton aria-label="expand row" size="medium" onClick={() => isSelected(rows[index].name)}>
                                { isItemSelected ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            </IconButton>
                            </TableCell>
                            
                            <TableCell align="left">{row.inn}</TableCell>
                            <TableCell align="left">{row.status}</TableCell>
                            <TableCell align="left">{row.region}</TableCell>
                            <TableCell align="left">{row.tags}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                <Collapse in={isItemSelected} timeout="auto" unmountOnExit>
                                    <Box margin={1}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        { Object.values(row.company).length > 0 && Object.values(row.company)[0] !== {} ? Object.values(row.company)[0][0].data.name.full_with_opf : row.name }
                                    </Typography>
                                    <Table size="small" aria-label="purchases">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell align="right"><Button variant="contained" size="small" color="primary">Реквизиты</Button></TableCell>
                                            <TableCell align="right"><Button variant="contained" size="small" color="primary">Контакты</Button></TableCell>
                                            <TableCell align="right"><Button variant="contained" size="small" color="secondary">Показатели</Button></TableCell>
                                            <TableCell align="right"><Button variant="outlined" size="small" color="primary">Аффилиаты</Button></TableCell>
                                            <TableCell align="right"><Button variant="outlined" size="small" color="primary">Продажи ($)</Button></TableCell>
                                            <TableCell align="right"><Button variant="outlined" size="small" color="primary">Задачи ($)</Button></TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            { Object.values(row.company).length > 0 && Object.values(row.company)[0] !== {} 
                                                ? 
                                                <>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        {Object.values(row.company)[0][0].data.state.status}
                                                    </TableCell>
                                                    <TableCell align="center">КПП {Object.values(row.company)[0][0].data.kpp}</TableCell>
                                                    <TableCell align="center">ОГРН {Object.values(row.company)[0][0].data.ogrn}</TableCell>
                                                    <TableCell align="center">ОКАТО {Object.values(row.company)[0][0].data.okato}</TableCell>
                                                    <TableCell align="center">ОКФС {Object.values(row.company)[0][0].data.okfs}</TableCell>
                                                    <TableCell align="center">ОКОГУ {Object.values(row.company)[0][0].data.okogu}</TableCell>
                                                    <TableCell align="center">ОКПО {Object.values(row.company)[0][0].data.okpo}</TableCell>
                                                    <TableCell align="center">ОКВЭД({Object.values(row.company)[0][0].data.okved_type}) {Object.values(row.company)[0][0].data.okved}</TableCell>
                                                </TableRow> 
                                                {
                                                    row.contacts.length > 0 && 
                                                     <>
                                                        {row.contacts.map(contact => <TableRow>
                                                            <TableCell colSpan={3} align="left" component="th" scope="row" ><IconButton aria-label="person"><PersonIcon /></IconButton>{contact.name}</TableCell>
                                                            <TableCell colSpan={1} align="left">{contact.position}</TableCell>
                                                            <TableCell colSpan={1} align="left"><a href="#">{contact.phones.join(', ')}</a></TableCell>
                                                            <TableCell colSpan={1} align="left"><a href={"mailto:"+contact.email}>{contact.email}</a></TableCell>
                                                            <TableCell colSpan={2} align="left">{contact.comment}</TableCell>
                                                        </TableRow>
                                                        )}
                                                    </>
                                                }
                                                {
                                                    getFilialsByInn(row.inn).length > 0 && getFilialsByInn(row.inn).map( filial => <TableRow key={filial.data.inn}>
                                                        <TableCell colSpan={3} align="left" component="th" scope="row" >
                                                            <IconButton aria-label="person"><PersonIcon /></IconButton>
                                                            {filial.data.name.full}555
                                                        </TableCell>
                                                        <TableCell colSpan={2} align="left">{filial.data.address.unrestricted_value}</TableCell>
                                                        
                                                        </TableRow>
                                                    )
                                                }
                                                {/*
                                                    filials.length > 0 && 
                                                     <>
                                                        {filials.map(filial => <TableRow>
                                                            <TableCell colSpan={3} align="left" component="th" scope="row" >
                                                                <IconButton aria-label="person"><PersonIcon /></IconButton>
                                                                {filial.data.name.full}
                                                            </TableCell>
                                                            <TableCell colSpan={2} align="left">{filial.data.address.unrestricted_value}</TableCell>
                                                        </TableRow>
                                                        )}
                                                    </>
                                                */}
                                                <TableRow>
                                                    { Object.values(row.condition).length > 0 ? <h3>Сотрудники: {Object.values(row.condition)[1].tax.employees.year} = {Object.values(row.condition)[1].tax.employees.data}</h3> : <Button variant="contained" size="small" color="default">+</Button>}
                                                    { Object.values(row.condition).length > 0 
                                                        ? <div>
                                                            <h3>Налоги: <br />{Object.values(row.condition)[1].tax.taxes.year} = {Object.values(row.condition)[1].tax.taxes.taxes_sum}</h3>
                                                        </div> 
                                                        : <Button variant="contained" size="small" color="default">+</Button>}
                                                    <TableCell 
                                                        colSpan={8} 
                                                        className="html-cell" 
                                                        component="th" 
                                                        scope="row" 
                                                        dangerouslySetInnerHTML={{ 
                                                            __html: Object.values(row.condition).length > 0 
                                                                    && Object.values(row.condition)[0] !== {} 
                                                                    && Object.values(row.condition)[0] === 'success' 
                                                                    ? Object.values(row.condition)[1].full_report 
                                                                    : '<button class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall">Сравнительный финансовый анализ показателей</button> '
                                                                }
                                                            }
                                                        >
                                                    </TableCell>
                                                </TableRow>
                                                </>
                                                : <Button variant="contained" size="small" color="default">Получить данные</Button>  }
                                        </TableBody>
                                    </Table>
                                    </Box>
                                </Collapse>
                            </TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
        <FormControlLabel
          control={<Switch checked={dense} onChange={handleChangeDense} />}
          label="Уменьшить высоту строк"
        />
        {/*<div>
            <h2>Сравнительный финансовый анализ показателей ПАО &quot;МАГНИТ&quot; за 2019 год</h2> 
            <h3>1. Сравнение со среднеотраслевыми показателями</h3> 
            <p>Ниже приведено сравнение ключевых финансовых показателей ПАО &quot;МАГНИТ&quot; за 2019 год с аналогичными среднеотраслевыми показателями за 2019 год. В качестве среднеотраслевых показателей взяты показатели 1,32 тыс. организаций с выручкой 120 - 800 млн. руб., занимающиеся видом деятельности "Аренда и управление собственным или арендованным нежилым недвижимым имуществом" (код по ОКВЭД2 68.20.2). В качестве среднего показателя использовано медианное значение, смысл которого в следующем: половина (50%) всех организаций имеют показатель выше медианного, другая половина – ниже.</p> 
            <h3>1.1. Финансовая устойчивость организации</h3> 
            <div className="table-adapt"> 
                <table className="table table-bordered"> 
                    <thead> 
                        <tr> 
                            <th className="text-center"> Показатели </th> 
                            <th className="text-center"> ПАО &quot;МАГНИТ&quot;, 2019 г. </th> 
                            <th className="text-center">Отраслевые показатели, 2019 г.</th> 
                        </tr> 
                        <tr> 
                            <th className="text-center">Существенно хуже* среднего</th> 
                            <th className="text-center">Среднеотраслевое значение</th> 
                            <th className="text-center">Существенно лучше** среднего</th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        <tr> 
                            <td>Коэффициент автономии</td> 
                            <td className="text-center"><span className="green-value">0,68</span></td> 
                            <td className="text-center">&le;0,09</td> 
                            <td className="text-center">0,43</td> 
                            <td className="text-center">&ge;0,81</td> 
                        </tr> 
                        <tr> 
                            <td> Значение коэффициента лучше среднеотраслевого, как минимум половина аналогичных организаций имеют меньшую долю собственных средств, то есть обладают меньшей финансовой устойчивостью.</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент обеспеченности собственными оборотными средствами</td> 
                            <td className="text-center"><span className="green-value">-0,19</span></td> 
                            <td className="text-center">&le;-4,93</td> 
                            <td className="text-center">-0,6</td> 
                            <td className="text-center">&ge;0,37</td> 
                        </tr> 
                        <tr> 
                            <td>Отрицательное значение коэффициента вызвано тем, что величина внеоборотных активов организации превышает собственный капитал. Соответственно, часть внеоборотных и все оборотные активы профинансированы за счет заемного капитала.</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент обеспеченности запасов</td> 
                            <td className="text-center"><span className="red-value">-1073,85</span></td> 
                            <td className="text-center">&le;-556,53</td> 
                            <td className="text-center">-14,24</td> 
                            <td className="text-center">&ge;9,59</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент обеспеченности запасов показывает степень покрытия имеющихся у организации материально-производственных запасов собственными средствами.Как и в случае с коэффициентом обеспеченности собственными оборотными средствами, отрицательное значение обусловлено тем, что внеоборотные активы больше собственного капитала.</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент покрытия инвестиций</td> 
                            <td className="text-center"><span className="green-value">0,87</span></td> 
                            <td className="text-center">&le;0,65</td> 
                            <td className="text-center">0,87</td> 
                            <td className="text-center">&ge;0,95</td> 
                        </tr> 
                        <tr> 
                            <td>Значительная доля собственного и долгосрочного заемного капитала в общем капитале организации обеспечила коэффициент покрытия инвестиций, превосходящий среднеотраслевой.</td> 
                        </tr> 
                    </tbody> 
                </table> 
            </div> 
            <h3>1.2. Платежеспособность ПАО &quot;МАГНИТ&quot;</h3> 
            <p></p> 
            <div className="table-adapt"> 
                <table className="table table-bordered"> 
                    <thead> 
                        <tr> 
                            <th className="text-center"> Показатели </th> 
                            <th className="text-center"> ПАО &quot;МАГНИТ&quot;, 2019 г. </th> 
                            <th className="text-center">Отраслевые показатели, 2019 г.</th> 
                        </tr> 
                        <tr> 
                            <th className="text-center">Существенно хуже* среднего</th> 
                            <th className="text-center">Среднеотраслевое значение</th> 
                            <th className="text-center">Существенно лучше** среднего</th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        <tr> 
                            <td>Коэффициент текущей ликвидности</td> 
                            <td className="text-center"><span className="green-value">2,14</span></td> 
                            <td className="text-center">&le;0,63</td> 
                            <td className="text-center">1,47</td> 
                            <td className="text-center">&ge;3,89</td> 
                        </tr> 
                        <tr> 
                            <td>Утрата платежеспособности в долгосрочной или среднесрочной перспективе угрожает ПАО &quot;МАГНИТ&quot; меньше, чем большинству аналогичных организаций.</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент быстрой ликвидности</td> 
                            <td className="text-center"><span className="green-value">2,14</span></td> 
                            <td className="text-center">&le;0,48</td> 
                            <td className="text-center">1,22</td> 
                            <td className="text-center">&ge;3,5</td> 
                        </tr> 
                        <tr> 
                            <td>Ликвидные активы покрывают краткосрочные обязательства лучше, чем у большинства других предприятий отрасли, снижая риск утраты платежеспособности в среднесрочной перспективе.</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент абсолютной ликвидности</td> 
                            <td className="text-center"><span className="green-value">2,02</span></td> 
                            <td className="text-center">&le;0,03</td> 
                            <td className="text-center">0,24</td> 
                            <td className="text-center">&ge;1,18</td> 
                        </tr> 
                        <tr> 
                            <td>Доля краткосрочных обязательств, обеспеченных высоколиквидными активами организации, намного выше, чем у большинства аналогичных предприятий. Это говорит об отсутствии риска кассовых разрывов при погашении текущих обязательств.</td> 
                        </tr> 
                    </tbody> 
                </table> 
            </div> 
            <h3>1.3. Рентабельность деятельности</h3> 
            <p></p> 
            <div className="table-adapt"> 
                <table className="table table-bordered"> 
                    <thead> 
                        <tr> 
                            <th className="text-center"> Показатели </th> 
                            <th className="text-center"> ПАО &quot;МАГНИТ&quot;, 2019 г. </th> 
                            <th className="text-center">Отраслевые показатели, 2019 г.</th> 
                        </tr> 
                        <tr> 
                            <th className="text-center">Существенно хуже* среднего</th> 
                            <th className="text-center">Среднеотраслевое значение</th> 
                            <th className="text-center">Существенно лучше** среднего</th> 
                        </tr> 
                    </thead> 
                    <tbody> 
                        <tr> 
                            <td>Рентабельность продаж</td> 
                            <td className="text-center"><span className="red-value">-143,98%</span></td> 
                            <td className="text-center">&le;9,71%</td> 
                            <td className="text-center">27,5%</td> 
                            <td className="text-center">&ge;46,8%</td> 
                        </tr> 
                        <tr> 
                            <td>Организация в 2019 году получила убыток от продаж, что обусловило отрицательный показатель рентабельности.</td> 
                        </tr> 
                        <tr> 
                            <td>Рентабельность продаж по EBIT</td> 
                            <td className="text-center"><span className="green-value">6416%</span></td> 
                            <td className="text-center">&le;8,03%</td> 
                            <td className="text-center">28,3%</td> 
                            <td className="text-center">&ge;50,6%</td> 
                        </tr> 
                        <tr> 
                            <td>Значительно выше среднего.</td> 
                        </tr> 
                        <tr> 
                            <td>Норма чистой прибыли</td> 
                            <td className="text-center"><span className="green-value">6082%</span></td> 
                            <td className="text-center">&le;0,55%</td> 
                            <td className="text-center">10,5%</td> 
                            <td className="text-center">&ge;29,3%</td> 
                        </tr> 
                        <tr> 
                            <td>Норма чистой прибыли показывает, сколько копеек чистой прибыли получает организация в каждом рубле выручки.У ПАО &quot;МАГНИТ&quot; высокая норма чистой прибыли, этот показатель выше, чем как минимум у 75% аналогичных организаций.</td> 
                        </tr> 
                        <tr> 
                            <td>Коэффициент покрытия процентов к уплате</td> 
                            <td className="text-center"><span className="green-value">21,2</span></td> 
                            <td className="text-center">&le;1,07</td> 
                            <td className="text-center">1,91</td> 
                            <td className="text-center">&ge;5,61</td> 
                        </tr> 
                        <tr> 
                            <td>Нагрузка по обслуживанию заемных средств организацией в 2019 году была существенно ниже среднеотраслевой.</td> 
                        </tr> 
                        <tr> 
                            <td>Рентабельность активов</td> 
                            <td className="text-center"><span className="green-value">23%</span></td> 
                            <td className="text-center">&le;0,25%</td> 
                            <td className="text-center">3,72%</td> 
                            <td className="text-center">&ge;11,5%</td> 
                        </tr> 
                        <tr> 
                            <td>Отдача от использования всех активов значительно вышесреднеотраслевой.</td> 
                        </tr> 
                        <tr> 
                            <td>Рентабельность собственного капитала</td> 
                            <td className="text-center"><span className="green-value">29,7%</span></td> 
                            <td className="text-center">&le;2,3%</td> 
                            <td className="text-center">12,7%</td> 
                            <td className="text-center">&ge;36,4%</td> 
                        </tr> 
                        <tr> 
                            <td>Рентабельность собственного капитала в 2019 году выше, чем у большинства сопоставимых предприятий.</td> 
                        </tr> 
                        <tr> 
                            <td>Фондоотдача</td> 
                            <td className="text-center"><span className="green-value">1</span></td> 
                            <td className="text-center">&le;0,38</td> 
                            <td className="text-center">0,95</td> 
                            <td className="text-center">&ge;3,77</td> 
                        </tr> 
                        <tr> 
                            <td>Фондоотдача показывает, сколько рублей выручки приходится на каждый рубль стоимости основных фондов организации. Для фондоемких отраслей этот показатель ниже, чем для материалоемких. Фондоотдача организации выше среднеотраслевой.</td> 
                        </tr> 
                    </tbody> 
                </table> 
            </div> 
            <h3>1.4. Показатели деловой активности (оборачиваемости)</h3> 
            <p></p> 
            <div className="table-adapt"> 
                <table className="table table-bordered"> 
                    <thead> 
                        <tr> 
                            <th className="text-center"> Показатели </th> 
                            <th className="text-center"> ПАО &quot;МАГНИТ&quot;, 2019 г. </th> 
                            <th className="text-center">Отраслевые показатели, 2019 г.</th> 
                        </tr> 
                        <tr> 
                            <th className="text-center">Существенно хуже* среднего</th> 
                            <th className="text-center">Среднеотраслевое значение</th> 
                            <th className="text-center">Существенно лучше** среднего</th>
                        </tr> 
                    </thead> 
                <tbody> 
                    <tr> 
                        <td>Оборачиваемость оборотных активов, в днях</td> 
                        <td className="text-center"><span className="red-value">33144</span></td> 
                        <td className="text-center">&ge;491</td> 
                        <td className="text-center">184</td> 
                        <td className="text-center">&le;79,1</td> 
                    </tr> 
                    <tr> 
                        <td>Организации требуется значительно больше дней для получения выручки равной величине оборотных активов, чем аналогичным предприятиям.</td> 
                    </tr> 
                    <tr> 
                        <td>Оборачиваемость дебиторской задолженности, в днях</td> 
                        <td className="text-center"><span className="red-value">2693</span></td> 
                        <td className="text-center">&ge;211</td> 
                        <td className="text-center">77,3</td> 
                        <td className="text-center">&le;29,6</td> 
                    </tr> 
                    <tr> 
                        <td>Управление дебиторской задолженностью поставлено значительно хуже, чем в аналогичных организациях.</td> 
                    </tr> 
                    <tr> 
                        <td>Оборачиваемость активов, в днях</td> 
                        <td className="text-center"><span className="red-value">96686</span></td> 
                        <td className="text-center">&ge;2079</td> 
                        <td className="text-center">1152</td> 
                        <td className="text-center">&le;517</td> 
                    </tr> 
                    <tr> 
                        <td>Как минимум три четверти сравниваемых организаций распоряжаются своими активами эффективней, чем ПАО &quot;МАГНИТ&quot;.</td> 
                    </tr> 
                </tbody> 
            </table> 
        </div> 
        
        <h3>2. Сравнение с общероссийскими показателями</h3> 
        <p>В дополнение к сравнительному анализу в рамках отрасли ниже приведено сравнение финансовых показателей ПАО &quot;МАГНИТ&quot; со всеми российскими предприятиями аналогичного масштаба деятельности. В сравнении использованы 113 тыс. российских организаций с выручкой 120 - 800 млн. руб.</p> 
        <div className="table-adapt"> 
            <table className="table table-bordered"> 
                <thead> 
                    <tr> 
                        <th className="text-center"> Показатели </th> 
                        <th className="text-center"> ПАО &quot;МАГНИТ&quot;, 2019 г. </th> 
                        <th className="text-center">Общероссийские показатели, 2019 г.</th> 
                    </tr> 
                    <tr> 
                        <th className="text-center">Существенно хуже* среднего</th> 
                        <th className="text-center">Среднее значение (медиана)</th> 
                        <th className="text-center">Существенно лучше** среднего</th> 
                    </tr> 
                </thead> 
                <tbody> 
                    <tr> 
                        <td>Коэффициент автономии</td> 
                        <td className="text-center"><span className="green-value">0,68</span></td> 
                        <td className="text-center">&le;0,05</td> 
                        <td className="text-center">0,22</td> 
                        <td className="text-center">&ge;0,55</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент обеспеченности собственными оборотными средствами</td> 
                        <td className="text-center"><span className="red-value">-0,19</span></td> 
                        <td className="text-center">&le;-0,01</td> 
                        <td className="text-center">0,11</td> 
                        <td className="text-center">&ge;0,44</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент обеспеченности запасов</td> 
                        <td className="text-center"><span className="red-value">-1073,85</span></td> 
                        <td className="text-center">&le;-0,06</td> 
                        <td className="text-center">0,42</td> 
                        <td className="text-center">&ge;1,91</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент покрытия инвестиций</td> 
                        <td className="text-center"><span className="green-value">0,87</span></td> 
                        <td className="text-center">&le;0,09</td> 
                        <td className="text-center">0,34</td> 
                        <td className="text-center">&ge;0,68</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент текущей ликвидности</td> 
                        <td className="text-center"><span className="green-value">2,14</span></td> 
                        <td className="text-center">&le;1,02</td> 
                        <td className="text-center">1,28</td> 
                        <td className="text-center">&ge;2,34</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент быстрой ликвидности</td> 
                        <td className="text-center"><span className="green-value">2,14</span></td> 
                        <td className="text-center">&le;0,58</td> 
                        <td className="text-center">0,95</td> 
                        <td className="text-center">&ge;1,54</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент абсолютной ликвидности</td> 
                        <td className="text-center"><span className="green-value">2,02</span></td> 
                        <td className="text-center">&le;0,01</td> 
                        <td className="text-center">0,09</td> 
                        <td className="text-center">&ge;0,36</td> 
                    </tr> 
                    <tr> 
                        <td>Рентабельность продаж</td> 
                        <td className="text-center"><span className="red-value">-143,98%</span></td> 
                        <td className="text-center">&le;0,67%</td> 
                        <td className="text-center">3%</td> 
                        <td className="text-center">&ge;8,53%</td> 
                    </tr> 
                    <tr> 
                        <td>Рентабельность продаж по EBIT</td> 
                        <td className="text-center"><span className="green-value">6416%</span></td> 
                        <td className="text-center">&le;0,69%</td> 
                        <td className="text-center">2,73%</td> 
                        <td className="text-center">&ge;8,26%</td> 
                    </tr> 
                    <tr> 
                        <td>Норма чистой прибыли</td> 
                        <td className="text-center"><span className="green-value">6082%</span></td> 
                        <td className="text-center">&le;0,31%</td> 
                        <td className="text-center">1,62%</td> 
                        <td className="text-center">&ge;5,77%</td> 
                    </tr> 
                    <tr> 
                        <td>Коэффициент покрытия процентов к уплате</td> 
                        <td className="text-center"><span className="green-value">21,2</span></td> 
                        <td className="text-center">&le;1,56</td> 
                        <td className="text-center">5,4</td> 
                        <td className="text-center">&ge;27</td> 
                    </tr> 
                    <tr> 
                        <td>Рентабельность активов</td> 
                        <td className="text-center"><span className="green-value">23%</span></td> 
                        <td className="text-center">&le;0,79%</td> 
                        <td className="text-center">4,83%</td> 
                        <td className="text-center">&ge;15,7%</td> 
                    </tr> 
                    <tr> 
                        <td>Рентабельность собственного капитала</td> 
                        <td className="text-center"><span className="red-value">29,7%</span></td> 
                        <td className="text-center">&le;9,93%</td> 
                        <td className="text-center">34,5%</td> 
                        <td className="text-center">&ge;86,3%</td> 
                    </tr> 
                    <tr> 
                        <td>Фондоотдача</td> 
                        <td className="text-center"><span className="red-value">1</span></td> 
                        <td className="text-center">&le;8,95</td> 
                        <td className="text-center">44,3</td> 
                        <td className="text-center">&ge;229</td> 
                    </tr> 
                    <tr> 
                        <td>Оборачиваемость оборотных активов, в днях</td> 
                        <td className="text-center"><span className="red-value">33144</span></td> 
                        <td className="text-center">&ge;215</td> 
                        <td className="text-center">117</td> 
                        <td className="text-center">&le;63,9</td> 
                    </tr> 
                    <tr> 
                        <td>Оборачиваемость дебиторской задолженности, в днях</td> 
                        <td className="text-center"><span className="red-value">2693</span></td> 
                        <td className="text-center">&ge;106</td> 
                        <td className="text-center">53,2</td> 
                        <td className="text-center">&le;24,6</td> 
                    </tr> 
                    <tr> 
                        <td>Оборачиваемость активов, в днях</td> 
                        <td className="text-center"><span className="red-value">96686</span></td> 
                        <td className="text-center">&ge;275</td> 
                        <td className="text-center">143</td> 
                        <td className="text-center">&le;75,8</td> 
                    </tr> 
                </tbody> 
            </table> 
        </div> 
        
        <h3>3. Итоги сравнительного анализа</h3> 
        
        <p>Формируя выводы по результатам сравнительного анализа, мы рассмотрели девять наиболее важных показателей:</p> 
        
        <ul> 
            <li>три показателя финансовой устойчивости (коэффициенты автономии, обеспеченности собственными оборотными средствами и покрытия инвестиций);</li> 
            <li>три показатели платежеспособности (коэффициенты текущей, быстрой и абсолютной ликвидности);</li> 
            <li>три показателя эффективности деятельности (рентабельность продаж, норма чистой прибыли, рентабельность активов).</li> 
        </ul> 
        <p>В зависимости от попадания каждого значения в квартиль, показателям присвоен балл от -2 до +2 (-2 – 1-й квартиль, -1 – 2-й квартиль, +1 – 3-й квартиль; +2 – 4-й квартиль; 0 – значение отклоняется от медианы не более чем на 5% разницы между медианой и квартилем, в который попало значение показателя). Для формирования вывода баллы обобщены с равным весом каждого показателя (найдено среднее арифметическое баллов). Полученное значение интерпретировано следующим образом</p> 
        <ul> 
            <li>от +1 до +2 включительно – финансовое состояние значительно лучше среднего;</li> 
            <li>от 0.11 до +1 включительно – финансовое состояние лучше среднего;</li> 
            <li>от -0.11 вкл до +0.11вкл – примерно соответствует среднему;</li> 
            <li>от -1 вкл до -0.11) – хуже среднего;</li> 
            <li>от -2 включительно до -1 – значительно хуже среднего.</li> 
        </ul> 
        
        <p>Результат расчета итогового балла для ПАО &quot;МАГНИТ&quot; представлен в следующей таблице:</p> 
        
        <div className="table-adapt"> 
            <table className="table table-bordered"> 
                <thead> 
                    <tr> 
                        <th>Показатель</th> 
                        <thead className="text-center">Результат сравнения показателей ПАО &quot;МАГНИТ&quot;</thead> 
                    </tr> 
                    <tr> 
                        <th className="text-center">с отраслевыми</th> 
                        <th className="text-center">с общероссийскими</th> 
                    </tr> 
                </thead> 
                <tbody> 
                    <tr> 
                        <th>1. Финансовая устойчивость</th> 
                    </tr> 
                    <tr> 
                        <td>1.1. Коэффициент автономии (финансовой независимости)</td> 
                        <td className="text-center coef-val"><span className="green-value">+1</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                    </tr> 
                    <tr> 
                        <td>1.2. Коэффициент обеспеченности собственными оборотными средствами</td> 
                        <td className="text-center coef-val"><span className="green-value">+1</span></td> 
                        <td className="text-center coef-val"><span className="red-value">-2</span></td> 
                    </tr> 
                    <tr> 
                        <td>1.3. Коэффициент покрытия инвестиций</td> 
                        <td className="text-center coef-val"><span className="grey-value">0</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                    </tr> 
                    <tr> 
                        <th>2. Платежеспособность</th>
                    </tr> 
                    <tr> 
                        <td>2.1. Коэффициент текущей ликвидности</td> 
                        <td className="text-center coef-val"><span className="green-value">+1</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+1</span></td> 
                        </tr> <tr> <td>2.2. Коэффициент быстрой ликвидности</td> 
                        <td className="text-center coef-val"><span className="green-value">+1</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                    </tr> 
                    <tr> 
                        <td>2.3. Коэффициент абсолютной ликвидности</td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                    </tr> 
                    <tr> 
                        <th>3. Эффективность деятельности</th> 
                    </tr> 
                    <tr> 
                        <td>3.1. Рентабельность продаж</td> 
                        <td className="text-center coef-val"><span className="red-value">-2</span></td> 
                        <td className="text-center coef-val"><span className="red-value">-2</span></td> 
                        </tr> 
                    <tr> 
                        <td>3.2. Норма чистой прибыли</td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                    </tr> 
                    <tr> 
                        <td>3.3. Рентабельность активов</td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                        <td className="text-center coef-val"><span className="green-value">+2</span></td> 
                    </tr> 
                    <tr> 
                        <td>Итоговый балл</td> 
                        <td className="text-center coef-val"><strong><span className="green-value">+0.9</span></strong><p>Финансовое состояние организации лучше среднего по отрасли.</p></td> 
                        <td className="text-center coef-val"><strong><span className="green-value">+1</span></strong><p>Финансовое состояние организации лучше среднего по РФ.</p></td> 
                    </tr> 
                </tbody> 
            </table> 
            </div> 
            <p>* Существенно хуже среднего – 1-я квартиль значений, то есть наихудшие значения 25% предприятий отрасли.</p> <p>** Существенно лучше среднего – 4-я квартиль значений, то есть наилучшие значения 25% предприятий отрасли.</p>
        </div>*/}
        </div>
    );
}

export default React.memo(ClientsList);
