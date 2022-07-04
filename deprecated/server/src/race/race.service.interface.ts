import { RaceCreateFromFileDto } from './dto/race-createFromFile.dto';

export interface IRaceService {
	createRaceFromFile: (dto: RaceCreateFromFileDto) => void;
}
