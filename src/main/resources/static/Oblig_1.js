//Oppretter et tomt array som tar inn hvert kjøp
let kjopBillett =[]


// Når bruker trykker på kjøp billett knappen lages det konstanter fra verdiene i inputboksene
// Lager en boolean som sjekkern når vi har tomme felt
function registrer(){
    //Fjerner error-meldingene
    document.getElementById("antallError").innerHTML = "";
    document.getElementById("fornavnError").innerHTML = "";
    document.getElementById("etternavnError").innerHTML = "";
    document.getElementById("telefonnrError").innerHTML = "";
    document.getElementById("epostError").innerHTML = "";

    const filmVelger = document.getElementById("filmVelger").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost= document.getElementById("epost").value;

    //Boolean blir tatt i bruk og returnerer en feilmelding til bruker.
    // Ved tomme felt returnerer den feilmeldingen.

    let validering = true;

    if (antall==="") {
        document.getElementById("antallError").innerHTML = "Skriv inn antall!";
        validering=false;
    }

    if (fornavn===""){
        document.getElementById("fornavnError").innerHTML="Skriv inn fornavn!";
        validering=false;
    }

    if (etternavn==="") {
        document.getElementById("etternavnError").innerHTML = "Skriv inn etternavn!";
        validering=false;
    }

    function validatePhone(telefonnr){
        let valid = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; //Hentet RegExP fra https://www.w3resource.com/javascript/form/phone-no-validation.php
        return valid.test(telefonnr);
    }

    if (!validatePhone(telefonnr)){
        document.getElementById("telefonnrError").innerHTML = "Skriv inn telefonnr!";
        validering=false;
    }

    {
        function validateEmail(epost) {
            let validEmail = /^\w+([.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,3})+$/; //Hentet fra https://www.w3resource.com/javascript/form/email-validation.php
            return validEmail.test(epost);
        }

        if (!validateEmail(epost)) {
            document.getElementById("epostError").innerHTML = "Skriv inn epost!";
            validering=false;
        }

    }

    if (validering===false){
        return;
    }
    // Dersom boolean er false så lages det et objekt med verdiene fra inpuntboksene
    const billett = {
        filmVelger:filmVelger,
        antall:antall,
        fornavn:fornavn,
        etternavn:etternavn,
        telefonnr:telefonnr,
        epost:epost
    };

    //Inputboksene tømmes

    kjopBillett.push(billett);
    document.getElementById("filmVelger").value='';
    document.getElementById("antall").value='';
    document.getElementById("fornavn").value='';
    document.getElementById("etternavn").value='';
    document.getElementById("telefonnr").value='';
    document.getElementById("epost").value='';

    // Lager en tabell med kolonne-navnene
    let ut =
        "<table> <tr>" +
        " <th>Film</th> " +
        " <th>Antall</th> " +
        " <th>Fornavn</th> " +
        " <th>Etternavn</th> " +
        " <th>Telefonnummer</th> " +
        " <th>Epost</th> " +
        "</tr>";

// Tar i bruk en for-løkke som kjører igjennom arrayet og skriver ut i tabellen vi lagde over
    for (let s of kjopBillett) {
        ut += " <tr> ";
        ut +=
            " <td> " + s.filmVelger + " </td> " +
            " <td>" + s.antall + "</td>" +
            " <td>" + s.fornavn + "</td>" +
            " <td>" + s.etternavn + "</td>" +
            " <td>" + s.telefonnr + "</td>" +
            " <td>" + s.epost + "</td>";
        ut += "</tr>";
    }

    ut += "</table>";
    document.getElementById("output").innerHTML=ut;
}

//Tømmer arrayet og fjerner innholdet
function slettBillett(){
    kjopBillett=[];
    document.getElementById("output").innerHTML="";
}
