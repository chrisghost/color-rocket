define(["phaserGame"], function(game) {
  return {
    create: function(w, h, x, y) {
      var b = game.add.sprite(x, y, 'block')
      b.scale = { x: 10, y: 1}
    }
  }
})
