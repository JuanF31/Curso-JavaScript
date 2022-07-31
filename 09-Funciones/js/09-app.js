const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function() {
        console.log('Pausando');
    },
    borrar: function(id) {
        console.log(`Borrando cancion ${id}...`);
    },
    crearPlalist: function(nombre) {
        console.log(`Playlist ${nombre} creada`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`)
    }
};

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar();

reproductor.crearPlalist('Final');
reproductor.reproducirPlaylist('Final');
