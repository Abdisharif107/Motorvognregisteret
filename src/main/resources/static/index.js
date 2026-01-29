function regMotorvogn() {
    const motorvogn = {
        personnr : $("#personnr").val(),
        navn : $("#navn").val(),
        adresse : $("#adresse").val(),
        kjennetegn : $("#kjennetegn").val(),
        merke : $("#merke").val(),
        type : $("#type").val(),
    };
    $.post("/lagre", motorvogn, function(){
        hentAlle();
    });
    $("#personnr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#merke").val("");
    $("#type").val("");
}

function hentAlle() {
    $.get( "/hentAlle", function( biler ) {
        formaterData(biler);
    });
}

function formaterData(biler) {
    let ut = "<table class='table table-striped'><tr><th>Personnr</th><th>Navn</th><th>Adresse</th>" +
        "<th>Kjennetegn</th><th>Merke</th><th>Type</th></tr>";
    for (const bil of biler) {
        ut += "<tr><td>" + bil.personnr + "</td><td>" + bil.navn + "</td><td>" + bil.adresse + "</td>" +
            "<td>" + bil.kjennetegn + "</td><td>" + bil.merke + "</td><td>" + bil.type + "</td></tr>";
    }
    ut += "</table>";
    $("#bilene").html(ut);
}

function slettAlle() {
    $.get( "/slettAlle", function() {
        hentAlle();
    });
}


/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Motorvognregister 1</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="htpps://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="index.js"></script>

</head>
<body>

    <h1>Motorvognregister</h1>
    <table>
        <tr>
            <td>Eiers personnummer</td>
            <td>Eiers navn</td>
            <td>Eiers adresse</td>
        </tr>
        <tr>
            <td><label for="personnr"></label><input type="text" id="personnr"></td>
            <td><label for="navn"></label><input type="text" id="navn"></td>
            <td><label for="adresse"></label><input type="text" id="adresse"></td>
        </tr>
        <tr>
            <td>Kjennetegn</td>
            <td>Bilmerke</td>
            <td>Biltype</td>
        </tr>
        <tr>
            <td><label for="kjennetegn"></label><input type="text" id="kjennetegn"></td>
            <td><label for="merke"></label><input type="text" id="merke"></td>
            <td><label for="type"></label><input type="text" id="type"></td>
        </tr>
    </table>
    <button onclick="regMotorvogn()">Registrer</button>
    <br>
    Alle bilene:
    <div id="bilene"></div>
    <button onclick="slettAlle()">Slette alle</button>
</body>
</html>

 */