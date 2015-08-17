module hw2Simon {
    'use strict';

    export class Player {
        name:string;
        score:number;
        sequence:number[] = [];

        constructor(name:string){
            this.name = name;
            this.score = 0;
        }

        static sequencesEqual(sequence1:number[], sequence2:number[]):boolean{
            return angular.equals(sequence1, sequence2);
        }
    }
}
