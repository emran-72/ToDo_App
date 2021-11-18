var tcount = 0;
var ccount = 0;
function add() {
  var user_input = document.getElementById("input").value;
  if (user_input == "") {
    var alertPlaceholder = document.getElementById("alert");
    function alert(message, type) {
      var wrapper = document.createElement("div");
      wrapper.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert" style="   text-align: center; background-color: #FF9300;  color: #54436b;  border-radius: 15px; margin: 5px 20px 5px 20px;"> ' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button></div>';
      alertPlaceholder.append(wrapper);
    }
    alert("Sorry, Field Empty", "success");
    return;
  }
  tcount = tcount + 1;
  if (tcount !== 0) {
    document.getElementById("tcount").innerHTML = tcount + " TASKS PENDING";
    document.getElementById("ccount").innerHTML = ccount + " TASK DONE";
  }
  var previnput = document.getElementById("tcount");
  var newinput =
    ' <div id="task" style="margin: auto;  color: #50cb93; margin: 5px 20px 5px 20px; text-align:center;  border-radius: 15px; background-color: #54436b;" class="row alert alert-warning back_border">' +
    '<div class="col" value=user_input>' +
    "<h3 >" +
    user_input +
    "</h3>" +
    "</div>" +
    '<div class="col">' +
    '<button style="margin: auto;    text-decoration-color:#54436b ;  border-radius: 15px; background-color: #50cb93;" onclick="remove_entry(this)"  class="buttonControl itemButton btn btn-warning back_border">Delete</button>' +
    "</div>" +
    "</div>";
  previnput.insertAdjacentHTML("afterend", newinput);
  document.getElementById("input").value = "";
}

function clear_input() {
  document.getElementById("input").value = "";
}

function remove_entry(inp) {
  console.log(inp.parentElement.parentElement.getElementsByTagName("h3")[0]);
  var ser_input = document.getElementById("task").textContent;
  ser_input = ser_input.substring(0, ser_input.length - 6);

  tcount = tcount - 1;
  if (tcount == 0) {
    var alertPlaceholder = document.getElementById("alert");
    function alert(message, type) {
      var wrapper = document.createElement("div");
      wrapper.innerHTML =
        '<div class="alert alert-' +
        type +
        ' alert-dismissible" role="alert" style="  text-align: center ; background-color: #34BE82;   text-decoration-color:#54436b ;   border-radius: 15px; margin: 5px 20px 5px 20px;"> ' +
        message +
        '<button type="button" class="btn-close" data-bs-dismiss="alert"  aria-label="Close"></button></div>';
      alertPlaceholder.append(wrapper);
    }
    alert("Congrats", "success");
  }
  ccount = ccount + 1;
  if (tcount == 0) {
    document.getElementById("tcount").innerHTML = "Hooray!! No task Pending";
    document.getElementById("ccount").innerHTML = ccount + " TASK DONE";
  } else {
    document.getElementById("tcount").innerHTML = tcount + " TASKS PENDING";
    document.getElementById("ccount").innerHTML = ccount + " TASK DONE";
  }
  document.getElementById("task").remove();
  var dprevinput = document.getElementById("ccount");
  var newinput =
    ' <div id="dtask" style=" color:#50cb93; text-decoration: line-through; margin: 5px 20px 5px 20px; text-align:center;  border-radius: 15px; background-color: #716F81;" class="row alert alert-warning back_border">' +
    '<div class="col">' +
    "<h3 >" +
    ser_input +
    "</h3>" +
    "</div>" +
    '<div class="col">' +
    '<button style="margin: auto;  color: #716F81;  border-radius: 15px; background-color: #50cb93;" onclick="remove_dentry()" class="buttonControl itemButton btn btn-warning back_border">Clear</button>' +
    "</div>" +
    "</div>";
  dprevinput.insertAdjacentHTML("afterend", newinput);
}

function remove_dentry() {
  document.getElementById("dtask").remove();
  ccount = ccount - 1;
  document.getElementById("ccount").innerHTML = ccount + " TASK DONE";
  if (tcount == 0 && ccount == 0) {
    document.getElementById("tcount").innerHTML = "Hooray!! No task Pending";
    document.getElementById("ccount").innerHTML = "Dude without any Task";
  }
}
