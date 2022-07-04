import { injectable } from 'inversify';
import xlsx from 'node-xlsx';
import { IFileReader } from './fileReader.service.Interface';
import 'reflect-metadata';

export interface IFileReaderRows {
	row: unknown[][];
}

@injectable()
export class FileReaderService implements IFileReader {
	getData(file: string): IFileReaderRows['row'] {
		const obj = xlsx.parse(file, { raw: false });
		const rows: IFileReaderRows['row'] = [];
		for (let i = 0; i < obj.length; i++) {
			const sheet = obj[i];

			for (let j = 0; j < sheet['data'].length; j++) {
				const data = sheet['data'] as unknown[][];
				rows.push(data[j]);
			}
		}

		return rows;
	}
}

//creates the csv string to write it to a file
// for(var i = 0; i < rows.length; i++)
// {
//     writeStr += rows[i].join(",") + "\n";
// }

//writes to a file, but you will presumably send the csv as a
//response instead
// fs.writeFile(__dirname + "/test.csv", writeStr, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("test.csv was saved in the current directory!");
// });
// 	const file = resolve('./') + '/protocol8abs.xlsx';
