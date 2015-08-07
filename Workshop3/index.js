/// <reference path="./typings/tsd.d.ts" />
var myApp = angular.module('Workshop3', []);
myApp.factory('SongSelectionDTO', function () {
    function SongSelectionDTO(title, severity) {
        this.title = title;
        this.severity = severity;
    }
    return SongSelectionDTO;
});
myApp.factory('UserDTO', function (SongSelectionDTO) {
    function UserDTO(name, age, songSelections) {
        this.name = name;
        this.age = age;
        this.songSelections = songSelections;
    }
    return UserDTO;
});
myApp.value('GenreList', [
    {
        genreName: 'Pop',
        songList: [
            {
                name: 'Generic',
                severity: 'clean'
            },
            {
                name: 'Song',
                severity: 'clean'
            },
            {
                name: 'Here',
                severity: 'clean'
            },
            {
                name: 'BlahBlahBlah',
                severity: 'clean'
            },
        ]
    },
    {
        genreName: 'Rock',
        songList: [
            {
                name: 'Repeat',
                severity: 'explicit'
            },
            {
                name: 'Stuff',
                severity: 'explicit'
            },
            {
                name: 'Here',
                severity: 'explicit'
            },
            {
                name: 'Songs',
                severity: 'clean'
            },
        ]
    },
    {
        genreName: 'Rap',
        songList: [
            {
                name: 'Do',
                severity: 'explicit'
            },
            {
                name: 'Not',
                severity: 'explicit'
            },
            {
                name: 'Want',
                severity: 'explicit'
            },
        ]
    }
]);
myApp.controller("MusicController", function ($scope, UserDTO, SongSelectionDTO, GenreList) {
    var self = this;
    self.genreList = angular.copy(GenreList);
    self.addRemoveSong = function (song) {
    };
    console.log(self.genreList);
});
//# sourceMappingURL=index.js.map