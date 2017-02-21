angular
.module('angularAuthentication')
.controller('IdeasShowCtrl', IdeasShowCtrl);

IdeasShowCtrl.$inject = ['User', 'Idea', '$stateParams', '$scope', 'Addition'];
function IdeasShowCtrl(User, Idea, $stateParams, $scope, Addition){
  const vm = this;


  Idea.get($stateParams).$promise.then(data => {
    vm.idea = data;
  });

  // vm.showPicker = function(){
  //   vm.submittingAddition = true;
  //   $('#picker').html('<input ng-hide="ideaShow.addition.sound_url" type="filepicker" data-fp-apikey="Au0FfUuSTvihNwvzZV0Q3z" onchange="angular.element(this).scope().ideaShow.assignSoundUrl(event.fpfile.url)">');
  // }



  vm.assignSoundUrl = function(url){
    console.log('running');
    vm.addition = {};
    vm.addition.sound_url = url;
    console.log(vm.addition);
    $scope.$apply();
  };

  vm.submitAddition = function(){
    vm.addition.instruments = [];
    if (vm.instrument1 && vm.instrument1.length){
      vm.addition.instruments.push(vm.instrument1);
    }
    if (vm.instrument2 && vm.instrument2.length){
      vm.addition.instruments.push(vm.instrument2);
    }
    if (vm.instrument3 && vm.instrument3.length){
      vm.addition.instruments.push(vm.instrument3);
    }
    vm.addition.idea_id = vm.idea.id;
    Addition
    .save(vm.addition)
    .$promise
    .then(data => {
      console.log('success', data);
      vm.idea.additions.push(data);
      vm.addition = null;
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
