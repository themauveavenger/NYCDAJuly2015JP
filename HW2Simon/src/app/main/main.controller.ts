module hw2Simon {
    'use strict';

    export interface ISimonColors {
        red:number;
        blue:number;
        green:number;
        yellow:number;
    }

    export enum SimonColors {
        red = 1,
        blue = 2,
        green = 3,
        yellow = 4
    }

    export class MainController {

        static $inject = ['$timeout', '$interval'];

        player1:Player;
        computerPlayer:Player;

        redclass:string = 'red-rest';
        yellowclass:string = 'yellow-rest';
        blueclass:string = 'blue-rest';
        greenclass:string = 'green-rest';

        isClicking:boolean = false;
        computerIsPlaying:boolean = false;
        activePlayer:Player;
        playerLost:boolean = false;

        /**
         * the number in milliseconds that the computer will wait in between presses.
         * @type {number}
         */
        computerDelay:number = 500;

        SimonColors:ISimonColors = {
            red: 1,
            blue: 2,
            green: 3,
            yellow: 4
        };

        buttonText:string = 'Start New Game';
        showNewGameButton:boolean = true;

        /* @ngInject */
        constructor(private $timeout:ng.ITimeoutService,
                    private $interval:ng.IIntervalService) {
            this.computerPlayer = new Player('Simon - Computer');

            this.player1 = new Player('Josh');
        }

        computerClick(colorToChange:number) {
            this.clickColorChange(colorToChange);
        }

        playerClick(colorToChange:number) {
            var self:MainController = this;

            if (!self.computerIsPlaying) {
                self.clickColorChange(colorToChange);

                self.player1.sequence.push(colorToChange);

                // check if sequence length equals simon's length
                if (self.player1.sequence.length === self.computerPlayer.sequence.length) {
                    var sequencesEqual:boolean = Player.sequencesEqual(self.player1.sequence, self.computerPlayer.sequence);

                    if (sequencesEqual) {
                        self.player1.score++;

                        self.$timeout(function () {
                            self.player1.sequence = [];

                            self.beginRound();

                        }, 2000);
                    }
                    else {
                        // player lost - display a message
                        self.playerLost = true;
                    }
                }
            }
        }

        clickColorChange(colorToChange:number) {
            var self:MainController = this;

            // check so user can't issue another click if one is already in progress.
            if (!self.isClicking) {

                // set so you can't click
                self.isClicking = true;

                var colorClass = '';

                console.log(colorToChange);

                if (colorToChange === SimonColors.red) {
                    self.redclass = 'red-click';
                    colorClass = 'redclass';
                }
                else if (colorToChange === SimonColors.green) {
                    self.greenclass = 'green-click';
                    colorClass = 'greenclass';
                }
                else if (colorToChange === SimonColors.blue) {
                    self.blueclass = 'blue-click';
                    colorClass = 'blueclass';
                }
                else if (colorToChange === SimonColors.yellow) {
                    self.yellowclass = 'yellow-click';
                    colorClass = 'yellowclass';
                }

                self.$timeout(function () {
                    self[colorClass] = SimonColors[colorToChange] + '-rest';
                    self.isClicking = false;
                }, 150);
            }

        }

        /**
         * function to change colors when the mouse enters or leaves a color.
         * @param colorToChange
         * @param entering
         */
        changeHoverColor(colorToChange:number, entering:boolean) {
            var self:MainController = this;

            // make sure the computer isn't playing. don't want to mess up colors.
            if (!self.computerIsPlaying) {
                var suffix = '';

                if (entering === true) {
                    suffix = 'hover';
                }
                else {
                    suffix = 'rest';
                }

                if (colorToChange === SimonColors.red) {
                    self.redclass = 'red-' + suffix;
                }
                else if (colorToChange === SimonColors.blue) {
                    self.blueclass = 'blue-' + suffix;
                }
                else if (colorToChange === SimonColors.green) {
                    self.greenclass = 'green-' + suffix;
                }
                else if (colorToChange === SimonColors.yellow) {
                    self.yellowclass = 'yellow-' + suffix;
                }
            }

        }

        initGameState() {
            var self:MainController = this;

            self.computerIsPlaying = false;
            self.showNewGameButton = true;
            self.activePlayer = null;
            self.player1.sequence = [];
            self.player1.score = 0;
            self.computerPlayer.sequence = [];
            self.playerLost = false;

            self.beginRound();
        }

        beginRound() {
            var self:MainController = this;

            var timeout:number = 0;

            if (self.computerPlayer.sequence.length < 1) {
                timeout = 2000;
            }

            self.showNewGameButton = false;
            self.computerIsPlaying = true;
            self.activePlayer = self.computerPlayer;

            var rand:number = Math.floor((Math.random() * 4) + 1);

            self.computerPlayer.sequence.push(rand);

            var count:number = 0;

            var interval = self.$interval(function () {
                self.clickColorChange(self.computerPlayer.sequence[count]);

                count++;

                if (count === self.computerPlayer.sequence.length) {
                    self.$interval.cancel(interval);
                    self.computerIsPlaying = false;
                    self.activePlayer = self.player1;
                }

            }, self.computerDelay);


        }

        getSimonColor(simonNumber:number):string {
            return SimonColors[simonNumber];
        }

    }
}
