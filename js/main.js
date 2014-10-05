require.config({
      urlArgs: "bust=" + (new Date()).getTime()
})
require(["phaserGame", "game"],
  function(pGame, _game) {
    window.game = pGame
})
