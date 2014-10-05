define(function() {
  var sp = {}
  return {
    create: function() {
      sp = game.add.sprite(game.world.centerX, game.world.centerY, 'ship')
      sp.scale = { x: 0.1, y: 0.1}
      return sp
    },
    sprite: function() { return sp },
    turn: function(angleDiff) {
      sp.body.angle += angleDiff
    },
    updateVelocity: function() {
      sp.body.moveForward(100)//velocity = { x: 10.0, y:0 }
    },
    movDir: function() {
      return sp.angle
    }
  }
})
