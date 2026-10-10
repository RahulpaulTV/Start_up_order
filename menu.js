/* =====================================================================
   MENU.JS  -  the only file you need to edit for day-to-day changes
   ---------------------------------------------------------------------
   ALL PRICES BELOW ARE DUMMY VALUES. Change the numbers when ready.
   Keep every comma, quote and { } exactly as it is.
   ===================================================================== */

const CONFIG = {
  // Country code + number, digits only. 91 = India. This is a DUMMY number.
  whatsappNumber: "919999999999",
  currency: "\u20b9",
  orderPrefix: "MN"
};

/* ---------------------------------------------------------------------
   PRICES  (what a customer pays for ONE chocolate)
   Price of a bar  = bar + layer extra (if 2 or 3 layers) + add-in extra
   Price of a mini = mini + add-in extra
   --------------------------------------------------------------------- */
const PRICES = {
  bar: 100,          // single-flavour bar, plain
  mini: 20,          // 10g mini, plain
  custom: 200,       // custom name chocolate
  twoLayers: 10,     // extra for a 2-layer bar
  threeLayers: 20    // extra for a 3-layer bar
};

/* ---------------------------------------------------------------------
   ADD-INS  (extra price is added on top of the base price)
   bar  = extra price on a bar        mini = extra price on a mini
   mini: null  means "not offered for minis"
   To add a new add-in, copy a line and give it a new id and label.
   Keep "plain" first.
   --------------------------------------------------------------------- */
const ADDINS = [
  { id:"plain", label:"Plain",         bar:0,  mini:0 },
  { id:"nuts",  label:"Fruits & Nuts", bar:50, mini:5 },
  { id:"oats",  label:"Oats",          bar:30, mini:null }
];

/* ---------------------------------------------------------------------
   CHOCOLATE FLAVOURS  (please keep these three; colours are for the
   little picture on the page)
   --------------------------------------------------------------------- */
const FLAVOURS = [
  { id:"dark", label:"Dark", color:"#4a2511" },
  { id:"milk", label:"Milk", color:"#8a4b2a" },
  { id:"white", label:"White", color:"#eadfc2" }
];

/* ---------------------------------------------------------------------
   THE THREE CHOICES AT THE TOP
   img is optional: upload a photo into the "images" folder and add
   img:"images/bar.jpg" to show it on that card. Leave it out to keep the
   drawn picture.
   --------------------------------------------------------------------- */
const TYPES = [
  { id:"bar",    label:"Bar",         title:"Bar chocolate",         note:"Full-size bar" },
  { id:"mini",   label:"Mini 10g",    title:"Mini 10g chocolate",    note:"Bite-size piece" },
  { id:"custom", label:"Custom name", title:"Custom name chocolate", note:"Your name on it" }
];
