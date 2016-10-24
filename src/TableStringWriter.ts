export default class TableStringWriter {

    colPadding: number;

    constructor() {
        this.colPadding = 1;
    }

    write(rowHeadings: number[], colHeadings: number[], data: number[][]) : string {

        if (rowHeadings !== colHeadings) {
            throw new Error("This implementation only currently renders correctly when rowHeadings === colHeadings.")
        }

        // width of the first column will be the length of the longest colHeader
        let maxRowHeaderWidth = rowHeadings[rowHeadings.length - 1].toString(10).length;
        maxRowHeaderWidth += this.colPadding;

        // Maximum cell width will be the length of the largest piece of data in the table
        // Note: this assumes that the data is ordered (as per the prime table output, although this won't necessarily hold generally)
        let maxCellWidth = data[rowHeadings.length - 1][colHeadings.length-1].toString(10).length;
        maxCellWidth += this.colPadding;

        // write out the column headers
        let colHeaderStrings: string[] = [];
        colHeaderStrings[0] = this.padLeft("x", maxRowHeaderWidth, " ");
        colHeadings.forEach((value, index) => {
            colHeaderStrings[index+1] = this.padLeft(value.toString(10), maxCellWidth, " ");
        });

        let colHeaderString = colHeaderStrings.join("|") + "|";
        let tableWidth = colHeaderString.length;
        let divider = this.repeat("=", tableWidth); 
        let output = `
${divider}
${colHeaderString}
${divider}
`;

        // Now the data rows
        for (let row = 0; row < rowHeadings.length; row++) {
            var dataRow = data[row];
            var rowCells: string[] = [];

            // First row
            rowCells[0] = this.padLeft(rowHeadings[row].toString(10), maxRowHeaderWidth, " ");

            // Remainder
            for (let col = 0; col < dataRow.length; col++) {
                rowCells[col+1] = this.padLeft(dataRow[col].toString(10), maxCellWidth, " ");
            }

            output += rowCells.join("|") + "|\n";
        }

        output += divider; 

        return output;
    }

    // todo: should be using underscore.string or similar for this, not re-inventing wheels
    private padLeft(value: string, desiredLength: number, paddingCharacter: string): string {

        if (value.length >= desiredLength) {
            return value;
        }

        var numPadChars = desiredLength - value.length;
        var paddedString = "";
        for (let i = 0; i < numPadChars; ++i) {
            paddedString += paddingCharacter;
        }

        return paddedString += value;
    }

    private repeat(value: string, desiredLength: number): string {
        let output = "";

        for (let length = 0; length < desiredLength; length += value.length) {
            output += value;
        }

        return output;
    }
}