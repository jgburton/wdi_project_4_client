angular
  .module('remoteComposer')
  .factory('Idea', ideaFactory);

ideaFactory.$inject = ['API', '$resource'];
function ideaFactory(API, $resource){
  return $resource(`${API}/ideas/:id`, { id: '@_id'}, {
    
  });
}
