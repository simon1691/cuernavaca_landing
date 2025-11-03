
const links = [
        { name: "Inicio", href: "#header" },
        { name: "Historia", href: "#historia" },
        { name: "Colección", href: "#coleccion" },
        { name: "Ritual", href: "#ritual" },
        { name: "Experiencias", href: "#experiencias" },
    ]

export default {
nav:{
    links: links,
    contact: "Contacto",
},
header: {
    subtitle: "El espíritu de México en su forma más pura.",
    button: "Quiero vivir la experiencia"
},
history: {
    title: "No somos solo tequila. Somos el espíritu de México convertido en ritual.",
    paragraph: "En las tierras sagxradas de Cuernavaca, donde los guardianes del agave susurraban al viento, nació un elixir reservado para los elegidos. Cada gota guarda la fuerza de los volcanes, la paciencia del agave y el eco de los ancestros."
},
collection: {
    title: "Nuestra colección",
    buttonRequestInfo: "Solicita más información",
    buttonWhereToBuy: "Dónde Comprar",
    data: [
  {
    id: "tequila_blanco",
    title: "TEQUILA BLANCO CUERNAVACA",
    description:
      "Tequila 100% agave Blanco, a la vista cristalino y limpio, se caracteriza por sus aromas herbales y frutales.",
    longdescription: `Tequila 100% agave Blanco, a la vista cristalino y limpio, se caracteriza por sus aromas herbales y frutales.
      Entre sus notas principales destacan: Agave, cítricos, melón, manzana y menta.
      Con sabor ligeramente dulce y mineral, con una permanencia en boca de notas cítricas y sensación herbal fresca.`,
    productSpects: {
      productTitle: "Producto",
      product: "Tequila Blanco 100% Agave azul",
      volumeTitle: "Capacidad",
      volumen: "700 ml",
      alcoholTitle: "Alcohol",
      alcohol: "36% Alc. Vol.",
      presentationTitle: "Presentación",
      presentation: "Botella",
    },
    imageUrl: "tequila_blanco.png",
    buttonText: "Reserva la experiencia",
  },
  {
    id: "tequila_blanco_rosado",
    title: "TEQUILA BLANCO CUERNAVACA ROSADO",
    description:
      "Tequila 100% agave Blanco, a la vista rosado y suave. Se caracteriza por sus aromas herbales y frutales.",
    longdescription: `Tequila 100% agave Blanco, a la vista rosado y suave. Se caracteriza por sus aromas herbales y frutales. Entre sus notas principales destacan: Agave, cítricos, melón, manzana y menta.
    Con sabor ligeramente dulce y mineral, con una permanencia en boca de notas cítricas y sensación herbal fresca.`,
    productSpects: {
      productTitle: "Producto",
      product: "Tequila Blanco Rosado 100% Agave azul",
      volumeTitle: "Capacidad",
      volumen: "700 ml",
      alcoholTitle: "Alcohol",
      alcohol: "36% Alc. Vol.",
      presentationTitle: "Presentación",
      presentation: "Botella",
    },
    imageUrl: "tequila_blanco_rosado.png",
    buttonText: "Reserva la experiencia",
  },
  {
    id: "tequila_reposado",
    title: "TEQUILA REPOSADO CUERNAVACA",
    description:
      "Tequila 100% agave Reposado, visualmente agradable con tono pajizo brillante, contiene notas suaves de la maduración.",
    longdescription: `Tequila 100% agave Reposado, visualmente agradable con tono pajizo brillante, contiene notas suaves de la maduración.
    Aromas principales a naranja, plátano, nuez y madera ahumada.
    Con sabor a agave cocido, vainilla y cacahuate tostado`,
    productSpects: {
      productTitle: "Producto",
      product: "Tequila Reposado 100% Agave azul",
      volumeTitle: "Capacidad",
      volumen: "700 ml",
      alcoholTitle: "Alcohol",
      alcohol: "36% Alc. Vol.",
      presentationTitle: "Presentación",
      presentation: "Botella",
    },
    imageUrl: "tequila_reposado.png",
    buttonText: "Reserva la experiencia",
  },
  {
    id: "tequila_anejo",
    title: "TEQUILA AÑEJO CUERNAVACA",
    description:
      "Tequila 100% agave Añejo, presenta un color ámbar dorado, aromas florales dulces y de añejamiento muy presente de roble, uva, almendra y vainilla.",
    longdescription: `Tequila 100% agave Añejo, presenta un color ámbar dorado, aromas florales dulces y de añejamiento muy presente de roble, uva, almendra y vainilla.
    Sabores a canela, caramelo y frutos rojos con un remanente especiado principalmente pimienta.`,
    productSpects: {
      productTitle: "Producto",
      product: "Tequila Añejo 100% Agave azul",
      volumeTitle: "Capacidad",
      volumen: "700 ml",
      alcoholTitle: "Alcohol",
      alcohol: "36% Alc. Vol.",
      presentationTitle: "Presentación",
      presentation: "Botella",
    },
    imageUrl: "tequila_anejo.png",
    buttonText: "Reserva la experiencia",
  },
  {
    id: "tequila_anejo_cristalino",
    title: "TEQUILA AÑEJO CRISTALINO CUERNAVACA",
    description:
      "Tequila 100% agave Añejo, presenta un color totalmente cristalino a la vista, aromas florales dulces y de añejamiento muy presente de roble, uva, almendra y vainilla.",
    longdescription: `Tequila 100% agave Añejo, presenta un color totalmente cristalino a la vista, aromas florales dulces y de añejamiento muy presente de roble, uva, almendra y vainilla. 
Sabores a canela, caramelo y frutos rojos con un remanente especiado principalmente pimienta.`,
    productSpects: {
      productTitle: "Producto",
      product: "Tequila Añejo Cristalino 100% Agave azul",
      volumeTitle: "Capacidad",
      volumen: "700 ml",
      alcoholTitle: "Alcohol",
      alcohol: "36% Alc. Vol.",
      presentationTitle: "Presentación",
      presentation: "Botella",
    },
    imageUrl: "tequila_anejo_cristalino.png",
    buttonText: "Reserva la experiencia",
  },
  {
    id: "tequila_extra_anejo",
    title: "TEQUILA EXTRA AÑEJO CUERNAVACA",
    description:
      "Tequila 100% agave Extra Añejo, color rojizo intenso, con fuertes notas aromáticas de una profunda maduración, principalmente roble tostado, ciruela pasa, sándalo y avellana.",
    longdescription: `Tequila 100% agave Extra Añejo, color rojizo intenso, con fuertes notas aromáticas de una profunda maduración, principalmente roble tostado, ciruela pasa, sándalo y avellana. 
    En su sabor destaca fuerte carácter de azúcar quemada, humo, y vainilla, quedando en boca sensación de tabaco, frutos secos y un suave final de cacao.`,
    productSpects: {
      productTitle: "Producto",
      product: "Tequila Extra Añejo 100% Agave azul",
      volumeTitle: "Capacidad",
      volumen: "700 ml",
      alcoholTitle: "Alcohol",
      alcohol: "36% Alc. Vol.",
      presentationTitle: "Presentación",
      presentation: "Botella",
    },
    imageUrl: "tequila_extra_anejo.png",
    buttonText: "Reserva la experiencia",
  },
]
},
ritual: {
    language: "spanish",
    paragraph: `Certificados en Buenas Prácticas Manufactureras, Destilado 100% Agave Azul,
denominación de origen protegida.
<strong> Cada botella de Cuernavaca es un legado de
calidad y autenticidad.</strong>`
},
references: {
    title: "Un tequila que no solo se bebe, se celebra.",
    data: [
  {
    name: "Mariana López",
    image: "ref-2.png",
    description:
      "Lo probé en una reunión con amigos y todos quedamos impresionados. El sabor es elegante pero al mismo tiempo muy fácil de disfrutar. Ya se volvió mi tequila favorito.",
    score: 5,
  },
  {
    name: "Andrés Ramírez",
    image: "ref-1.png",
    description:
      "El diseño de la botella es increíble, parece una pieza de colección. El reposado tiene notas suaves que me encantan. Solo me costó un poco encontrarlo en mi ciudad.",
    score: 5,
  },
  {
    name: "Claudia Méndez",
    image: "ref-4.png",
    description:
      "Nunca había probado un cristalino tan fino. Se siente puro, con un aroma delicioso. Definitivamente lo llevaré a nuestra próxima cena familiar.",
    score: 5,
  },
  {
    name: "Jorge Herrera",
    image: "ref-3.png",
    description:
      "Lo descubrí en un bar de la zona hotelera y fue toda una sorpresa. El Extra Añejo es una joya, con un sabor profundo que me recordó a cacao y especias.",
    score: 5,
  },
  {
    name: "Sofía Torres",
    image: "ref-6.png",
    description:
      "Más que un tequila, es una experiencia completa. Desde que abres la botella hasta el primer trago se nota el cuidado en cada detalle. Ojalá tuviera más presentaciones pequeñas para regalar.",
    score: 4,
  },
  {
    name: "Luis Martínez",
    image: "ref-5.png",
    description:
      "Lo llevé a una cena con amigos en y todos quedaron fascinados. Me preguntaron dónde podían comprarlo. Es el mejor embajador de México.",
    score: 5,
  },
]
},
contactUs: {
    title: "Accede a experiencias exclusivas de Tequila Cuernavaca",
    paragraph: "Déjanos tus datos y sé de los primeros en descubrir lanzamientos, catas privadas y colaboraciones internacionales.",
    buttonRitual: "Quiero vivir el ritual",
    info: [
  {
    id: "mail",
    title: "sales@tequilacuernavaca.com",
    text: "sales@tequilacuernavaca.com",
    urlMethod: "mailto:",
  },
  {
    id: "phone",
    title: "Contáctanos",
    text: "+52 333 466 2252",
    urlMethod: "tel:",
  },
  {
    id: "location",
    title: "Visítanos",
    text: "www.tequilacuernavaca.com",
    urlMethod: "https://www.tequilacuernavaca.com/",
  },
]
},
footer: {
    links:links,
    terms: "Términos y condiciones",
    policy: "Política de privacidad",
    copyRight: `
      © 2025 Tequila Cuernavaca. <br class="md:hidden block" />Todos los
      derechos reservados.`
},
form: {
   title:"Accede a experiencias exclusivas de Tequila Cuernavaca" ,
    paragraph: "Déjanos tus datos y sé de los primeros en descubrir lanzamientos, catas privadas y colaboraciones internacionales.",
    label: {
        name: "Nombre completo",
        email: "Correo electrónico",
        whatsapp: "Número de WhatsApp",
        message: "Mensaje o consulta"

    },
    errors: {
        name: "Ingrese un nombre válido.",
        email: "Ingrese un correo válido.",
        whatsapp: "Ingrese un número válido.",
        message: "El mensaje debe tener al menos 10 caracteres.",
        termsAndConditions: "Debe aceptar los términos."

    },
    successMessage: "¡Formulario enviado correctamente!",
    termsAndConditions: "Acepto términos y condiciones",
    submitButtonText: "Quiero vivir el ritual"

},
legal: {
    title: "¿Tienes la edad para el ritual?",
    subtitle: "Acceso reservado",
    paragraph: ` Este contenido es solo para mayores de edad. Confirma tu edad y entra al
    universo de <br />Tequila Cuernavaca.`,
    buttonText: "Sí, soy mayor de edad"

}
};