angular
.module('remoteComposer')
.controller('IdeasShowCtrl', IdeasShowCtrl);

IdeasShowCtrl.$inject = [
  'User',
  'Idea',
  '$stateParams',
  '$scope',
  'Addition',
  'filepickerService'
];
function IdeasShowCtrl(
  User,
  Idea,
  $stateParams,
  $scope,
  Addition,
  filepickerService
){
  const vm = this;

  Idea.get($stateParams).$promise.then(data => {
    vm.idea = data;
  });

  vm.addAudio = () => {
    filepickerService.pick({
      mimetype: 'audio/*'
    }, blob => {
      console.log(blob, 'blob');
      vm.addition = vm.addition || {};
      vm.addition.sound_url = blob.url;
      console.log(vm.addition);
    });
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
}
