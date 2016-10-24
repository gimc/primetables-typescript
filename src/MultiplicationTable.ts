/**
 * Takes two lists of numbers and creates a multiplication table from them (i.e. a matrix)
 */
export default class MultiplicationTable {

    calculate(rows: number[], cols: number[]) : number[][] {

        let cells = this.initialiseTable(rows.length, cols.length);

        // Compute the matrix
        for (let row = 0; row < rows.length; row++) {
            for (let col = 0; col < cols.length; col++) {
                cells[row][col] = rows[row] * cols[col];
            }
        }

        return cells;
    }

    /**
     * Optimised implementation for symmetric tables, multiplication is only performed once for a [row,col]/[col,row] pair
     */
    calculateSymmetric(data: number[]) : number[][] {

        let cells = this.initialiseTable(data.length, data.length);

        let maxLength = Math.floor(data.length/2) + 1;
        for (let row = 0; row < data.length; row++) {
            // Diagonal is the square of the data values
            cells[row][row] = data[row] * data[row];

            // Just have to compute the values once for the upper triangle...
            for (let col = row + 1; col < data.length; col++) {
                cells[row][col] = data[row] * data[col];
                // ... and copy the computed value into the lower triangle
                cells[col][row] = cells[row][col];
            }
        }

        return cells;
    }

    private initialiseTable(numRows: number, numCols: number) : number[][] {
        
        let cells: number[][] = [];

        // Create table 
        for (let row: number = 0; row < numRows; row++) {
            cells[row] = [];
            for (let col: number = 0; col < numCols; col++) {
                cells[row][col] = 0;
            }
        }

        return cells;
    }

}