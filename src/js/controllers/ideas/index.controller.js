angular
  .module('angularAuthentication')
  .controller('IdeasIndexCtrl', IdeasIndexCtrl);

IdeasIndexCtrl.$inject = ['Idea'];
function IdeasIndexCtrl(Idea){
  const vm = this;

  vm.ideas = Idea.query();
  console.log(vm.ideas);
}
