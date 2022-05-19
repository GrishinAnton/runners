import xlsx from 'node-xlsx';

export interface IFileReaderRows {
	row: unknown[][];
}

export class FileReader {
	file: string;

	constructor(file: string) {
		this.file = file;
	}

	getData(): IFileReaderRows['row'] {
		const obj = xlsx.parse(this.file, { raw: false });
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
