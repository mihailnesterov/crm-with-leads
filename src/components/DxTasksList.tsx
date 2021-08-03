import React from 'react';
import Paper from '@material-ui/core/Paper';
import { green, orange } from '@material-ui/core/colors';
import { makeStyles, fade } from '@material-ui/core/styles';
import LowPriority from '@material-ui/icons/LowPriority';
import PriorityHigh from '@material-ui/icons/PriorityHigh';
import {
    ViewState, 
    GroupingState, 
    IntegratedGrouping, 
    EditingState,
    IntegratedEditing
} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    Resources,
    Appointments,
    GroupingPanel,
    DayView,
    WeekView,
    MonthView,
    Toolbar,
    DateNavigator,
    AllDayPanel,
    AppointmentTooltip,
    AppointmentForm,
    DragDropProvider,
    ConfirmationDialog,
    TodayButton,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';


interface IAppointments {
    title: string;
    priorityId: number;
    startDate: Date;
    endDate: Date;
    id: number;
    allDay?: boolean
}
const appointments: IAppointments[] = [
    {
      title: 'Website Re-Design Plan',
      priorityId: 2,
      startDate: new Date(2021, 3, 30, 9, 30),
      endDate: new Date(2021, 4, 3, 11, 30),
      id: 0,
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      priorityId: 1,
      startDate: new Date(2021, 4, 10, 10, 0),
      endDate: new Date(2021, 4, 10, 12, 0),
      id: 1,
    }, {
      title: 'Install New Router in Dev Room',
      priorityId: 3,
      startDate: new Date(2021, 4, 7, 13),
      endDate: new Date(2021, 4, 7, 15, 30),
      id: 2,
    }, {
      title: 'New Brochures',
      priorityId: 2,
      startDate: new Date(2021, 4, 7, 13, 0),
      endDate: new Date(2021, 4, 7, 15, 15),
      id: 5,
    }, {
      title: 'Install New Database',
      priorityId: 1,
      startDate: new Date(2021, 4, 8, 9),
      endDate: new Date(2021, 4, 8, 12, 15),
      id: 6,
    }, {
      title: 'Approve New Online Marketing Strategy',
      priorityId: 3,
      startDate: new Date(2021, 4, 9, 12, 0),
      endDate: new Date(2021, 4, 9, 14, 0),
      id: 7,
    }, {
      title: 'Upgrade Personal Computers',
      priorityId: 1,
      startDate: new Date(2021, 4, 7, 9),
      endDate: new Date(2021, 4, 7, 11, 30),
      id: 8,
    }, {
      title: 'Prepare 2021 Marketing Plan',
      priorityId: 2,
      startDate: new Date(2021, 4, 10, 11, 0),
      endDate: new Date(2021, 4, 10, 13, 30),
      id: 9,
    }, {
      title: 'Brochure Design Review',
      priorityId: 3,
      startDate: new Date(2021, 4, 9, 11, 0),
      endDate: new Date(2021, 4, 9, 13, 30),
      id: 10,
    }, {
      title: 'Upgrade Server Hardware',
      priorityId: 1,
      startDate: new Date(2021, 4, 11, 9, 0),
      endDate: new Date(2021, 4, 11, 15, 0),
      id: 11,
    }, {
      title: 'Submit New Website Design',
      priorityId: 2,
      startDate: new Date(2021, 4, 11, 16, 30),
      endDate: new Date(2021, 4, 11, 18, 0),
      id: 12,
    }, {
      title: 'Launch New Website',
      priorityId: 3,
      startDate: new Date(2021, 4, 11, 12, 20),
      endDate: new Date(2021, 4, 11, 14, 0),
      id: 13,
    }, {
      title: 'Google AdWords Strategy',
      priorityId: 1,
      startDate: new Date(2021, 4, 14, 9, 0, 0),
      endDate: new Date(2021, 4, 14, 12, 0, 0),
      id: 14,
    }, {
      title: 'Rollout of New Website and Marketing Brochures',
      priorityId: 1,
      startDate: new Date(2021, 4, 14, 13, 0, 0),
      endDate: new Date(2021, 4, 14, 15, 30, 0),
      id: 15,
    }, {
      title: 'Non-Compete Agreements',
      priorityId: 3,
      startDate: new Date(2021, 4, 15, 13, 0, 0),
      endDate: new Date(2021, 4, 15, 15, 45, 0),
      id: 16,
    }, {
      title: 'Approve Hiring of John Jeffers',
      priorityId: 2,
      startDate: new Date(2021, 4, 15, 9, 0, 0),
      endDate: new Date(2021, 4, 15, 12, 0, 0),
      id: 17,
    }, {
      title: 'Update NDA Agreement',
      priorityId: 1,
      startDate: new Date(2021, 4, 15, 11, 0, 0),
      endDate: new Date(2021, 4, 15, 14, 15, 0),
      id: 18,
    }, {
      title: 'Submit Signed NDA',
      priorityId: 3,
      startDate: new Date(2021, 4, 16, 13, 0, 0),
      endDate: new Date(2021, 4, 16, 15, 0, 0),
      id: 21,
    }, {
      title: 'Review Revenue Projections',
      priorityId: 2,
      startDate: new Date(2021, 4, 16, 11, 0, 0),
      endDate: new Date(2021, 4, 16, 14, 0, 0),
      id: 22,
    }, {
      title: 'Comment on Revenue Projections',
      priorityId: 2,
      startDate: new Date(2021, 4, 14, 10, 0, 0),
      endDate: new Date(2021, 4, 14, 13, 0, 0),
      id: 23,
    }, {
      title: 'Provide New Health Insurance Docs',
      priorityId: 3,
      startDate: new Date(2021, 4, 18, 12, 0, 0),
      endDate: new Date(2021, 4, 18, 15, 0, 0),
      id: 24,
    }, {
      title: 'Review Changes to Health Insurance Coverage',
      priorityId: 2,
      startDate: new Date(2021, 4, 17, 9, 0, 0),
      endDate: new Date(2021, 4, 17, 13, 0, 0),
      id: 25,
    }, {
      title: 'Review Training Course for any Ommissions',
      priorityId: 1,
      startDate: new Date(2021, 4, 17, 11, 0, 0),
      endDate: new Date(2021, 4, 17, 14, 0, 0),
      id: 26,
    }, {
      title: 'Website Re-Design Plan',
      priorityId: 3,
      startDate: new Date(2021, 4, 21, 9, 30),
      endDate: new Date(2021, 4, 21, 11, 30),
      id: 27,
    }, {
      title: 'Book Flights to San Fran for Sales Trip',
      priorityId: 1,
      startDate: new Date(2021, 4, 24, 10, 0),
      endDate: new Date(2021, 4, 24, 12, 0),
      id: 28,
    }, {
      title: 'Install New Router in Dev Room',
      priorityId: 1,
      startDate: new Date(2021, 4, 21, 13),
      endDate: new Date(2021, 4, 21, 15, 30),
      id: 29,
    }, {
      title: 'Approve Personal Computer Upgrade Plan',
      priorityId: 3,
      startDate: new Date(2021, 4, 22, 10, 0),
      endDate: new Date(2021, 4, 22, 11, 0),
      id: 30,
    }, {
      title: 'Final Budget Review',
      priorityId: 2,
      startDate: new Date(2021, 4, 22, 12, 0),
      endDate: new Date(2021, 4, 22, 13, 35),
      id: 31,
    }, {
      title: 'New Brochures',
      priorityId: 2,
      startDate: new Date(2021, 4, 21, 13, 0),
      endDate: new Date(2021, 4, 21, 15, 15),
      id: 32,
    }, {
      title: 'Install New Database',
      priorityId: 3,
      startDate: new Date(2021, 4, 22, 9),
      endDate: new Date(2021, 4, 22, 12, 15),
      id: 33,
    }, {
      title: 'Approve New Online Marketing Strategy',
      priorityId: 2,
      startDate: new Date(2021, 4, 23, 12, 0),
      endDate: new Date(2021, 4, 23, 14, 0),
      id: 34,
    }, {
      title: 'Upgrade Personal Computers',
      priorityId: 1,
      startDate: new Date(2021, 4, 21, 9),
      endDate: new Date(2021, 4, 21, 11, 30),
      id: 35,
    }, {
      title: 'Prepare 2021 Marketing Plan',
      priorityId: 3,
      startDate: new Date(2021, 4, 24, 11, 0),
      endDate: new Date(2021, 4, 24, 13, 30),
      id: 36,
    }, {
      title: 'Brochure Design Review',
      priorityId: 1,
      startDate: new Date(2021, 4, 23, 11, 0),
      endDate: new Date(2021, 4, 23, 13, 30),
      id: 37,
    }, {
      title: 'Create Icons for Website',
      priorityId: 2,
      startDate: new Date(2021, 4, 25, 10, 0),
      endDate: new Date(2021, 4, 25, 11, 30),
      id: 38,
    }, {
      title: 'Upgrade Server Hardware',
      priorityId: 1,
      startDate: new Date(2021, 4, 25, 9, 0),
      endDate: new Date(2021, 4, 25, 15, 0),
      id: 39,
    }, {
      title: 'Submit New Website Design',
      priorityId: 3,
      startDate: new Date(2021, 4, 25, 16, 30),
      endDate: new Date(2021, 4, 25, 18, 0),
      id: 40,
    }, {
      title: 'Launch New Website',
      priorityId: 2,
      startDate: new Date(2021, 4, 25, 12, 20),
      endDate: new Date(2021, 4, 25, 14, 0),
      id: 41,
    }, {
      title: 'Google AdWords Strategy',
      priorityId: 1,
      startDate: new Date(2021, 4, 28, 9, 0, 0),
      endDate: new Date(2021, 4, 28, 12, 0, 0),
      id: 42,
    }, {
      title: 'Rollout of New Website and Marketing Brochures',
      priorityId: 3,
      startDate: new Date(2021, 4, 28, 13, 0, 0),
      endDate: new Date(2021, 4, 28, 15, 30, 0),
      id: 43,
    }, {
      title: 'Non-Compete Agreements',
      priorityId: 2,
      startDate: new Date(2021, 4, 29, 13, 0, 0),
      endDate: new Date(2021, 4, 29, 15, 45, 0),
      id: 44,
    }, {
      title: 'Approve Hiring of John Jeffers',
      priorityId: 2,
      startDate: new Date(2021, 4, 29, 9, 0, 0),
      endDate: new Date(2021, 4, 29, 12, 0, 0),
      id: 45,
    }, {
      title: 'Update NDA Agreement',
      priorityId: 3,
      startDate: new Date(2021, 4, 29, 11, 0, 0),
      endDate: new Date(2021, 4, 29, 14, 15, 0),
      id: 46,
    }, {
      title: 'Update Employee Files with New NDA',
      priorityId: 1,
      startDate: new Date(2021, 5, 1, 9, 0, 0),
      endDate: new Date(2021, 5, 1, 11, 45, 0),
      id: 47,
    }, {
      title: 'Submit Questions Regarding New NDA',
      priorityId: 1,
      startDate: new Date(2021, 4, 30, 10, 0, 0),
      endDate: new Date(2021, 4, 30, 11, 30, 0),
      id: 48,
    }, {
      title: 'Submit Signed NDA',
      priorityId: 3,
      startDate: new Date(2021, 4, 30, 13, 0, 0),
      endDate: new Date(2021, 4, 30, 15, 0, 0),
      id: 49,
    }, {
      title: 'Review Revenue Projections',
      priorityId: 2,
      startDate: new Date(2021, 4, 30, 11, 0, 0),
      endDate: new Date(2021, 4, 30, 14, 0, 0),
      id: 50,
    }, {
      title: 'Comment on Revenue Projections',
      priorityId: 2,
      startDate: new Date(2021, 4, 28, 10, 0, 0),
      endDate: new Date(2021, 4, 28, 13, 0, 0),
      id: 51,
    }, {
      title: 'Provide New Health Insurance Docs',
      priorityId: 3,
      startDate: new Date(2021, 5, 1, 12, 0, 0),
      endDate: new Date(2021, 5, 1, 15, 0, 0),
      id: 52,
    }, {
      title: 'Review Changes to Health Insurance Coverage',
      priorityId: 2,
      startDate: new Date(2021, 4, 31, 9, 0, 0),
      endDate: new Date(2021, 4, 31, 13, 0, 0),
      id: 53,
    }, {
      title: 'Review Training Course for any Ommissions',
      priorityId: 1,
      startDate: new Date(2021, 4, 31, 11, 0, 0),
      endDate: new Date(2021, 4, 31, 14, 0, 0),
      id: 54,
    }, {
      title: 'Approve New Online Marketing Strategy',
      priorityId: 3,
      startDate: new Date(2021, 4, 28, 12, 0),
      endDate: new Date(2021, 4, 28, 14, 0),
      allDay: true,
      id: 55,
    }, {
      title: 'Install New Router in Dev Room',
      priorityId: 1,
      startDate: new Date(2021, 4, 29, 13),
      endDate: new Date(2021, 4, 29, 15, 30),
      allDay: true,
      id: 56,
    }, {
      title: 'Google AdWords Strategy',
      priorityId: 1,
      startDate: new Date(2021, 4, 31, 9, 0, 0),
      endDate: new Date(2021, 4, 31, 12, 0, 0),
      allDay: true,
      id: 57,
    }, {
      title: 'Review Changes to Health Insurance Coverage',
      priorityId: 2,
      startDate: new Date(2021, 5, 1, 9, 0, 0),
      endDate: new Date(2021, 5, 1, 13, 0, 0),
      allDay: true,
      id: 58,
    },
];

