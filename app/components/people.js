/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hellosolarsystem').component('people', {
    bindings: { people: '<' },

    template: '<h3>Some people:</h3>' +
    '<ul>' +
    '  <li ng-repeat="person in $ctrl.people">' +
    '    <a ui-sref="person({ personId: person.id })">' +
    '      {{person.name}}' +
    '    </a>' +
    '  </li>' +
    '</ul>'
})