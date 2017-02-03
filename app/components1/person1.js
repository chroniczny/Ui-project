/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hello').component('person1', {
    bindings: {
        person: '<'
    },
    // controller: function ($scope) {
    //     $scope.person = function (PeopleService, $transition$) {
    //         return PeopleService.getPerson($transition$.params().personId);
    //     }
    //
    // },

    template: '<h3>A person!</h3>' +
    '<div>Name: {{$scope.person.name}}</div>' +
    '<div>Id: {{$scope.person.id}}</div>' +
    '<div>Company: {{$scope.person.company}}</div>' +
    '<div>Email: {{$scope.person.email}}</div>' +
    '<div>Address: {{$scope.person.address}}</div>' +
    '<button ui-sref="people">Close</button>'
});