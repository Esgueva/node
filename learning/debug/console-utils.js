// Agrupa los logs permite anidar mas grupos dentro
console.group("Inicio de Logs");

//Mide los tiempo s de ejecuccion
console.time("Time");

// Destinado a Notificaciones en consola || %s String %d Number %j Json
console.log("El numero es %d (%s)", 12, "doce");

// Similar a console.log
console.info("Esto es un console info");

// Destinado a errores
console.warn("Esto es un console warn -> Error");

// Indica la linea del error
console.trace("Error");

// Destinado a validaciones
console.assert(23 === "23");

// Finaliza la medicion de tiempo
console.timeEnd("Time");

// Finaliza la agrupacion de logs
console.groupEnd("Inicio de Logs");

// Visualiza un array en formato tabla
var someArray = [
  "Blowin' in the Wind",
  "Like a Rolling Stone",
  "Knockin' On Heaven's Door",
];
console.table(someArray);

// Visualiza un objeto en formato tabla
function HitSingle(title, artist, year, album) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.album = album;
}

var favHit = new HitSingle("Like a Prayer", "Madonna", "1989", "Like a Prayer");

console.table(favHit);

// Permite crear logs SOLO si se pasa la variable de entorno NODE_DEBUG
// NODE_DEBUG=dev node console-utils.js
const util = require("util");
const debuglog = util.debuglog("dev");
debuglog("Log para desarrollos");

// Permite hacer debug desde el navegador
// y ver las funciones que estan en riesgo deprecated
// node --inspect console-utils.js
