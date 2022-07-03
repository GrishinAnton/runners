import { IFileReaderRows } from './fileReader.service';

export interface IFileReader {
	getData: (file: string) => IFileReaderRows['row'];
}
