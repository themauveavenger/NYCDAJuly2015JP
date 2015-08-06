/// <reference path="./typings/tsd.d.ts" />

var myApp = angular.module('Workshop2', []);

myApp.factory('AssignmentDTO', function () {
    function Assignment(assignmentName:string, assignmentGrade:number) {
        this.assignmentName = assignmentName;
        this.assignmentGrade = assignmentGrade;
    }

    return Assignment;
});

myApp.service('GradeFunctions', function () {
    var self = this;

    self.calculateAverage = function (assignments:any[]):number {
        var length:number = assignments.length;
        var total:number = 0;

        if (length > 0) {
            for (var i = 0; i < assignments.length; i++) {
                var ass = assignments[i];

                total = total + ass.assignmentGrade;

            }
        }
        else {
            return 0;
        }

        return total / length;
    };

    self.isPassing = function (grade:number):boolean {
        return grade >= 60;
    }

});

myApp.value('KeyCodes', {
    EnterKey: 13
});

myApp.controller("GradesCtrl", function ($scope, AssignmentDTO, KeyCodes:any, GradeFunctions) {

    var self = this;

    self.Assignments = [];
    self.average = null;
    self.passing = false;

    self.saveInput = function (input:{name:string; grade:number}) {
        self.Assignments.push(new AssignmentDTO(input.name, input.grade));
        self.input = {}; // clear input after.

        self.average = GradeFunctions.calculateAverage(self.Assignments);

        self.passing = GradeFunctions.isPassing(self.average);

        console.log(self.Assignments);
    };

    self.saveInputKeyUp = function ($event:KeyboardEvent) {
        console.log('KeyCode: ' + $event.keyCode);

        if ($event.keyCode === KeyCodes.EnterKey) {
            self.saveInput(self.input);
        }
    };

});