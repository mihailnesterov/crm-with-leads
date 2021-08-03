import React, {FC} from 'react';
import { makeStyles, createStyles, withStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            padding: '1rem',
        },
        periods: {
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'start',
            flexWrap: 'wrap',
            marginBottom: theme.spacing(1),
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
        board: {
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-around',
            backgroundColor: theme.palette.background.default,
            padding: 0,
            margin: 0,
            border: '1px #ccc solid',
        },
        flexStart: {
            flex: 1,
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-around',
        },
        flexCenter: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem'
        },
        flexEnd: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            gap: '0.1rem',
            color: '#555',
            marginBottom: '1rem'
        },
        column: {
            flex: 1,
            padding: 0,
            margin: 0
        },
        columnCards: {
            flex: 1,
            border: '1px #ccc solid',
            margin: 0,
            marginBottom: '1rem'
        },
        columnHeader: {
            textAlign: 'center',
            color: '#0f2288',
        },
        cardDefault: {
            flex: 1,
            padding: '1rem',
            margin: '1rem',
            backgroundColor: '#f0f0f0',
            boxShadow: '1px 1px 4px rgba(0,0,0,0.15)',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        cardYellow: {
            flex: 1,
            padding: '1rem',
            margin: '1rem',
            backgroundColor: '#f7f7df',
            boxShadow: '1px 1px 4px rgba(0,0,0,0.15)',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        cardRed: {
            flex: 1,
            padding: '1rem',
            margin: '1rem',
            backgroundColor: '#f0cfd0',
            boxShadow: '1px 1px 4px rgba(0,0,0,0.15)',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        cardGreen: {
            flex: 1,
            padding: '1rem',
            margin: '1rem',
            backgroundColor: '#cde6d5',
            boxShadow: '1px 1px 4px rgba(0,0,0,0.15)',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        cardHeader: {
            fontSize: theme.typography.fontSize,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            margin: 0,
            '& > a': {
                color: '#222'
            }
        },
        cardBody: {
            fontSize: theme.typography.fontSize,
            lineHeight: 1,
        },
        cardList: {
            margin: 0,
            lineHeight: 1.2,
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingInlineStart: 0,
            listStyleType: 'none',
            '& > li': {
                marginBottom: '0.5rem',
                //border: '1px #222 solid',
                padding: '.5rem',
                backgroundColor: '#fcf6f6',
                boxShadow: '1px 1px 4px rgba(0,0,0,0.15)',
                '& > a': {
                    color: '#3e6ea5'
                }
            },
        },
        textRed: {
            color: '#e7343a',
        },
        textGreen: {
            color: '#69ca88',
        },
        bgRed: {
            backgroundColor: '#e7343a',
            color: '#fff',
            fontWeight: 700,
            padding: '.5rem',
        },
        bgGreen: {
            backgroundColor: '#63c22c',
            color: '#fff',
            fontWeight: 700,
            padding: '.5rem',
        },
        buttonAdd: {
            //margin: theme.spacing(1),
            width: '100%',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            backgroundColor: '#fcf6f6',
            boxShadow: '1px 1px 4px rgba(0,0,0,0.15)',
        }
    }),
);

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

const KanbanDashboard: FC = () => {

    const classes = useStyles();

    
    return (
        <div className={classes.root}>

            <div className={classes.periods}>
                <Chip clickable color="default" label="Архив" />
                <Chip clickable color="primary" label="2021" />
                <Chip clickable color="default" label="1-й квартал" />
                <Chip clickable color="default" label="2-й квартал" />
                <Chip clickable color="default" label="3-й квартал" />
                <Chip clickable color="default" label="4-й квартал" />
                <Chip clickable color="default" label="январь" />
                <Chip clickable color="default" label="февраль" />
                <Chip clickable color="default" label="март" />
                <Chip clickable color="default" label="апрель" />
                <Chip clickable color="primary" label="май" />
                <Chip clickable color="default" label="июнь" />
                <Chip clickable color="default" label="июль" />
                <Chip clickable color="default" label="август" />
                <Chip clickable color="default" label="сентябрь" />
                <Chip clickable color="default" label="октябрь" />
                <Chip clickable color="default" label="ноябрь" />
                <Chip clickable color="default" label="декабрь" />
            </div>

            <div className={classes.board}>
                <div className={classes.column}>
                    <h3 className={classes.columnHeader}>Звонки ( <span className={classes.textRed}>15</span> )</h3>

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

                    <div className={classes.flexStart}>
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                В процессе ( 4 / <span className={classes.textRed}> 15 </span>)
                            </h4>

                            <div className={classes.cardRed}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ПАО Град</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>0 / 3</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2</li>
                                        <li>Исходные данные</li>
                                    </ul>
                                    {/*<Button
                                        variant="contained"
                                        color="default"
                                        size="small"
                                        className={classes.buttonAdd}
                                        startIcon={<AddIcon />}
                                    >
                                        Добавить
                                    </Button>*/}
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО "Парус"</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>1 / 4</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО "Садко"</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardGreen}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО  Магнит</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                Выполнено ( 3 / <span className={classes.textRed}> 15 </span>)
                            </h4>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО "РТИ"</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 
                                        <span className={classes.bgRed}>18.05.2021</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardRed}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ЗАО СМУ-75</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon /> 21.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>1 / 5</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ИП Перминов В.С.</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className={classes.column}>
                    <h3 className={classes.columnHeader}>Предложения ( <span className={classes.textRed}>10</span> )</h3>

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

                    <div className={classes.flexStart}>
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                В процессе ( 5 / <span className={classes.textRed}> 10 </span>)
                            </h4>

                            <div className={classes.cardGreen}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО Союз-15</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>2 / 4</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ИП Доронин И.Ю.</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО "МеталЦентр"</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" />
                                        <span className={classes.bgRed}>18.05.2021</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardGreen}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО ПермьСтрой</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardRed}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ЗАО Полюс</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                Выполнено ( 3 / <span className={classes.textRed}> 10 </span>)
                            </h4>

                            <div className={classes.cardGreen}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО "Майский"</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li className={classes.flexCenter}>
                                            <PictureAsPdfIcon fontSize="small" />
                                            <a href="#">Презентация решения</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardRed}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">Связной</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО Кром</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className={classes.column}>
                    <h3 className={classes.columnHeader}>Счета ( <span className={classes.textRed}>5</span> )</h3>

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

                    <div className={classes.flexStart}>
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                В процессе ( 1 / <span className={classes.textRed}> 5 </span>)
                            </h4>

                            <div className={classes.cardRed}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО Дон</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" />
                                        <span className={classes.bgRed}>19.05.2021</span>
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>6 / 7</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                Выполнено ( 3 / <span className={classes.textRed}> 5 </span>)
                            </h4>

                            <div className={classes.cardGreen}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО Вавилон</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span className={classes.bgGreen}>18 / 18</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li>Счет: № 156668</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">Красцветмет</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>5 / 6</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li>Счет: № 156693</li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ИП Васильева Н.П.</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>

                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span>12 / 15</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li className={classes.flexCenter}>
                                            <PictureAsPdfIcon fontSize="small" />
                                            <a href="#">Счет: № 156712</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className={classes.column}>
                    <h3 className={classes.columnHeader}>Продажи ( <span className={classes.textRed}>500 000 руб.</span> )</h3>

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

                    <div className={classes.flexStart}>
                        
                        <div className={classes.columnCards}>

                            <h4 className={classes.columnHeader}>
                                256 050,56 руб. / <span className={classes.textRed}> 500 000 руб. </span>
                            </h4>

                            <div className={classes.cardRed}>

                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО Пари</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span className={classes.bgGreen}>5 / 5</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li className={classes.flexCenter}>
                                            <PictureAsPdfIcon fontSize="small" />
                                            <a href="#">Презентация решения</a>
                                        </li>
                                        <li className={classes.flexCenter}>
                                            <PictureAsPdfIcon fontSize="small" />
                                            <a href="#">Счет: № 156753</a>
                                        </li>
                                        <li>Сумма: <b>102 060,12 руб.</b></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>

                                <h4 className={classes.cardHeader}>
                                    <a href="#">ИП Савельев В.А.</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>

                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <p className={classes.flexCenter}>
                                        <PlaylistAddCheckIcon fontSize="small" /> 
                                        <span className={classes.bgGreen}>11 / 11</span>
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>#тег1, #тег2, #тег3</li>
                                        <li>Исходные данные</li>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li>Счет: № 156895</li>
                                        <li>Сумма: <b>86 120,00 руб.</b></li>
                                    </ul>
                                </div>
                            </div>

                            <div className={classes.cardYellow}>
                                <h4 className={classes.cardHeader}>
                                    <a href="#">ООО "Стрела"</a>
                                    <span className={classes.flexEnd}>
                                        <EditIcon fontSize="small" /> 
                                        <DeleteIcon fontSize="small" />
                                    </span>
                                </h4>
                                <div className={classes.cardBody}>
                                    <p className={classes.flexCenter}>
                                        <ScheduleIcon fontSize="small" /> 31.05.2021
                                    </p>
                                    <ul className={classes.cardList}>
                                        <li>Инструкция по задаче</li>
                                        <li>Комментарий к звонку</li>
                                        <li className={classes.flexCenter}>
                                            <RecordVoiceOverIcon fontSize="small" />
                                            <a href="#">Запись звонка от 16.05.2021</a>
                                        </li>
                                        <li>Комментарий к предложению</li>
                                        <li>Счет: № 156982</li>
                                        <li>Сумма: <b>94 500,00 руб.</b></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default React.memo(KanbanDashboard);
