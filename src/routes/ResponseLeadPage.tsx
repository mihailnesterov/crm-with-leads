import React, {FC} from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
        flex: 1
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

const ResponseLeadPage: FC = () => {

    const classes = useStyles();


    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Новая заявка...</h2>
            </header>

            <div className={classes.root}>
                
                <div className={classes.flex}>

                    <div className={classes.flex1}>

                        <TextField
                            id="response-leads-page-field-1"
                            label="Категория"
                            placeholder="Категория"
                            helperText="Категория или несколько через запятую"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={''}
                        />   
                        
                        <TextField
                            id="response-leads-page-field-2"
                            label="Регион"
                            placeholder="Регион"
                            helperText="Регион или несколько через запятую"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={''}
                        /> 

                        <TextField
                            id="response-leads-page-field-3"
                            label="Город"
                            placeholder="Город"
                            helperText="Город или несколько через запятую"
                            margin="normal"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            defaultValue={''}
                        /> 
                    </div>
                </div>
            
                <div className={classes.flex}>                    
                    
                    <Button 
                        component={ Link }
                        to="/leads"
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

export default React.memo(ResponseLeadPage);