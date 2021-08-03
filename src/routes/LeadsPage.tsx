import React, {FC, useState, useCallback} from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import AddIcon from '@material-ui/icons/Add';
import MoreIcon from '@material-ui/icons/More';
import { getYandexLeads } from '../data/fake-data';

const useStyles = makeStyles((theme: Theme) => ({
    leads: {
        flexGrow: 1,
        marginTop: '1.5rem',
        gap: '1.5rem'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
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
    filters: {
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(1),
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    textBlue: {
        color: '#3f51b5'
    },
    textRed: {
        color: '#e24a52'
    }
}));

const LeadsPage: FC = () => {

    const classes = useStyles();
    const [leads] = useState<any[]>(getYandexLeads());
    const [more, setMore] = useState<boolean>(false);

    const handleMore = useCallback(() => {
        setMore(!more);
    }, []);


    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Лиды</h2>
                
                <div className={classes.flex}>
                    <TextField
                        id="filled-search-leads"
                        //label=""
                        placeholder="Найти..."
                        //helperText=""
                        margin="dense"
                        //fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        //defaultValue={''}
                        className={classes.search}
                    />
                    <Button 
                        component={ Link }
                        to="/leads/response"
                        size="medium" 
                        variant="contained" 
                        color="secondary"
                        startIcon={<AddIcon />}
                        className={classes.headerButtons}
                    >
                        Заявка
                    </Button>
                </div>
                
            </header>

            <div className={classes.leads}>
            <h3>Всего: <span className={classes.textRed}>{leads.length}</span></h3>
            <div className={classes.filters}>
                <Chip clickable color="primary" label="Услуги" />
                <Chip clickable color="default" label="Республика Бурятия" />
                <Chip clickable color="default" label="Забайкальский край" />
                <Chip clickable color="primary" label="Красноярский край" />
                <Chip clickable color="default" label="Республика Саха (Якутия)" />
                <Chip clickable color="primary" label="Иркутская область" />
                <Chip clickable color="primary" label="Республика Татарстан" />
                <Chip clickable color="default" label="Норильск" />
                <Chip clickable color="primary" label="Казань" />
                <Chip clickable color="primary" label="Чита" />
                <Chip clickable color="default" label="Северобайкальск" />
                <Chip clickable color="primary" label="Агентство недвижимости" />
                <Chip clickable color="primary" label="Нотариусы" />
                <Chip clickable color="default" label="Фотоуслуги" />
                <Chip clickable color="default" label="Элитная недвижимость" />
                <Chip clickable color="default" label="Загородная недвижимость" />
                <Chip clickable color="primary" label="Аренда квартир" />
                <Chip clickable color="default" label="Квартиры в новостройках" />
                <Chip clickable color="default" label="Аренда офисов" />
            </div>
                <Grid container spacing={3}>
                    
                    { leads.map(lead => 
                        <Grid item lg={more ? 12 : 6} xl={more ? 12 : 4}  key={lead[1]}>
                            <Paper className={classes.paper}>
                                <header className={classes.flex}>
                                    <h4 className={classes.textBlue}>{lead[2]}</h4>
                                    <h4>{lead[0]}</h4>
                                </header>
                                <ol>
                                    {lead.map((item: any, index: number) => 
                                        (index > 2 && index < (more ? lead.length : 8)) && 
                                        (
                                            index === 2 
                                            ? 
                                            <li key={index}>
                                                <b>
                                                    {item}
                                                </b>
                                            </li>
                                            : 
                                            <li key={index}>
                                                {
                                                    item.search('http://') === -1 && 
                                                    item.search('https://') === -1 &&
                                                    item.search(/\+7/g) === -1 &&
                                                    item.search(/@/g) === -1 
                                                    ? 
                                                    item 
                                                    : 
                                                    <>
                                                        <a 
                                                            href={
                                                                item.search(/\+7/g) === -1 &&
                                                                item.search(/@/g) === -1 
                                                                ? 
                                                                item : 
                                                                    item.search(/@/g) === -1 
                                                                    ?
                                                                    "tel:" + item 
                                                                    :
                                                                    "mailto:" + item
                                                            }
                                                            target={
                                                                item.search(/\+7/g) === -1 &&
                                                                item.search(/@/g) === -1 
                                                                ?
                                                                "_blank"
                                                                :
                                                                "_self"
                                                            }
                                                        >
                                                            {item}
                                                        </a>
                                                    </>
                                                }
                                                {
                                                    item.search(/[0-9][0-9]\./g) !== -1 
                                                    && 
                                                    <> <a href="#">карта</a></>
                                                }
                                            </li>
                                        )
                                    )}
                                </ol>
                                <div className={classes.flex}>
                                    <Button 
                                        size="small" 
                                        variant="outlined" 
                                        color="primary"
                                        startIcon={<MoreIcon />}
                                        onClick={handleMore}
                                    >
                                        Подробнее
                                    </Button>
                                    <Button 
                                        size="small" 
                                        variant="outlined" 
                                        color="secondary"
                                        startIcon={<AddIcon />}
                                    >
                                        Добавить в клиенты
                                    </Button>
                                </div>
                            </Paper>
                        </Grid>
                        )
                    }
                </Grid>
            </div>            
        </div>
    );
}

export default React.memo(LeadsPage);