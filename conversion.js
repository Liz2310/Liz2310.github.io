window.addEventListener('load', (event) => {
  var binario = [];
  var hex = [];
  var oct = [];
  var dec = [];

  var boton = document.getElementById("botond");
  boton.onclick = function() {
    var n = (document.getElementById("numd").value);
    if (isNaN(n) == false && n >= 0) {
      alert("El decimal en binario es: " + decBin(n));
      alert("El decimal en hexadecimal es: " + decHex(n));
      alert("El decimal en octal es: " + decOct(n));
    } else {
      alert("No es un número decimal o es negativo");
    }
  }

  var boton = document.getElementById("botonb");
  boton.onclick = function() {
    var n = (document.getElementById("numb").value); //no se incluye el parseInt para no tomar el valor entero del input y tomarlo tal cual
    if (checarSiBin(n) == true) {
      alert("El binario en decimal es: " + binDec(n));
      alert("El binario en hexadecimal es: " + binHex(n));
      alert("El binario en octal es: " + binOct(n));
    } else {
      alert("No es un número binario o es negativo");
    }
  }

  var boton = document.getElementById("botonh");
  boton.onclick = function() {
    var n = (document.getElementById("numh").value);
    if (checarSiHex(n) == true) {
      alert("El hexadecimal en decimal es: " + hexDec(n));
      alert("El hexadecimal en binario es: " + hexBin(n));
      alert("El hexadecimal en octal es: " + hexOct(n));
    } else {
      alert("No es un número hexadecimal o es negativo");
    }
  }

  var boton = document.getElementById("botono");
  boton.onclick = function() {
    var n = (document.getElementById("numo").value);
    if (checarSiOct(n) == true) {
      alert("El octal en decimal es: " + octDec(n));
      alert("El octal en hexadecimal es: " + octHex(n));
      alert("El octal en binario es: " + octBin(n));
    } else {
      alert("No es un número octal o es negativo");
    }
  }


  function decBin(n) { //FUNCION PARA DECIMAL A BINARIO
    if (n == 0) {
      return n;
    } else {
      while (n > 0) {
        if (n % 2 == 0) {
          binario.push("0");
        } else {
          binario.push("1");
        }
        n = Math.floor(parseInt(n / 2));
      }
      return (binario.reverse().join(''));
    }
  };

  function decHex(n) { //FUNCION PARA DECIMAL A HEXADECIMAL
    if (n == 0) {
      return n;
    } else {
      for (var i = n; i > 0; i = parseInt(i / 16)) {
        var remainder = i % 16;
        switch (remainder) {
          case 10:
            remainder = ("A");
            break;
          case 11:
            remainder = ("B");
            break;
          case 12:
            remainder = ("C");
            break;
          case 13:
            remainder = ("D");
            break;
          case 14:
            remainder = ("E");
            break;
          case 15:
            remainder = ("F");
            break;
        }
        hex.push(remainder);
      }
      return (hex.reverse().join(''));
    }
  };

  function decOct(n) { //FUNCION PARA DECIMAL A OCTAL
    if (n == 0) {
      return n;
    } else {
      for (var i = n; i > 0; i = parseInt(i / 8)) {
        var remainder = i % 8;
        oct.push(remainder);
      }
      return (oct.reverse().join(''));
    }
  };

  function binDec(n) { //FUNCION PARA BINARIO A DECIMAL
    n = n.split('').reverse();
    var exp = 0;
    for (var i = 0; i < n.length; i++) {
      exp = 2 ** i;
      dec.push(n[i] * exp);
    }
    return dec.reduce((a, b) => a + b, 0); //reduce el  array a un solo valor; suma elementos de array
  };

  function binHex(n) { //FUNCION PARA BINARIO A HEXADECIMAL
    var suma = dec.reduce((a, b) => a + b, 0); //De no agregar, los decimales se suman.
    return decHex(suma);
  };

  function binOct(n) { //FUNCION PARA BINARIO A OCTAL
    var suma = dec.reduce((a, b) => a + b, 0);
    return decOct(suma);
  };

  function hexDec(n) { //FUNCION PARA HEXADECIMAL A DECIMAL
    n = n.split('').reverse();
    for (var i = 0; i < n.length; i++) {
      switch (n[i]) {
        case "A":
        case "a":
          n[i] = (10);
          break;
        case "B":
        case "b":
          n[i] = (11);
          break;
        case "C":
        case "c":
          n[i] = (12);
          break;
        case "D":
        case "d":
          n[i] = (13);
          break;
        case "E":
        case "e":
          n[i] = (14);
          break;
        case "F":
        case "f":
          n[i] = (15);
          break;
      }
      hex.push(n[i])
    }
    var exp = 0;
    for (var i = 0; i < hex.length; i++) {
      exp = 16 ** i;
      dec.push(hex[i] * exp);
    }
    return dec.reduce((a, b) => a + b, 0);
  };

  function hexBin(n) { //FUNCION PARA HEXADECIMAL A BINARIO
    var suma = dec.reduce((a, b) => a + b, 0);
    return decBin(suma);
  };

  function hexOct(n) { //FUNCION PARA HEXADECIMAL A OCTAL
    var suma = dec.reduce((a, b) => a + b, 0);
    return decOct(suma);
  };

  function octDec(n) { //FUNCION PARA OCTAL A DECIMAL
    n = n.split('').reverse();
    var exp = 0;
    for (var i = 0; i < n.length; i++) {
      exp = 8 ** i;
      oct.push(n[i] * exp);
    }
    return oct.reduce((a, b) => a + b, 0);
  };

  function octHex(n) { //FUNCION PARA OCTAL A HEXADECIMAL
    var suma = oct.reduce((a, b) => a + b, 0);
    return decHex(suma);
  };

  function octBin(n) { //FUNCION PARA OCTAL A BINARIO
    var suma = oct.reduce((a, b) => a + b, 0);
    return decBin(suma);
  };

  function binString(n) { //FUNCION PARA REVISAR STRING binario
    var re = /[0-1]/g;
    for (var i = 0; i < n.length; i++) {
      var x = re.test(n[i]);
    }
    return x;
  };

  function checarSiBin(n) { //FUNCION PARA CHECAR SI INPUT ES BINARIO
    n = n.split('');
    return n.every(binString);
  };

  function hexString(n) { //FUNCION PARA REVISAR STRING HEXADECIMAL
    var re = /[0-9A-Fa-f]/g;
    for (var i = 0; i < n.length; i++) {
      var x = re.test(n[i])
    }
    return x;
  };

  function checarSiHex(n) { //FUNCION PARA CHECAR SI INPUT ES HEXADECIMAL
    n = n.split('');
    return n.every(hexString)
  };

  function octString(n) { //FUNCION PARA REVISAR STRING OCTAL
    var re = /[0-7]/g;
    for (var i = 0; i < n.length; i++) {
      var x = re.test(n[i]);
    }
    return x
  };

  function checarSiOct(n) { //FUNCION PARA CHECAR SI INPUT ES OCTAL
    n = n.split('');
    return n.every(octString)
  };
  
});
