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

const DashboardClients: FC<IProps> = ({data}: IProps) => {
    const classes = useStyles();
    
    return (
        <Grid container className={classes.root} spacing={2}>

            <Grid item xs={12} lg={4}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>?????????? ??????????????</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressBlue variant="determinate" value={48} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            48,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4 className={classes.header}>7 / 15</h4>
                </Paper>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>???????????????? ??????????????</h3>
                    <Box display="flex" alignItems="center" padding="0.5rem">
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressRed variant="determinate" value={22} />
                        </Box>
                        <Box minWidth={35}>
                            <Typography variant="body2" color="textSecondary">{`${Math.round(
                            22,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <h4 className={classes.header}>3 / <span className={classes.textRed}>15</span></h4>
                </Paper>
            </Grid>

            <Grid item xs={12} lg={4}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>?????????????? ???? ????????????????</h3>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????????????????????????? ????????</h4>
                        </Box>
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressGreen variant="determinate" value={32} />
                        </Box>
                        <Box minWidth={60}>
                            <Typography variant="body2" color="textSecondary">{`5 / ${Math.round(
                            32,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????????????????? ??????????????</h4>
                        </Box>
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressGreen variant="determinate" value={25} />
                        </Box>
                        <Box minWidth={60}>
                            <Typography variant="body2" color="textSecondary">{`4 / ${Math.round(
                            25,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????????????????????????? ??????????????</h4>
                        </Box>
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressBlue variant="determinate" value={16} />
                        </Box>
                        <Box minWidth={60}>
                            <Typography variant="body2" color="textSecondary">{`3 / ${Math.round(
                            16,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>???????????? ??????????????</h4>
                        </Box>
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressOrange variant="determinate" value={8} />
                        </Box>
                        <Box minWidth={60}>
                            <Typography variant="body2" color="textSecondary">{`2 / ${Math.round(
                            8,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????????????????????? ????????</h4>
                        </Box>
                        <Box width="100%" mr={1}>
                            <BorderLinearProgressRed variant="determinate" value={5} />
                        </Box>
                        <Box minWidth={60}>
                            <Typography variant="body2" color="textSecondary">{`1 / ${Math.round(
                            5,
                            )}%`}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>

            <Grid item xs={12} lg={4}>
                <Paper className={classes.paper} >
                    <h3 className={classes.header}>?????????????? ???? ???????????? ????????????</h3>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????? ????????????</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`620 140,00 ??????.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>??????????????????????</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`360 526,50 ??????.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????? ????????????</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`168 590,13 ??????.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????? ??????????</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`106 320,00 ??????.`}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box width="100%" mr={0} alignItems="start" textAlign="left">
                            <h4>?????? ????????</h4>
                        </Box>
                        <Box width="100%" textAlign="right">
                            <Typography variant="body2" color="textSecondary">{`65 020,69 ??????.`}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>

        </Grid>
    );
}

export default React.memo(DashboardClients);