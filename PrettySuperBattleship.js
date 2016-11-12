$(document).ready(function () {
    var game = new SuperBattleship({turnLimit:1000});
    var cli_player_one = new PrettyPlayer(game, $('#p1_cli_input'),
				       $('#p1_cli_output'), $('#p1_view'), true);
    var ai_player_two = new DumbAI(game, false);
    game.startGame();
});
