document.addEventListener("DOMContentLoaded", function() {

	const isbnBuscado= document.getElementById("isbn")
	const enter = document.getElementById("enter")
	const enter2 = document.getElementById("enter2")
	const autorEnBusqueda = document.getElementById("autor")
	const topDiez = document.getElementById("top10")

	enter.addEventListener("click",buscarLibro);
	enter2.addEventListener("click",buscarAutor);	
	topDiez.addEventListener("click",top10);
	

	
	function buscarLibro(isbn) {
		let estaEnLaLista = false
		for (let i = 0; i < librosDisponibles.length; i++) {
			const libro = librosDisponibles[i]
			if (isbnBuscado.value === libro.isbn) {
				estaEnLaLista = true
			}	
		}

		if(estaEnLaLista ===false){
			alert("libro no enconotrado")
		}

		if(estaEnLaLista===true){
			for(let i=0; i<librosDisponibles.length; i++){
				const libro = librosDisponibles[i]
				
				if(libro.isbn === isbnBuscado.value){
					
					if (libro.disponibilidad === 'disponible'){
						alert("libro disponible")
					} else{
						return alert("libro ya alquilado")
					}
				}
			}
			
		} 

	}

	function buscarAutor(autor){
		let estaEnLaLista = false
		const autorBuscado = autorEnBusqueda.value.toLowerCase()
		for (let i = 0; i < librosDisponibles.length; i++) {
			const libro = librosDisponibles[i]
			if (autorBuscado === libro.autor) {
				estaEnLaLista = true
			}	
		}

		if(estaEnLaLista ===false){
			alert("autor no enconotrado")
		}

		if(estaEnLaLista===true){
			let listaLibrosPorAutor = []
			for(let i = 0; i < librosDisponibles.length; i++){
				const libro = librosDisponibles[i] 
				if(autorBuscado === libro.autor){
					listaLibrosPorAutor.push(nombreLibro = libro.nombre)
				}	
			}
			alert(listaLibrosPorAutor)
		}
	}


	librosDisponibles.sort(function(a, b) {
		return b.vecesAlquilado - a.vecesAlquilado
	})
		function top10 (){
			for(let i = 0; i < 10 ; i++){	
				const libro = librosDisponibles[i]
				let lista10 = []
				lista10.push({
					libro: libro.nombre,
					isbn: libro.isbn,
					alquilado: libro.vecesAlquilado,
					})
				console.log(lista10)
			}

		}	
})

	
			





