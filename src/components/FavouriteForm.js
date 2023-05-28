export const FavouriteForm = Vue.component('FavForm', {
    template:
    `
        <div class="row justify-content-center">
            <div class="col-12 col-md-9 col-lg-6 mb-4">
                <input
                    class="form-control border-0 rounded-0 py-3 px-3 mb-4"
                    type="text" name="nombre_juego" placeholder="Nombre del Juego"
                    aria-label="nombre_juego"
                    v-model="gameName" required
                >
                <input
                    class="form-control border-0 rounded-0 py-3 px-3 mb-4"
                    type="text" name="genero_juego" placeholder="Género"
                    aria-label="genero_juego"
                    v-model="gameGenre" required
                >
                <input
                    class="form-control border-0 rounded-0 py-3 px-3 mb-4"
                    type="text" name="plataforma_juego" placeholder="Plataforma"
                    aria-label="plataforma_juego"
                    v-model="gamePlat" required
                >
                <button @click="addStorage" class="btn btn-danger rounded-0 py-3 px-3 w-100 mb-4" type="submit" name="button">
                    Añadir Juego
                </button>
            </div>
        </div>
    `
})