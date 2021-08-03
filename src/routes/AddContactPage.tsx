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

const AddContactPage: FC = () => {

    const classes = useStyles();

    const [client, setClient] = useState<string>('');

    const handleSelectСlientChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setClient(event.target.value as string);
    };

    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Новый контакт...</h2>
            </header>

            <div className={classes.root}>
                
                <div className={classes.flex}>

                    <div className={classes.flex1}>

                        <TextField
                            id="outlined-short-fio"
                            label="ФИО"
                            placeholder="ФИО"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                        <FormControl variant="outlined" style={{"margin":"1rem 0"}}>
                            <InputLabel id="client-select-outlined-label">Клиент</InputLabel>
                            <Select
                                labelId="client-select-outlined-label"
                                id="client-select-outlined"
                                value={client}
                                onChange={handleSelectСlientChange}
                                label="Статус"
                                style={{"width":"750px"}}
                            >
                                <MenuItem value="">
                                    <em>Не выбран</em>
                                </MenuItem>
                                <MenuItem value={'Красцветмет'}>Красцветмет</MenuItem>
                                <MenuItem value={'ООО Магнит'}>ООО Магнит</MenuItem>
                                <MenuItem value={'ООО Роса'}>ООО Роса</MenuItem>
                                <MenuItem value={'ООО "Металл-Плюс"'}>ООО "Металл-Плюс"</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="outlined-short-position"
                            label="Должность"
                            placeholder="Должность"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        
                        <TextField
                            id="outlined-short-phones"
                            label="Телефоны"
                            placeholder="Телефоны"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />
                        
                        <TextField
                            id="outlined-short-email"
                            label="Email"
                            placeholder="Email"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                        <TextField
                            id="outlined-short-comment"
                            label="Комментарий"
                            placeholder="Комментарий"
                            margin="normal"
                            fullWidth
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
                        to="/contacts"
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

export default React.memo(AddContactPage);