fetch('https://gutendex.com/books/')
.then( Response => Response.json())
.then( books => dissplayBooks(books));

function formatii(formats) {
    
    const listaFormati = document.createElement('ul')
    listaFormati.innerHTML = '<h5>Formati: </h5>';

    const elementoFormato1 = document.createElement('li');
    elementoFormato1.innerHTML = '<a href="' + formats['application/x-mobipocket-ebook']+'">'+formats['application/x-mobipocket-ebook']+'</a>'

    const elementoFormato2 =  document.createElement('li');
    const link2 = document.createElement('a');
    link2.setAttribute('href', formats['application/rdf+xml']);
    link2.innerText = formats['application/rdf+xml'];
    elementoFormato2.appendChild(link2)

    const elementoFormato3 = document.createElement('li')
    const link3 = document.createElement('a');
    link3.setAttribute('herf', formats['image/jpeg']);
    link3.innerText = formats['image/jpeg'];
    elementoFormato3.appendChild(link3)

    listaFormati.appendChild(elementoFormato1);
    listaFormati.appendChild(elementoFormato2);
    listaFormati.appendChild(elementoFormato3)

    return listaFormati;
}



function linguaa(languages) {
    const listaLingua = document.createElement('ul');
    listaLingua.innerHTML = '<h5>lingua: </h5>';

    for (const language of languages) {
      const elementoLingua = document.createElement('li');
      elementoLingua.innerHTML = language;
      listaLingua.appendChild(elementoLingua);  
    }
    return listaLingua
}

function libreriaa(bookshelves) {
    const listaLibreria =document.createElement('ul');
    listaLibreria.innerHTML = '<h5>Libreria :</h5>';

    for (const bookshelve of bookshelves) {
        const elementoLibreria = document.createElement('li');
        elementoLibreria.innerHTML = bookshelve;
        listaLibreria.appendChild(elementoLibreria)
    }
    return listaLibreria
}



function soggettii(subjects) {
    const listaSoggetti = document.createElement('ul');
    listaSoggetti.innerHTML = '<h5>Soggetti: </h5>';

    for (const subject of subjects) {
        const elementoSoggetto = document.createElement('li');
        elementoSoggetto.innerHTML = subject;
        listaSoggetti.appendChild(elementoSoggetto);

    }
    return listaSoggetti
}

function autorii(authors) {
    const listaAutori = document.createElement('ul');
    listaAutori.innerHTML = '<h5>Autori</h5>';

    for (const author of authors) {
        
        const elementoAutore = document.createElement('li');
        elementoAutore.innerHTML = '<b>Nome: </b>' + author.name + '<b>Anno di nascita: </b>' + author.birth_year + '<b>Anno di morte: </b>' + author.death_year;
            
        listaAutori.appendChild(elementoAutore);
    }
    return listaAutori;
}

function dissplayBooks(books) {

    const container = document.getElementById('container');

    const libri = books.results;
    const nuovaPagina = books.next;
    const count = books.count;

    const containerLibri = document.createElement('section');
    for (const libro of libri) {
        

        const containerLibro = document.createElement('section');
        containerLibro.classList.add('libriii');

        const codice = document.createElement('h5');
        const titolo = document.createElement('h4');
        const copyright = document.createElement('h4');
        const mediaType = document.createElement('h4');
        const downloadCount = document.createElement('h4');
        const image = document.createElement('img');
       

        codice.innerHTML = '#'+libro.id;
        titolo.innerHTML = 'Titolo: '+libro.title;
        copyright.innerHTML = 'copyright: ' + libro.copyright;
        mediaType.innerHTML  = 'media Type: ' + libro.media_type;
        downloadCount.innerHTML = 'download count: ' + libro.download_count;
        image.src = 'Img: '+libro.formats['image/jpeg'];

        containerLibro.appendChild(codice);
        containerLibro.appendChild(titolo);

        containerLibro.appendChild(image)
        
        const autori = autorii(libro.authors);
        
        containerLibro.appendChild(autori)
        
        const sogetti = soggettii(libro.subjects)
        
        containerLibro.appendChild(sogetti)
        
        const libreria = libreriaa(libro.bookshelves)
        
        containerLibro.appendChild(libreria)
        
        const lingua = linguaa(libro.languages)
        
        containerLibro.appendChild(lingua)
        
        containerLibro.appendChild(copyright)

        containerLibro.appendChild(mediaType)

        const formati = formatii(libro.formats);

        containerLibro.appendChild(formati)

        containerLibro.appendChild(downloadCount)

        containerLibri.appendChild(containerLibro)
    }


    container.appendChild(containerLibri)
}