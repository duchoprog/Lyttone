var app = new Vue({
  el: "#app",
  data: {
    lang: "ENG",
    idiomas: ["ENG", "SPA", "POR"],
    textos: {},
    ENG: {
      home: "Home",
      welcome: "Welcome to Lyttone",
      tit: "Spanish and Portuguese Audiobooks with the best voices,  ",
      tit2: " top-notch audio and expert formatting.",
      startButt: "GET STARTED",
      servButt: "OUR SERVICES",
      aboutTitle: "About Us",
      aboutSubTitle: "The perfect mix of talent and technology",
      aboutP:
        "At Lyttone everybody loves books, and everybody loves audio. That's why we have been providing casting, recording, directing, proofing, mixing, and mastering for audiobooks for many years. We have successfully delivered books in many genres, including fiction, non-fiction, children's stories, science, and more!",
      servTitle: "Our Services",
      servSubTitle: "These are the services we provide to create Audiobooks:",
      assesTitle: "Pre-production",
      assesP:
        "First we read the book, and then we suggest the best approach to take your book from print to audio. We listen to your opinion and your suggestions based on your knowledge of the book and your intended audience. Once we all agree on the route, we are ready for Talent Selection.",
      talentTitle: "Talent Selection",
      talentP:
        "We offer you 3 ways to select the right talent for your Audiobook: we can make a selection the most appropriate candidates from our roster of Voice Actors and let you pick one of them listening to them read some of your book; or we can make that choice; or you may wish to bring in your preferred talent, be it the author himself or herself or any Voice Actor of your choice.",
      recTitle: "Recording and Editing",
      recP:
        "Time to record! The voice talent, the director and the producer convene in our studio, and the actual recording takes place. The book will take several recording sessions. Once everything is recorded, we carefully edit and mix the material, and then pass it on to the Proofing stage.",
      proofTitle: "Proofing",
      proofP:
        "Our Proofers review all the material, checking accuracy, pronunciation, and sound quality.Then they send back a list of issues to the producer, and the necessary changes are introduced as soon as possible.",
      masterTitle: "Mastering and Delivery",
      masterP:
        "Final stage! We can make the audio fit all platform requirements, and then we deliver the audio files to you, the platforms of your choice.",
      contactTitle: "Contact Us",
      contactName: "Your Name",
      contactEmail: "Your Email",
      contactSubject: "Subject",
      contact: "Message"
    },
    SPA: {
      home: "Inicio",
      welcome: "Bienvenido Lyttone",
      tit: "Audiolibros en español y portugués con las mejores voces,",
      tit2: "excelente sonido y formato hecho por expertos.",
      startButt: "COMENZAR",
      servButt: "SERVICIOS",
      aboutTitle: "Nosotros",
      aboutSubTitle: "La combinación perfecta de talento y tecnología",
      aboutP:
        "En Lyttone todos amamos los libros, y todos amamos el sonido. Por eso hace años ofecemos casting, grabación, dirección, corrección, mezcla y masterizado de Audiolibros. Hemos completado con total satisfacción de nuestros clientes Audiolibros en muchos géneros, incluyendo ficción, no-ficción, cuentos infantiles, ciencias, y otros!",
      servTitle: "Nuestros Servicios",
      servSubTitle:
        "Estos son los servicios que ofrecemos para la creación de Audiolibros",
      assesTitle: "Preproducción",
      assesP:
        "Después de leer el libro impreso, recomendamos la mejor manera de llevarlo a Audiolibro. Escuchamos su opinión, basada en su conocimiento del libro y su audiencia. Una vez que acordamos la ruta a seguir, pasamos a la Selección de Voces",
      talentTitle: "Selección de voces",
      talentP:
        "Ofrecemos 3 modos de Selección de voces: podemos pre-seleccionar los candidatos más adecuados de nuestro catálogo de voces y dejar que usted elija entre ellos, escuchándolos leer un fragmento de su libro; podemos hacer esa selcción nosotros mismos; o puede traer usted su actor preferido, quizás el autor mismo del libro o un actor de su preferencia.",
      recTitle: "Grabación y Edición",
      recP:
        "Hora de grabar! El actor, el director y el productor sedan cita en nuestro estudio, y la grabación se lleva a cabo. La grabación se realiza en varias sesiones. Una vez que se completa la grabación editamos y mezclamos cuidadosamente el material, y lo entregamos a los encargados de la Corrección.",
      proofTitle: "Corrección",
      proofP:
        "Nuestros correctores revisan todo el audio, controlando exactitud, pronunciación y calidad de sonido. Al terminar, envían al productor una lista de correcciones y estas se realizan en el menor tiempo posible.",
      masterTitle: "Masterizado y Entrega",
      masterP:
        "La etapa final! Masterizamos el Audiolibro para que cumpla con los requisitos de cada plataforma de ventas, y lo entregamos a las plataformas elegidas.",
      contactTitle: "Contacto",
      contactName: "Nombre",
      contactEmail: "Email",
      contactSubject: "Asunto",
      contact: "Mensaje"
    }
  },

  mounted: function () {
    this.textos = this.ENG;
    console.log(this.textos);
  },
  methods: {
    language: function (e) {
      this.textos = this[e.target.dataset.lang];
    }
  }
});
