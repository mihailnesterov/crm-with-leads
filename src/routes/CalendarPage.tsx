import React, {FC} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import DxTasksList from '../components/DxTasksList';

 const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'3px 3px 4px rgba(0,0,0,0.15)', 
        padding:'0 20px', 
        margin:0,
        backgroundColor: '#3f51b5',
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
    search: {
        padding: theme.spacing(0),
        margin: theme.spacing(0),
        backgroundColor: 'rgba(255,255,255,0.92)',
        width: '350px',
        borderRadius: '4px'
    },
    title: {
        color: '#fff',
    },
    headerButtons: {
        marginLeft: theme.spacing(2)
    }
}));

const CalendarPage: FC = () => {

    const classes = useStyles();

    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Календарь</h2>
            </header>

            <DxTasksList />
            
        </div>
    );
}

export default React.memo(CalendarPage);