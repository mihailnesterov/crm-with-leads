import React, {FC} from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
        border: '1px #f5f5f5 solid',
        borderRadius: '4px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    header: {
        textAlign: 'center',
        color: '#0f2288',
    },
    textRed: {
        color: '#e7343a',
    },
    textGreen: {
        color: '#69ca88',
    },
}));

const BorderLinearProgressBlue = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }),
)(LinearProgress);

const BorderLinearProgressRed = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#ff1a25',
    },
  }),
)(LinearProgress);

const BorderLinearProgressOrange = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#f59f3c',
    },
  }),
)(LinearProgress);

const BorderLinearProgressGreen = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#6fcc39',
    },
  }),
)(LinearProgress);

interface IProps {
    data?: any,
}

const DashboardTasks: FC<IProps> = ({data}: IProps) => {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>
            
            
            <Grid item xs={6} lg={3}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Звонки</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressRed variant="determinate" value={21} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            21,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4 className={classes.header}>3 / <span className={classes.textRed}>15</span></h4>
                </Paper>
            </Grid>
            <Grid item xs={6} lg={3}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Предложения</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressOrange variant="determinate" value={38} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            38,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4 className={classes.header}>3 / <span className={classes.textRed}>10</span></h4>
                </Paper>
            </Grid>
            <Grid item xs={6} lg={3}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Счета</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressGreen variant="determinate" value={75} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            75,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4 className={classes.header}>3 / <span className={classes.textRed}>5</span></h4>
                </Paper>
            </Grid>
            <Grid item xs={6} lg={3}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Продажи</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressBlue variant="determinate" value={51} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            51,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4 className={classes.header}>256 050,56 руб. / <span className={classes.textRed}>500 000 руб.</span></h4>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default React.memo(DashboardTasks);