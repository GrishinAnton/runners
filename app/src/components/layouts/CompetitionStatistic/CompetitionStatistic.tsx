import { List, ListItem, ListItemText } from '@mui/material';
import { getAge } from '../../../common/date';
import { ICompetitionStatistic } from '../../../features/statistic/statistic.interface';

interface IProp {
	statistic: ICompetitionStatistic;
}

export const CompetitionStatistic: React.FC<IProp> = ({ statistic }) => {
	return (
		<List>
			<ListItem>
				<ListItemText primary={`Кол-во этапов: ${statistic.stageCount}`} />
			</ListItem>
			<ListItem>
				<ListItemText primary={`Кол-во участников: ${statistic.userCount}`} />
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`М ${statistic.sex.male.genderCount} Ж ${statistic.sex.female.genderCount}`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Возраст от ${getAge(String(statistic.ageCampare.youngest))} до ${getAge(
						String(statistic.ageCampare.oldest),
					)}`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Темп от ${statistic.tempCampare.fast} до ${statistic.tempCampare.slow}`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Время от ${statistic.timeCampare.fast} до ${statistic.timeCampare.slow}`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Все участники пробежали за все этапы: ${statistic.distanceRun} метров`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Самый быстрый: ${statistic.fastest.surname} ${statistic.fastest.name} - ${statistic.fastest.time} - ${statistic.fastest.temp}`}
				/>
			</ListItem>
		</List>
	);
};

// Кол-во этапов
// Кол-во участников
// Всего М - Всего Ж -
// Возраст от - до -
// Время от - до -
// Темп от - до -
// Все участники пробежали за все этапы: 60км
// Самый быстрый: -
// - Самый красивый - (голосование)
