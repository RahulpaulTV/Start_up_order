/* =====================================================================
   MENU.JS  -  the only file you need to edit for day-to-day changes
   ---------------------------------------------------------------------
   Keep every comma, quote and { } exactly as it is.
   ===================================================================== */

const CONFIG = {
  // Country code + number, digits only. 91 = India.
  // Orders arrive on this WhatsApp number, and it is shown to customers
  // for bulk orders and customization enquiries.
  whatsappNumber: "919449802000",
  currency: "\u20b9",
  orderPrefix: "MN",

  // Delivery / pickup date the customer can choose, counted from today.
  // minDaysAhead: 2 means the earliest date is the day after tomorrow.
  // Set it to your usual making time. maxDaysAhead is how far ahead they can book.
  minDaysAhead: 2,
  maxDaysAhead: 60
};

/* ---------------------------------------------------------------------
   BAR PRICES  -  one row per weight, one number per add-in.
   This table is the price of ONE plain-layer (single flavour) bar.

   Pricing rule used for 150 g and 200 g:
     150 g = 1.5 x the 100 g price, minus Rs 10
     200 g = 2   x the 100 g price, minus Rs 20
   so a bigger bar always costs a little less per gram (customers see
   "Save Rs 10 / Rs 20") but you still earn more per order.

   best:true shows a "Best value" tag on that weight.
   --------------------------------------------------------------------- */
const WEIGHTS = [
  { id:"100", label:"100 g", grams:100, prices:{ plain:160, nuts:180, oats:200 } },
  { id:"150", label:"150 g", grams:150, prices:{ plain:230, nuts:260, oats:290 } },
  { id:"200", label:"200 g", grams:200, prices:{ plain:300, nuts:340, oats:380 }, best:true }
];

/* ---------------------------------------------------------------------
   OTHER PRICES
   --------------------------------------------------------------------- */
const PRICES = {
  mini: 10,            // mini chocolate, plain (Fruits & Nuts adds 2 more = Rs 12)
  miniMinimum: 10,     // smallest number of minis per type: 10+ Plain and/or 10+ Fruits & Nuts.
                       // Dark, Milk and White can be mixed freely; Plain and Fruits & Nuts cannot be counted together.
  twoLayers: 20,       // flat extra for a 2-layer bar (about Rs 20 per extra layer)
  threeLayers: 40,     // flat extra for a 3-layer bar
  customizeFrom: 50    // shown to customers as "from Rs 50"; the exact charge
                       // is agreed with the customer on WhatsApp
};

/* ---------------------------------------------------------------------
   DELIVERY  (applies to the whole order: bars and minis together)

   local    = delivery within radiusKm of your shop
   panIndia = delivery anywhere else in India
   charge   = delivery charge for that area
   freeFrom = the items total (in Rs) from which delivery is FREE
              (Rs 300 means Rs 300 or more is free; Rs 1000 means Rs 1,000 or more)

   Pickup orders never pay a delivery charge.
   Customization charges are not counted towards the free-delivery amount.

   localPincodes (optional): list the pincodes that are within your local
   radius, for example ["560001", "560002", "560034"]. If you fill this in,
   the page works out the area from the customer's pincode by itself and
   the customer does not choose. Leave it as [] and customers choose
   "Within 10 km" or "Pan-India" themselves; you confirm on WhatsApp.

   shopArea (optional): shown as "Within 10 km of ..." e.g. "Indiranagar, Bengaluru"

   lines = the four lines shown in the Delivery box on the page. They are
           plain text, so if you change a number above, change it here too.
   --------------------------------------------------------------------- */
const DELIVERY = {
  local:    { radiusKm: 10, charge: 40, freeFrom: 300 },
  panIndia: { charge: 99, freeFrom: 1000 },
  localPincodes: [],
  shopArea: "",
  lines: [
    "\ud83d\udccd Free Delivery within 10 km on orders above \u20b9300",
    "\ud83d\ude9a Delivery Charge \u20b940 within 10 km for orders below \u20b9300",
    "\ud83d\ude9a Pan-India Delivery \u20b999",
    "\ud83c\udf81 FREE Pan-India Delivery above \u20b9999"
  ]
};

/* ---------------------------------------------------------------------
   ADD-INS
   id must match the names used in the WEIGHTS table above (plain, nuts, oats).
   mini = extra price on a mini.  mini: null means "not offered for minis".
   Keep "plain" first.
   --------------------------------------------------------------------- */
const ADDINS = [
  { id:"plain", label:"Plain",         mini:0 },
  { id:"nuts",  label:"Fruits & Nuts", mini:2 },
  { id:"oats",  label:"Oats",          mini:null }
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
   THE CHOICES AT THE TOP
   img is optional: upload a photo into the "images" folder and add
   img:"images/bar.jpg" to show it on that card. Leave it out to keep the
   drawn picture.
   --------------------------------------------------------------------- */
const TYPES = [
  { id:"bar",  label:"Bar",  title:"Bar chocolate",      note:"100 g, 150 g or 200 g. Can be customized" }
];
