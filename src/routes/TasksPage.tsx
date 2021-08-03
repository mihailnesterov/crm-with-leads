import React, {FC} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
//import DxTasksList from '../components/DxTasksList';
import KanbanDashboard from '../components/Kanban/KanbanDashboard';

/**
 * https://www.youtube.com/watch?v=92qcfeWxtnY 41:00
 * как получать параметры из useParams 
 */

 const useStyles = makeStyles((theme: Theme) => ({
    header: {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        boxShadow:'3px 3px 4px rgba(0,0,0,0.15)', 
        padding:'0 20px', 
        margin:0,
        //backgroundColor: '#ddd',
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

const TasksPage: FC = () => {

    const classes = useStyles();

    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Задачи</h2>

                <div className={classes.flex}>
                    <TextField
                        id="filled-search-tasks"
                        //label=""
                        placeholder="Найти по клиентам, тегам, комментариям..."
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
                        size="medium" 
                        variant="contained" 
                        color="secondary"
                        startIcon={<AddIcon />}
                        className={classes.headerButtons}
                    >
                        Создать задачу
                    </Button>
                </div>
                
            </header>

            {/*<DxTasksList />*/}
            <KanbanDashboard />
            
        </div>
    );
}

export default React.memo(TasksPage);