const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('Pausando'),
    borrar: id => console.log(`Borrando cancion ${id}...`),
    crearPlalist: nombre => console.log(`Playlist ${nombre} creada`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo cancion ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
};

reproductor.nuevaCancion = "Frankenstein Posmo";
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(20);

reproductor.crearPlalist('Final');
reproductor.reproducirPlaylist('Final');
