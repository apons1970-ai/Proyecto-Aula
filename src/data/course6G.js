export const course6G = {
  id: '6G',
  title: 'Clase 6G',
  semesters: [
    {
      id: '6G-1A',
      title: 'Primer semestre A',
      status: 'active',
      description: 'La casa, localización, presente y repaso.',
      topics: [
        {
          id: 'vocab1', icon: '🏠', title: 'La casa y la localización', kind: 'Vocabulario',
          activities: [
            { type:'info', title:'Aprende relacionando', instruction:'Busca relaciones entre las palabras. / Finde Verbindungen zwischen den Wörtern.', groups:[['Lugares','cocina · baño'],['Objetos y aparatos','televisión · nevera · sofá · lavabo · ducha · llave'],['Localización','encima de · debajo de · delante de · detrás de · al lado de · en · entre … y …']] },
            { type:'choice', title:'Contrarios', instruction:'Relaciona las parejas. / Ordne die Gegensätze zu.', questions:[
              {q:'encima de', options:['debajo de','al lado de','entre'], answer:0},
              {q:'delante de', options:['detrás de','encima de','en'], answer:0}
            ]},
            { type:'choice', title:'¿Dónde está el gato?', instruction:'Elige la relación espacial correcta. / Wähle die passende Ortsangabe.', questions:[
              {q:'🐈 está dentro de una caja.', options:['en','encima de','delante de'], answer:0},
              {q:'🐈 está con un sofá a un lado y una mesa al otro.', options:['entre … y …','debajo de','detrás de'], answer:0}
            ]},
            { type:'choice', title:'Palabras para hablar', instruction:'El alemán te ayuda a elegir la expresión. / Das Deutsche hilft dir bei der Auswahl.', questions:[
              {q:'— ¿Qué pasa? — No encuentro la llave. · Was ist los?', options:['¿Qué pasa?','¡Por fin!','tampoco'], answer:0},
              {q:'— No sé. ___ está en el baño. · Vielleicht ist er im Badezimmer.', options:['Quizás','Entonces','Seguro que'], answer:0},
              {q:'— ¡Aquí está la llave! — ___ · Endlich!', options:['¡Por fin!','Tampoco','Quizás'], answer:0}
            ]}
          ]
        },
        {
          id:'hay-estar', icon:'📍', title:'HAY / ESTAR', kind:'Gramática',
          explanation:[
            '<b>HAY</b>: unbestimmte Personen oder Sachen — <i>una cama, dos ventanas, muchos libros, agua</i>.',
            '<b>ESTAR</b>: bestimmte Personen oder Sachen — <i>Paula, la cama, ella, este libro</i>.',
            '💡 <b>¿Qué hay? → HAY · ¿Dónde está/están? → ESTAR</b>'
          ],
          activities:[
            {type:'choice', title:'Busca la pista', instruction:'Elige HAY o ESTAR. / Wähle HAY oder ESTAR.', questions:[
              {q:'una lámpara', options:['HAY','ESTAR'], answer:0, feedback:'„una“ ist ein unbestimmter Artikel → HAY.'},
              {q:'la lámpara', options:['HAY','ESTAR'], answer:1, feedback:'„la“ ist ein bestimmter Artikel → ESTAR.'},
              {q:'tres libros', options:['HAY','ESTAR'], answer:0, feedback:'Eine Zahl bezeichnet eine unbestimmte Menge → HAY.'},
              {q:'Paula', options:['HAY','ESTAR'], answer:1, feedback:'Eigenname → ESTAR.'}
            ]},
            {type:'gaps', title:'HAY, ESTÁ o ESTÁN', instruction:'Completa las frases. / Ergänze die Sätze.', items:[
              {text:'En mi habitación ___ una cama.', answers:['hay']},
              {text:'La cama ___ al lado de la ventana.', answers:['está','esta']},
              {text:'En la pared ___ tres fotos.', answers:['hay']},
              {text:'Las fotos ___ encima del escritorio.', answers:['están','estan']}
            ]},
            {type:'open', title:'Describe tú', instruction:'Escribe al menos cuatro frases: dos con HAY y dos con ESTAR. / Schreibe mindestens vier Sätze.', model:'En la habitación hay una cama. Hay muchos libros. La cama está junto a la ventana. Los libros están en la estantería.'}
          ]
        },
        {
          id:'presente', icon:'✏️', title:'El presente', kind:'Gramática',
          explanation:[
            'Paradigma visual: <span class="theme">vocal temática</span> + <span class="ending">terminación personal</span>.',
            'estudi + <span class="theme">a</span> + <span class="ending">mos</span> · com + <span class="theme">e</span> + <span class="ending">mos</span> · viv + <span class="theme">i</span> + <span class="ending">mos</span>'
          ],
          activities:[
            {type:'choice', title:'¿-AR, -ER o -IR?', instruction:'Clasifica los verbos. / Ordne die Verben.', questions:[
              {q:'estudiar',options:['-AR','-ER','-IR'],answer:0},{q:'comer',options:['-AR','-ER','-IR'],answer:1},{q:'vivir',options:['-AR','-ER','-IR'],answer:2},{q:'escribir',options:['-AR','-ER','-IR'],answer:2}
            ]},
            {type:'gaps', title:'Ahora conjuga', instruction:'Completa con la forma correcta. / Ergänze mit der richtigen Form.', optionalMeaning:true, items:[
              {text:'Yo ___ español. (estudiar)', answers:['estudio'], meaning:'Ich lerne Spanisch.'},
              {text:'Mi hermana ___ mucho. (leer)', answers:['lee'], meaning:'Meine Schwester liest viel.'},
              {text:'Leo y Anna ___ la habitación. (compartir)', answers:['comparten'], meaning:'Leo und Anna teilen sich das Zimmer.'},
              {text:'Mis amigos ___ pasos de hiphop. (practicar)', answers:['practican'], meaning:'Meine Freunde üben Hip-Hop-Schritte.'}
            ]},
            {type:'gaps', title:'⭐ Desafío · Regular o irregular', instruction:'Completa sin pistas sobre el tipo de verbo. / Ergänze ohne Hinweis auf den Verbtyp.', items:[
              {text:'Mis amigos y yo ___ cerca del colegio. (vivir)',answers:['vivimos']},
              {text:'Después nosotros ___ los deberes. (hacer)',answers:['hacemos']},
              {text:'Leo ___ vídeos. (ver)',answers:['ve']},
              {text:'Yo ___ en mi habitación. (estar)',answers:['estoy']}
            ]}
          ]
        },
        {
          id:'tambien', icon:'➕', title:'También / tampoco', kind:'Microbloque',
          activities:[
            {type:'choice', title:'También o tampoco', instruction:'Elige la opción correcta. / Wähle die passende Antwort.', questions:[
              {q:'— Me gusta bailar. — A mí ___.',options:['también','tampoco'],answer:0},
              {q:'— No juego al tenis. — Yo ___.',options:['también','tampoco'],answer:1}
            ]}
          ]
        }
      ]
    },
    {id:'6G-1B',title:'Primer semestre B',status:'planned',description:'Estructura preparada; contenido por incorporar.'},
    {id:'6G-2A',title:'Segundo semestre A',status:'planned',description:'Estructura preparada; contenido por incorporar.'},
    {id:'6G-2B',title:'Segundo semestre B',status:'planned',description:'Estructura preparada; contenido por incorporar.'}
  ]
};
