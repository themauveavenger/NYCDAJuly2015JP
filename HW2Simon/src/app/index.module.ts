/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/malarkey/malarkey.directive.ts" />
/// <reference path="../app/components/webDevTec/webDevTec.service.ts" />
/// <reference path="../app/components/githubContributor/githubContributor.service.ts" />
/// <reference path="../app/components/Player.ts" />

declare var malarkey:any;
declare var toastr:Toastr;
declare var moment:moment.MomentStatic;
declare var Player:hw2Simon.Player;

module hw2Simon {
    'use strict';

    angular
        .module('hw2Simon', ['ui.router'])
            .constant('malarkey', malarkey)
            .constant('toastr', toastr)
            .constant('moment', moment)
            .config(Config)

            .config(RouterConfig)

            .run(RunBlock)
            .factory(Player)


            .controller('MainController', MainController);

}
