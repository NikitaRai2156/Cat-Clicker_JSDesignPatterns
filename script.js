var Score = 0;

Changescore = function() {
  Score += 1;
  $("#score").text(Score);
};

$("#cat").click(function(e) {
  Changescore();
});
