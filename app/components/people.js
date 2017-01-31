/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hellosolarsystem').component('people', {
    bindings: { people: '<' }, // bindings with an input 'people' that matches the resolve name
    templateUrl: "templates/people.template.html"
});