/**
 * Created by jkwiatkowski on 30.01.2017.
 */
var myApp = angular.module('hello', ['ui.router']);
myApp.config(function($stateProvider) {
    // An array of state definitions
    var states = [{
        name: 'hello',
        url: '/hello',
        component: '<hello1></hello1>'
    }, {
        name: 'about',
        url: '/about',
        component: '<about1></about1>'
    }, {
        name: 'people',
        url: '/people',
        component: '<people1></people1>',
        resolve: {
            people: function(PeopleService1) {
                return PeopleService1.getAllPeople();
            }
        }
    }, {
        name: 'people.person',
        url: '/{personId}',
        component: '<person1></person1>',
        resolve: {
            person: function(people, $stateParams) {
                return people.find(function(person) {
                    return person.id === $stateParams.personId;
                });
            }
        }
    }];
    // Loop over the state definitions and register them
    states.forEach(function(state) {
        $stateProvider.state(state);
    });
});
// myApp.run(function($http, $uiRouter) {
//     window['ui-router-visualizer'].visualizer($uiRouter);
//     $http.get('data/people.json', {
//         cache: true
//     });
// });