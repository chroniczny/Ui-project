/**
 * Created by jkwiatkowski on 30.01.2017.
 */
var myApp = angular.module('hellosolarsystem', ['ui.router'
    // , 'ui.router.visualizer'
]);

myApp.config(function($stateProvider) {
    // An array of state definitions
    var states = [
        {
            name: 'hello',
            url: '/hello',
            // Using component: instead of template:
            component: 'hello',
            template: '<hello></hello>'
        },

        {
            name: 'about',
            url: '/about',
            // templateUrl: "templates/about.template.html",
            component: 'about',
            template: '<about></about>'
        },

        {
            name: 'people',
            url: '/people',
            component: 'people',

            template: '<people></people>',
            // templateUrl: '../templates/people.template.html',
            // This state defines a 'people' resolve
            // It delegates to the PeopleService to HTTP fetch (async)
            // The people component receives this via its `bindings: `
            resolve: {
                people: function(PeopleService) {
                    return PeopleService.getAllPeople();
                }
            }

        },

        {
            name: 'person',
            // This state takes a URL parameter called personId
            url: '/people/{personId}',
            component: 'person',

            template: '<person></person>',
            // This state defines a 'person' resolve
            // It delegates to the PeopleService, passing the personId parameter
            resolve: {
                person: function(PeopleService, $transition$) {
                    return PeopleService.getPerson($transition$.params().personId);
                }
            }
        }
    ];

    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });

});

// To account for plunker embeds timing out, preload the async data
myApp.run(function($http) {
    $http.get('data/people.json', { cache: true });
});

// angular.module('hellosolarsystem', ['ui.router'])
//     .config([
//         // '$urlRouteProvider',
//         '$stateProvider', function ($stateProvider, $urlRouteProvider) {
//             // $urlRouteProvider.otherwise('/');
//
//             $stateProvider
//                 .state('about', {
//                     url: '/about',
//                     template: '<about></about>'
//
//                 })
//                 .state('hello', {
//                     url: '/hello',
//                     template: '<hello></hello>'
//
//
//                 })
//                 .state('people', {
//                     url: '/people',
//                     template: '<people></people>',
//
//                     resolve: {
//                         people: function (PeopleService) {
//                             console.log('people are driving too fast');
//                             return PeopleService.getAllPeople();
//                         }
//                     }
//                 })
//                 .state('person', {
//                     url: '/person',
//                     template: '<person></person>',
//
//                     resolve: {
//                         person: function (PeopleService, $transition$) {
//                             return PeopleService.getPerson($transition$.params().personId);
//                         }
//                     }
//                 });
//             // $stateProvider.state(about);
//             // $stateProvider.state(hello);
//             // $stateProvider.state(people);
//             // $stateProvider.state(person);
//         }])
//     .run(function ($http) {
//         $http.get('data/people.json', {cache: true});
//     });



