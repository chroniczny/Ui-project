/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hellosolarsystem').service('PeopleService', function($http) {
    var service = {
        getAllPeople: function() {
            return $http.get('data/people.json', {
                cache: true
            }).then(function(resp) {
                // localStorage.setItem('UiPeople', JSON.stringify(resp.data));
                console.log(resp.data);
                return resp.data;
            });
        },
        getPerson: function(id) {
            function personMatchesParam(person) {
                // console.log(id);
                return person.id == id;
            }
            return service.getAllPeople().then(function(people) {
                console.log("ddd");
                return people.find(personMatchesParam);
            });
        }
    };
    console.log('service fired');
    return service;
});