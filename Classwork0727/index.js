var myApp = angular.module('activity', []);

myApp.controller('editController', function($scope){
    var self = this;

    self.editMode = false;

    self.user = new User({
        First: 'Joshua',
        Last: 'Petersen',
        Age: 26
    });

    self.inputObj = new User();

    self.setEdit = function() {
        angular.extend(self.inputObj, self.user);
        self.editMode = true;
    };

    self.cancelEdit = function() {
        self.editMode = false;
    };

    self.saveNames = function(inputObj){
        angular.extend(self.user, inputObj);
        self.cancelEdit();
    };

    function User(user){
        if(!user){
            user = {};
        }
        this.First = user.First || null;
        this.Last = user.Last || null;
        this.Age = user.Age || null;
    }
});