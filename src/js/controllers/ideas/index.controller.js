angular
  .module('angularAuthentication')
  .controller('IdeasIndexCtrl', IdeasIndexCtrl);

IdeasIndexCtrl.$inject = ['User', 'Idea', 'Addition'];
function IdeasIndexCtrl(User, Idea, Addition){
  const vm = this;

  vm.ideas = Idea.query();
  vm.$audio = $('audio');

  vm.playAll = () => {
    vm.$audio.each((tag, element) => element.play());
  };

  vm.pauseAll = () => {
    vm.$audio.each((tag, element) => element.pause());
  };

  // TESTING API ROUTES FOR BETTER JSON OVERVIEW
  Idea.query().$promise.then(data => console.log('Ideas', data));
  Addition.query().$promise.then(data => console.log('Additions', data));
  User.query().$promise.then(data => console.log('Users', data));
  Idea.get({id: 1}).$promise.then(data => console.log('Idea 1', data));
}
