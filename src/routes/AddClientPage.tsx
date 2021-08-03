import React, {FC, useState} from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import RefreshIcon from '@material-ui/icons/Refresh';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        margin: '1.5rem auto',
        maxWidth: '800px',
        padding: '1.5rem',
        gap: '1.5rem',
        backgroundColor: '#fff',
        boxShadow: '3px 3px 4px rgba(0,0,0,0.15)'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
    },
    flex1: {
        flex: 1,
        marginBottom: '2rem'
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex: 3,
    },
    flex4: {
        flex: 4,
    },
    paper: {
        padding: theme.spacing(3),
        paddingTop: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        overflow: 'hidden',
    },
    search: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        backgroundColor: 'rgba(255,255,255,0.92)',
        width: '350px',
        borderRadius: '4px'
    },
    header: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'3px 3px 4px rgba(0,0,0,0.15)', 
        padding:'0 20px', 
        margin:0,
        backgroundColor: '#3f51b5',
    },
    title: {
        color: '#fff',
    },
    headerButtons: {
        marginLeft: theme.spacing(2)
    },
    textBlue: {
        color: '#3f51b5'
    },
    textRed: {
        color: '#e24a52'
    }
}));

const AddClientPage: FC = () => {

    const classes = useStyles();

    const [status, setStatus] = useState<string>('new');

    const handleSelectStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setStatus(event.target.value as string);
    };

    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Новый клиент...</h2>
            </header>

            <div className={classes.root}>
                
                <div className={classes.flex}>

                    <div className={classes.flex1}>

                        <TextField
                            id="outlined-short-name"
                            label="Краткое название"
                            placeholder="Краткое название"
                            helperText="Для внутреннего использования"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                        <div className={classes.flex}>
                            
                            <TextField
                                id="outlined-inn-hand-input"
                                label="ИНН"
                                placeholder="ИНН"
                                fullWidth
                                margin="normal"
                                helperText="ИНН используется для получения данных о компании из ФНС"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                style={{"flex":6}}
                            />

                            <Button 
                                size="small" 
                                variant="contained" 
                                color="secondary"
                                startIcon={<RefreshIcon />}
                                style={{"flex":2,"marginBottom":"1rem"}}
                            >
                                Получить данные
                            </Button>
                        </div>

                        <FormControl variant="outlined" style={{"margin":"1rem 0"}}>
                            <InputLabel id="status-select-outlined-label">Статус</InputLabel>
                            <Select
                                labelId="status-select-outlined-label"
                                id="status-select-outlined"
                                value={status}
                                onChange={handleSelectStatusChange}
                                label="Статус"
                                style={{"width":"750px"}}
                            >
                                <MenuItem value="">
                                    <em>Не выбран</em>
                                </MenuItem>
                                <MenuItem value={'new'}>new</MenuItem>
                                <MenuItem value={'hot'}>hot</MenuItem>
                                <MenuItem value={'lost'}>lost</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="outlined-region"
                            label="Регион"
                            placeholder="Регион"
                            helperText="Регионы можно перечислить через запятую, например: область, город"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-tags"
                            //className={classes.textField}
                            label="Теги"
                            placeholder="Теги"
                            helperText="Теги можно перечислить через запятую"
                            margin="normal"
                            fullWidth
                            multiline
                            rows={4}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        /> 
                    </div>
                </div>
            
                <div className={classes.flex}>                    
                    
                    <Button 
                        component={ Link }
                        to="/clients"
                        size="medium" 
                        variant="contained" 
                        color="secondary"
                        startIcon={<ArrowBackIcon />}
                    >
                        Отмена
                    </Button>

                    <Button 
                        size="medium" 
                        variant="contained" 
                        color="primary"
                        startIcon={<SaveIcon />}
                    >
                        Сохранить
                    </Button>
                    
                </div>
            </div>
        </div>
    );
}

export default React.memo(AddClientPage);