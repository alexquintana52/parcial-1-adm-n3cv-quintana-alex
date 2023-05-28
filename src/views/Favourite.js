/*===| Favourite Section |===*/
export const Favourite = {
    template: `
        <div>
            <section class="fav__section">
                <div class="container">
                    <h1 class="text-center py-5 mb-4 fav-title">Juegos Favoritos</h1>
                    <form @submit.prevent="addInfo">
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
                                <button class="btn btn-danger rounded-0 py-3 px-3 w-100 mb-4" type="submit" name="button">
                                    Añadir Juego
                                </button>
                            </div>
                        </div>
                    </form>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-9 form-info">
                            <table class="table table table-dark table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Juego</th>
                                        <th scope="col">Género</th>
                                        <th scope="col">Plataforma</th>
                                        <th scope="col">Terminado</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in gameInfo">
                                        <th scope="row">{{item.counted}}</th>
                                        <td v-model="gameName" :class="{done: item.done}">{{item.name}}</td>
                                        <td v-model="gameGenre">{{item.genre}}</td>
                                        <td v-model="gamePlat">{{item.plat}}</td>
                                        <td>
                                            <input class="p-3" type="checkbox" v-model="item.done">
                                            <span @click="removeGame(game)" class="text-danger remove-game ms-3">Eliminar</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    data: function(){
        return {
            gameName: '',
            gameGenre: '',
            gamePlat: '',
            gamePlayed: '',
            gameInfo: [],
            count: 1,
        }
    },
    mounted(){
        if(localStorage.gameName){
            this.gameName = localStorage.gameName
        }
        if(localStorage.gameGenre){
            this.gameGenre = localStorage.gameGenre
        }
        if(localStorage.gamePlat){
            this.gamePlat = localStorage.gamePlat
        }
    },
    methods: {
        addInfo(){
            this.gameInfo.push({
                name: this.gameName,
                genre: this.gameGenre,
                plat: this.gamePlat,
                played: this.gamePlayed,
                counted: this.count++,
                done: false
            })
            this.addStorage()
            this.gameName = ''
            this.gameGenre = ''
            this.gamePlat = ''
            this.gamePlayed = ''
        },
        removeGame(game){
            const gameIndex = this.gameInfo.indexOf(game)
            this.gameInfo.splice(gameIndex, 1)
        },
        addStorage(){
            localStorage.Nombre = this.gameName
            localStorage.Genero = this.gameGenre
            localStorage.Plataforma = this.gamePlat
        }
    },
    watch: {
        getName(newName){
            localStorage.gameName = newName
        },
        getGenre(newGenre){
            localStorage.gameGenre = newGenre
        },
        getPlat(newPlat){
            localStorage.gamePlat = newPlat
        }
    }
}