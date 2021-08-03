import React, {FC, useState} from 'react';
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
    bgYellow: {
        backgroundColor: '#f59f3c',
        color: '#fff',
        fontWeight: 700,
        padding: '.5rem',
        width: '100%',
        margin: 0
    },
    bgRed: {
        backgroundColor: '#ff1a25',
        color: '#fff',
        fontWeight: 700,
        padding: '.5rem',
        maxWidth: '80%',
        margin: '0 auto'
    },
    bgBlue: {
        backgroundColor: '#1a90ff',
        color: '#fff',
        fontWeight: 700,
        padding: '.5rem',
        maxWidth: '60%',
        margin: '0 auto'
    },
    bgGreen: {
        backgroundColor: '#6fcc39',
        color: '#fff',
        fontWeight: 700,
        padding: '.5rem',
        maxWidth: '25%',
        margin: '0 auto'
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

const DashboardSales: FC<IProps> = ({data}: IProps) => {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>

            <Grid item xs={12} lg={4}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Продажи новым клиентам</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressOrange variant="determinate" value={35} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            35,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4>80 530,45 руб.</h4>
                </Paper>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Допродажи</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressGreen variant="determinate" value={65} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            65,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4>176 570,05 руб.</h4>
                </Paper>
            </Grid>

            <Grid item xs={12} lg={4}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Продажи по регионам</h3>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>Краснодарский край</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`1 220 140,00 руб.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>Тюменская область</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`460 156,55 руб.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>Новосибирская область</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`320 563,12 руб.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>Омская область</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`112 150,10 руб.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>Хабаровский край</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`65 450,19 руб.`}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} lg={4}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>Воронка</h3>
                    <Box textAlign="center">
                        <div className={classes.bgYellow}>
                            <h5>Звонки (24)</h5>
                        </div>
                        <div className={classes.bgRed}>
                            <h5>Предложения (16)</h5>
                        </div>
                        <div className={classes.bgBlue}>
                            <h5>Счета (8)</h5>
                        </div>
                        <div className={classes.bgGreen}>
                            <h5>Продажи (4)</h5>
                        </div>
                    </Box>
                </Paper>
            </Grid>

            

        </Grid>
    );
}

export default React.memo(DashboardSales);