
//-----------------------------------------------------------------Validates and register tickets--------------------
$(document).ready(function () {

    function registrerBillett() {

        $(".error").text(""); // Clear previous error messages

        // Get values from the form
        let billett = {
            filmVelger: $("#filmVelger").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        };

        let validering = true;

        // -----------------------------------------------------------------Validation------------------------------
        if (billett.filmVelger === "") {
            $("#filmVelgerError").text("Velg en film!");
            validering = false;
        }

        if (billett.antall <= 0) {
            $("#antallError").html("Skriv inn et gyldig antall!");
            validering = false;
        }

        if (billett.fornavn === "") {
            $("#fornavnError").html("Skriv inn fornavn!");
            validering = false;
        }

        if (billett.etternavn === "") {
            $("#etternavnError").html("Skriv inn etternavn!");
            validering = false;
        }

        const phoneRegEx = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (!phoneRegEx.test(billett.telefonnr)) {
            $("#telefonnrError").html("Skriv inn telefonnr!");
            validering = false;
        }

        if (billett.telefonnr === "") {
            $("#telefonnrError").html("Skriv inn telefonnr!");
            validering = false;
        }

        const epostRegEx = /^\w+([.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,3})+$/;
        if (!epostRegEx.test(billett.epost)) {
            $("#epostError").html("Skriv inn epost!");
            validering = false;
        }

        if (billett.epost === "") {
            $("#epostError").html("Skriv inn epost!");
            validering = false;
        }


        // ---------------------------------------------------------- Sends the tickets data to the server-----------
        if (validering) {
            $.post("/lagre", billett)
                .done(function (data) {      // Clear form fields after reg if validation is ok-----------------
                    $("#bookingForm")[0].reset();
                    kjorBillett();                 // Starts to load all tickets after registration
                })
        }
    }

    // -------------------------------------------------------------- Clear form fields after reg--------------------
        $("#bookingForm")[0].reset();

    // ---------------------------------------------------------------- Load all tickets -----------------------------
    function kjorBillett() {
        $.get("/hentBilletter")
            .done(function (data) {
                formaterData(data);
            })

    }

    // ------------------------------------------------------- Creating ticket data and display table ---------------
    function formaterData(data) {
        let ut = "";
        data.forEach(function (ticket) {
            ut += "<tr>" +
                "<td>" + ticket.filmVelger + "</td>" +
                "<td>" + ticket.antall + "</td>" +
                "<td>" + ticket.fornavn + "</td>" +
                "<td>" + ticket.etternavn + "</td>" +
                "<td>" + ticket.telefonnr + "</td>" +
                "<td>" + ticket.epost + "</td>" +
                "</tr>";
        });
        $("#ticketBody").html(ut);
    }

    // ---------------------------------------------------------------Event listener for buy ticket button-----------
    $("#submitBtn").on("click", registrerBillett);

    // --------------------------------------------------------------Event listener for delete tickets button--------
    $("#deleteBtn").on("click", function () {
        $.get("/slettBillett")
            .done(function () {
                kjorBillett();                                   // Update ticket list after deleting
            })

    });
    kjorBillett();                                              // Load tickets when the page loads
});