/**
 * Created by jkwiatkowski on 30.01.2017.
 */

angular.module('hellogalaxy')
    .component('hello', {
        template: '<h3>{{$ctrl.greeting}} Solar System!</h3>' +
        '<button ng-click="$ctrl.toggleGreeting()">toggle greeting</button>',

        controller: function () {
            this.greeting = 'hello';
            this.toggleGreeting = function () {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
            }
        }
    });