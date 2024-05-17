function hitungJumlahKata(kalimat) {
  kalimat = kalimat.replace(/[^a-zA-Z0-9\s]/g, "");

  var kata = kalimat.split(" ");

  kata = kata.filter(function (kata) {
    return kata.trim() !== "";
  });

  return kata.length;
}

var kalimat1 = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
var kalimat2 = "Berapa u(mur minimal[ untuk !mengurus ktp?";
var kalimat3 = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(hitungJumlahKata(kalimat1));
console.log(hitungJumlahKata(kalimat2));
console.log(hitungJumlahKata(kalimat3));
