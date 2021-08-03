import React, {FC, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { useThemeActions } from './hooks/useThemeActions';
import { useTypedSelector } from './hooks/useTypedSelector';

import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';

import DashboardIcon from '@material-ui/icons/Dashboard';
import BusinessIcon from '@material-ui/icons/Business';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PaymentIcon from '@material-ui/icons/Payment';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CloseIcon from '@material-ui/icons/Close';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import Snackbar from '@material-ui/core/Snackbar';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

import ClientsPage from './routes/ClientsPage';
import Dashboard from './routes/Dashboard';
//import UsersPage from './routes/UsersPage';
import UserProfile from './components/UserProfile';
import UserAvatar from './components/UserAvatar';
import SalesPage from './routes/SalesPage';
import ContactsPage from './routes/ContactsPage';
import TasksPage from './routes/TasksPage';
import { SettingsRemoteRounded } from '@material-ui/icons';
import LeadsPage from './routes/LeadsPage';
import ResponseLeadPage from './routes/ResponseLeadPage';
import AddClientPage from './routes/AddClientPage';
import AddContactPage from './routes/AddContactPage';
import CalendarPage from './routes/CalendarPage';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    flex: {
        display: 'flex'
    },
    flex1: {
        flex: 1
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    messages: {
        flex: 2,
        textAlign: 'right',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '2rem'
    },
    message: {
        fontSize: '36px'
    },
    drawer: {
        width: 190,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(25),
            width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
}));

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
}))(Badge);

const App: FC = () => {

    const classes = useStyles();

    const { enqueueSnackbar } = useSnackbar();

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const showSnackbar = (message: string, variant: VariantType) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar(message, { variant });
      };

    useEffect(() => {
        setSnackbarOpen(true);

        setInterval( () => {
            setTimeout(
                showSnackbar('Выставлено счетов 3 из 5', 'success'),
                10000
            );
            setTimeout(
                showSnackbar('Новые лиды (244)', 'info'),
                12000
            );
            setTimeout(
                showSnackbar('Получена новая задача', 'warning'),
                15000
            );
            setTimeout(
                showSnackbar('Выполнено звонков 4 из 15', 'error'),
                25000
            );
            /*setTimeout(
                showSnackbar('Получена новая задача', 'default'),
                28000
            );*/
        },
            30000
        );
        
    }, []);

    const handleSnackbarClick = () => {
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const {sidebar} = useTypedSelector(state => state.theme);
    const {fetchTheme} = useThemeActions();
    

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline />
                <BrowserView>BrowserView</BrowserView>
                <MobileView>MobileView</MobileView>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar className={classes.flex}>
                        <div className={classes.flex1}>
                            <Typography variant="h5" noWrap>
                                Manager
                            </Typography>
                        </div>
                        {/*<div className={classes.search} style={{"flex":1}}>
                            <div className={classes.searchIcon}>
                            <SearchIcon />
                            </div>
                            <InputBase
                            placeholder="Поиск…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>*/}
                        <div className={classes.messages}>
                            <NavLink to="/clients" style={{"color":"#fff"}} title="Новые клиенты">
                                <Badge badgeContent={2} color="secondary">
                                    <BusinessIcon className={classes.message} />
                                </Badge>
                            </NavLink>
                            <NavLink to="/contacts" style={{"color":"#fff"}} title="Новые контакты">
                                <Badge badgeContent={1} color="secondary">
                                    <PermContactCalendarIcon className={classes.message} />
                                </Badge>
                            </NavLink>
                            <NavLink to="/tasks" style={{"color":"#fff"}} title="Новые задачи">
                                <Badge badgeContent={3} color="secondary">
                                    <AssignmentIcon className={classes.message} />
                                </Badge>
                            </NavLink>
                            <NavLink to="/sales" style={{"color":"#fff"}} title="Новые продажи">
                                <Badge badgeContent={1} color="secondary">
                                    <PaymentIcon className={classes.message} />
                                </Badge>
                            </NavLink>
                            <NavLink to="/tasks" style={{"color":"#fff"}} title="Невыполненные задачи">
                                <Badge badgeContent={2} color="secondary" style={{"color":"orange"}}>
                                    <AssignmentIcon className={classes.message} />
                                </Badge>
                            </NavLink>
                        </div>
                    </Toolbar>
                </AppBar>
                {
                    sidebar 
                    &&
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            
                            <UserAvatar />
                            
                            <Divider />
                            <List>
                                <ListItem button>
                                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                                    <NavLink to="/">
                                        <ListItemText primary="Сводка" />
                                    </NavLink>
                                </ListItem>
                                {/*<ListItem button>
                                    <ListItemIcon><BusinessIcon /></ListItemIcon>
                                    <NavLink to="/users">
                                        <ListItemText primary="Менеджеры" />
                                    </NavLink>
                                </ListItem>*/}
                                <ListItem button>
                                    <ListItemIcon><AssignmentIcon /></ListItemIcon>
                                    <NavLink to="/tasks">
                                        <ListItemText primary="Задачи" />
                                    </NavLink>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><PaymentIcon /></ListItemIcon>
                                    <NavLink to="/sales">
                                        <ListItemText primary="Продажи" />
                                    </NavLink>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><BusinessIcon /></ListItemIcon>
                                    <NavLink to="/clients">
                                        <ListItemText primary="Клиенты" />
                                    </NavLink>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><PermContactCalendarIcon /></ListItemIcon>
                                    <NavLink to="/contacts">
                                        <ListItemText primary="Контакты" />
                                    </NavLink>
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon><EventNoteIcon /></ListItemIcon>
                                    <NavLink to="/calendar">
                                        <ListItemText primary="Календарь" />
                                    </NavLink>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemIcon><CloseIcon /></ListItemIcon>
                                        <ListItemText secondary="Скрыть панель" onClick={() => fetchTheme()} />
                                </ListItem>
                            </List>
                            <Divider />
                        </div>
                    </Drawer>
                }
                
                <main className={classes.content}>
                    <Toolbar />
                    <Typography component="div">
                        <Route path={"/"} exact>
                            <Dashboard />
                        </Route>
                        <Route path={"/profile"} exact>
                            <UserProfile />
                        </Route>
                        <Route path={"/clients"} exact>
                            <ClientsPage />
                        </Route>
                        <Route path={"/contacts"} exact>
                            <ContactsPage />
                        </Route>
                        <Route path={"/tasks"} exact>
                            <TasksPage />
                        </Route>
                        <Route path={"/sales"} exact>
                            <SalesPage />
                        </Route>
                        <Route path={"/leads"} exact>
                            <LeadsPage />
                        </Route>
                        <Route path={"/calendar"} exact>
                            <CalendarPage />
                        </Route>
                        <Route path={"/clients/add"} exact>
                            <AddClientPage />
                        </Route>
                        <Route path={"/contacts/add"} exact>
                            <AddContactPage />
                        </Route>
                        <Route path={"/leads/response"} exact>
                            <ResponseLeadPage />
                        </Route>
                    </Typography>
                </main>
            </div>
        </Router>
    );
}

export default React.memo(App);
