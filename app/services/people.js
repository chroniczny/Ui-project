/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hellosolarsystem').service('PeopleService', function($http) {
    var service = {
        getAllPeople: function() {
            return $http.get('data/people.json', { cache: true }).then(function(resp) {
                return resp.data; // wyciagnij wszystkich 'ludzi'
            });
        },

        getPerson: function(id) {   // majac zadane id
            function personMatchesParam(person) {   // najpierw porównaj aby znaleźć pasującą po id osobę
                return person.id === id; //
            }

            return service.getAllPeople().then(function (people) { // z wszystkich wyciagniętych
                return people.find(personMatchesParam); // zwróć tylko tę pasującą
            });
        }
    };

    return service;
});