/* =====================================================================
   MENU.JS  -  the only file you need to edit for day-to-day changes
   ---------------------------------------------------------------------
   ALL PRICES BELOW ARE DUMMY VALUES. Change the number after price:
   Remove an item ........ delete that whole line (from { to },)
   Add an item ........... copy a line, paste it below, give it a NEW id and no
   Add a photo ........... upload the picture into the "images" folder,
                           then add  img:"images/your-file.jpg"  to the line
   Change WhatsApp number  edit whatsappNumber below
   Keep every line's commas, quotes and { } exactly as they are.
   ===================================================================== */

const CONFIG = {
  // Country code + number, digits only. 91 = India. This is a DUMMY number.
  whatsappNumber: "919999999999",
  currency: "\u20b9",
  orderPrefix: "MN"
};

/* cat    = section heading on the page (items with the same cat group together)
   no     = serial number from your menu table (shown to you in the WhatsApp order)
   type   = colour of the little square when there is no photo:
            dark, milk, white, caramel, or mix (three stripes)
   custom = true makes the customer type a name when they add the item        */
const PRODUCTS = [
  { id:"p01", no:1, cat:"Chocolate Bar", name:"Dark Chocolate", price:100, type:"dark" },
  { id:"p02", no:2, cat:"Chocolate Bar", name:"Milk Chocolate", price:100, type:"milk" },
  { id:"p03", no:3, cat:"Chocolate Bar", name:"White Chocolate", price:100, type:"white" },
  { id:"p04", no:4, cat:"Chocolate Bar", name:"Milk + Dark", price:100, type:"mix" },
  { id:"p05", no:5, cat:"Chocolate Bar", name:"Dark + White", price:100, type:"mix" },
  { id:"p06", no:6, cat:"Chocolate Bar", name:"Milk + White", price:100, type:"mix" },

  { id:"p07", no:7, cat:"Layered Chocolate Bar", name:"White Layer + Milk Layer + Dark Layer", price:120, type:"mix" },

  { id:"p08", no:8, cat:"Fruits & Nuts Bar", name:"Dark Chocolate + Fruits & Nuts", price:150, type:"dark" },
  { id:"p09", no:9, cat:"Fruits & Nuts Bar", name:"Milk Chocolate + Fruits & Nuts", price:150, type:"milk" },
  { id:"p10", no:10, cat:"Fruits & Nuts Bar", name:"White Chocolate + Fruits & Nuts", price:150, type:"white" },
  { id:"p11", no:11, cat:"Fruits & Nuts Bar", name:"Milk + Dark + Fruits & Nuts", price:150, type:"mix" },
  { id:"p12", no:12, cat:"Fruits & Nuts Bar", name:"Dark + White + Fruits & Nuts", price:150, type:"mix" },
  { id:"p13", no:13, cat:"Fruits & Nuts Bar", name:"Milk + White + Fruits & Nuts", price:150, type:"mix" },
  { id:"p14", no:14, cat:"Fruits & Nuts Bar", name:"White + Milk + Dark Layers + Fruits & Nuts", price:150, type:"mix" },

  { id:"p15", no:15, cat:"Oats Chocolate Bar", name:"Dark Chocolate + Oats", price:130, type:"dark" },
  { id:"p16", no:16, cat:"Oats Chocolate Bar", name:"Milk Chocolate + Oats", price:130, type:"milk" },
  { id:"p17", no:17, cat:"Oats Chocolate Bar", name:"White Chocolate + Oats", price:130, type:"white" },
  { id:"p18", no:18, cat:"Oats Chocolate Bar", name:"Milk + Dark + Oats", price:130, type:"mix" },
  { id:"p19", no:19, cat:"Oats Chocolate Bar", name:"Dark + White + Oats", price:130, type:"mix" },
  { id:"p20", no:20, cat:"Oats Chocolate Bar", name:"Milk + White + Oats", price:130, type:"mix" },
  { id:"p21", no:21, cat:"Oats Chocolate Bar", name:"White + Milk + Dark Layers + Oats", price:130, type:"mix" },

  { id:"p22", no:22, cat:"Mini 10g Chocolate", name:"Dark Chocolate", price:20, type:"dark" },
  { id:"p23", no:23, cat:"Mini 10g Chocolate", name:"Milk Chocolate", price:20, type:"milk" },
  { id:"p24", no:24, cat:"Mini 10g Chocolate", name:"White Chocolate", price:20, type:"white" },
  { id:"p25", no:25, cat:"Mini 10g Chocolate", name:"Dark Chocolate + Fruits & Nuts", price:20, type:"dark" },
  { id:"p26", no:26, cat:"Mini 10g Chocolate", name:"Milk Chocolate + Fruits & Nuts", price:20, type:"milk" },
  { id:"p27", no:27, cat:"Mini 10g Chocolate", name:"White Chocolate + Fruits & Nuts", price:20, type:"white" },

  { id:"custom-name", no:28, cat:"Custom", name:"Custom Name Chocolate", desc:"Your own name or message on a chocolate. Add it, then type the name you want.", price:200, type:"mix", custom:true, customLabel:"Name to print on the chocolate", customHint:"e.g. Asha, on milk chocolate" }
];
