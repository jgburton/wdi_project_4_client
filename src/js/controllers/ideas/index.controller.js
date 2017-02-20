angular
  .module('angularAuthentication')
  .controller('IdeasIndexCtrl', IdeasIndexCtrl);

IdeasIndexCtrl.$inject = ['Ideas'];
function IdeasIndexCtrl(Idea){
  const vm = this;

  vm.ideas = Idea.query();
}
