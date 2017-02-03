/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hellosolarsystem').component('people', {
    // bindings: {people: '>'},
    // templateUrl: 'templates/people.template.html',
    // ,
    controller: function ($scope) {
        $scope.people = function (PeopleService) {
            // console.log('people are driving too fast');
            return PeopleService.getAllPeople();
        };
    },
    // ,
    template: '<h3>Some people:(in component)</h3>' +
    '<ul>' +
    '  <li ng-repeat="person in $scope.people">' +
    '    <a ui-sref="person({ personId: person.id })">' +
    '      {{person.name}}' +
    '    </a>' +
    '  </li>' +
    '</ul>'
});