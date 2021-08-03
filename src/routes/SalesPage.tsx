import React, {FC} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DxSalesList from '../components/DxSalesList';

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

const SalesPage: FC = () => {

    const classes = useStyles();

    return (
        <div>
            <header className={classes.header}>
                <h2 className={classes.title}>Продажи</h2>
                <div>
                    <Button 
                        size="medium" 
                        variant="contained" 
                        color="secondary"
                        startIcon={<AddIcon />}
                        className={classes.headerButtons}
                    >
                        Добавить продажу
                    </Button>
                </div>
                
            </header>
            <DxSalesList />
        </div>
    );
}

export default React.memo(SalesPage);