const priorityData: any[] = [
  { text: 'Низкий приоритет', id: 1, color: green },
  { text: 'Средний приоритет', id: 2, color: orange }
];
const excludedDays: any[] = [];

const findColorByGroupId = (id: any) => (priorityData.find(item => item.id === id)).color;
const getIconById = (id: any) => (id === 1 ? LowPriority : PriorityHigh);

const useGroupingStyles = (group: any) => {
  const color = findColorByGroupId(group.id);
  return makeStyles(({ spacing }) => ({
    cell: {
      backgroundColor: fade(color[400], 0.1),
      '&:hover': {
        backgroundColor: fade(color[400], 0.15),
      },
      '&:focus': {
        backgroundColor: fade(color[400], 0.2),
      },
    },
    headerCell: {
      backgroundColor: fade(color[400], 0.1),
      '&:hover': {
        backgroundColor: fade(color[400], 0.1),
      },
      '&:focus': {
        backgroundColor: fade(color[400], 0.1),
      },
    },
    icon: {
      paddingLeft: spacing(1),
      verticalAlign: 'middle',
    },
  }))();
};

/*const TimeTableCell = React.memo(({ groupingInfo, ...restProps }: any) => {
  const classes = useGroupingStyles(groupingInfo[0]);
    return (
        <DayView.TimeTableCell
            className={classes.cell}
            groupingInfo={groupingInfo}
            {...restProps}
        />
    );
});

const DayScaleCell = React.memo(({ groupingInfo, ...restProps }: any) => {
    const classes = useGroupingStyles(groupingInfo[0]);
    return (
        <DayView.DayScaleCell
            className={classes.headerCell}
            groupingInfo={groupingInfo}
            {...restProps}
        />
  );
});

const AllDayCell = React.memo(({ groupingInfo, ...restProps }: any) => {
    const classes = useGroupingStyles(groupingInfo[0]);
    return (
        <AllDayPanel.Cell
            className={classes.cell}
            groupingInfo={groupingInfo}
            {...restProps}
        />
  );
});

const GroupingPanelCell = React.memo(({ group, ...restProps }: any) => {
    const classes = useGroupingStyles(group);
    const Icon = getIconById(group.id);
    return (
        <GroupingPanel.Cell
            className={classes.headerCell}
            group={group}
            {...restProps}
        >
            <Icon
                className={classes.icon}
            />
        </GroupingPanel.Cell>
    );
});*/

