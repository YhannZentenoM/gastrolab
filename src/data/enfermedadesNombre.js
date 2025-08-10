export const EXAMENES_NOMBRE = [
  {
    code: 'CF013',
    name: 'Alpha-1 antitripsina fecal (24 horas)',
    seccion: ['CITOQUIMICA FECAL'],
    enfermedad: [
      'Alergia Alimentaria',
      'ASCITIS',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Enfermedad Intestinal Inflamatoria',
    ],
  },
  {
    code: 'CF012',
    name: 'Alpha-1 antitripsina fecal (spot aleatorio)',
    seccion: [
      'ALERGIA',
      'CITOQUIMICA FECAL',
      'DIGESTION / ABSORCION INTESTINAL',
    ],
    enfermedad: [
      'Alergia Alimentaria',
      'ASCITIS',
      'Colitis Ulcerativa',
      'Enfermedad Intestinal Inflamatoria',
      'Falla de Medro (pobre ganancia de peso)',
    ],
  },
  {
    code: 'PA017',
    name: 'Ameba histolytica ANTIGENO EN SANGRE o ABSCESO (ELISA)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Abdomen Hepatico',
      'ASCITIS',
      'Fiebre sin Causa Aparente',
      'Hepato-esplenomegalia',
      'Ictericia',
      'Masa Abdominal',
      'Parasitosis Intestinal : Protozoarios',
      'Transaminasemia',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/absceso.hepatico.amebiano.elisa.pdf',
    description: [
      {
        title: 'Descripción',
        content:
          '<p>Detección de antígeno específico de Entamoeba histolytica (Gal/GalNAc lectin) mediante enzimoinmunoensayo de microplaca en fase sólida con anticuerpos monoclonales y policlonales en suero o aspirado de absceso.</p>',
      },
      {
        title: 'Utilidad Clínica',
        content:
          '<p>Este examen es para ser utilizado en suero o aspirado de absceso en pacientes que están siendo evaluados por absceso hepático en los que se quiere determinar si la causa es Entamoeba histolytica.</p>',
      },
      {
        title: 'Información Clínica',
        content:
          '<p>El absceso hepático amebiano es la complicación más común de la amebiasis invasiva aunque la mayoría de pacientes con absceso hepático amebiano no tienen co-existentemente colitis amebiana (Haque R et al. N Eng J Med 2003;348:1565-73). El diagnóstico de absceso hepático amebiano se dificulta porque los síntomas son inespecíficos y pueden presentarse meses después de la infección intestinal inicial. A su vez, la infección intestinal inicial con <em>E. histolytica</em> puede ser asintomática o presentarse clínicamente con diarrea indistinguible de la diarrea por otras causas. La mayoría de pacientes con absceso hepático se presentan agudamente enfermos con fiebre y dolor abdominal. La posibilidad de absceso hepático es sugerida por el hallazgo de hepatomegalia dolorosa que se confirma con las imágenes características. Las imágenes, sin embargo, no permiten distinguir entre absceso piógeno y absceso amebiano. El diagnóstico serológico detectando anticuerpos contra <em>E. histolytica</em> tiene una utilidad limitada porque estos anticuerpos permanecen detectables por mucho tiempo después de la exposición inicial (Jackson TF et al. Trans R Soc Trop Med Hyg. 1984;78:342–5). Un nivel elevado de anticuerpos contra <em>E. histolytica</em>, por tanto, no necesariamente indica que el absceso hepático sea de origen amebiano (Healy GR. Rev Infect Dis 1986;8:239-45). Se ha demostrado que durante la enfermedad, antígenos de <em>E. histolytica</em> circulan en sangre en pacientes con absceso hepático amebiano (Haque R et al. J Clin Microbiol 2000;38:3235-9). La detección de estos antígenos directamente en la pus del absceso o&nbsp;circulantes, como se hace en esta prueba, puede ayudar considerablemente en el diagnóstico de esta enfermedad.&nbsp;</p>',
      },
      { title: 'Muestra', content: '<p>Suero o aspirado de absceso</p>' },
      {
        title: 'Recipiente',
        content:
          '<p>Tubo de borosilicato para el suero o vial estéril con tapa para el aspirado de absceso</p>',
      },
      {
        title: 'Volumen',
        content:
          '<p>Mínimo 2 mL – Mayor cantidad si conjuntamente se solicitan otros exámenes</p>',
      },
      {
        title: 'Instrucciones para obtención y transporte de la muestra',
        content:
          '<p>Obtener la muestra de sangre en tubo sin anticoagulante siguiendo el procedimiento estándar de veno-punción en vena periférica (preferentemente en la flexura del codo). Centrifugar y separar el suero inmediatamente después de la retracción del coágulo. Refrigerar el suero hasta su envío al laboratorio. Si es aspirado de absceso, el recipiente deberá ser puesto en refrigeración inmediatamente y durante su transporte al laboratorio. Congelar la muestra, sea suero o aspirado de absceso, si no puede ser enviada al laboratorio antes de 24 horas de obtenida.</p>',
      },
      {
        title: 'Método de análisis',
        content:
          '<p>Enzimoinmunoensayo (ELISA) de microplaca en fase sólida con anticuerpo policlonal. Los pocillos de la microplaca de titulación están recubiertos con anticuerpo policlonal inmovilizado que enlaza la adhesina de E. histolytica. El conjugado es un anticuerpo monoclonal conjugado con peroxidasa, específico para la adhesina de E. histolytica. En el ensayo con suero, una alicuota de la muestra sin diluir se añade al pocillo. En el ensayo con pus de absceso, la muestra se agita en vórtex, se centrifuga y una alicuota sin diluir se añade al pocillo. Si la adhesina está presente en la muestra durante la fase de incubación ésta se adhiere al conjugado y a los anticuerpos policlonales inmovilizados. Cualquier material no adherido es eliminado durante los pasos de lavado. Con la adición del substrato, se desarrolla color debido a la presencia de complejos enzima-anticuerpo-antígeno que se forman en presencia de la adhesina. La intensidad de la reacción de color se determina leyendo su absorbancia en espectrofotómetro a 450/620 nm. La absorbancia se expresa como positiva o negativa según el valor límite pre-establecido (cut off).</p>',
      },
      { title: 'Rango de resultados', content: '<p>Positivo o negativo</p>' },
      {
        title: 'Rango normal',
        content: '<<p>Negativo, no hay antígeno de <em>E. histolytica</em></p>',
      },
      {
        title: 'Tiempo de entrega de resultados',
        content: '<p>6 – 12 horas desde recibida la muestra</p>',
      },
      {
        title: 'Interpretación de resultados',
        content:
          '<p>Esta prueba en formato ELISA detecta específicamente el antígeno de Entamoeba histolytica Gal/GalNAc lectin que puede estar presente en el contenido aspirado de un absceso o circulando en sangre. La especificidad de esta prueba es de 100% (Haque R et al. J Clin Microbiol 2000;38:3235-9). Un resultado POSITIVO con esta prueba, por tanto, confirma el diagnóstico de absceso hepático amebiano. Si el resultado se informa NEGATIVO es probable que no haya realmente absceso hepático amebiano. Esta prueba tiene una sensibilidad de 96% siempre y cuando la muestra haya sido tomada antes de la administración de metronidazol; en pacientes que han recibido metronidazol hasta dos semanas antes de la obtención de la muestra la sensibilidad de la prueba decae a 15% (Haque R et al. J Clin Microbiol 2000;38:3235-9). Esta prueba es específica para E. histolytica, un resultado POSITIVO ó NEGATIVO con esta prueba no excluye la presencia de otros agentes infecciosos. Esta información es sólo para ser tomada en cuenta. El médico es el más indicado para decidir lo que se deba hacer en base a los síntomas, el cuadro clínico y el resultado de esta prueba.</p>',
      },
      {
        title: 'Limitaciones y recomendaciones',
        content:
          '<ol><li>Mantener la muestra refrigerada desde su obtención hasta su llegada al laboratorio; el antígeno de este parásito puede deteriorarse en muestras expuestas a temperaturas elevadas durante el transporte al laboratorio;</li><li>El almacenamiento prolongado de la muestra en congelación (-20°C) preserva la integridad del antígeno.</li></ol>',
      },
      {
        title: 'Horario de recepción',
        content:
          '<p>Lunes a Viernes de 7:00&nbsp;AM a 8:30 PM<br>Sábados de 7:00&nbsp;AM a 6:30 PM</p>',
      },
      {
        title: 'Referencias',
        content:
          '<ol><li>Haque R et al. Amebiasis. N Eng J Med 2003;348:1565-73 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/12700377">PubMed 12700377</a></li><li>Jackson TF et al. Serological differentiation between past and present infection in hepatic amoebiasis. Trans R Soc Trop Med Hyg. 1984;78:342–5 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/6087510">PubMed 6087510</a></li><li>Healy GR. Immunologic tools in the diagnosis of amebiasis: epidemiology in the United States. Rev Infect Dis 1986;8:239-45 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/2871620">PubMed 2871620</a></li><li>Haque R et al. Diagnosis of amebic liver abscess and intestinal infection with the TechLab Entamoeba histolytica II antigen detection and antibody tests. J Clin Microbiol 2000;38:3235-9 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/10970364">PubMed 10970364</a></li></ol>',
      },
      { title: 'Última Revisión', content: '<p>Enero 2014</p>' },
    ],
  },
  {
    code: 'PA013',
    name: 'Ameba histolytica ANTIGENO FECAL (ELISA)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Abdomen Hepatico',
      'Colitis Infecciosa Aguda',
      'Diarrea Persistente y Crónica',
      'Hepato-esplenomegalia',
      'Parasitosis Intestinal : Protozoarios',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'Prolapso Rectal',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/ameba.histolytica.antigeno.fecal.elisa.pdf',
  },
  {
    code: 'IN001',
    name: 'Anti transglutaminasa tisular nuevos epitopes IgA/IgG (ELISA)',
    seccion: ['INMUNOLOGIA'],
    enfermedad: [
      'Enfermedad Celiaca',
      'Falla de Medro (pobre ganancia de peso)',
      'Flatulencia y Distensión Abdominal',
      'Lesiones Cutaneas Asociadas a Enfermedades Gastrointestinales',
      'MALABSORCION DE CARBOHIDRATOS',
      'MALABSORCION DE GRASAS',
      'PERDIDA DE PESO INEXPLICABLE',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
  },
  {
    code: 'IN002',
    name: 'Anti transglutaminasa tisular IgA (ELISA)',
  },
  {
    code: 'IN004',
    name: 'ASCA IgA+IgG Combi - ELISA (Enfermedad de Crohn)',
    seccion: ['INMUNOLOGIA'],
    enfermedad: [
      'Diarrea Persistente y Crónica',
      'Enfermedad de Crohn',
      'Enfermedad Intestinal Inflamatoria',
      'Falla de Medro (pobre ganancia de peso)',
      'Flatulencia y Distensión Abdominal',
      'PERDIDA DE PESO INEXPLICABLE',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/br-in004_asca_iga%20igg_combi_enfermedad_de_crohn_(elisa)_(oct_2011)_imp.pdf',
  },
  {
    code: 'AP001',
    name: 'Biopsia',
    seccion: ['ANATOMIA PATOLOGICA'],
  },
  {
    code: 'CF009',
    name: 'Calprotectina fecal',
    seccion: ['CITOQUIMICA FECAL'],
    enfermedad: [
      'Colitis Ulcerativa',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Enfermedad de Crohn',
      'Enfermedad Intestinal Inflamatoria',
      'PERDIDA DE PESO INEXPLICABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/br.cf009.calprotectina.fecal.noviembre.2015.pdf',
  },
  {
    code: 'MB003',
    name: 'Campylobacter ANTIGENO FECAL (ELISA)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Abdomen Agudo',
      'Colitis Infecciosa Aguda',
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Enteritis Infecciosa Aguda',
      'Fiebre sin Causa Aparente',
      'INFECCION GASTROINTESTINAL INTRAHOSPITALARIA',
      'INFECCIONES CRONICAS DEL INTESTINO DELGADO',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'Prolapso Rectal',
      'SINDROME HEMOLITICO UREMICO',
    ],
  },
  {
    code: 'OT001',
    name: 'Cloro en sudor (iontoforesis con pilocarpina)',
    seccion: ['PANCREAS'],
    enfermedad: [
      'Falla de Medro (pobre ganancia de peso)',
      'Fibrosis Quistica',
    ],
  },
  {
    code: 'MB004',
    name: 'Clostridium difficile toxina A y B (ELISA)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Colitis Infecciosa Aguda',
      'Colitis Pseudomembranosa',
      'Enteritis Infecciosa Aguda',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/clostridium.difficile.toxina.a.b.elisa.pdf',
  },
  {
    code: 'PA006',
    name: 'Coccidias (TINCION DE KINYOUN)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Diarrea Persistente y Crónica',
      'INFECCIONES CRONICAS DEL INTESTINO DELGADO',
      'Parasitosis Intestinal : Protozoarios',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/coccidias.tincion.de.kinyoun.pdf',
  },
  {
    code: 'CF001',
    name: 'COPROLOGICO FUNCIONALCOMPLETO',
    seccion: ['CITOQUIMICA FECAL', 'MICROBIOLOGIA'],
  },
  {
    code: 'MB001',
    name: 'Cultivo de heces',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Abdomen Agudo',
      'Colitis Infecciosa Aguda',
      'Colitis Pseudomembranosa',
      'Colitis Ulcerativa',
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Diarrea Persistente y Crónica',
      'Enfermedad Celiaca',
      'Enfermedad de Crohn',
      'Enfermedad Intestinal Inflamatoria',
      'Enteritis Infecciosa Aguda',
      'Falla de Medro (pobre ganancia de peso)',
      'Fiebre sin Causa Aparente',
      'INFECCION GASTROINTESTINAL INTRAHOSPITALARIA',
      'INFECCIONES CRONICAS DEL INTESTINO DELGADO',
      'NAUSEA y VOMITOS',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'Prolapso Rectal',
      'Sangrado Gastrointestinal (Visible u Oculto)',
      'SINDROME DE INTESTINO IRRITABLE',
      'SINDROME HEMOLITICO UREMICO',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/cultivo.heces.pdf',
  },
  {
    code: 'OT003',
    name: 'Cultivo de orina',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'OT007',
    name: 'CULTIVO DE SECRECION DE OIDO',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'OT008',
    name: 'CULTIVO DE SECRECION FARINGEA',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'OT002',
    name: 'CULTIVO DE SECRECION VAGINAL',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'AL003',
    name: 'Despistaje de alergias tipo IgE',
    seccion: ['ALERGIA'],
    enfermedad: [
      'Alergia Alimentaria',
      'Falla de Medro (pobre ganancia de peso)',
    ],
  },
  {
    code: 'AL004',
    name: 'EDN (Neurotoxina Derivada de Eosinofilos) fecal',
    seccion: ['ALERGIA'],
  },
  {
    code: 'CF011',
    name: 'Elastasa 1 (fecal)',
    seccion: [
      'CITOQUIMICA FECAL',
      'DIGESTION / ABSORCION INTESTINAL',
      'PANCREAS',
    ],
    enfermedad: [
      'Diarrea Persistente y Crónica',
      'Falla de Medro (pobre ganancia de peso)',
      'Fibrosis Quistica',
      'Ictericia',
      'MALABSORCION DE GRASAS',
      'PERDIDA DE PESO INEXPLICABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/br-cf011_elasta_1_fecal_(elisa)_(jun_2011)_imp.pdf',
  },
  {
    code: 'CF007',
    name: 'EOSINOFILOS EN HECES',
    seccion: ['CITOQUIMICA FECAL'],
  },
  {
    code: 'CF005',
    name: 'ESTEATOCRITO ACIDO',
    seccion: [
      'CITOQUIMICA FECAL',
      'DIGESTION / ABSORCION INTESTINAL',
      'PANCREAS',
    ],
    enfermedad: [
      'Enfermedad Celiaca',
      'Falla de Medro (pobre ganancia de peso)',
      'Fibrosis Quistica',
      'Flatulencia y Distensión Abdominal',
      'Ictericia',
      'ICTERICIA EN EL RECIEN NACIDO',
      'Intestino Delgado Contaminado',
      'MALABSORCION DE GRASAS',
      'PERDIDA DE PESO INEXPLICABLE',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'SINDROME DE INTESTINO CORTO',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/esteatocrito.acido.pdf',
  },
  {
    code: 'OT006',
    name: 'Examen completo de orina',
    seccion: ['OTROS'],
  },
  {
    code: 'PA007',
    name: 'Fasciolasis (METODO DE LUMBRERAS)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Dolor Abdominal',
      'Hepato-esplenomegalia',
      'Ictericia',
      'Transaminasemia',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/fasciolasis.metodo.de.lumbreras.pdf',
  },
  {
    code: 'AE009',
    name: 'Fructosa prueba de tolerancia',
    seccion: [
      'DIGESTION / ABSORCION INTESTINAL',
      'HIDROGENO/METANO EN ALIENTO',
    ],
    enfermedad: [
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Flatulencia y Distensión Abdominal',
      'Intestino Delgado Contaminado',
      'MALABSORCION DE CARBOHIDRATOS',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/prueba.de.tolerancia.fructosa..2019.pdf',
  },
  {
    code: 'OT005',
    name: 'Gap osmolar fecal',
    seccion: ['CITOQUIMICA FECAL'],
  },
  {
    code: 'PA014',
    name: 'Giardia ANTIGENO FECAL (ELISA)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Diarrea del Viajero',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Falla de Medro (pobre ganancia de peso)',
      'Flatulencia y Distensión Abdominal',
      'Parasitosis Intestinal : Protozoarios',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/giardia.antigeno.fecal.elisa.pdf',
  },
  {
    code: 'CF004',
    name: 'Grasa fecal (SUDAN III)',
    seccion: [
      'CITOQUIMICA FECAL',
      'DIGESTION / ABSORCION INTESTINAL',
      'PANCREAS',
    ],
    enfermedad: [
      'Diarrea Persistente y Crónica',
      'Enfermedad Celiaca',
      'Falla de Medro (pobre ganancia de peso)',
      'Fibrosis Quistica',
      'Ictericia',
      'ICTERICIA EN EL RECIEN NACIDO',
      'Intestino Delgado Contaminado',
      'MALABSORCION DE GRASAS',
      'PERDIDA DE PESO INEXPLICABLE',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'SINDROME DE INTESTINO CORTO',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/giardia.antigeno.fecal.elisa.pdf',
  },
  {
    code: 'AE002',
    name: 'Helicobacter pylori - test de urea en aliento (carbono 13)',
    seccion: ['MICROBIOLOGIA', 'CARBONO 13 EN ALIENTO'],
    enfermedad: [
      'Disfagia',
      'Dolor Abdominal',
      'Dolor Toracico no Cardiaco',
      'Gastritis Por Helicobacter Pylori',
    ],
  },
  {
    code: 'MB006',
    name: 'Helicobacter pylori ANTIGENO FECAL',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Disfagia',
      'Dolor Abdominal',
      'Dolor Toracico no Cardiaco',
      'Gastritis Por Helicobacter Pylori',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/br.mb006.helicobacter.antigeno.fecal.diciembre.2015.pdf',
  },
  {
    code: 'MB019',
    name: 'Influenza A/B PRUEBA RAPIDA',
    seccion: ['MICROBIOLOGIA'],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/br-mb019_influenza_a-b_prueba_rapida_-_septiembre_2012.pdf',
  },
  {
    code: 'AL001',
    name: 'Inmunoglobulina E total en suero',
    seccion: ['ALERGIA'],
    enfermedad: [
      'Alergia Alimentaria',
      'Dolor Abdominal',
      'Falla de Medro (pobre ganancia de peso)',
    ],
  },
  {
    code: 'AE003',
    name: 'Intestino delgado contaminado (glucosa)',
    seccion: ['HIDROGENO/METANO EN ALIENTO'],
  },
  {
    code: 'AE007',
    name: 'Intestino delgado contaminado (lactulosa)',
    seccion: ['HIDROGENO/METANO EN ALIENTO'],
    enfermedad: [
      'Constipación',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Enfermedad Celiaca',
      'Enfermedad de Crohn',
      'Enfermedad Intestinal Inflamatoria',
      'Falla de Medro (pobre ganancia de peso)',
      'Fibrosis Quistica',
      'Flatulencia y Distensión Abdominal',
      'Ileostomia y Pouch Ileal',
      'Intestino Delgado Contaminado',
      'Intolerancia a Lactosa',
      'MALABSORCION DE CARBOHIDRATOS',
      'MALABSORCION DE GRASAS',
      'PERDIDA DE PESO INEXPLICABLE',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'SINDROME DE INTESTINO CORTO',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/intestino.delgado.contaminado.lactulosa.2019.pdf',
  },
  {
    code: 'AE001',
    name: 'Lactosa prueba de tolerancia',
    seccion: [
      'HIDROGENO/METANO EN ALIENTO',
      'DIGESTION / ABSORCION INTESTINAL',
    ],
    enfermedad: [
      'Constipación',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Flatulencia y Distensión Abdominal',
      'Intolerancia a Lactosa',
      'MALABSORCION DE CARBOHIDRATOS',
      'SINDROME DE INTESTINO CORTO',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/prueba.de.tolerancia.lactosa.2019.pdf',
  },
  {
    code: 'AP005',
    name: 'LAMINA O PIEZA EN CONSULTA (SEGUNDA OPINION)',
    seccion: ['ANATOMIA PATOLOGICA'],
  },
  {
    code: 'MB005',
    name: 'Micobacterias en heces (BAAR)',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'MB012',
    name: 'Norovirus ANTIGENO FECAL (ELISA)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Enteritis Infecciosa Aguda',
      'INFECCION GASTROINTESTINAL INTRAHOSPITALARIA',
      'NAUSEA y VOMITOS',
    ],
    description: [
      {
        title: 'Descripción',
        content:
          '<p>En este examen se obtiene la curva de concentración versus tiempo de hidrógeno (H2) y metano (CH4) en el aire alveolar, después de ingerir lactosa, tras un periodo de ayuno. El examen dura 3 horas, en promedio. Durante este tiempo se colecta a intervalos regulares el aire espirado (aliento) y se miden los niveles de H2, CH4 y dióxido de carbono (CO2) con un instrumento que cuenta con sensores de alta precisión para estos tres gases, considerado el gold-standard en pruebas de aliento a nivel mundial. Según los estándares internacionales, para que la prueba sea válida se deben medir simultáneamente H2 y CH4 en el aire alveolar, que es la porción del aire espirado (aliento) que proviene del pulmón, sin tomar en cuenta el aire del llamado “espacio muerto” o aire de las vías aéreas. Para asegurar que se colecta realmente aire alveolar, GastroLab utiliza un sistema de doble compartimiento que colecta por separado el aire del espacio muerto y el aire alveolar. La concentración de CO2 que el instrumento mide en la muestra, simultáneamente, se utiliza para corregir cualquier dilución del aire alveolar con el aire del espacio muerto o el aire ambiental que pudiera haber ocurrido durante la toma de las muestras. Al medir CH4, además de H2, se evita el resultado falso-negativo que ocurre en pacientes que no producen hidrógeno pero sí metano.</p>',
      },
      {
        title: 'Utilidad Clínica',
        content:
          '<p>Este examen es para el diagnóstico de malabsorción de lactosa. Está indicado en la evaluación de:</p><ul><li>Sospecha de intolerancia a lactosa</li><li>Dolor abdominal recurrente, distensión del abdomen, meteorismo (acumulación de gas en el intestino) y flatulencia</li><li>Diarrea crónica o recurrente</li><li>Pacientes con esteatorrea (exceso de grasa en las heces), como parte de la evaluación de un posible síndrome de malabsorción</li><li>Enfermedad celiaca y otras condiciones como enfermedad de Crohn&nbsp;que causan lesiones en la mucosa intestinal y malabsorción de carbohidratos</li></ul>',
      },
      {
        title: 'Información Clínica',
        content:
          '<p>La leche se consume ampliamente en su forma natural y en una variedad de productos manufacturados y procesados. La intolerancia a la lactosa es una condición común aunque frecuentemente mal diagnosticada o confundida con otras enfermedades de síntomas similares. La lactosa se desdobla en el intestino en dos azúcares absorbibles, glucosa y galactosa. Este desdoblamiento lo hace la lactasa, una enzima genéticamente regulada que se expresa en la capa más externa del intestino delgado. Normalmente, la actividad de lactasa es máxima en el periodo neonatal y la infancia cuando la leche es esencial para la nutrición. Posteriormente, la actividad de la lactasa declina en la mayoría de personas dando lugar al síndrome de intolerancia a la lactosa. Las personas intolerantes a lactosa suelen presentar dolor abdominal, distensión del abdomen, flatulencia y diarrea cuando ingieren leche y otros productos lácteos o que contienen leche. Sin embargo, no todas las personas con estos síntomas tienen realmente intolerancia a lactosa por lo que es mejor confirmar el diagnóstico con esta prueba. La malabsorción de lactosa, así como de otros carbohidratos, puede ocurrir en enfermedades que dañan la mucosa intestinal como Enfermedad celiaca y enfermedad de Crohn.</p>',
      },
      { title: 'Muestra', content: 'Aire espirado' },
      {
        title: 'Preparación previa a la prueba',
        content:
          '<ol><li>Estar en ayunas por al menos 8-12 horas antes del examen (en niños menores de 2 años el periodo de ayuno puede ser de 6 horas), durante este periodo sólo podrá tomar agua.</li><li>No ingerir leche o jugo de fruta el día previo a la prueba.</li><li>La última comida del día previo debe ser ligera.</li><li>Evitar el día previo cebollas, poro, ajos, col, coliflor, brócoli, caigua, menestras, encurtidos, manzanas, fresas, frutas secas y cereales.</li><li>Cepillarse la dentadura el día de la prueba.</li><li>No hacer ejercicios o fumar en la hora previa ni durante la prueba.</li></ol>',
      },
      {
        title: 'Contraindicaciones',
        content:
          '<ol><li>Diagnóstico conocido de hipoglicemia postprandial;</li><li>Administración de antibióticos en las 4 semanas previas;</li><li>Colonoscopía o radiografía de colon con bario en las 4 semanas previas.</li></ol>',
      },
      {
        title: 'Método de análisis',
        content:
          '<p>Detección de H<sub>2</sub>, CH<sub>4 </sub>y CO<sub>2</sub> mediante cromatografía de gas en aire espirado</p>',
      },
      { title: 'Rango de resultados', content: '<p>Positivo o negativo</p>' },
      {
        title: 'Rango normal',
        content:
          '<p>La concentración de H<sub>2</sub> y CH<sub>4</sub> en aliento se mantiene debajo de 5 ppm y 3 ppm, respectivamente, durante toda la prueba y el paciente no presenta molestias abdominales (distensión abdominal, dolor abdominal o diarrea).</p>',
      },
      {
        title: 'Tiempo de entrega de resultados',
        content: '<p>Seis horas después de terminada la prueba</p>',
      },
      {
        title: 'Interpretación de resultados',
        content:
          '<p>En circunstancias normales, después de un periodo de ayuno de varias horas, hay sólo una pequeña cantidad de hidrógeno o metano en el aliento. Si después de ingerir la solución de lactosa la concentración de hidrógeno o metano en aliento se eleva por encima de la cifra basal en 20 ppm (partes por millón) para hidrógeno o 10 ppm para metano, la prueba es POSITIVA e indica que hay malabsorción de lactosa. Una elevación temprana de hidrógeno o metano (entre los 30-60 minutos de iniciada la prueba) sugiere la posibilidad de intestino delgado contaminado. Esta información es sólo referencial. El médico es el más indicado para decidir lo que se deba hacer en base a los síntomas, el cuadro clínico y el resultado de esta prueba.</p>',
      },
      {
        title: 'Limitaciones y recomendaciones',
        content:
          '<ol><li>Es posible un resultado FALSO NEGATIVO con esta prueba cuando hay demora en el vaciamiento gástrico o por un pH excesivamente ácido en el colon.</li><li>Es relativamente frecuente que coexistan malabsorción de carbohidratos e intestino delgado contaminado. Se recomienda descartar intestino delgado contaminado con una prueba con glucosa o lactulosa antes de realizar la prueba de malabsorción.</li></ol>',
      },
      { title: 'Horario de atención', content: '<p>Previa cita</p>' },
      {
        title: 'Referencias',
        content:
          '<ol><li>Law D et al. Lactose intolerance and the role of the lactose breath test. Am J Gastroenterol 2010;105:1726-8&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/20686460">PubMed 20686460</a></li><li>Ghoshal UC et al. Partially responsive celiac disease resulting from small intestinal bacterial overgrowth and lactose intolerance. BMC Gastroenterol 2004;4:10&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/15154971">PubMed 15154971</a></li><li>Eadala P et al. Association of lactose sensitivity with inflammatory bowel disease--demonstrated by analysis of genetic polymorphism, breath gases and symptoms. Aliment Pharmacol Ther 2011;34:735-46&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/21815901">PubMed 21815901</a></li><li>Lomer MC et al. Review article: lactose intolerance in clinical practice--myths and realities. Aliment Pharmacol Ther 2008;27:93-103&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/17956597">PubMed 17956597</a></li><li>Troelsen JT. Adult-type hypolactasia and regulation of lactase expression. Biochim Biophys Acta 2005;1723:19–32&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/15777735">PubMed 15777735</a></li><li>Mattar R et al. Lactose intolerance: diagnosis, genetic, and clinical factors. Clin Exp Gastroenterol 2012;5:113-21&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/22826639">PubMed 22826639</a></li><li>Suarez FL et al. A comparison of symptoms after the consumption of milk or lactose-hydrolyzed milk by people with self-reported severe lactose intolerance. N Engl J Med 1995;333:1-4&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/7776987">PubMed 7776987</a></li><li>Strocchi A et al. Detection of malabsorption of low doses of carbohydrate: accuracy of various breath H2 criteria. Gastroenterology 1993;105:1404-10&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/8224644">PubMed 8224644</a></li><li>Perman JA et al. Role of pH in production of hydrogen from carbohydrates by colonic bacterial flora. J Clin Invest 1981;67:643-50&nbsp; <a target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/7193687">PubMed 7193687</a></li></ol>',
      },
      { title: 'Última Revisión', content: '<p>Mayo 2022</p>' },
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/norovirus.antigeno.fecal.elisa.pdf',
  },
  {
    code: 'PA005',
    name: 'Oxiuros (METODO DE GRAHAM)',
    seccion: ['PARASITOLOGIA'],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/br-pa005_oxiuros_metodo_de_graham_(oct_2011).pdf',
  },
  {
    code: 'MB030',
    name: 'Panel Gastrointestinal (PCR - FilmArray)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Colitis Infecciosa Aguda',
      'Colitis Pseudomembranosa',
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Enfermedades Infecciosas',
      'Enteritis Infecciosa Aguda',
      'INFECCION GASTROINTESTINAL INTRAHOSPITALARIA',
      'INFECCIONES CRONICAS DEL INTESTINO DELGADO',
      'Parasitosis Intestinal : Protozoarios',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/panel.gi.filmarray.2018.2.pdf',
  },
  {
    code: 'MB031',
    name: 'Panel Meningitis-Encefalitis (PCR - FilmArray)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: ['Enfermedades Infecciosas'],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/panel.me.filmarray.2018.pdf',
  },
  {
    code: 'PA004',
    name: 'PARASITOLOGICO COMPLETO (tres muestras)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Falla de Medro (pobre ganancia de peso)',
      'Flatulencia y Distensión Abdominal',
      'Parasitosis Intestinal : Helmintos',
      'Parasitosis Intestinal : Protozoarios',
      'PERDIDA DE PESO INEXPLICABLE',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/parasitologico.completo.tres.muestras.pdf',
  },
  {
    code: 'PA003',
    name: 'PARASITOLOGICO COMPLETO (una muestra)',
    seccion: ['PARASITOLOGIA'],
    enfermedad: [
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Falla de Medro (pobre ganancia de peso)',
      'Parasitosis Intestinal : Helmintos',
      'Parasitosis Intestinal : Protozoarios',
      'PERDIDA DE PESO INEXPLICABLE',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/parasitologico.completo.una.muestra.pdf',
  },
  {
    code: 'AE005',
    name: 'PRUEBA DE ABSORCION INTESTINAL (sorbitol)',
    seccion: [
      'HIDROGENO/METANO EN ALIENTO',
      'DIGESTION / ABSORCION INTESTINAL',
    ],
    enfermedad: [
      'Diarrea Persistente y Crónica',
      'Enfermedad Celiaca',
      'Fibrosis Quistica',
      'Flatulencia y Distensión Abdominal',
      'Intestino Delgado Contaminado',
      'Intolerancia a Lactosa',
      'MALABSORCION DE CARBOHIDRATOS',
      'MALABSORCION DE GRASAS',
      'PERDIDA DE PESO INEXPLICABLE',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
      'SINDROME DE INTESTINO CORTO',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
  },
  {
    code: 'CF006',
    name: 'REACCION INFLAMATORIA (MICROSCOPIA)',
    seccion: ['CITOQUIMICA FECAL'],
  },
  {
    code: 'MB008',
    name: 'Rotavirus ANTIGENO FECAL (ELISA)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Enteritis Infecciosa Aguda',
      'INFECCION GASTROINTESTINAL INTRAHOSPITALARIA',
      'NAUSEA y VOMITOS',
      'Problemas Gastrointestinales en Paciente Inmunocomprometido',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/rotavirus.antigeno.fecal.elisa.pdf',
  },
  {
    code: 'CF010',
    name: 'Sangre oculta en heces (INMUNOCROMATOGRAFIA)',
    seccion: ['CITOQUIMICA FECAL'],
  },
  {
    code: 'SE01A',
    name: 'Serie diarrea acuosa',
    seccion: [],
    tabs: [
      {
        code: 'MB003',
        label: 'Campylobacter ANTIGENO FECAL (ELISA)',
        seccion: 'MICROBIOLOGIA',
        content: [
          {
            title: 'Descripción',
            content:
              '<p>Detección cualitativa del Antígeno Específico de Campylobacter - AEC (antígeno de superficie compartido por C. jejuni, C. coli y -parcialmente- C. upsaliensis) mediante enzimoinmunoensayo de microplaca en fase sólida con anticuerpos policlonales en muestra de heces fresca, refrigerada, congelada o preservada en medio Cary-Blair.</p>',
          },
          {
            title: 'Utilidad Clínica',
            content:
              '<p>Este examen es para ser utilizado con muestras fecales de pacientes con diarrea para determinar específicamente la presencia de Campylobacter mediante enzimoinmunoensayo (ELISA). Es un método de diagnóstico rápido que ayuda a decidir el tratamiento mientras se procesa el cultivo.</p>',
          },
          {
            title: 'Información Clínica',
            content:
              '<p>Campylobacter es una de las causas más frecuente de diarrea por bacterias (Guerrant RL et al. Rev Infect Dis 1990;12:S41–50). Aves, perros y gatos son el reservorio de Campylobacter y uno se infecta al ingerir alimentos contaminados con productos de estos animales (Altekruse SF et al. Emerg Infect Dis 1999;5:28–35). Después de un periodo de incubación de 2 a 5 días la enfermedad empieza con diarrea, dolor abdominal y fiebre; la diarrea puede ser con moco y sangre o simplemente acuosa, clínicamente indistinguible de la causada por otras bacterias como Salmonella o Shigella. La diarrea se resuelve después de 7 a 10 días aunque el dolor abdominal puede persistir y las diarreas pueden recurrir (Skirrow MB et al. Campylobacter jejuni. In: Blaser MJ, Smith PD, Ravdin JI, Greenberg HB, Guerrant RL, eds. Infections of the Gastrointestinal Tract. Raven Press, Ltd., New York, 1995; 825-48). La infección por Campylobacter es generalmente autolimitada por lo cual podría no ser necesario terapia antibiótica; sin embargo, niños, ancianos y pacientes con inmunodeficiencias pueden desarrollar una enfermedad más grave y requerir tratamiento. El Síndrome de Guillain-Barré es una complicación infrecuente pero severa después de una infección por Campylobacter que no fue diagnosticada ni tratada (Nachamkin I et al. Clin Microbiol Rev 1998;11:555–67). El diagnóstico definitivo de infección por Campylobacter se hace identificando la bacteria en las heces siendo el cultivo el método principal de diagnóstico microbiológico. Este método requiere varios días, medios específicos y condiciones especiales de incubación. El diagnóstico mediante examen directo con tinción y microscopía es una alternativa pero su exactitud depende de la preservación de la morfología de la bacteria y de la experiencia del examinador (Wang H et al. Pathology 2004;36:343-4). El diagnóstico mediante ELISA para detectar el antígeno de la bacteria tiene una excelente especificidad permitiendo una rápida detección y tratamiento de pacientes positivos (Tolcin R et al. J Clin Microbiol 2000;38:3853-5).</p>',
          },
          {
            title: 'Muestra',
            content:
              '<p>Heces frescas, refrigeradas o congeladas, en recipiente apropiado.</p>',
          },
          {
            title: 'Recipiente',
            content:
              '<p>Frasco limpio, seco, de boca ancha y tapa hermética.</p>',
          },
          {
            title: 'Volumen',
            content:
              '<p>Mínimo 5 mL (5 g) – Mayor cantidad si conjuntamente se solicitan otros exámenes.</p>',
          },
          {
            title: 'Instrucciones para obtención y transporte de la muestra',
            content:
              '<p>Obtener la muestra en frasco limpio de boca ancha y tapa hermética. No mezclar la muestra con orina, cremas o talco. Colectar la mayor cantidad posible. En niños pequeños colocar el pañal al revés (por la parte no absorbente), cubrir la salida de la uretra con un trozo de algodón (para no contaminar la muestra con orina) y trasvasar la muestra al frasco. Muestras en pañal no son aceptables. Enviar la muestra al laboratorio inmediatamente después de su obtención en caja térmica con refrigerantes. Muestras de lugares fuera de Lima o que no pueden ser enviadas al laboratorio antes de 3 horas desde su obtención&nbsp;deben ser congeladas a -20°C hasta su envío. Muestras en un medio de preservación como Cary-Blair son aceptables hasta por 72 horas desde su obtención. No colectar la muestra en recipientes que contengan formol o compuestos similares, sueros animales, iones metálicos, agentes oxidantes o detergentes debido a posibles interferencias con la prueba.</p>',
          },
          {
            title: 'Método de análisis',
            content:
              '<p>Enzimoinmunoensayo (ELISA) de microplaca en fase sólida.</p>',
          },
          {
            title: 'Rango de resultados',
            content: '<p>Positivo o negativo</p>',
          },
          {
            title: 'Rango normal',
            content: '<p>Negativo, no hay antígeno de Campylobacter</p>',
          },
          {
            title: 'Tiempo de entrega de resultados',
            content: '<p>6 – 12 horas desde recibida la muestra</p>',
          },
          {
            title: 'Interpretación de resultados',
            content:
              '<p>Esta prueba en formato ELISA detecta mediante anticuerpos policlonales el Antígeno Específico de Campylobacter - AEC (antígeno de superficie compartido por C. jejuni, C. coli y -parcialmente- C. upsaliensis). La especificidad de esta prueba es de 99% comparada con diagnóstico por cultivo (Tolcin R et al. J Clin Microbiol 2000;38:3853-5). Un resultado POSITIVO con esta prueba, por tanto, indica firmemente la presencia de Campylobacter y que esta bacteria podría ser la causa de los síntomas del paciente. Si el resultado se informa NEGATIVO es probable que Campylobacter no esté realmente en el intestino. La sensibilidad de esta prueba comparada con cultivo es de 89% pero puede ser tan baja como 80% (Endzt HP et al. Eur J Clin Microbiol Infect Dis 2000;19:794–7) por lo que un resultado NEGATIVO con esta prueba debe ser confirmado por cultivo antes de considerar el diagnóstico como definitivamente NEGATIVO. Esta prueba es específica para antígeno de Campylobacter jejuni/coli, un resultado POSITIVO ó NEGATIVO con esta prueba no excluye la presencia de otros agentes enteropatógenos. Esta información es sólo para ser tomada en cuenta. El médico es el más indicado para decidir lo que se deba hacer en base a los síntomas, el cuadro clínico y el resultado de esta prueba.</p>',
          },
          {
            title: 'Limitaciones y recomendaciones',
            content:
              '<ol><li>Mantener la muestra refrigerada desde su obtención hasta su llegada al laboratorio; la sensibilidad de la prueba puede decaer en muestras expuestas a temperaturas elevadas;</li><li>Pueden obtenerse resultados falso-negativos si la prueba se hace cuando el paciente está tomando antibióticos; debe descontinuarse el tratamiento y obtener la muestra 72 horas después;</li><li>Si el resultado de la prueba es NEGATIVO y la sospecha de la infección es muy fuerte puede ser conveniente repetir la prueba en una nueva muestra.</li></ol>',
          },
          {
            title: 'Horario de recepción',
            content:
              '<p>Lunes a Viernes de 7:00&nbsp;AM a 8:30 PM<br>Sábados de 7:00&nbsp;AM a 6:30 PM</p>',
          },
          {
            title: 'Referencias',
            content:
              '<ol><li>Guerrant RL et al. Diarrhea in developed and developing countries: magnitude, special settings, and etiologies. Rev Infect Dis 1990;12:S41–50 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/2406855">PubMed 2406855</a></li><li>Altekruse SF et al. Campylobacter jejuni--an emerging foodborne pathogen. Emerg Infect Dis 1999;5:28–35 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/10081669">PubMed 10081669</a></li><li>Skirrow MB et al. Campylobacter jejuni. In: Blaser MJ, Smith PD, Ravdin JI, Greenberg HB, Guerrant RL, eds. Infections of the Gastrointestinal Tract. Raven Press, Ltd., New York, 1995; 825-48</li><li>Nachamkin I et al. Campylobacter species and Guillain-Barré syndrome. Clin Microbiol Rev 1998;11:555–67 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/9665983">PubMed 9665983</a></li><li>Wang H et al. Detection of Campylobacter species in faecal samples by direct Gram stain microscopy. Pathology 2004;36:343-4 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/15370134">PubMed 15370134</a></li><li>Tolcin R et al. Evaluation of the Alexon-trend ProSpecT Campylobacter microplate assay. J Clin Microbiol 2000;38:3853-5 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/11015419">PubMed 11015419</a></li><li>Endzt HP et al. Evaluation of a new commercial immunoassay for rapid detection of Campylobacter jejuni in stool samples. Eur J Clin Microbiol Infect Dis 2000;19:794–7 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/11117647">PubMed 11117647</a></li></ol>',
          },
          {
            title: 'Última Revisión',
            content: '<p>Enero 2014</p>',
          },
        ],
      },
      {
        code: 'CF001',
        label: 'COPROLOGICO FUNCIONALCOMPLETO',
        seccion: 'CITOQUIMICA FECAL, MICROBIOLOGIA',
      },
      {
        code: 'MB001',
        label: 'Cultivo de heces',
        seccion: 'MICROBIOLOGIA',
        document:
          'https://www.gastrolabperu.com/userfiles/cms/examen/documento/cultivo.heces.pdf',
        content: [
          {
            title: 'Descripción',
            content:
              '<p>Detección e identificación de bacterias intestinales patógenas mediante técnicas de cultivo en muestra de heces fresca, refrigerada ó preservada en medio Cary-Blair. Incluye Shigella, Campylobacter, Salmonella, Aeromonas, Yersinia, Plesiomona, Vibrios, Klebsiella oxytoca, Escherichia coli enteroinvasiva (EIEC) y Escherichia coli O157. Shigella y Salmonella se identifican hasta serogrupo. Escherichia coli O157 se identifica únicamente por serología. No se reporta Escherichia coli enteropatógena (EPEC) porque el método de identificación que se dispone actualmente (serología) no reconoce si la cepa aislada es realmente enteropatógena o no (Lluque A et al. Rev Gastroenterol Peru 2010;30:121-5). Se hace antibiograma por difusión en disco de cultivos positivos puros. El resultado se entrega en 3 - 4 días.</p>',
          },
          {
            title: 'Utilidad Clínica',
            content:
              '<p>Este examen es para ser utilizado con muestras fecales de pacientes con diarrea o disentería de presunto origen infeccioso para detectar específicamente la presencia de bacterias enteropatógenas mediante cultivo. El cultivo de heces es especialmente útil en pacientes con diarrea severa ó diarrea con sangre, diarrea asociada a fiebre alta (≥39°C), diarrea con marcador inflamatorio positivo y diarrea persistente. La probabilidad que el agente etiológico de la diarrea sea una bacteria y no un virus es mayor en estos casos (DeWitt TG et al. Pediatrics 1985;76:551-6), (DuPont HL. Aliment Pharmacol Ther 1994;8:3-13). El cultivo de heces también es útil en la evaluación inicial y diagnóstico diferencial de pacientes con diagnóstico presuntivo de Colitis Ulcerativa ó Enfermedad de Crohn (Murphy MS. Br Med J 2008;336:1010-5), (Beattie RM et al. Arch Dis Child 2006;91:426-32) y Colitis Alérgica (Ravelli A et al. Am J Gastroenterol 2008;103:2605-12). Dado que varias bacterias enteropatógenas se transmiten a través de alimentos, el cultivo de heces también es útil como medida sanitaria en la evaluación de personas que manipulan o preparan alimentos (Todd EC et al. J Food Prot 2008;71:2339-73).</p>',
          },
          {
            title: 'Información Clínica',
            content:
              '<p>La diarrea de origen infeccioso es una causa frecuente de consulta en todas las edades. Los posibles agentes etiológicos son numerosos y los síntomas similares. Una buena historia clínica de la secuencia e intensidad de los síntomas, tipo de diarrea (si es sólo acuosa o hay sangre), severidad y duración de la enfermedad, edad, viajes recientes, uso reciente de antibióticos y enfermedad similar en familiares y contactos puede ayudar al médico en el diagnóstico presuntivo del agente causal, la elección de los exámenes auxiliares y el tratamiento (DuPont HL. N Eng J Med 2009;361:1560-9). La identificación del agente causal mediante exámenes de laboratorio facilita sin duda la elección del tratamiento y evita el uso innecesario de antibióticos (Carpenter LR et al. J Infect Dis 2008;197:1709-12). La diarrea acuosa sin moco ni sangre suele ser de origen viral, especialmente si se acompaña de vómitos y poca o ninguna fiebre (Staat MA et al. Pediatr Infect Dis J 2002;21:221–7). Sin embargo, una infección por bacterias también puede presentarse en forma de diarreas acuosas y no necesariamente con fiebre (Qadri F et al. Clin Microbiol Rev 2005;18:465–83). La diarrea con moco y sangre es causada generalmente por bacterias como Campylobacter, Shigella y Salmonella y suele venir con fiebre (Mathan VI et al. Rev Infect Dis 1991;13:S311-3). Cualquiera sea la etiología de la diarrea el tratamiento principal está dirigido a evitar la deshidratación que es la complicación más temida de esta enfermedad.</p>',
          },
          {
            title: 'Muestra',
            content:
              '<p>Heces frescas en recipiente apropiado o en medio de transporte (Cary-Blair con rojo fenol).</p>',
          },
          {
            title: 'Recipiente',
            content:
              '<p>Frasco limpio, seco, de boca ancha y tapa hermética.</p>',
          },
          {
            title: 'Volumen',
            content:
              '<p>Mínimo 5 mL (5 g) – Mayor cantidad si conjuntamente se solicitan otros exámenes.</p>',
          },
          {
            title: 'Instrucciones para obtención y transporte de la muestra',
            content:
              '<p>Obtener la muestra en frasco limpio, seco, de boca ancha y tapa hermética. No mezclar la muestra con orina, cremas, talco o sustancias desinfectantes. En niños pequeños colocar el pañal al revés (por la parte no absorbente), cubrir la salida de la uretra con un trozo de algodón (para no contaminar la muestra con orina) y trasvasar la muestra al frasco. Muestras en pañal no son aceptables. Enviar la muestra al laboratorio inmediatamente después de su obtención en caja térmica con refrigerantes. Muestras de lugares fuera de Lima o que no pueden ser enviadas al laboratorio el mismo día deberán colocarse en medio de transporte no nutritivo (Cary-Blair con rojo fenol) y hacerlas llegar al laboratorio antes de 72 horas desde su obtención.No congelar la muestra. No colectar la muestra en recipientes que contengan formol o compuestos similares, sueros animales, iones metálicos, agentes oxidantes o detergentes debido a posibles interferencias con la prueba.</p>',
          },
          {
            title: 'Método de análisis',
            content:
              '<p>Cultivo en medios selectivos que inhiben la flora intestinal normal y favorecen el crecimiento de bacterias patógenas. Para enteropatógenos aerobios, la muestra se siembra en TCBS, Hektoen y MAC y se incuba a 35.5°C en aire ambiental. Para amplificar el aislamiento, otra parte de la muestra se inocula en Selenito, GN y APW, se incuba a 35.5°C por 6 a 12 horas y se subcultiva en SS, Hektoen y TCBS, respectivamente. Para aislamiento de Campylobacter la muestra se siembra en Agar Karmali y Agar Campylobacter con filtro y se incuba a 42°C en ambiente de microaerofilia. Para Escherichia coli O157 se siembra en SMAC a 35.5°C en aire ambiental. Los aislamientos sospechosos se identifican por perfil metabólico, morfología y serología. Se hace antibiograma por difusión en disco de cultivos positivos puros.</p>',
          },
          {
            title: 'Rango de resultados',
            content: '<p>Positivo o negativo</p>',
          },
          {
            title: 'Rango normal',
            content: '<p>No hay bacterias enteropatógenas.</p>',
          },
          {
            title: 'Tiempo de entrega de resultados',
            content:
              '<p>2-3 días, si el resultado final es POSITIVO. El antibiograma puede tomar un día más. 3-4 días, si el resultado final es NEGATIVO.</p>',
          },
          {
            title: 'Interpretación de resultados',
            content:
              '<p>Si el resultado se informa POSITIVO confirma que hay una infección intestinal con la bacteria que se reporta. Si el informe es POSITIVO para Salmonella debe tomarse en cuenta que algunas personas pueden ser sólo portadores sanos de esta bacteria. Si el resultado se informa NEGATIVO es posible que no haya realmente una infección bacteriana. Ante un resultado NEGATIVO pudiera ser necesario repetir el cultivo en otra muestra si los síntomas continúan y el paciente no está tomando ya un antibiótico. Esta prueba es específica para bacterias enteropatógenas, un resultado POSITIVO ó NEGATIVO con esta prueba no excluye la presencia de otros agentes enteropatógenos. Proporcionar el antibiograma no necesariamente implica que se deba usar un antibiótico en el tratamiento ni predice la eficacia clínica del antibiótico que se elija. Esta información es sólo para ser tomada en cuenta. El médico es el más indicado para decidir lo que se deba hacer en base a los síntomas, el cuadro clínico y el resultado de este examen.</p>',
          },
          {
            title: 'Limitaciones y recomendaciones',
            content:
              '<ol><li>La sensibilidad del cultivo depende del método de análisis pero decae considerablemente si el paciente está con antibióticos o los ha tomado recientemente (Chitkara YK. Am J Clin Pathol 2005;123:92-5);</li><li>PEl rendimiento del cultivo para aislar bacterias enteropatógenas disminuye cuanto más tiempo pasa la muestra en tránsito al laboratorio (> 3 horas desde su colección si no está en medio de transporte);</li><li>SEste examen no detecta la toxina Shiga de EHEC (solicitar MB014 Toxinas Shiga directo en heces – ELISA ó MB015 Toxinas Shiga con enriquecimiento – ELISA);</li><li>Los cultivos de heces son en general de poca utilidad para pacientes hospitalizados por más de 3 días (Bauer TM et al. JAMA 2001;285:313-9);</li><li>Este examen no detecta infección por C. difficile, la causa más común de diarrea en pacientes hospitalizados (solicitar MB004 Clostridium difficile toxina A y B – ELISA);</li><li>Si el resultado de la prueba es NEGATIVO y la sospecha de la infección es muy fuerte puede ser conveniente repetir la prueba en una nueva muestra. Un solo cultivo de heces no es suficiente para descartar una bacteria como causa de la diarrea. Es recomendable hacer 2 a 3 cultivos en muestras separadas para incrementar la probabilidad de aislar la bacteria patógena (Rohner P et al. J Clin Microbiol 1997;35:1427-32).</li></ol>',
          },
          {
            title: 'Horario de recepción',
            content:
              '<p>Lunes a Viernes de 7:00&nbsp;AM a 8:30 PM<br>Sábados de 7:00&nbsp;AM a 6:30 PM</p>',
          },
          {
            title: 'Referencias',
            content: `
                <ol>
                  <li>
                    Lluque A et al. Comparación entre el diagnóstico serológico y el diagnóstico por reacción en cadena de la polimerasa (PCR) para Escherichia coli enteropatogénica (EPEC). Rev Gastroenterol Peru 2010;30:121-5.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/20644603">PubMed 20644603</a>
                  </li>
                  <li>
                    DeWitt TG et al. Clinical predictors of acute bacterial diarrhea in young children. Pediatrics 1985;76:551-6.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/4047797">PubMed 4047797</a>
                  </li>
                  <li>
                    DuPont HL. Review article: Infectious diarrhea. Aliment Pharmacol Ther 1994;8:3-13.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/8186344">PubMed 8186344</a>
                  </li>
                  <li>
                    Murphy MS. Management of bloody diarrhea in children in primary care. Br Med J 2008;336:1010-5.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/18456632">PubMed 18456632</a>
                  </li>
                  <li>
                    Beattie RM et al. Inflammatory bowel disease. Arch Dis Child 2006;91:426-32.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/16632672">PubMed 16632672</a>
                  </li>
                  <li>
                    Ravelli A et al. Dietary protein-induced proctocolitis in childhood. Am J Gastroenterol 2008;103:2605-12.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/18684195">PubMed 18684195</a>
                  </li>
                  <li>
                    Todd EC et al. Outbreaks where food workers have been implicated in the spread of foodborne disease. Part 4. Infective doses and pathogen carriage. J Food Prot 2008;71:2339-73.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/19244919">PubMed 19244919</a>
                  </li>
                  <li>
                    DuPont HL. Bacterial diarrhea. N Eng J Med 2009;361:1560-9.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/19828533">PubMed 19828533</a>
                  </li>
                  <li>
                    Carpenter LR et al. Stool cultures and antimicrobial prescriptions related to infectious diarrhea. J Infect Dis 2008;197:1709-12.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/18426365">PubMed 18426365</a>
                  </li>
                  <li>
                    Staat MA et al. Clinical presentations of rotavirus infection among hospitalized children. Pediatr Infect Dis J 2002;21:221–7.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/12005086">PubMed 12005086</a>
                  </li>
                  <li>
                    Qadri F et al. Enterotoxigenic Escherichia coli in Developing Countries: Epidemiology, Microbiology, Clinical Features, Treatment, and Prevention. Clin Microbiol Rev 2005;18:465–83.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/16020685">PubMed 16020685</a>
                  </li>
                  <li>
                    Mathan VI et al. Intestinal manifestations of invasive diarrheas and their diagnosis. Rev Infect Dis 1991;13:S311-3.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/2047655">PubMed 2047655</a>
                  </li>
                  <li>
                    Chitkara YK. Limited value of routine stool cultures in patients receiving antibiotic therapy. Am J Clin Pathol 2005;123:92-5.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/15762283">PubMed 15762283</a>
                  </li>
                  <li>
                    Bauer TM et al. Derivation and validation of guidelines for stool cultures for enteropathogenic bacteria other than Clostridium difficile in hospitalized adults. JAMA 2001;285:313-9.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/11176841">PubMed 11176841</a>
                  </li>
                  <li>
                    Rohner P et al. Etiologic agents of infectious diarrhea: implications for request for microbial culture. J Clin Microbiol 1997;35:1427-32.
                    <a href="http://www.ncbi.nlm.nih.gov/pubmed/9163457">PubMed 9163457</a>
                  </li>
                </ol>
                `,
          },
          {
            title: 'Última Revisión',
            content: '<p>Octubre 2010</p>',
          },
        ],
      },
      {
        code: 'MB001',
        label: 'Norovirus ANTIGENO FECAL (ELISA)',
        seccion: ['MICROBIOLOGIA'],
        document:
          'https://www.gastrolabperu.com/userfiles/cms/examen/documento/norovirus.antigeno.fecal.elisa.pdf',
        content: [
          {
            title: 'Descripción',
            content:
              '<p>Este examen es para ser utilizado en muestras fecales de pacientes con vómitos y diarrea para determinar específicamente la presencia de norovirus mediante enzimoinmunoensayo (ELISA). Este es un método de diagnóstico más rápido, técnicamente más simple y bastante menos costoso que el de reacción en cadena de polimerasa de trascripción inversa (RT-PCR). El diagnóstico por RT-PCR, sin embargo, es más sensible (menos falso negativos) que por ELISA. La prueba es clínicamente útil en pacientes con gastroenteritis aguda, sea éste un caso individual o parte de un brote epidémico, en los que se sospecha que la causa podría ser un virus enteropatógeno.</p>',
          },
          {
            title: 'Utilidad Clínica',
            content:
              '<p>Este examen es para ser utilizado en muestras fecales de pacientes con vómitos y diarrea para determinar específicamente la presencia de norovirus mediante enzimoinmunoensayo (ELISA). Este es un método de diagnóstico más rápido, técnicamente más simple y bastante menos costoso que el de reacción en cadena de polimerasa de trascripción inversa (RT-PCR). El diagnóstico por RT-PCR, sin embargo, es más sensible (menos falso negativos) que por ELISA. La prueba es clínicamente útil en pacientes con gastroenteritis aguda, sea éste un caso individual o parte de un brote epidémico, en los que se sospecha que la causa podría ser un virus enteropatógeno.</p>',
          },
          {
            title: 'Información Clínica',
            content:
              '<p>Aunque inicialmente se consideró que ocurría sólo en brotes epidémicos, ahora se reconoce que norovirus ocurre también en casos individuales y es realmente la causa más frecuente de gastroenteritis endémica en adultos y la segunda más frecuente en niños, después de rotavirus (Junquera CG et al. Pediatr Infect Dis J 2009;28:604-7). Norovirus es considerado también uno de los agentes causales más frecuente de diarrea del viajero (Ajami N et al. Clin Infect Dis 2010;51:123-30). La enfermedad comienza típicamente después de un periodo de incubación de 12 a 48 horas con vómitos, fiebre y dolor abdominal, seguido poco después por diarreas acuosas que pueden durar hasta 5 días (Rockx B et al. Clin Infect Dis 2002;35:246-53). En recién nacidos la infección por norovirus puede ser muy severa y presentarse con enteritis hemorrágica y desarrollo de enterocolitis necrosante (Stuart RL et al. Pediatr Infect Dis J 2010;29:644-7). Se han descrito numerosos brotes epidémicos por norovirus involucrando personas de toda edad en hogares de ancianos, cunas infantiles, hospitales, cruceros vacacionales, restaurantes y eventos sociales que incluyen comida contratada (Glass RI et al. N Engl J Med 2009;361:1776-85). Norovirus comprende actualmente cinco genogrupos de los cuales sólo los genogrupos I y II (que tienen 15 y 18 genotipos respectivamente) son patógenos para el ser humano; a pesar de esta diversidad, la mayoría de casos y brotes reportados en los últimos años se deben al genotipo 4 del genogrupo II (Widdowson MA et al. J Infect Dis 2004;190:27–36). El diagnóstico de esta infección tiene el propósito de evitar el uso innecesario de antibióticos en un caso individual o identificar la causa en un brote epidémico y tomar oportunamente las medidas para controlarlo.</p>',
          },
          {
            title: 'Muestra',
            content:
              '<p>Heces frescas, refrigeradas o congeladas, en recipiente apropiado</p>',
          },
          {
            title: 'Recipiente',
            content:
              '<p>Frasco limpio, seco, de boca ancha y tapa hermética</p>',
          },
          {
            title: 'Volumen',
            content:
              '<p>Mínimo 5 mL (5 g) – Mayor cantidad si conjuntamente se solicitan otros exámenes</p>',
          },
          {
            title: 'Instrucciones para obtención y transporte de la muestra',
            content:
              '<p>Obtener la muestra en frasco limpio de boca ancha y tapa hermética. No mezclar la muestra con orina, cremas o talco. Colectar la mayor cantidad posible. En niños pequeños colocar el pañal al revés (por la parte no absorbente), cubrir la salida de la uretra con un trozo de algodón (para no contaminar la muestra con orina) y trasvasar la muestra al frasco. Muestras en pañal no son aceptables. Enviar la muestra al laboratorio inmediatamente después de su obtención en caja térmica con refrigerantes. Muestras de lugares fuera de Lima o que no pueden ser enviadas al laboratorio antes de 3 horas desde su obtención deben ser congeladas a -20°C hasta su envío. Muestras en un medio de preservación como Cary-Blair son aceptables para esta prueba. No colectar la muestra en recipientes que contengan formol o compuestos similares, sueros animales, iones metálicos, agentes oxidantes o detergentes debido a posibles interferencias con la prueba.</p>',
          },
          {
            title: 'Método de análisis',
            content:
              '<p>Enzimoinmunoensayo (ELISA) de microplaca en fase sólida</p>',
          },
          {
            title: 'Rango de resultados',
            content: '<p>Positivo o negativo</p>',
          },
          {
            title: 'Rango normal',
            content: '<p>No hay antígeno de norovirus</p>',
          },
          {
            title: 'Tiempo de entrega de resultados',
            content: '<p>6 - 12 horas desde recibida la muestra</p>',
          },
          {
            title: 'Interpretación de resultados',
            content:
              '<p>Esta prueba en formato ELISA detecta, mediante anticuerpos monoclonales, antígenos de la cápside de prácticamente todos los genotipos conocidos de norovirus de los genogrupos I y II que pudieran estar presente en la materia fecal. La especificidad de esta prueba es de 99.2% comparada con diagnóstico por reacción en cadena de polimerasa de trascripción inversa (RT-PCR) (Gray JJ et al. Clin Vaccine Immunol 2007;14:1349-55). Un resultado POSITIVO con esta prueba, por tanto, indica firmemente la presencia de norovirus y que este podría ser la causa de los síntomas del paciente. Si el resultado se informa NEGATIVO es probable que norovirus no esté realmente en el intestino. La sensibilidad de esta prueba comparada con RT-PCR es de 76.3% según una evaluación hecha en Japón (Okitsu-Negishi S et al. J Clin Microbiol 2006;44:3784-6) y 69.5% según otra evaluación en Europa (Gray JJ et al. Clin Vaccine Immunol 2007;14:1349-55) por lo que un resultado NEGATIVO con esta prueba no excluye totalmente el diagnóstico. Un resultado falso NEGATIVO puede deberse a una carga viral por debajo del nivel de detección del ELISA al momento de colectar la muestra o a un deterioro del antígeno viral durante su trasporte al laboratorio. Esta prueba es específica para norovirus, un resultado POSITIVO ó NEGATIVO con esta prueba no excluye la presencia de otros agentes enteropatógenos. Esta información es sólo para ser tomada en cuenta. El médico es el más indicado para decidir lo que se deba hacer en base a los síntomas, el cuadro clínico y el resultado de esta prueba.</p>',
          },
          {
            title: 'Limitaciones y recomendaciones',
            content:
              '<ol><li>Mantener la muestra refrigerada desde su obtención hasta la llegada al laboratorio; el antígeno del norovirus puede deteriorarse en muestras expuestas a temperaturas elevadas durante el transporte al laboratorio;</li><li>Si el resultado de la prueba es NEGATIVO y la sospecha de la infección es muy fuerte puede ser conveniente repetir la prueba en una nueva muestra.</li></ol>',
          },
          {
            title: 'Horario de recepción',
            content:
              '<p>Lunes a Viernes de 7:00&nbsp;AM a 8:30 PM<br>Sábados de 7:00&nbsp;AM a 6:30 PM</p>',
          },
          {
            title: 'Referencias',
            content: `
                <ol><li>Junquera CG et al. Prevalence and clinical characteristics of norovirus gastroenteritis among hospitalized children in Spain. Pediatr Infect Dis J 2009;28:604-7 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/19561424">PubMed 19561424</a></li><li>Ajami N et al. Characterization of norovirus-associated traveler's diarrhea. Clin Infect Dis 2010;51:123-30 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/20540620">PubMed &nbsp;20540620</a></li><li>Rockx B et al. Natural history of human calicivirus infection: a prospective cohort study. Clin Infect Dis 2002;35:246-53 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/12115089">PubMed 12115089</a></li><li>Stuart RL et al. An outbreak of necrotizing enterocolitis associated with norovirus genotype GII.3. Pediatr Infect Dis J 2010;29:644-7 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/20589982">PubMed 20589982</a></li><li>Glass RI et al. Norovirus gastroenteritis. N Engl J Med 2009;361:1776-85 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/19864676">PubMed 19864676</a></li><li>Widdowson MA et al. Outbreaks of acute gastroenteritis on cruise ships and on land: identification of a predominant circulating strain of norovirus--United States, 2002. J Infect Dis 2004;190:27–36 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/15195240">PubMed 15195240</a></li><li>Gray JJ et al. European multicenter evaluation of commercial enzyme immunoassays for detecting norovirus antigen in fecal samples. Clin Vaccine Immunol 2007;14:1349-55 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/17715333">PubMed 17715333</a></li><li>Okitsu-Negishi S et al. Detection of norovirus antigens from recombinant virus-like particles and stool samples by a commercial norovirus enzyme-linked immunosorbent assay kit. J Clin Microbiol 2006;44:3784-6 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/17021111">PubMed 17021111</a></li></ol>`,
          },
          {
            title: 'Última Revisión',
            content: '<p>Septiembre 2010</p>',
          },
        ],
      },
      {
        code: 'MB008',
        label: 'Rotavirus ANTIGENO FECAL (ELISA)',
        seccion: ['MICROBIOLOGIA'],
        document:
          'https://www.gastrolabperu.com/userfiles/cms/examen/documento/rotavirus.antigeno.fecal.elisa.pdf',
        content: [
          {
            title: 'Descripción',
            content:
              '<p>Detección cualitativa de antígeno fecal de rotavirus (Grupo A) mediante enzimoinmunoensayo de microplaca en fase sólida con anticuerpos policlonales en muestra de heces fresca, refrigerada o congelada.</p>',
          },
          {
            title: 'Utilidad Clínica',
            content:
              '<p>Este examen es para ser utilizado como ayuda diagnóstica en pacientes con gastroenteritis aguda para detectar la presencia de rotavirus. Es también útil en la investigación de brotes de diarrea en instituciones como guarderías, nidos, salas de hospitalización y asilos. La detección del antígeno fecal de rotavirus mediante ELISA tiene mejor precisión diagnóstica que con la técnica de látex (Moosai RB et al. J Clin Pathol 1985;38:694-700).</p>',
          },
          {
            title: 'Información Clínica',
            content:
              '<p>Rotavirus es la causa más común de diarrea infecciosa no bacteriana, especialmente en niños hasta los 2-3 años de edad (Ehrenkranz P et al. Pan Am J Public Health 2001;10:240-7). Puede afectar también a niños mayores y adultos aunque en este grupo los síntomas suelen ser más leves y la enfermedad más corta excepto si es un adulto mayor o tiene alguna condición de inmunosupresión (Anderson EJ et al. Lancet Infect Dis 2004;4:91-9). La infección por rotavirus ocurre todo el año aunque tiende a aumentar durante los meses de invierno (Török TJ et al. Pediatr Infect Dis J 1997;16:941-6). Es un virus altamente transmisible que puede fácilmente ocasionar brotes con numerosos casos en instituciones como hospitales, guarderías, nidos y asilos (Festini F et al. BMC Infect Dis 2010;10:235). Las medidas sanitarias convencionales de higiene no son por lo general suficientes para evitar la transmisión del rotavirus (Velazquez FR et al. Ped Infect Dis J 2004;23:S149-S55). La prevención más efectiva de esta infección se logra con vacunas (Committee on infectious diseases. Pediatrics 2009;123:1412-20). La enfermedad típica se inicia de manera brusca primero con vómitos y fiebre seguido horas después por diarreas acuosas sin moco o sangre (Staat MA et al. Pediatr Infect Dis J 2002;21:221-7); toda la enfermedad puede durar de 5 a 8 días independientemente de la edad del paciente (Albano F et al. Eur J Pediatr 2007;166:241-7).</p>',
          },
          {
            title: 'Muestra',
            content:
              '<p>Heces frescas, refrigeradas o congeladas, en recipiente apropiado</p>',
          },
          {
            title: 'Recipiente',
            content:
              '<p>Frasco limpio, seco, de boca ancha y tapa hermética</p>',
          },
          {
            title: 'Volumen',
            content:
              '<p>Mínimo 5 mL (5 g) – Mayor cantidad si conjuntamente se solicitan otros exámenes</p>',
          },
          {
            title: 'Instrucciones para obtención y transporte de la muestra',
            content:
              '<p>Obtener la muestra en frasco limpio de boca ancha y tapa hermética. No mezclar la muestra con orina, cremas o talco. Colectar la mayor cantidad posible. En niños pequeños colocar el pañal al revés (por la parte no absorbente), cubrir la salida de la uretra con un trozo de algodón (para no contaminar la muestra con orina) y trasvasar la muestra al frasco. Muestras en pañal no son aceptables. Enviar la muestra al laboratorio inmediatamente después de su obtención en caja térmica con refrigerantes. Muestras de lugares fuera de Lima o que no pueden ser enviadas al laboratorio antes de 3 horas desde su obtención deben ser congeladas a -20°C hasta su envío. Muestras en un medio de preservación como Cary-Blair no son aceptables para esta prueba. No colectar la muestra en recipientes que contengan medios de transporte, formol o compuestos similares, sueros animales, iones metálicos, agentes oxidantes o detergentes debido a posibles interferencias con la prueba.</p>',
          },
          {
            title: 'Método de análisis',
            content:
              '<p>Enzimoinmunoensayo (ELISA) de microplaca en fase sólida con anticuerpos policlonales. Los pocillos de la microplaca de titulación están recubiertos con anticuerpo policlonal contra antígeno específico de rotavirus Grupo A. El sobrenadante de una suspensión de la muestra, así como el anticuerpo policlonal marcado con peroxidasa se pipetean en los pocillos. El antígeno de rotavirus presente en la suspensión de la muestra se une tanto al anticuerpo en la microplaca, como al anticuerpo marcado con peroxidasa formando un complejo ‘sándwich’. El conjugado de enzima que no se combina se elimina mediante el lavado de la microplaca. Después de añadir el sustrato, si la muestra es positiva, la enzima enlazada transforma el color de la solución en los pocillos de la microplaca de incolora hacia el azul. Mediante la adición del reactivo de parada se lleva a cabo un cambio de color del azul al amarillo. La absorbancia se lee en espectrofotómetro a 450/620 nm y se expresa como positiva o negativa en relación al valor límite predeterminado (cut off).</p>',
          },
          {
            title: 'Rango de resultados',
            content: '<p>Positivo o negativo</p>',
          },
          {
            title: 'Rango normal',
            content: '<p>No hay antígeno de rotavirus</p>',
          },
          {
            title: 'Tiempo de entrega de resultados',
            content: '<p>6 - 12 horas desde recibida la muestra</p>',
          },
          {
            title: 'Interpretación de resultados',
            content:
              '<p>Comparado con microscopía electrónica y otra prueba ELISA de referencia, la prueba de detección del antígeno fecal de rotavirus con anticuerpos policlonales tiene una especificidad de 99.2% (Kok TW et al. J Clin Microbiol 1989;27:364-6) por lo que un resultado POSITIVO con esta prueba confirma que hay una infección intestinal por rotavirus y que ésta podría ser la causa de los síntomas del paciente. Si el resultado se informa NEGATIVO es probable que no haya realmente una infección por rotavirus. La sensibilidad de esta prueba es de 100.0% (Kok TW et al. J Clin Microbiol 1989;27:364-6). Un resultado falso NEGATIVO (la enfermedad existe pero la prueba no lo detecta) puede deberse a que la muestra se colectó cuando la excreción fecal del virus había declinado a niveles por debajo del nivel de detección del ELISA o a un deterioro del antígeno durante su trasporte al laboratorio (ver más abajo, limitaciones y recomendaciones). Esta prueba es específica para rotavirus, un resultado POSITIVO o NEGATIVO con esta prueba no excluye la presencia de otros agentes enteropatógenos. Esta información es sólo para ser tomada en cuenta. El médico es el más indicado para decidir lo que se deba hacer en base a los síntomas, el cuadro clínico y el resultado de esta prueba.</p>',
          },
          {
            title: 'Limitaciones y recomendaciones',
            content:
              '<ol><li>Mantener la muestra refrigerada desde su obtención hasta la llegada al laboratorio; el antígeno del rotavirus puede deteriorarse en muestras expuestas a temperaturas elevadas durante el transporte al laboratorio;</li><li>El antígeno fecal de rotavirus es detectable desde el comienzo de la enfermedad, el pico de excreción ocurre 3-5 días después del inicio de los síntomas y decae rápidamente; para un mejor resultado, las muestras fecales deben obtenerse tan pronto empiezan los primeros síntomas;</li><li>Si el resultado de la prueba es NEGATIVO y la sospecha de la infección es muy fuerte puede ser conveniente repetir la prueba en una nueva muestra.</li></ol>',
          },
          {
            title: 'Horario de recepción',
            content:
              '<p>Lunes a Viernes de 7:00&nbsp;AM a 8:30 PM<br>Sábados de 7:00&nbsp;AM a 6:30 PM</p>',
          },
          {
            title: 'Referencias',
            content: `
               <ol><li>Moosai RB et al. Detection of rotavirus by a latex agglutination test, Rotalex: comparison with electron microscopy, immunofluorescence, polyacrylamide gel electrophoresis, and enzyme linked immunosorbent assay. J Clin Pathol 1985;38:694-700 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/2989342">PubMed 2989342</a></li><li>Ehrenkranz P et al. Rotavirus diarrhea disease burden in Peru: the need for a rotavirus vaccine and its potential cost savings. Pan Am J Public Health 2001;10:240-7 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/11715170">PubMed 11715170</a></li><li>Anderson EJ et al. Rotavirus infection in adults. Lancet Infect Dis 2004;4:91-9 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/14871633">PubMed 14871633</a></li><li>Török TJ et al. Visualizing geographic and temporal trends in rotavirus activity in the United States, 1991 to 1996. Pediatr Infect Dis J 1997;16:941-6 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/9380468">PubMed 9380468</a></li><li>Festini F et al. Nosocomial rotavirus gastroenteritis in pediatric patients: a multicenter prospective cohort study. BMC Infect Dis 2010;10:235 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/20696065">PubMed 20696065</a></li><li>Velazquez FR et al. Diarrhea morbidity and mortality in Mexican children. Impact of rotavirus disease. Ped Infect Dis J 2004;23:S149-S55 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/15502694">PubMed 15502694</a></li><li>Committee on infectious diseases. Prevention of rotavirus disease: updated guidelines for use of rotavirus vaccine. Pediatrics 2009;123:1412-20 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/19332437">PubMed 19332437</a></li><li>Staat MA et al. Clinical presentations of rotavirus infection among hospitalizaed children. Pediatr Infect Dis J 2002;21:221-7 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/12005086">PubMed 12005086</a></li><li>Albano F et al. Rotavirus and not age determines gastroenteritis severity in children: a hospital-based study. Eur J Pediatr 2007;166:241-7 <a target="_blank" href="http://www.ncbi.nlm.nih.gov/pubmed/16941130">PubMed 16941130</a></li><li>Kok TW et al. Comparison of five enzyme immunoassays, electron microscopy, and latex agglutination for detection of rotavirus in fecal specimens. J Clin Microbiol 1989;27:364-6 <a target href="http://www.ncbi.nlm.nih.gov/pubmed/2536758">PubMed 2536758</a></li></ol>`,
          },
          {
            title: 'Última Revisión',
            content: '<p>Enero 2014</p>',
          },
        ],
      },
    ],
  },
  {
    code: 'SE01B',
    name: 'Serie diarrea con sangre',
    seccion: [],
  },
  {
    code: 'SE007',
    name: 'SERIE DIARREA CRONICA NO INFECCIOSA',
    seccion: [],
  },
  {
    code: 'SE002',
    name: 'Serie diarrea persistente',
    seccion: [],
  },
  {
    code: 'SE005',
    name: 'Serie DISTENSION ABDOMINAL Y FLATULENCIA',
    seccion: [],
  },
  {
    code: 'SE004',
    name: 'Serie dolor abdominal recurrente',
    seccion: [],
  },
  {
    code: 'SE008',
    name: 'Serie enfermedad inflamatoria intestinal (IBD)',
    seccion: [],
  },
  {
    code: 'SE006',
    name: 'Serie falla de medro (pobre ganancia de peso)',
    seccion: [],
  },
  {
    code: 'SE003',
    name: 'Serie giardiasis',
    seccion: [],
  },
  {
    code: 'SE009',
    name: 'SERIE PERDIDA DE PESO INEXPLICABLE',
    seccion: [],
  },
  {
    code: 'MB024',
    name: 'Strep A - PRUEBA RAPIDA',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'AE008',
    name: 'Sucrosa prueba de tolerancia',
    seccion: [
      'HIDROGENO/METANO EN ALIENTO',
      'DIGESTION / ABSORCION INTESTINAL',
    ],
    enfermedad: [
      'Diarrea Persistente y Crónica',
      'Dolor Abdominal',
      'Falla de Medro (pobre ganancia de peso)',
      'Flatulencia y Distensión Abdominal',
      'MALABSORCION DE CARBOHIDRATOS',
      'SINDROME DE INTESTINO IRRITABLE',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/prueba.de.tolerancia.sucrosa.2019.pdf',
  },
  {
    code: 'CF002',
    name: 'Sustancias reductoras en heces',
    seccion: ['CITOQUIMICA FECAL'],
  },
  {
    code: 'AE004',
    name: 'TIEMPO DE TRANSITO INTESTINAL (lactulosa)',
    seccion: ['HIDROGENO/METANO EN ALIENTO'],
  },
  {
    code: 'MB015',
    name: 'Toxinas Shiga con enriquecimiento (ELISA)',
    seccion: ['MICROBIOLOGIA'],
  },
  {
    code: 'MB014',
    name: 'Toxinas Shiga directo en heces (ELISA)',
    seccion: ['MICROBIOLOGIA'],
    enfermedad: [
      'Abdomen Agudo',
      'Colitis Infecciosa Aguda',
      'Diarrea Aguda',
      'Diarrea del Viajero',
      'Enteritis Infecciosa Aguda',
      'SINDROME HEMOLITICO UREMICO',
    ],
    document:
      'https://www.gastrolabperu.com/userfiles/cms/examen/documento/toxinas.shiga.directo.elisa.pdf',
  },
];
