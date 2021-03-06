$(document).ready(function () {
  /* global moment */

  // Adding event listeners to the form to create a new object
  $("#student-form").on("click", function(event){
    event.preventDefault();

    var firstnameInput = $("#firstname-input").val().trim();
    var lastnameInput = $("#lastname-input").val().trim();
    var birthdateInput = $("#birthdate-input").val().trim();
    var parentIdInput = $("#parent-ID").val().trim();
    var staffIdInput = $("#staff-ID").val().trim();
    var asthma = $("input[name=asthma_radio]:checked").val();
    var studentAllergy = $("#student-allergies").val().trim();
    var epiPen = $("input[name=epiPen_radio]:checked").val();
    var chronicCon = $("#chronic-condition").val().trim();

    // Don't do anything if the name fields hasn't been filled out
    // if (!formInputs.val().trim().trim() || !formCheckInputs.val().trim().trim()) {
    //   return;
    // }
    // // if (!firstnameInput.val().trim().trim() || !lastnameInput.val().trim().trim() || !birthdateInput.val().trim().trim()) {
    // //   return;
    // // }
    // else {
      var newStudent = {
        first_name: firstnameInput,
        last_name: lastnameInput,
        birth_date: birthdateInput,
        parent_id: parentIdInput,
        teacher_id: staffIdInput,
        asthma: asthma,
        allergy: studentAllergy,
        epi_pen: epiPen,
        chronic_condition: chronicCon
      };

      $.ajax("/api/parent/add", {
        type: "POST",
        data: newStudent
      }).then(function() {
          // reloads the page to empty out the values
          location.reload();
        }
      );
  });
 
  // View all students pertaining to a parent
  // function viewClassProfile(){
  //   $.ajax("/api/parent/class", {
  //       type: "GET"
  //     }).then(function(data) {
          
  //       }
  //     );
  // }
    // Adding event listeners to initiate AJAX call to get the allergies, the presence of asthmatics, and other chronic conditions
  // $(document).on("click", "#", getClass);

    // Function for retrieving authors and getting them ready to be rendered to the page
    // function getClass() {
    //   $.get("/api/parent/class", function(data) {

    //     console.log(data);
    //   });
    // }

  // View all students pertaining to a parent
  function viewClassProfile(){
    $.ajax("/api/parent/class", {
        type: "GET"
      }).then(function(data) {
          console.log("THIS IS DATA: ", data);
      });
  }

   
});
