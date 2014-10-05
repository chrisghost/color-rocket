define(["phaserGame", "ship", "level"], function(game, ship, level) {
    var bootState = {
        preload: level.preload,
        create: level.create,
        update: level.update,
        render: level.render
      }

    game.state.add('Boot', bootState)
    game.state.start('Boot')
})
