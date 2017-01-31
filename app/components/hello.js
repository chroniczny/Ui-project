/**
 * Created by jkwiatkowski on 30.01.2017.
 */

angular.module('hellosolarsystem')
    .component('hello', {
        templateUrl: "templates/hello.template.html",

        controller: function () {
            this.greeting = 'hello';
            this.toggleGreeting = function () {
                this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
            }
        }
    });