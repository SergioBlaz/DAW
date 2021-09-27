"use strict";

sudokuCorrecto = []
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

sudokuIncorrecto = []
for(let fila of sudokuCorrecto) sudokuIncorrecto.push([...fila]);
sudokuIncorrecto[0][0] = 2;

function comprobarSudoku(sudoku) {
    var resultado ="Es correcto! Enhorabuena!!";
    //var numero;
    //var comprobante = [1,2,3,4,5,6,7,8,9];
    //const bloque = 3;

    for(let i=0; i<8; i++){
    
        for(let j=0; j<8; j++){
            

            
        }

    }
    return resultado;

}

console.log(comprobarSudoku(sudokuCorrecto));