
GAME_APP_NAME = 'GameApp';

DEFAULT_SONG = 0;
DEFAULT_INSTRUMENT = 07;

// In milliseconds
DELAY_UNIT_TIME = 700;

SONGS = [
  {
    'position': 0,
    'name': 'Feliz Cumpleaños',
    'notes': 'DO DO RE DO FA MI DO DO RE DO SOL FA FA LA DO LA FA FA MI RE SI SI LA FA SOL FA',
    'times': '01 01 01 01 02 02 01 01 01 01 02 02 01 01 01 01 02 02 01 01 02 02 02 02 02 02'
  },
  {
    'position': 1,
    'name': 'Estrellita',
    'notes': 'DO DO SOL SOL LA LA SOL FA FA MI MI RE RE DO SOL SOL FA FA MI MI RE SOL SOL FA FA MI MI RE DO DO SOL SOL LA LA SOL FA FA MI MI RE RE DO',
    'times': '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'
  },
  {
    'position': 2,
    'name': 'Himno de la Alegría',
    'notes': 'MI MI FA SOL SOL FA MI RE DO DO RE MI MI RE RE MI MI FA SOL SOL FA MI RE DO DO RE MI RE DO DO RE RE MI DO RE MI FA MI DO RE MI FA MI RE DO RE SOL',
    'times': '01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01 01'
  }
];

TONES = ['DO','RE','MI','FA','SOL','LA','SI'];

FRUITS = {
  'DO': 'apple',
  'RE': 'orange',
  'MI': 'green_apple',
  'FA': 'peach',
  'SOL': 'pear',
  'LA': 'lemon',
  'SI': 'zapallito'
};

/**
 * Init the angular app
 */
(function(){
  'use strict'

  var app = angular.module(GAME_APP_NAME, []);

})();
