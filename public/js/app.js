angular.module('EvPast', []);

angular.module('EvPast').controller('MainController', ctrlFunc);




function ctrlFunc() {
    
    this.artefacts = clientArtefacts;
}