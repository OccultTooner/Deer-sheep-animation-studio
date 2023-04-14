// @codekit-prepend "/vendor/hammer-2.0.8.js";

$(document).ready(function () {

  function updateModal(param) {

    // Get the modal
    // var modals = document.getElementsByClassName("myModal");

    var modal = document.getElementById("myModal");
    var modal2 = document.getElementById("myModal2");
    var modal3 = document.getElementById("myModal3");
    // Get the button that opens the modal
    
    var btn = document.getElementsByClassName("myBtn")[0];
    var btn2 = document.getElementsByClassName("myBtn")[1];
    var btn3 = document.getElementsByClassName("myBtn")[2];

    // Get the <span> element that closes the modal
    // var spans = document.getElementsByClassName("close");
    var span = document.getElementsByClassName("close")[0];
    var span2 = document.getElementsByClassName("close")[1];
    var span3 = document.getElementsByClassName("close")[2];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {

      modal.style.display = "block";
    }
    btn2.onclick = function () {

      modal2.style.display = "block";
    }
    btn3.onclick = function () {

      modal3.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {

      modal.style.display = "none";
    }
    span2.onclick = function () {

      modal2.style.display = "none";
    }
    span3.onclick = function () {

      modal3.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {

      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  updateModal();


});
