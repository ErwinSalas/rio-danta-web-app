import ItemStyle from './styles-jsx/card_item_css.js';
import TourItem from './sub-components/TourItem.js';
import Link from 'next/link';
import Nav from '../components/Nav.js'
import React, { Component } from 'react';
import Tabs from './sub-components/Tabs.js';


const ToursData = [
  
  {
    "adult": 90,
    "adultcomision": 15.6,
    "adultneto": 74.4,
    "child": 45,
    "childcomision": 15.6,
    "childneto": 74.4,
    "company": "Sky Adventures",
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Almuerzo", "Aventura extrema "],
    "id": 89,
    "title": "Fly Board",
    "tourist": 113,
    "url": "https://thumbnails.trvl-media.com/qZ8LZputnx8u8543a1C6yx7WmlY=/cdn.lemediavault.com/images/5cf6df08b38251f528dbc838198e4d94.jpeg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  
  {
    "adult": 55,
      "adultcomision": 20,
      "adultneto": 25,
      "child": 45,
      "childcomision": 20,
      "childneto": 25,
      "company": "Baldi",
      "description": ["HotSprigs ", "Almuerzo Buffet","Cena Buffet", "10am-10pm"],
      "id": 89,
      "title": "Baldi #2",
      "tourist": 113,
      "url": "https://exp.cdn-hotels.com/hotels/3000000/2150000/2145600/2145540/83dd142b_z.jpg",
      "touristchild": 113,
      "touristchildcomision": 34,
      "touristchildneto": 79,
      "touristcomision": 34,
      "touristneto": 79
    },
  

    {
      "adult": 50,
        "adultcomision": 20,
        "adultneto": 25,
        "child": 45,
        "childcomision": 20,
        "childneto": 25,
        "company": "Go Adventures",
        "description": ["9 cables canopy", "Rápel","Malekus", "Termales"],
        "id": 89,
        "title": "Paquete Aventura",
        "tourist": 113,
        "url": "http://www.aventurasarenal.com/wp-content/uploads/2016/01/IMG_8061.jpg",
        "touristchild": 113,
        "touristchildcomision": 34,
        "touristchildneto": 79,
        "touristcomision": 34,
        "touristneto": 79
      },
  
  {
  "adult": 70,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Transporte","Almuezo","Entrada al parque","Guia"],
    "id": 89,
    "title": "Rio Celeste",
    "tourist": 113,
    "url": "https://www.faytur.com/sites/default/files/styles/foundation_xlarge/public/pic_rio-celeste-termales-1.jpg?itok=Y6r0J2rv",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
    "adult": 45,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Jungle Tour",
    "description": ["Caminata al volcan ", "Observatorio", "Lago Arenal", "Aguas termales "],
    "id": 89,
    "title": "Volcan & Termales",
    "tourist": 113,
    "url": "https://www.nacion.com/resizer/YYI9EWU1LCtHXs2J1p02Gz-BV1E=/600x0/center/middle/filters:quality(100)/arc-anglerfish-arc2-prod-gruponacion.s3.amazonaws.com/public/ZXBYNEECDJGH5PH4RFHFG5Q6G4.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 45,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Baldi",
    "description": ["HotSprigs ", "Almuerzo Buffet", "10am-10pm"],
    "id": 89,
    "title": "Baldi #1",
    "tourist": 113,
    "url": "http://www.colypro.com/ee_uploads/centros_recreo/BaldiWeb36.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  
  {
  "adult": 60,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Baldi",
    "description": ["Rio Balsa ", "Almuerzo ","Snack (frutas)", "Salida: 9am"],
    "id": 89,
    "title": " Rafting 2 y 3",
    "tourist": 113,
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/0d/8b/f1/96/arenal-rafting-company.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },

  {
    "adult": 35,
      "adultcomision": 20,
      "adultneto": 25,
      "child": 45,
      "childcomision": 20,
      "childneto": 25,
      "company": "Go Adventures",
      "description": ["Guia","Cabalgata al ","Volcán"],
      "id": 89,
      "title": "Cabalgata al Volcán",
      "tourist": 113,
      "url": "http://www.jacotransfers.com/wp-content/uploads/2014/03/horseback_lake_trail_arenal2.jpg",
      "touristchild": 113,
      "touristchildcomision": 34,
      "touristchildneto": 79,
      "touristcomision": 34,
      "touristneto": 79
    },

  {
    "adult": 85,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "La pradera",
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Almuerzo", "Aventura extrema "],
    "id": 89,
    "title": "ATV Arenal Tour",
    "tourist": 113,
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/71/9d/a3/muy-bueno.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 50,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Tubing","Malekus", "Termales"],
    "id": 89,
    "title": "Paquete Aventura 2",
    "tourist": 113,
    "url": "https://i.ytimg.com/vi/zGm0VOJtwHs/maxresdefault.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {
  "adult": 60,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 45,
    "childcomision": 20,
    "childneto": 25,
    "company": "Go Adventures",
    "description": ["Termales","Cabalgata al","Volcán"],
    "id": 89,
    "title": "Paquete Volcan Arenal",
    "tourist": 113,
    "url": "https://image.jimcdn.com/app/cms/image/transf/none/path/s9d7e71e92f4b8590/image/i705952c00e9a2602/version/1442009737/image.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },

  {
    "adult": 70,
      "adultcomision": 20,
      "adultneto": 25,
      "child": 45,
      "childcomision": 20,
      "childneto": 25,
      "company": "Arenal Rafting",
      "description": ["Rio Sarapiqui ", "Almuerzo ","Snack (frutas)", "Salida: 9am"],
      "id": 89,
      "title": " Rafting 3 y 4",
      "tourist": 113,
      "url": "https://media-cdn.tripadvisor.com/media/photo-s/06/ce/77/1e/hacienda-pozo-azul.jpg",
      "touristchild": 113,
      "touristchildcomision": 34,
      "touristchildneto": 79,
      "touristcomision": 34,
      "touristneto": 79
    },  



  {
    "adult": 65,
    "adultcomision": 20,
    "adultneto": 25,
    "child": 35,
    "childcomision": 20,
    "childneto": 25,
    "company": "Jungle Tour",
    "description": ["Caminata al volcán ", "Observatorio", "Visita al lago", "Aguas termales ", "Catarata 25mts "],
    "id": 89,
    "title": "Arenal & Chato",
    "tourist": 113,
    "url": "https://i.pinimg.com/736x/f4/1d/e8/f41de8ed937bda896a8e54d101eceabe--quetzaltenango-laguna.jpg",
    "touristchild": 113,
    "touristchildcomision": 34,
    "touristchildneto": 79,
    "touristcomision": 34,
    "touristneto": 79
  },
  {

    "company": "Sky Adventures",
    "id": 101,
    "title": "FLY BOARD",
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Almuerzo", "10:15 am y 12:15 md"],
    "url": "https://thumbnails.trvl-media.com/qZ8LZputnx8u8543a1C6yx7WmlY=/cdn.lemediavault.com/images/5cf6df08b38251f528dbc838198e4d94.jpeg",

    "tourist": 93,
    "touristneto": 74.4,
    "touristcomision":0,
    "touristchild": 93,
    "touristchildneto": 74.4,
    "touristchildcomision": 0,

    "adult": 77,
    "adultneto": 61.6,
    "adultcomision": 0,
    "child": 77,
    "childneto": 61.6,
    "childcomision": 0,
},
{

    "company": "Sky Adventures",
    "id": 102,
    "title": "SKY TRAM & SKY TREK",
    "description": ["Transporte ", "Guia", "Duracion: 2.5hrs", "Cables: 7"],
    "url": "https://www.govisitcostarica.co.cr/images/uploads/detail/optimized/g-07-Sky-Tram-Costa-Rica-Sky-Adventures-Monteverde-3.jpg",
    
    "tourist": 81,
    "touristneto": 64.8,
    "touristcomision": 0,
    "touristchild": 56,
    "touristchildneto": 44.8,
    "touristchildcomision": 0,
    
    "adult": 48,
    "adultneto": 38.4,
    "adultcomision": 0,
    "child": 48,
    "childneto": 38.4,
    "childcomision": 0,
},

{
    
    "company": "Sky Adventures",
    "id": 103,
    "title": "SKY LIMIT & SUPERMAN",
    "description": ["Transporte ", "Guia", "Puentes escalera","Barranquismo","Rappel","Tarzan swing"],
    "url": "https://skyadventures.travel/wp-content/uploads/2016/06/ftnlimit-145-8790.jpg",
    
    "tourist": 81,
    "touristneto": 64.8,
    "touristcomision": 0,
    "touristchild": 81,
    "touristchildneto": 64.8,
    "touristchildcomision": 0,
    
    "adult": 48,
    "adultneto": 38.4,
    "adultcomision": 0,
    "child": 48,
    "childneto": 38.4,
    "childcomision": 0,
},

{
    
    "company": "Sky Adventures",
    "id": 104,
    "title": "FULL CLASSIC",
    "description": ["Sky Tram", "Sky Trek", "Sky Walk","Almuerzo","Trasporte"],
    "url": "https://billbeardcostarica.com/wp-content/uploads/2013/06/canopy-pic.jpg",
    
    "tourist": 133,
    "touristneto": 106.4,
    "touristcomision": 0,
    "touristchild": 102,
    "touristchildneto": 81.6,
    "touristchildcomision": 0,
    
    "adult": 95,
    "adultneto": 76,
    "adultcomision": 0,
    "child": 95,
    "childneto": 76,
    "childcomision": 0,
},

{
    
    "company": "Sky Adventures",
    "id": 105,
    "title": "FULL CLASSIC (Sin trasporte )",
    "description": ["Sky Tram", "Sky Trek", "Sky Walk","Almuerzo"],
    "url": "https://www.anywhere.com/img-a/tour/sky-tram-sky-trek-and-sky-walk-arenal-costa-rica/Sky-Tram-Trek-Walk-Arenal-A-6-jpg",
    
    "tourist": 117,
    "touristneto": 93.6,
    "touristcomision": 0,
    "touristchild": 86,
    "touristchildneto": 68.8,
    "touristchildcomision": 0,
    
    "adult": 79,
    "adultneto": 63.2,
    "adultcomision": 0,
    "child": 79,
    "childneto": 63.2,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 106,
    "title": "EXTRAORDINARY FUN",
    "description": ["Sky Tram", "Sky Trek", "Sky River","Trasporte"],
    "url": "https://skyadventures.travel/wp-content/uploads/2016/06/ftnriver-ext171-1374.jpg",
    
    "tourist": 148,
    "touristneto": 118.4,
    "touristcomision": 0,
    "touristchild": 114,
    "touristchildneto": 91.2,
    "touristchildcomision": 0,
    
    "adult": 98,
    "adultneto": 78.4,
    "adultcomision": 0,
    "child": 98,
    "childneto": 78.4,
    "childcomision": 0,
},

{
    
    "company": "Sky Adventures",
    "id": 107,
    "title": "TOTAL ADVENTURE",
    "description": ["Sky Limit", "SuperMan", "Sky River","Trasporte"],
    "url": "https://image.jimcdn.com/app/cms/image/transf/none/path/s9d7e71e92f4b8590/backgroundarea/i9b65f1a1690dfaa5/version/1481053096/image.jpg",
    
    "tourist": 148,
    "touristneto": 118.4,
    "touristcomision": 0,
    "touristchild": 148,
    "touristchildneto": 118.4,
    "touristchildcomision": 0,
    
    "adult": 98,
    "adultneto": 78.4,
    "adultcomision": 0,
    "child": 98,
    "childneto": 78.4,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 108,
    "title": "FULL ADVENTURE",
    "description": ["Sky Tram","Sky Trek","Sky Limit", "Superman", "Almuerzo","Trasporte"],
    "url": "https://2xj3ep1sacqvsluiw1w0g438-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Canopy_Tour_Finca_Daniel_incl_Superman_6.jpg",
    
    "tourist": 157,
    "touristneto": 125.6,
    "touristcomision": 0,
    "touristchild": 157,
    "touristchildneto": 125.6,
    "touristchildcomision": 0,
    
    "adult": 114,
    "adultneto": 91.2,
    "adultcomision": 0,
    "child": 98,
    "childneto": 91.2,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 109,
    "title": "SKY RIVER",
    "description": ["Almuerzo","Rapidos","Flora y Fauna", "800 mts en cables","Guia"],
    "url": "https://i.ytimg.com/vi/diCGeXlV1Pg/maxresdefault.jpg",
    
    "tourist": 92,
    "touristneto": 73.6,
    "touristcomision": 0,
    "touristchild": 77,
    "touristchildneto": 61.6,
    "touristchildcomision": 0,
    
    "adult": 66,
    "adultneto": 52.8,
    "adultcomision": 0,
    "child": 66,
    "childneto": 52.8,
    "childcomision": 0,
},

{
    
    "company": "Sky Adventures",
    "id": 110,
    "title": "SKY RIVER COMBO",
    "description": ["Sky River","Almuerzo","Sky Tram","Sky Trek"],
    "url": "https://www.costaricantrails.com/media/fotos/1698Sky%20Adventures%201.jpg",
    
    "tourist": 150,
    "touristneto": 120,
    "touristcomision": 0,
    "touristchild": 116,
    "touristchildneto": 92.8,
    "touristchildcomision": 0,
    
    "adult": 100,
    "adultneto": 80,
    "adultcomision": 0,
    "child": 100,
    "childneto": 80,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 111,
    "title": "SKY LIMIT",
    "description": ["Sky Limit","Superman","Almuerzo","Transporte"],
    "url": "http://www.fortunawelcome.com/images/tours/sky-limit/sky-limit-4.jpg",
    
    "tourist": 150,
    "touristneto": 120,
    "touristcomision": 0,
    "touristchild": 116,
    "touristchildneto": 92.8,
    "touristchildcomision": 0,
    
    "adult": 100,
    "adultneto": 80,
    "adultcomision": 0,
    "child": 100,
    "childneto": 80,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 112,
    "title": "SKY XTREME",
    "description": ["Sky Board","Sky River","Guia"],
    "url": "https://www.anywhere.com/img-a/tour/fly-board-arenal-costa-rica/Flyboard-A-3-jpg",
    
    "tourist": 142,
    "touristneto": 113.6,
    "touristcomision": 0,
    "touristchild": 142,
    "touristchildneto": 113.6,
    "touristchildcomision": 0,
    
    "adult": 106,
    "adultneto": 84.8,
    "adultcomision": 0,
    "child": 106,
    "childneto": 84.8,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 113,
    "title": "KAYAKS",
    "description": ["Sky River","Kayaks","Guia","Almuerzo"],
    "url": "http://solidcarrental.com/wp-content/uploads/2016/01/river-arenal-costarica.jpg",
    
    "tourist": 122,
    "touristneto": 97.6,
    "touristcomision": 0,
    "touristchild": 97,
    "touristchildneto": 77.6,
    "touristchildcomision": 0,
    
    "adult": 106,
    "adultneto": 88,
    "adultcomision": 0,
    "child": 106,
    "childneto": 88,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 114,
    "title": "SKY BIKING",
    "description": ["Sky River","Biking","Guia","Almuerzo"],
    "url": "https://skyadventures.travel/wp-content/uploads/2016/06/ftnbikes-ext171-1266.jpg",
    
    "tourist": 122,
    "touristneto": 97.6,
    "touristcomision": 0,
    "touristchild": 97,
    "touristchildneto": 77.6,
    "touristchildcomision": 0,
    
    "adult": 106,
    "adultneto": 88,
    "adultcomision": 0,
    "child": 106,
    "childneto": 88,
    "childcomision": 0,
},
{
    
    "company": "Sky Adventures",
    "id": 115,
    "title": "SKY WALK COMBO",
    "description": ["Sky Walk","Sky Tram","Guia","Almuerzo", "Transporte"],
    "url": "http://www.therealdealtours.com/blog/modules/gallery/galleries/demo/IMG_3B4301-F6D659-BEE77D-036E80-3A6058-783D42.jpg",
    
    "tourist": 99,
    "touristneto": 79.2,
    "touristcomision": 0,
    "touristchild": 78,
    "touristchildneto": 62.4,
    "touristchildcomision": 0,
    
    "adult": 73,
    "adultneto": 58.4,
    "adultcomision": 0,
    "child": 73,
    "childneto": 58.4,
    "childcomision": 0,
},


{
    
    "company": "Sky Adventures",
    "id": 116,
    "title": "SKY WILD",
    "description": ["Sky Wild kayaks","Sky wlid biking", "Sky River","Guia","Almuerzo"],
    "url": "https://i.ytimg.com/vi/rN5QsknhniA/maxresdefault.jpg",
    
    "tourist": 139,
    "touristneto": 111.2,
    "touristcomision": 0,
    "touristchild": 108,
    "touristchildneto": 86.4,
    "touristchildcomision": 0,
    
    "adult": 97,
    "adultneto": 77.6,
    "adultcomision": 0,
    "child": 97,
    "childneto": 77.6,
    "childcomision": 0,
},


{
    
    "company": "Sky Adventures",
    "id": 117,
    "title": "NATURAL CONTACT",
    "description": ["Sky Tram","Sky Trek", "Sky Walk","Transporte"],
    "url": "https://cdn.theculturetrip.com/wp-content/uploads/2016/04/skywalk-arenal-rainforest.jpg",
    
    "tourist": 115,
    "touristneto": 92,
    "touristcomision": 0,
    "touristchild": 84,
    "touristchildneto": 67.2,
    "touristchildcomision": 0,
    
    "adult": 77,
    "adultneto": 61.6,
    "adultcomision": 0,
    "child": 77,
    "childneto": 61.6,
    "childcomision": 0,
},

{
    
    "company": "Sky Adventures",
    "id": 118,
    "title": "FUN & ADRENALINE",
    "description": ["Sky Tram","Sky Trek", "Sky River","Guia"],
    "url": "https://i.ytimg.com/vi/rN5QsknhniA/maxresdefault.jpg",
    
    "tourist": 132,
    "touristneto": 105.6,
    "touristcomision": 0,
    "touristchild": 98,
    "touristchildneto": 78.4,
    "touristchildcomision": 0,
    
    "adult": 82,
    "adultneto": 65.6,
    "adultcomision": 0,
    "child": 77,
    "childneto": 65.6,
    "childcomision": 0,
},
{
    
    "company": "Jungle Tour",
    "id": 119,
    "title": "ARENAL & CHATO",
    "description": ["Arenal","Chato","Catarata","Puentes Colgantes","Laguna","Observatorio","Vida Silvestre","Hot Springs","Guia"],
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/ef/c6/8e/volar-tours.jpg",
    
    "tourist": 65,
    "touristneto": 42,
    "touristcomision": 0,
    "touristchild": 65,
    "touristchildneto": 42,
    "touristchildcomision": 0,
    
    "adult": 65,
    "adultneto": 42,
    "adultcomision": 0,
    "child": 65,
    "childneto": 42,
    "childcomision": 0,
},
{
    
    "company": "Jungle Tour",
    "id": 120,
    "title": "ARENAL & TERMALES NATURALES",
    "description": ["Arenal","Puentes Colgantes","Laguna","Observatorio","Vida Silvestre","Hot Springs","Guia"],
    "url": "http://www.fortunawelcome.com/images/attractions/arenal-volcano/arenal-volcano.jpg",
    
    "tourist": 45,
    "touristneto": 25,
    "touristcomision": 0,
    "touristchild": 45,
    "touristchildneto": 25,
    "touristchildcomision": 0,
    
    "adult": 45,
    "adultneto": 25,
    "adultcomision": 0,
    "child": 45,
    "childneto": 25,
    "childcomision": 0,
},

{
    
    "company": "Arenal Rafting",
    "id": 121,
    "title": "RAFTING 2 y 3",
    "description": ["Rio Balsa","Trasporte","Frutas","Almuerzo","Guia"],
    "url": "https://www.arenal.net/sites/www-origin.arenal.net/files/tour-images/balsa-river-rafting-A-4-.jpg",
    
    "tourist": 60,
    "touristneto": 40,
    "touristcomision": 0,
    "touristchild": 60,
    "touristchildneto": 40,
    "touristchildcomision": 0,
    
    "adult": 60,
    "adultneto": 40,
    "adultcomision": 0,
    "child": 60,
    "childneto": 40,
    "childcomision": 0,
},
{
    
    "company": "Arenal Rafting",
    "id": 122,
    "title": "RAFTING 3 y 4",
    "description": ["Rio Sarapiqui","Trasporte","Frutas","Almuerzo","Guia"],
    "url": "https://upload.wikimedia.org/wikipedia/commons/5/50/Rafting_Sarapiqui_river._Costa_Rica.jpg",
    
    "tourist": 70,
    "touristneto": 40,
    "touristcomision": 0,
    "touristchild": 70,
    "touristchildneto": 40,
    "touristchildcomision": 0,
    
    "adult": 70,
    "adultneto": 40,
    "adultcomision": 0,
    "child": 70,
    "childneto": 40,
    "childcomision": 0,
},

{
    
    "company": "GO ADVENTURE",
    "id": 123,
    "title": "ADVENTURE 1",
    "description": ["9 Cables canopy","Rappel","Malekus","Termales","Hora: 8am, 10am, 1pm, 3pm"],
    "url": "https://www.attitudeisaltitude.com/wp-content/uploads/2015/11/setting_better_goals1.jpg",
    
    "tourist": 50,
    "touristneto": 25,
    "touristcomision": 0,
    "touristchild": 50,
    "touristchildneto": 25,
    "touristchildcomision": 0,
    
    "adult": 50,
    "adultneto": 25,
    "adultcomision": 0,
    "child": 50,
    "childneto": 25,
    "childcomision": 0,
},

{
    
    "company": "GO ADVENTURE",
    "id": 124,
    "title": "ADVENTURE 2",
    "description": ["Tubing","Malekus","Termales","Hora: 8am, 10am, 1pm, 3pm"],
    "url": "http://www.enchanting-costarica.com/wp-content/uploads/2013/05/Tubing-27-071.jpg",
    
    "tourist": 50,
    "touristneto": 25,
    "touristcomision": 0,
    "touristchild": 50,
    "touristchildneto": 25,
    "touristchildcomision": 0,
    
    "adult": 50,
    "adultneto": 25,
    "adultcomision": 0,
    "child": 50,
    "childneto": 25,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 125,
    "title": "ADVENTURE 3",
    "description": ["Cabalgata al Volcán","Termales","Hora: 8:30am, 1:30pm"],
    "url": "https://image.jimcdn.com/app/cms/image/transf/none/path/s9d7e71e92f4b8590/image/i705952c00e9a2602/version/1442009737/image.jpg",
    
    "tourist": 70,
    "touristneto": 40,
    "touristcomision": 0,
    "touristchild": 70,
    "touristchildneto": 40,
    "touristchildcomision": 0,
    
    "adult": 70,
    "adultneto": 40,
    "adultcomision": 0,
    "child": 70,
    "childneto": 40,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 126,
    "title": "ADVENTURE 4",
    "description": ["9 Cables canopy","Tubing","Rappel","Malekus","Termales","Hora: 8am, 10am, 1pm"],
    "url": "http://www.fortunawelcome.com/images/tours/arenal-canopy-tour/arenal-canopy-tour.jpg",
    
    "tourist": 95,
    "touristneto": 45,
    "touristcomision": 0,
    "touristchild": 95,
    "touristchildneto": 45,
    "touristchildcomision": 0,
    
    "adult": 95,
    "adultneto": 45,
    "adultcomision": 0,
    "child": 95,
    "childneto": 45,
    "childcomision": 0,
},


{
    
    "company": "GO ADVENTURE",
    "id": 127,
    "title": "ADVENTURE 5",
    "description": ["9 Cables canopy","Cabalgata corta","Rappel","Malekus","Termales","Hora: 8am, 10am, 1pm"],
    "url": "http://www.fortunawelcome.com/images/tours/arenal-volcano-horseback-riding-tour/arenal-volcano-horseback-riding-tour-3.jpg",
    
    "tourist": 75,
    "touristneto": 40,
    "touristcomision": 0,
    "touristchild": 75,
    "touristchildneto": 40,
    "touristchildcomision": 0,
    
    "adult": 75,
    "adultneto": 40,
    "adultcomision": 0,
    "child": 75,
    "childneto": 40,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 128,
    "title": "ADVENTURE 6",
    "description": ["Tubing","Cabalgata corta","Malekus","Termales","Hora: 8am, 10am, 1pm"],
    "url": "https://media-cdn.tripadvisor.com/media/photo-s/04/b5/94/63/cabalgata-don-tobias.jpg",
    
    "tourist": 75,
    "touristneto": 45,
    "touristcomision": 0,
    "touristchild": 75,
    "touristchildneto": 45,
    "touristchildcomision": 0,
    
    "adult": 75,
    "adultneto": 45,
    "adultcomision": 0,
    "child": 75,
    "childneto": 45,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 129,
    "title": "ADVENTURE 7",
    "description": ["9 Cables canopy","Tubing","Rappel","Cabalgata corta","Malekus","Termales","Hora: 8am, 10am, 1pm"],
    "url": "https://www.titicupon.com/sites/default/files/imagecache/coupon-slider-responsive/fuego_ajust_3.jpg",
    
    "tourist": 110,
    "touristneto": 70,
    "touristcomision": 0,
    "touristchild": 110,
    "touristchildneto": 70,
    "touristchildcomision": 0,
    
    "adult": 110,
    "adultneto": 70,
    "adultcomision": 0,
    "child": 110,
    "childneto": 70,
    "childcomision": 0,
},

{
  
    "company": "GO ADVENTURE",
    "id": 130,
    "title": "ADVENTURE 8",
    "description": ["9 Cables canopy","ATV tour","Rappel","Malekus","Termales","Hora: 8am, 10am"],
    "url": "http://www.fortunawelcome.com/images/tours/arenal-atv-tour/arenal-atv-tour-3.jpg",
    
    "tourist": 125,
    "touristneto": 90,
    "touristcomision": 0,
    "touristchild": 125,
    "touristchildneto": 90,
    "touristchildcomision": 0,
    
    "adult": 125,
    "adultneto": 90,
    "adultcomision": 0,
    "child": 125,
    "childneto": 90,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 131,
    "title": "ADVENTURE 9",
    "description": ["Tubing","ATV tour","Malekus","Termales","Hora: 8am, 10am"],
    "url": "http://www.aventurasarenal.com/wp-content/uploads/2015/12/LaPraderaATV6.jpg",
    
    "tourist": 125,
    "touristneto": 90,
    "touristcomision": 0,
    "touristchild": 125,
    "touristchildneto": 90,
    "touristchildcomision": 0,
    
    "adult": 125,
    "adultneto": 90,
    "adultcomision": 0,
    "child": 125,
    "childneto": 90,
    "childcomision": 0,
},

{
    
    "company": "GO ADVENTURE",
    "id": 132,
    "title": "ADVENTURE 10",
    "description": ["Tubing","Rafting 2 y 3","Malekus","Termales","Hora: 8am"],
    "url": "https://www.montanadefuego.com/wp-content/uploads/2016/07/Rafting.jpg?x15609",
    
    "tourist": 110,
    "touristneto": 70,
    "touristcomision": 0,
    "touristchild": 110,
    "touristchildneto": 70,
    "touristchildcomision": 0,
    
    "adult": 110,
    "adultneto": 70,
    "adultcomision": 0,
    "child": 110,
    "childneto": 70,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 133,
    "title": "ADVENTURE 11",
    "description": ["9 Cables de canopy","Rafting 2 y 3","Rappel","Malekus","Termales","Hora: 8am"],
    "url": "http://www.costaricadescents.com/wp-content/uploads/2017/08/photo-7.jpg",
    
    "tourist": 110,
    "touristneto": 70,
    "touristcomision": 0,
    "touristchild": 110,
    "touristchildneto": 70,
    "touristchildcomision": 0,
    
    "adult": 110,
    "adultneto": 70,
    "adultcomision": 0,
    "child": 110,
    "childneto": 70,
    "childcomision": 0,
},
{
    
    "company": "GO ADVENTURE",
    "id": 134,
    "title": "ADVENTURE 12",
    "description": ["9 Cables de canopy","volcán Arenal","Rappel","Malekus","Termales","Hora: 8am, 10am"],
    "url": "https://www.arenalobservatorylodge.com/sites/default/files/styles/photo_gallery/public/Blogs/lava-flow-arenal-volcano.jpg?itok=DEugw4rT",
    
    "tourist": 100,
    "touristneto": 60,
    "touristcomision": 0,
    "touristchild": 100,
    "touristchildneto": 60,
    "touristchildcomision": 0,
    
    "adult": 100,
    "adultneto": 60,
    "adultcomision": 0,
    "child": 100,
    "childneto": 60,
    "childcomision": 0,
}
]


class Catalog extends Component {
  constructor(props) {
    super();

    this.state = {
      data: ToursData
    };
  }
  searchBy = (input) => {
    this.setState(
      {
        filter: input.target.value
      });
  }
  componentWillMount = () => {
    if (this.filter == null | this.filter == "") {
      this.setState({
        data: ToursData
      });

    }


  }

  render() {

    return (

      <section id="first" className="main ">
        <style jsx global>{`
        
          nav.nav-extended .nav-wrapper {
            min-height: 56px;
            height: auto;
          }
          @media only screen and (min-width: 601px) {
            nav.nav-extended .nav-wrapper {
                min-height: 64px;
            }
            nav, nav .nav-wrapper i, nav a.button-collapse, nav a.button-collapse i {
            height: 64px;
            line-height: 64px;
          }
          }
          
        `}</style>
        <nav class="nav-extended">
          <div class="nav-wrapper">
            <Nav />
            <Tabs />
          </div>
        </nav>
        <ItemStyle />
        <div className="content">
          <div className="container">
            <div className="u12 u12-narrow">
              <div className="row">
                {

                  ToursData.map((tour) => {
                    return (
                      <TourItem tour={tour} />
                    )
                  })

                }

               
              </div>
            </div>
          </div>
        </div>
      </section>

    );
  }
}

export default Catalog;
