/**
 * Created by jkwiatkowski on 30.01.2017.
 */
angular.module('hellosolarsystem').service('PeopleService', function($http) {
    var service = {
        getAllPeople: function() {
            return $http.get('data/people.json', {
                cache: true
            }).then(function(resp) {
                return resp.data;
            });
        },
        getPerson: function(id) {
            function personMatchesParam(person) {
                return person.id === id;
            }
            return service.getAllPeople().then(function(people) {
                return people.find(personMatchesParam);
            });
        }
    };
    return service;
});

//// =========AS A FACTORY ===================
// angular.module('hellosolarsystem')
//     .factory('People', ['$http', function($http) {
//     // var service = {
//         return {
//         getAllPeople: function() {
//             return $http.get('/data/people.json', {
//                 cache: true
//             }).then(function(resp) {
//                 return resp.data;
//             });
//         },
//         getPerson: function(id) {
//             function personMatchesParam(person) {
//                 return person.id === id;
//             }
//             return service.getAllPeople().then(function(people) {
//                 return people.find(personMatchesParam);
//             });
//         }
//     };
//     // return service;
// }
// ]
//     );