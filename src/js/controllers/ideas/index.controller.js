angular
.module('angularAuthentication')
.controller('IdeasIndexCtrl', IdeasIndexCtrl);

IdeasIndexCtrl.$inject = [
  'User',
  'Idea',
  '$scope',
  'filepickerService'
];
function IdeasIndexCtrl(
  User,
  Idea,
  $scope,
  filepickerService
){
  const vm = this;
  vm.showIdeas = true;
  Idea.query().$promise.then(data => {
    vm.ideas = data;
  });

  vm.addAudio = () => {
    filepickerService.pick({
      mimetype: 'audio/*'
    }, blob => {
      vm.idea = vm.idea || {};
      vm.idea.sound_url = blob.url;
    });
  };

  vm.submitIdea = function(){
    if (vm.idea.sound_url){
      vm.idea.instruments = [];
      if (vm.instrument1 && vm.instrument1.length){
        vm.idea.instruments.push(vm.instrument1);
      }
      if (vm.instrument2 && vm.instrument2.length){
        vm.idea.instruments.push(vm.instrument2);
      }
      if (vm.instrument3 && vm.instrument3.length){
        vm.idea.instruments.push(vm.instrument3);
      }
      vm.idea.idea_id = vm.idea.id;
      Idea
      .save(vm.idea)
      .$promise
      .then(data => {
        console.log('success', data);
        vm.ideas.push(data);
        vm.idea = null;
        vm.showIdeas = true;
      });
    }
  };
  vm.playAll = () => {
    $('audio').each((tag, element) => element.play());
  };

  vm.pauseAll = () => {
    $('audio').each((tag, element) => element.pause());
  };
}



























// ----------------------------


  // // TESTING API ROUTES FOR BETTER JSON OVERVIEW
  // Idea.query().$promise.then(data => console.log('Ideas', data));
  // idea.query().$promise.then(data => console.log('ideas', data));
  // User.query().$promise.then(data => console.log('Users', data));
  // Idea.get({id: 1}).$promise.then(data => console.log('Idea 1', data));
