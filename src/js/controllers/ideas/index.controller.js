// angular
// .module('angularAuthentication')
// .controller('IdeasIndexCtrl', IdeasIndexCtrl);
//
// IdeasIndexCtrl.$inject = ['User', 'Idea'];
// function IdeasIndexCtrl(User, Idea){
//   const vm = this;
//
//
//   Idea.query().$promise.then(data => {
//     vm.ideas = data;
//     // console.log(vm.ideas);
//   });
//
// }



// ____________________________________

angular
.module('angularAuthentication')
.controller('IdeasIndexCtrl', IdeasIndexCtrl);

IdeasIndexCtrl.$inject = ['User', 'Idea', '$scope'];
function IdeasIndexCtrl(User, Idea, $scope){
  const vm = this;


  Idea.query().$promise.then(data => {
    vm.ideas = data;
    // console.log(vm.ideas);
  });






  // vm.showPicker = function(){
  //   vm.submittingidea = true;
  //   $('#picker').html('<input ng-hide="ideaShow.idea.sound_url" type="filepicker" data-fp-apikey="Au0FfUuSTvihNwvzZV0Q3z" onchange="angular.element(this).scope().ideaShow.assignSoundUrl(event.fpfile.url)">');
  // }



  vm.assignSoundUrl = function(url){
    console.log('running');
    vm.idea = {};
    vm.idea.sound_url = url;
    console.log(vm.idea);
    $scope.$apply();
  };

  vm.submitIdea = function(){
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
      vm.idea.ideas.push(data);
      vm.idea = null;
    });
  };
  vm.playAll = () => {
    $('audio').each((tag, element) => element.play());
  };

  vm.pauseAll = () => {
    $('audio').each((tag, element) => element.pause());
  };

  // vm.pickFile = pickFile;

  // vm.onSuccess = onSuccess;
  //
  // // function pickFile(){
  // //   console.log('running');
  // //   filepickerService.pick(
  // //     {mimetype: 'audio/*'},
  // //     onSuccess
  // //   );
  // // };
  //
  // function onSuccess(url){
  //   console.log('running');
  //   console.log(url);
  // };

}



























// ----------------------------


  // // TESTING API ROUTES FOR BETTER JSON OVERVIEW
  // Idea.query().$promise.then(data => console.log('Ideas', data));
  // idea.query().$promise.then(data => console.log('ideas', data));
  // User.query().$promise.then(data => console.log('Users', data));
  // Idea.get({id: 1}).$promise.then(data => console.log('Idea 1', data));
