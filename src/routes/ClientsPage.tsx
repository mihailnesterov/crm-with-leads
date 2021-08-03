import React, {FC} from 'react';
import { Link } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddIcon from '@material-ui/icons/Add';
import DxClientsList from '../components/DxClientsList';

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
    title: {
        color: '#fff',
    },
    headerButtons: {
        marginLeft: theme.spacing(2)
    }
}));

const ClientsPage: FC = () => {

    const classes = useStyles();

    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Клиенты</h2>
                <div>
                    <Button 
                        component={ Link }
                        to="/clients/add"
                        size="medium" 
                        variant="contained" 
                        color="secondary"
                        startIcon={<AddIcon />}
                        className={classes.headerButtons}
                    >
                        Добавить клиента
                    </Button>
                    <Button 
                        component={ Link }
                        to="/leads"
                        size="medium" 
                        variant="contained" 
                        color="secondary"
                        startIcon={<GroupAddIcon />}
                        className={classes.headerButtons}
                    >
                        Лиды
                    </Button>
                </div>
                
            </header>
            
            <DxClientsList />
        </div>
    );
}

export default React.memo(ClientsPage);