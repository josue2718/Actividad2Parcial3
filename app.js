function validaredad() {
    const edads = document.getElementById("edad").value;
    const edadNum = parseInt(edads, 10);
    
    if (edadNum > 18) {
        let Vedad = "Si puede manejar";
        alert(Vedad);
        document.getElementById('Vedad').textContent= Vedad
    }
    else
    {
        let Vedad = "No puede manejar";
        alert(Vedad);
        document.getElementById('Vedad').textContent= Vedad

    }

}

function validarnota()
{
    const notas = document.getElementById("nota").value;
    if (notas < 3) {
        let Vnota = "Muy deficiente";
        document.getElementById('Vnota').textContent = Vnota;
    } else if (notas >= 3 && notas < 5) {
        let Vnota = "Insuficiente";
        document.getElementById('Vnota').textContent = Vnota;
    } else if (notas >= 5 && notas < 6) {
        let Vnota = "Suficiente";
        document.getElementById('Vnota').textContent = Vnota;
    } else if (notas >= 6 && notas < 7) {
        let Vnota = "Bien";
        document.getElementById('Vnota').textContent = Vnota;
    } else if (notas >= 7 && notas < 9) {
        let Vnota = "Notable";
        document.getElementById('Vnota').textContent = Vnota;
    } else if (notas >= 9 && notas <= 10) {
        let Vnota = "Sobresaliente";
        document.getElementById('Vnota').textContent = Vnota;
    }

}

function pedirCadenas() {
let cadenas = [];
let input;

while (true) {
    input = prompt("Introduce una cadena de texto (o pulsa 'cancelar' para terminar):");
    if (input === null) {
        break;
    }
    cadenas.push(input);
}

const texto= cadenas.join('-');
document.getElementById('texto').textContent= texto
};

function calcularLetraDNI() {
        const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        while (true) {
            let input = prompt("Introduce el número de DNI (o pulsa 'cancelar' para terminar):");

            if (input === null) {
                break;
            }

            let dni = parseInt(input, 10);

            if (isNaN(dni) || dni < 0 || dni > 99999999) {
                alert("Número de DNI no válido. Debe estar entre 0 y 99999999.");
            } else {
                let letra = letrasDNI[dni % 23];
                alert(`La letra correspondiente al DNI ${dni} es: ${letra}`);
                document.getElementById('DNI').textContent= letra
            }
        }
    }

    

    