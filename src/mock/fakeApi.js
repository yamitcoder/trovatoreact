const productos = [
    {   
        id:"1",
        name: "Bella Roma",
        stock:10,
        precio:2030000,
        introduccion:"Ciudad de roma y alredores",
        descripcion: "Sigue los pasos de gigantes en esta visita guiada por el corazón del Imperio Romano. Viaja en el tiempo mientras visitas estos íconos de la arquitectura romana. Profundice en la larga historia de Roma mientras su guía experimentado comparte historias desde las más pequeñas hasta las más magníficas.",
        imagen:"../img/coliseo.jpg",
        categoria:"Paquetes",
        paises: "Roma, florencia, venecia, Isla de Capri."
    },

    {   
        id:"2",
        name: "Ciudad de Madrid",
        stock:2,
        precio:125300,
        introduccion:"Puntos panoramicos de la bella madrid",
        descripcion: "Explora cómodamente la ciudad a bordo de un autobús turístico de 2 pisos. Descubre la ciudad al detalle con un mismo ticket. Sube y baja de nuestros autobuses tantas veces como desees y disfruta de Madrid a tu aire.La ruta 1 (azul) te llevará a conocer el Madrid Histórico. Este recorrido circular comprende un completo circuito histórico, artístico y monumental en el que visitarás los puntos de referencia de la ciudad. Recorre el precioso arbolado del Paseo del Prado y admira las magníficas joyas arquitectónicas del legado de la realeza de los Austrias. Acércate al Triángulo del Arte de Madrid y aprovecha para explorar a fondo algunos de sus museos. Disfruta de las vistas desde el Palacio Real hasta el Templo de Debod.",
        imagen:"../img/madrid.jpg",
        categoria:"Circuitos",
        duracion: "3 Hs."
    },

    {   
        id:"3",
        name: "Asistencia Oro",
        stock:10,
        precio:74772,
        introduccion:"Viajá seguro",
        descripcion: "Cobertura médica ante , coronavirusAsistencia médica ante enfermedad o accidente de USD$ 100,000, Asistencia médica ante enfermedad preexistente de USD$ 10,000, Compensación por pérdida de equipaje de USD$ 1,200",
        imagen:"../img/asistencia.jpg",
        categoria:"Asistencia"
    },

    {   
        id:"4",
        name: "Paises Bajos",
        stock:40,
        precio:2560000,
        introduccion:"Brujas, Bruselas, Burdeos, La Pineda",
        descripcion: "Desayuno. Visita panorámica de DUBLIN, la tranquila capital de Irlanda. Disfrutaremos paseando en los márgenes del Liffey, conociendo sus parques, su antigua universidad y las animadas calles del centro y caminamos en torno al Trinity College (en ocasiones, según horario de llegada a Dublín y la duración de la luz solar, la visita panorámica se podrá efectuar la tarde anterior). Tarde libre. Alojamiento.",
        imagen:"../img/bajos.jpg",
        categoria:"Paquetes",
        paises: "Brujas, Bruselas, Burdeos, La Pineda."
    },

    {   
        id:"5",
        name: "Tour Nocturno por Francia",
        stock:40,
        precio:156000,
        introduccion:"Circuito por la ciudad del amor",
        descripcion: "Explora la hermosa ciudad de París cuando la noche cae y las luces inundan el entramado parisino haciendo honor a uno de los sobrenombres por el que se conoce a la ciudad: La Ciudad de la Luz. Explora sus espacios más icónicos desde una perspectiva única al anochecer y no te pierdas la oportunidad de disfrutar de un crucero por el icónico río Sena, eligiendo la opción que lo incluye",
        imagen:"../img/francia.jpg",
        categoria:"Circuitos",
        duracion: "3 Hs."
    },

    {   
        id:"6",
        name: "Visita del Louvre y crucero por el Rio Sena",
        stock:20,
        precio:100828,
        introduccion:"Louvre y crucero por el Rio Sena con Acceso Prioritario",
        descripcion: "Viva París en todo su esplendor con este paquete, que combina las maravillas culturales del Louvre con la encantadora belleza de un crucero por el Sena. Embárquese en un viaje a través del arte y la historia mientras explora a su aire el mundialmente conocido Museo del Louvre. Pasee por las grandes salas adornadas con obras maestras de valor incalculable, desde la icónica Mona Lisa hasta la majestuosa Venus de Milo. Piérdase en el laberinto de galerías que albergan miles de años de creatividad humana, desde artefactos antiguos hasta tesoros renacentistas.",
        imagen:"../img/loure.jpg",
        categoria:"Circuitos",
        duracion: "10 Hs."
    },

    {   
        id:"7",
        name: "City tour Hop on Hop off Madrid",
        stock:10,
        precio:48707,
        introduccion:"Explora cómodamente la ciudad a bordo de un autobús turístico de 2 pisos",
        descripcion: "Descubre la ciudad al detalle con un mismo ticket. Sube y baja de nuestros autobuses tantas veces como desees y disfruta de Madrid a tu aire. La ruta 1 (azul) te llevará a conocer el Madrid Histórico. Este recorrido circular comprende un completo circuito histórico, artístico y monumental en el que visitarás los puntos de referencia de la ciudad. Recorre el precioso arbolado del Paseo del Prado y admira las magníficas joyas arquitectónicas del legado de la realeza de los Austrias. Acércate al Triángulo del Arte de Madrid y aprovecha para explorar a fondo algunos de sus museos. Disfruta de las vistas desde el Palacio Real hasta el Templo de Debod.",
        imagen:"../img/madrid-2.jpg",
        categoria:"Circuitos",
        duracion: "5 Hs."
    },

    {   
        id:"8",
        name: "Punta Cana",
        stock:10,
        precio:1193908,
        introduccion:"Paquete a Punta Cana All Inclusive con vuelo incluido",
        descripcion: "Sólo para adultos, el Riu Repùblica - Adults Only - All Inclusive se encuentra en Punta Cana, en la Playa Arena Gorda. El hotel dispone de 8 piscinas, siendo 2 de reborde infinito, además de bañera de hidromasaje y régimen all inclusive 24h.El Hotel Riu Republica Punta Cana posee 9 restaurantes con especialidades culinarias asiáticas, español, india, italiana y gourmet. La propiedad también ofrece el desayuno en el estilo continental y el huésped cuenta con 10 bares y opción de cenas románticas.",
        imagen:"../img/puntacana.jpg",
        categoria:"Paquetes",
        duracion: "15 dias."
    },



]

export const getProducts = () => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
    
            if(error){
                reject("Hubo un problema, intenten más tarde")
            }else{
                resolve(productos)
            }

        },2000)

    })

}