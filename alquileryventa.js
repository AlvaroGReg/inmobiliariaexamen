var pisos = [
	{
		src: "https://media.yaencontre.com/img/photo/w380/47297/47297-48785157-1212341693.jpg",
		title: "Piso en el centro histórico",
		alquiler: 800,
		venta: 200000,
	},
	{
		src: "https://uprsc.inmogesco.com/propertywebthumb/0/1/0/re/grupointasa/property/204920/image/1861671-iogspdpl.jpg",
		title: "Ático con vistas al mar",
		alquiler: 1200,
		venta: 350000,
	},
	{
		src: "https://images.adsttc.com/media/images/5ec7/e38f/b357/6579/0d00/00ce/newsletter/bionyl-1.jpg?1590158218",
		title: "Apartamento en zona residencial",
		alquiler: 600,
		venta: 150000,
	},
	{
		src: "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/60/be/f6/1103829011.jpg",
		title: "Dúplex con terraza",
		alquiler: 1000,
		venta: 250000,
	},
	{
		src: "https://media.admagazine.com/photos/618a61eb72049e253173e7e0/master/w_1600%2Cc_limit/82850.jpg",
		title: "Chalet en urbanización privada",
		alquiler: 1500,
		venta: 400000,
	},
	{
		src: "https://snoopy.archdaily.com/images/archdaily/catalog/uploads/photo/image/196990/large_NOGAL_EUROPEO_DOLOMITE.jpg?width=640&format=webp",
		title: "Piso reformado en el centro",
		alquiler: 900,
		venta: 180000,
	},
	{
		src: "https://www.novacasa.com.mx/wp-content/uploads/2021/01/DUQUESA.jpg",
		title: "Casa adosada en zona tranquila",
		alquiler: 1100,
		venta: 280000,
	},
	{
		src: "https://www.porcelanosa.com/recursos/producto/t/Porcelanosa-Verona58.6x117.7cm_H.jpg",
		title: "Estudio cerca de la playa",
		alquiler: 500,
		venta: 120000,
	},
	{
		src: "https://production-masisa.s3.amazonaws.com/pim/0/5/a/4/05a4e53145c368fc635dd4549805475516fbffd4_pisos_1000x300px.jpg",
		title: "Piso luminoso en zona comercial",
		alquiler: 700,
		venta: 160000,
	},
	{
		src: "https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/aa/73/95/1090268723.jpg",
		title: "Chalet con piscina y jardín",
		alquiler: 2000,
		venta: 500000,
	},
]

function chargeGallery() {
	var galleryContainer = document.getElementById("gallery")
  
	for (var i = 0; i < pisos.length; i++) {
	  var piso = pisos[i]
	  var imageContainer = document.createElement("div")
	  imageContainer.className = "image-container"
  
	  var img = document.createElement("img")
	  img.src = piso.src
	  img.alt = "Piso " + (i + 1)
  
	  var title = document.createElement("p")
	  title.className = "image-title"
	  title.textContent = piso.title
  
	  var alquiler = document.createElement("p")
	  var venta = document.createElement("p")
	  alquiler.innerHTML = "Alquiler: " + piso.alquiler + "€/mes"
	  venta.innerHTML = "Venta: " + piso.venta + "€"
  
	  imageContainer.appendChild(img)
	  imageContainer.appendChild(title)
	  imageContainer.appendChild(alquiler)
	  imageContainer.appendChild(venta)
  
	  // Agregar el evento click al image-container
	  img.addEventListener("click", function (event) {

		var fullscreenContainer = document.createElement("div")
		fullscreenContainer.className = "fullscreen-container"
  
		var fullscreenImage = document.createElement("img")
		fullscreenImage.src = event.target.src
		fullscreenImage.alt = event.target.alt
  
		var closeButton = document.createElement("button")
		closeButton.className = "close-button"
		closeButton.innerHTML = "X"
		closeButton.addEventListener("click", function () {
		  fullscreenContainer.remove()
		});
  
		fullscreenContainer.appendChild(fullscreenImage)
		fullscreenContainer.appendChild(closeButton)
		fullscreenContainer.appendChild(alquiler)
		fullscreenContainer.appendChild(venta)
  
		document.body.appendChild(fullscreenContainer)
	  });
  
	  galleryContainer.appendChild(imageContainer)
	}
  }
  
