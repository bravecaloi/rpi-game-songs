(function() {
  'use strict'

  var app = angular.module(GAME_APP_NAME);

  app.controller('GameMechanicsController', function($scope, $timeout, FruitService, NotificationsService) {
    var ctrl = this;

    ctrl.selectedSong = {};
    ctrl.fruits = [];

    ctrl.fruitsContainer = document.getElementById('song');
    ctrl.songName = document.getElementById('songName');
    ctrl.songAuthor = document.getElementById('songAuthor');

    ctrl.fruitsCounter = 0;
    var fruitAnimationEnds = function(fruit){
      fruit.elem.style.webkitAnimationName = '';
      fruit.elem.style['display'] = 'none';

      if(fruit.hit == false){
        NotificationsService.fruitMissed(fruit);
      }

      ctrl.fruitsCounter++;

      if(ctrl.fruitsCounter == ctrl.fruits.length){
        NotificationsService.gameFinished(ctrl.fruits.length);
      }
    }

    var createAllFruits = function(){
      ctrl.fruits = [];
      ctrl.fruitsContainer.innerHTML = '';
      ctrl.fruitsCounter = 0;

      var notes = ctrl.selectedSong.notes.split(' ');
      // var times = ctrl.selectedSong.times.split(' ');

      var delay = 0;
      for (var i = 0; i < notes.length; i++) {
        // delay += Number(times[i]);
        delay += 1;
        var fruit = FruitService.createFruit( i, notes[i],  delay );
        ctrl.fruits.push(fruit);
      }
    }

    var animateAllFruits = function(){
      for (var i = 0; i < ctrl.fruits.length; i++) {
        var fruit = ctrl.fruits[i];
        $timeout(function(mFruit) {
          return function() {
            FruitService.animateFruit(mFruit, fruitAnimationEnds);
          };
        }(fruit), fruit.delay * DELAY_UNIT_TIME);
      }
    }

    var startSong = function(){
      NotificationsService.resetPoints();
      NotificationsService.showStartGameCounter();

      $scope.$on('finishStartGameCounter', function() {
        createAllFruits();
        animateAllFruits();
      });
    }

    var changeSong = function(position){
      ctrl.selectedSong = SONGS[position];
      ctrl.songName.innerHTML = ctrl.selectedSong.name;
    }

    var scrollUpSong = function(){
      var newSong = ctrl.selectedSong.position + 1;
      changeSong( (newSong == SONGS.length) ? 0 : newSong);
    }

    var checkFruitsPosition = function (input){
      for (var i = 0; i < ctrl.fruits.length; i++) {
        var fruit = ctrl.fruits[i];
        if(fruit.tone == TONES[input] && fruit.hit == false && FruitService.overlapsThreshold(fruit.elem)){
          NotificationsService.fruitHit(fruit);
          return;
        }
      }
      NotificationsService.toneFailed(TONES[input]);
    }


    /** Interface for the TouchController **/
    global.GameController = {
      checkFruitsPosition: checkFruitsPosition,
      startSong: startSong,
      scrollUpSong: scrollUpSong
    }


    // DEFAULT song selected
    changeSong(DEFAULT_SONG);
    NotificationsService.changeInstrument(DEFAULT_INSTRUMENT);
  });

})();
