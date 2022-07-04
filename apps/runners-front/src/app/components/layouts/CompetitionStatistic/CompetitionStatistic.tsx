import { List, ListItem, ListItemText } from '@mui/material';
import { getAge, getTempFromSec, getTimeFromMilliseconds } from '../../../common/date';
import { ICompetitionStatistic } from '@runners/shared/interfaces';

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
					primary={`Темп от ${getTempFromSec(statistic.tempCampare.fast)} до ${getTempFromSec(
						statistic.tempCampare.slow,
					)}`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Время от ${getTimeFromMilliseconds(
						statistic.timeCampare.fast,
					)} до ${getTimeFromMilliseconds(statistic.timeCampare.slow)}`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Все участники пробежали за все этапы: ${statistic.distanceRun} метров`}
				/>
			</ListItem>
			<ListItem>
				<ListItemText
					primary={`Самый быстрый: ${statistic.fastest.surname} ${
						statistic.fastest.name
					} - ${getTimeFromMilliseconds(statistic.fastest.time)} - ${getTempFromSec(
						statistic.fastest.temp,
					)}`}
				/>
			</ListItem>
		</List>
	);
};
