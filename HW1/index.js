var myApp = angular.module('HW1', []);

myApp.controller("HW1Controller", function ($scope) {
    var self = this;

    self.colorThemeChoice = null;

    $scope.bodyStyle = null;

    /**
     * list of theme names and correpsonding values.
     * @type {*[]}
     */
    self.colorOptions = [
        {
            name: 'Default',
            colorClasses: {
                body: 'bodyDefault',
                s1: 's1Default',
                s2: 's2Default'
            }
        },
        {
            name: 'Red',
            colorClasses: {
                body: 'bodyRed',
                s1: 's1Red',
                s2: 's2Red'
            }
        },
        {
            name: 'Green',
            colorClasses: {
                body: 'bodyGreen',
                s1: 's1Green',
                s2: 's2Green'
            }
        },
        {
            name: 'Blue',
            colorClasses: {
                body: 'bodyBlue',
                s1: 's1Blue',
                s2: 's2Blue'
            }
        },
        {
            name: 'Yellow',
            colorClasses: {
                body: 'bodyYellow',
                s1: 's1Yellow',
                s2: 's2Yellow'
            }
        },
        {
            name: 'Dark',
            colorClasses: {
                body: 'bodyDark',
                s1: 's1Dark',
                s2: 's2Dark'
            }
        }

    ];

    self.colorThemeChoice = self.colorOptions[0].colorClasses;

    /**
     * helper function - just shows the value of the currently selected theme.
     * @type {showChoice}
     */
    self.showChoice = function () {
        alert(self.colorThemeChoice);
    };

});

myApp.controller("folderController", function ($scope) {

    var self = this;

    self.showFolders = true;

    self.folderChoice = "";

    self.inputFileName = "";

    self.folders = [
        {
            folderName: 'Music',
            fileNames: ['black.mp3', 'red.mp3'],
            expanded: true
        },
        {
            folderName: 'Videos',
            fileNames: [],
            expanded: true
        },
        {
            folderName: 'Documents',
            fileNames: [],
            expanded: true
        }
    ];

    self.saveFileName = function (folder, filename) {
        if (folder && folder.length > 0 && filename && filename.length > 0) {

            for(var i = 0; i < self.folders.length; i++){
                // find the folder
                var fld = self.folders[i];

                if(fld.folderName === folder){
                    fld.fileNames.push(filename);
                    break;
                }
            }

        }
        else {
            alert('folder not selected or file name is empty');
        }

        self.inputFileName = "";
    };

    var enterKeyCode = 13;

    self.addFilesKeyUp = function ($event) {
        // console.log($event.keyCode);
        if ($event.keyCode === enterKeyCode) {
            self.saveFileName(self.folderChoice, self.inputFileName);
        }

    };

    self.toggleFolders = function (showFolders) {
        console.log(showFolders);

        for(var i = 0; i < self.folders.length; i++){
            var fld = self.folders[i];

            fld.expanded = showFolders;
        }
    }

});