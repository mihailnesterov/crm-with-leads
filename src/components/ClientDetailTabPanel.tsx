import React, {FC} from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    appbar: {
        backgroundColor: '#f8f8f8',
        color: '#351375'
    },
}));


const ClientDetailTabPanel: FC = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Tabs 
                    value={value} 
                    onChange={handleChange} 
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="simple tabs example"
                >
                    <Tab label="О компании" {...a11yProps(0)} />
                    <Tab label="Реквизиты" {...a11yProps(1)} />
                    <Tab label="Контакты" {...a11yProps(2)} />
                    <Tab label="Статистика" {...a11yProps(3)} />
                    <Tab label="Задачи" {...a11yProps(4)} />
                    <Tab label="Теги" {...a11yProps(5)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Three
            </TabPanel>
        </div>
    );
}

export default React.memo(ClientDetailTabPanel);