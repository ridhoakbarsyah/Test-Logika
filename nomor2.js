function countNonAlphabeticChars(input) {
  let nonAlphabeticRegex = /[^a-zA-Z\s]/g;

  let matches = input.match(nonAlphabeticRegex);

  return matches ? matches.length : 0;
}

let inputA = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
let inputB = "Berapa u(mur minimal[ untuk !mengurus ktp?";
let inputC = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(countNonAlphabeticChars(inputA));
console.log(countNonAlphabeticChars(inputB));
console.log(countNonAlphabeticChars(inputC));
