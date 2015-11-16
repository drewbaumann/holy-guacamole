$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var joining = $("input#joining").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "https://docs.google.com/forms/d/1zBpG6gQguxHNX_pmWqKeuif5N11ymrBIhkLOZYCJ_sQ/formResponse",
                data: {"entry.552966738" : name, "entry.1527954762" : email, "entry.69496713": joining},
                type: "POST",
                dataType: "xml",
                cache: false,
                statusCode: {
                    0: function (){

                      $('#success').html("<div class='alert alert-success'>");
                      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                          .append("</button>");
                      $('#success > .alert-success')
                          .append("<strong>Your response has been sent! </strong>");
                      $('#success > .alert-success')
                          .append('</div>');

                      //clear all fields
                      $('#contactForm').trigger("reset");
                    },
                    200: function (){
                      $('#success').html("<div class='alert alert-success'>");
                      $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                          .append("</button>");
                      $('#success > .alert-success')
                          .append("<strong>Your response has been sent! </strong>");
                      $('#success > .alert-success')
                          .append('</div>');

                      //clear all fields
                      $('#contactForm').trigger("reset");
                        //Success Message
                    }
                },
                // success: function() {
                //     // Success message
                //     $('#success').html("<div class='alert alert-success'>");
                //     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                //         .append("</button>");
                //     $('#success > .alert-success')
                //         .append("<strong>Your response has been sent! </strong>");
                //     $('#success > .alert-success')
                //         .append('</div>');
                //
                //     //clear all fields
                //     $('#contactForm').trigger("reset");
                // },
                // error: function() {
                //     // Fail message
                //     $('#success').html("<div class='alert alert-danger'>");
                //     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                //         .append("</button>");
                //     $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that there is an issue. Please email Suzzee@gmail.com");
                //     $('#success > .alert-danger').append('</div>');
                //     //clear all fields
                //     $('#contactForm').trigger("reset");
                // },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
