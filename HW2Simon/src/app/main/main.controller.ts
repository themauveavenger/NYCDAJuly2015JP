module hw2Simon {
    'use strict';

    export class MainController {

        testVar:string;
        player1:Player;
        player2:Player;

        /* @ngInject */
        constructor() {
            this.player1 = new Player('Josh');
            this.player2 = new Player ('Master Computer');
        }

    }
}
