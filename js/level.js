define(["phaserGame", "controls", "ship", "block"], function(game, ctrls, ship, block) {
  return {
    preload: function() {
      game.load.image('ship', 'img/ship.png')
      game.load.image('block', 'img/block.png')
    }
  , create: function() {
      game.world.setBounds(0, 0, 1920, 1920)
      game.physics.startSystem(Phaser.Physics.P2JS)

      var nsp = ship.create()
      ctrls.init()

      game.physics.p2.enable(nsp)

      game.camera.follow(ship.sprite())

      block.create(500, 500, 500, 500)
      block.create(1000, 900, 500, 500)
      block.create(1200, 800, 500, 500)
      block.create(800, 1000, 500, 500)
    }
  , update: function() {
      ship.updateVelocity()
      if(ctrls.left().isDown)
        ship.turn(-5)
      else if(ctrls.right().isDown)
        ship.turn(5)


    }
  , render: function() {
      game.debug.text(game.time.fps || '--', 2, 14, "#00ff00")
      game.debug.cameraInfo(game.camera, 32, 32);
    }

  }
})
