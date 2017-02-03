/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hello').component('hello1', {
    // template: '<h3>{{$ctrl.greeting}} solar sytem!</h3>' +
    // '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',
    templateUrl: 'templates/hello.template.html',

    controller: function() {
        this.greeting = 'hello';
        this.toggleGreeting = function() {
            this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
        }
    }
});