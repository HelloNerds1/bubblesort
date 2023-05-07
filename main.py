"""
Beim Drücken von Knopf A werden Zufällig Werte auf der LED Matrix erzeugt
Beim Drücken von Knopf B werden diese mithilfe des Bubblesort Algorythmus sortiert
"""

# sortierbares erstellen

arr = [0, 0, 0, 0, 0]

def plot_array():
    # für jeden Wert in arr wird in der jeweiligen Spalte
    # werden entsprechend viele LED angemacht
    for x in range(len(arr)):
        size = arr[x]
        for y in range(len(arr)):
            if y > 4 - size: # sorgt dafür, dass die LED von unten nach oben angemacht werden
                # schaltet die LED an
                led.plot(x,y)
            else:
                # schaltet die LED aus
                led.unplot(x, y)
    # verlangsamen für Veranschaulichung
    basic.pause(360)

def reset_array():
    # setze alle Werte von arr auf 0
    # arr = [0, 0, 0, 0, 0] funktioniert nicht
    # statt dessen:
    for i in range(5):
        arr[i] = 0
    # Weise allen Werten von arr einen Wert von 1-5 zu,
    # der nur einmal vorkommt
    for i in range(5):
        rand = randint(1, 5)
        # prüft ob der Wert schon vorhanden ist und
        # generiert sonst einen neuen Wert
        while rand in arr:
            rand = randint(1, 5)
        # weißt diesen Wert zu
        arr[i] = rand
    plot_array()

# Bubblesort
def bubblesort():
    for m in range(len(arr)-1):
        for n in range(len(arr)-1 -m):
            if arr[n] > arr[n + 1]:
                # tauscht die Werte
                container = arr[n]
                arr[n] = arr[n + 1]
                arr[n + 1] = container
                plot_array()

# generiert eine erste zufällige Konfiguration
reset_array()

while True:
    # wenn Knopf A gedrückt wird, wird eine neue Konfiguration erstellt
    if input.button_is_pressed(Button.A):
        reset_array()
    # wenn Knopf B gedrückt wird, wird die Liste sortiert
    elif input.button_is_pressed(Button.B):
        bubblesort()