angular
  .module('angularAuthentication')
  .factory('Addition', additionFactory);

additionFactory.$inject = ['API', '$resource'];
function additionFactory(API, $resource){
  return $resource(`${API}/additions/:id`, { id: '@_id'}, {

  });
}
