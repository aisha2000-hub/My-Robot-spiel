/*
Eddy the robot
Eigenschaften:
1. position X
2. position Y
3. Himmelsrichtung
*/
let eddy = {
    posX: 0,
    posY: 0,
    // Orientierung - Himmelsrichtung (Norden, Osten, Süden, Westen)
    heading: 'EAST'
};

/*
Funktionen des Roboters
1. step() -> bewegt sich einen Schritt in seine Himmelsrichtung
2. rotate() -> rotiert sich um seine eigene Achse im Uhrzeigersinn
*/
function step() {
    /*
    FALLS OSTEN, DANN X UM EINS ERHÖHEN
    */
    if (eddy.heading == "EAST") {
         if (eddy.posX == 11) {
             alert("Du bist an eine Grenze gestoßen!")
        }
        else {
            eddy.posX = eddy.posX + 1;
        }
    } 
    /*
     FALLS SÜDEN, DANN Y UM EINS ERHÖREN
         */
    if (eddy.heading == "SOUTH") {
        if(eddy.posY == 6) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posY = eddy.posY + 1;
        }
    }

    // FALLS WESTEN, DANN X UM EINS VERRINGERN
    if (eddy.heading == "WEST") {
        // DARF KEINE MINUSWERTE ERREICHEN
        if (eddy.posX == 0) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posX = eddy.posX - 1;
        }
    }

    //FALLS NORDEN, DANN Y UM EINS VERRINGERN
    if (eddy.heading == "NORTH") {
        //  DARF KEINE MINUSWERTE ERREICHEN
        if (eddy.posY == 0) {
            alert("Du bist an eine Grenze gestoßen!")
        } else {
            eddy.posY = eddy.posY - 1;
        }
    }
        update();
}

function rotate() {
    // FALLS OSTEN, DANN SÜDEN
    if (eddy.heading == "EAST") {
        eddy.heading = "SOUTH";
         eddy.arrow = '<i class="fas fa-angle-double-down"></i>';
        update();
        return;
    }


    // FALLS SÜDEN, DANN WESTEN
    if (eddy.heading == "SOUTH") {
        eddy.heading = "WEST";
         eddy.arrow = '<i class="fas fa-angle-double-left"></i>';
        update();
        return;
    }

    // FALLS WESTEN, DANN NORDEN
    if (eddy.heading == "WEST") {
        eddy.heading = "NORTH";
         eddy.arrow = '<i class="fas fa-angle-double-up"></i>';
        update();
        return;
    }

    // FALLS NORDEN, DANN OSTEN
    if (eddy.heading == "NORTH") {
        eddy.heading = "EAST";
        // eddy.arrow = '<i class="fas fa-angle-double-right"></i>';
        update();
        return;
    }
}



// function myFunction() {
//     document.getElementById("heading").reset();
//   }



function update() {
    document.getElementById("posX").innerHTML = eddy.posX;
    document.getElementById("posY").innerHTML = eddy.posY;
    document.getElementById("heading").innerHTML = eddy.heading;
    document.getElementById("arrow").innerHTML = eddy.arrow;
   
    // Canvas bereinigen
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    // Rechteck neu zeichnen
    // canvasContext.fillRect(eddy.posX * 50, eddy.posY * 50, 50, 50);
    canvasContext.drawImage(img , eddy.posX * 80, eddy.posY * 80, 100, 100);
}

/*
CANVAS IMPORTIEREN
*/
let canvas = document.getElementById("myCanvas");
let canvasContext = canvas.getContext("2d");
let img = document.getElementById("robot");


// RECHTECK ZEICHNEN
// canvasContext.fillStyle = 'black';
canvasContext.drawImage(img , eddy.posX * 80, eddy.posY * 80, 100, 100);
//  canvasContext.fillRect(eddy.posX * 50, eddy.posY * 50, 50, 50);
