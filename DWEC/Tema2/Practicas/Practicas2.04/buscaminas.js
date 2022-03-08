"use strict";
        
var buscaminasPosiciones = [[0,0,0,0], 
                            [0,-1,0,0],
                            [0,0,-1,0], 
                            [0,0,0,0]  
                        ];

function crearBuscaminas(buscaminas){
    console.log(arguments.lenght);

    buscaminas.map((value, posI) => {
        value.map((mina,posJ) => {
            if(mina == -1 ){
                if(posI-1 >=0 && posJ >=0 && buscaminas[posI-1][posJ-1] != mina){
                    buscaminas[posI-1][posJ-1] +=1;                    
                }
                if(posI-1 >= 0 && buscaminas[posI-1][posJ] !=mina){
                    buscaminas[posI-1][posJ] +=1;                    
                }
                if(posI-1 >= 0 && posJ+1 <=3 && buscaminas[posI-1][posJ+1]!=mina){
                    buscaminas[posI-1][posJ+1] +=1;
                }
                if(posJ-1 >= 0 && buscaminas[posI][posJ-1] != mina){
                    buscaminas[posI][posJ-1] +=1;                   
                }
                if(posJ+1 <= 3 && buscaminas[posI][posJ+1]!=mina){
                    buscaminas[posI][posJ+1] +=1;
                }
                if(posI+1 <= 3 && posJ-1 >= 0 && buscaminas[posI+1][posJ-1]!=mina){
                    buscaminas[posI+1][posJ-1] +=1;
                }               
                if(posI+1 <= 3 && buscaminas[posI+1][posJ]!=mina){
                    buscaminas[posI+1][posJ] +=1;
                }
                if(posI+1 <= 3 && posJ+1 <= 3 && buscaminas[posI+1][posJ+1]!=mina){
                    buscaminas[posI+1][posJ+1] +=1;                    
                }
            }
        })
    })
    return buscaminas;
}

var buscaminas = crearBuscaminas(buscaminasPosiciones);

console.log(buscaminas);


