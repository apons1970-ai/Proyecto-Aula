import { course6G } from './course6G.js';
export const catalog = [
  { ...course6G, status:'active' },
  { id:'7G', title:'Clase 7G', status:'next', semesters:[
    {id:'7G-1A',title:'Primer semestre A',status:'planned'},
    {id:'7G-1B',title:'Primer semestre B',status:'planned'},
    {id:'7G-2A',title:'Segundo semestre A',status:'planned'},
    {id:'7G-2B',title:'Segundo semestre B',status:'planned'}
  ]},
  { id:'5G', title:'Clase 5G', status:'support', semesters:[] },
  { id:'6R', title:'Clase 6R', status:'bank', semesters:[] },
  { id:'7R', title:'Clase 7R', status:'bank', semesters:[] }
];
