define([
    "phaserGame"
   , "vendors/phaser"
    ], function(game) {
  var _left, _right = null
  return {
    init : function() {
      _left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
      _right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)
    },
    left  : function() { return _left },
    right : function() { return _right }
  }
})