class DxTasksList extends React.PureComponent {
    constructor(props: any) {
        super(props);
        this.state = {
            data: appointments.filter(appointment => appointment.priorityId < 3),
            resources: [{
                fieldName: 'priorityId',
                title: 'Приоритет',
                instances: priorityData,
            }],
            grouping: [{
                resourceName: 'priorityId',
            }],
        };

        this.commitChanges = this.commitChanges.bind(this);
    }

    commitChanges({ added, changed, deleted }: any) {
        this.setState((state) => {
          let { data }: any = state;
          if (added) {
            const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
            data = [...data, { id: startingAddedId, ...added }];
          }
          if (changed) {
            data = data.map((appointment: any) => (
              changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          }
          if (deleted !== undefined) {
            data = data.filter((appointment: any) => appointment.id !== deleted);
          }
          return { data };
        });
    }

    render() {
        const { data, resources, grouping }: any = this.state;
    

    return (
        <Paper style={{"padding":"1rem"}}>
            <Scheduler
                data={data}
                height={660}
                locale="ru-RU"
                firstDayOfWeek={1}
            >
                <ViewState
                    defaultCurrentDate={new Date()}
                    defaultCurrentViewName="Week"
                />
                <EditingState
                    onCommitChanges={this.commitChanges}
                />
                <GroupingState
                    grouping={grouping}
                />

                <DayView
                    startDayHour={9}
                    endDayHour={19}
                    displayName={'День'}
                />
                <WeekView
                    startDayHour={9}
                    endDayHour={17}
                    excludedDays={excludedDays}
                    displayName={'Неделя'}
                />
                <MonthView displayName={'Месяц'} />
                <Toolbar />
                <DateNavigator />
                <TodayButton messages={ { today: 'Сегодня' } } />
                <ViewSwitcher />
                <Appointments />
                <AllDayPanel messages={ { allDay: 'Весь день' } } />
                <Resources
                    data={resources}
                    mainResourceName="priorityId"
                />

                <IntegratedGrouping />
                <IntegratedEditing />
                <ConfirmationDialog />
                <AppointmentTooltip
                    showOpenButton
                    showCloseButton
                    showDeleteButton
                />
                <AppointmentForm 
                    messages={
                        {
                            detailsLabel: 'Задача',
                            allDayLabel: 'Весь день',
                            titleLabel: 'Название задачи',
                            commitCommand: 'Сохранить',
                            moreInformationLabel: 'Комментарий к задаче',
                            notesLabel: 'Комментарий',
                            repeatLabel: 'Повторить задачу',
                            never: 'Никогда (повторять всегда)',
                            daily: 'Ежедневно',
                            weekly: 'Еженедельно',
                            monthly: 'Ежемесячно',
                            yearly: 'Ежегодно',
                            repeatEveryLabel: 'Каждые',
                            daysLabel: 'День(дней)',
                            endRepeatLabel: 'Когда закончить задачу',
                            onLabel: 'Через',
                            afterLabel: 'После',
                            weeksOnLabel: 'недели:',
                            monthsLabel: 'месяц(ев)',
                            ofEveryMonthLabel: 'дней каждого месяца',
                            theLabel: 'Каждый',
                            firstLabel: 'Первый',
                            secondLabel: 'второй',
                            thirdLabel: 'ттретий',
                            fourthLabel: 'четвертый',
                            lastLabel: 'последний',
                            yearsLabel: 'год(лет)',
                            ofLabel: 'месяца:',
                            everyLabel: 'Каждый'
                        }
                    }
                />

                <GroupingPanel />
                <DragDropProvider />
            </Scheduler>
        </Paper>
    );
  }
}


export default React.memo(DxTasksList);
