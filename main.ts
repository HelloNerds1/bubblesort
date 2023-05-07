/** 
Beim Drücken von Knopf A werden Zufällig Werte auf der LED Matrix erzeugt
Beim Drücken von Knopf B werden diese mithilfe des Bubblesort Algorythmus sortiert

 */
//  sortierbares erstellen
let arr = [0, 0, 0, 0, 0]
function plot_array() {
    let size: number;
    //  für jeden Wert in arr wird in der jeweiligen Spalte
    //  werden entsprechend viele LED angemacht
    for (let x = 0; x < arr.length; x++) {
        size = arr[x]
        for (let y = 0; y < arr.length; y++) {
            if (y > 4 - size) {
                //  sorgt dafür, dass die LED von unten nach oben angemacht werden
                //  schaltet die LED an
                led.plot(x, y)
            } else {
                //  schaltet die LED aus
                led.unplot(x, y)
            }
            
        }
    }
    //  verlangsamen für Veranschaulichung
    basic.pause(360)
}

function reset_array() {
    let i: number;
    let rand: number;
    //  setze alle Werte von arr auf 0
    //  arr = [0, 0, 0, 0, 0] funktioniert nicht
    //  statt dessen:
    for (i = 0; i < 5; i++) {
        arr[i] = 0
    }
    //  Weise allen Werten von arr einen Wert von 1-5 zu,
    //  der nur einmal vorkommt
    for (i = 0; i < 5; i++) {
        rand = randint(1, 5)
        //  prüft ob der Wert schon vorhanden ist und
        //  generiert sonst einen neuen Wert
        while (arr.indexOf(rand) >= 0) {
            rand = randint(1, 5)
        }
        //  weißt diesen Wert zu
        arr[i] = rand
    }
    plot_array()
}

//  Bubblesort
function bubblesort() {
    let container: number;
    for (let m = 0; m < arr.length - 1; m++) {
        for (let n = 0; n < arr.length - 1 - m; n++) {
            if (arr[n] > arr[n + 1]) {
                //  tauscht die Werte
                container = arr[n]
                arr[n] = arr[n + 1]
                arr[n + 1] = container
                plot_array()
            }
            
        }
    }
}

//  generiert eine erste zufällige Konfiguration
reset_array()
while (true) {
    //  wenn Knopf A gedrückt wird, wird eine neue Konfiguration erstellt
    if (input.buttonIsPressed(Button.A)) {
        reset_array()
    } else if (input.buttonIsPressed(Button.B)) {
        //  wenn Knopf B gedrückt wird, wird die Liste sortiert
        bubblesort()
    }
    
}
