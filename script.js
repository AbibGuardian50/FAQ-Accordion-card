function showTeam() {
    var team = document.getElementById("team");
  if (team.style.display === "block") {
    team.style.display = "none";
    document.getElementById("showTeam").style.color = "hsl(237, 12%, 33%)";
  } else {
    team.style.display = "block";
    document.getElementById("showTeam").style.color = "black";
  }

  
}


function showSize() {
    var size = document.getElementById("size");
  if (size.style.display === "block") {
    size.style.display = "none";
    document.getElementById("showSize").style.color = "hsl(237, 12%, 33%)";
  } else {
    size.style.display = "block";
    document.getElementById("showSize").style.color = "black";
  }
}

function showReset() {
    var reset = document.getElementById("reset");
    if (reset.style.display === "block") {
      reset.style.display = "none";
      document.getElementById("showReset").style.color = "hsl(237, 12%, 33%)";
    } else {
      reset.style.display = "block";
      document.getElementById("showReset").style.color = "black";
    }
}

function showCancel() {
    var cancel = document.getElementById("cancel");
    if (cancel.style.display === "block") {
      cancel.style.display = "none";
      document.getElementById("showCancel").style.color = "hsl(237, 12%, 33%)";
    } else {
      cancel.style.display = "block";
      document.getElementById("showCancel").style.color = "black";
    }
}

function showSupport() {
    var support = document.getElementById("support");
    if (support.style.display === "block") {
      support.style.display = "none";
      document.getElementById("showSupport").style.color = "hsl(237, 12%, 33%)";
    } else {
      support.style.display = "block";
      document.getElementById("showSupport").style.color = "black";
    }
}