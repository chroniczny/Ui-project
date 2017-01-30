/**
 * Created by jkwiatkowski on 30.01.2017.
 */
var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    };

    var helloGalaxy = {
        name: 'hello',
        url: '/hello',
        component: 'hello'
    };

    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
});