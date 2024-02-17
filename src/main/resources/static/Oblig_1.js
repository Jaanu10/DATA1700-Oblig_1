//Oppretter et tomt array som tar inn hvert kjøp
let kjopBillett =[]


// Når bruker trykker på kjøp billett knappen lages det konstanter fra verdiene i inputboksene
// Lager en boolean som sjekkern når vi har tomme felt
function registrer(){
    let tomtfelt= false;
    const filmVelger = document.getElementById("filmVelger").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost= document.getElementById("epost").value;

    // Boolean blir tatt i bruk og returnerer en feilmelding til bruker
    if (antall === ""){
        document.getElementById("antallError").innerHTML = "Skriv inn antall!";
        tomtfelt=true;
    }
    if (fornavn === ""){
        document.getElementById("fornavnError").innerHTML = "Skriv inn fornavn!";
        tomtfelt=true;
    }
    if (etternavn === ""){
        document.getElementById("etternavnError").innerHTML = "Skriv inn etternavn!";
        tomtfelt=true;

    } if (telefonnr === ""){
        document.getElementById("telefonnrError").innerHTML = "Skriv inn telefonnr!";
        tomtfelt=true;
    }
    //Sørger for at mail-adressen inneholder @ og . for at den skal være gyldig
    if (!epost.includes('@') || !epost.includes('.')){
      document.getElementById("epostError").innerHTML = "Skriv inn epost!";
        tomtfelt=true;
    }

    if (tomtfelt===true){
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
        " <th>Film</th " +
        " <th>Antall</th> "+
        " <th>Fornavn</th> "+
        " <th>Etternavn</th> "+
        " <th>Tlf</th> "+
        " <th>Epost</th> "+
        "</tr>";

// Tar i bruk en for-løkke som kjører igjennom arrayet og skriver ut i tabellen vi lagde over
    for (let s of kjopBillett){
        ut += " <tr> ";
        ut +=
            " <td> " + s.filmVelger+ " </td> "+
            "<td>" + s.antall+ "</td>"+
            "<td>" + s.fornavn+ "</td>"+
            "<td>" + s.etternavn+ "</td>"+
            "<td>" + s.telefonnr+ "</td>"+
            "<td>" + s.epost+ "</td>";
        ut+= "</tr>";

    }
    document.getElementById("output").innerHTML=ut;
}

//Tømmer arrayet og fjerner innholdet
function slettBillett(){
    kjopBillett=[];
    document.getElementById("output").innerHTML="";
}
