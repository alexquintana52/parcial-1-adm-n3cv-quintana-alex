import { FavouriteTable } from "../components/FavouriteTable.js"
import { FavouriteForm } from "../components/FavouriteForm.js"

/*===| Favourite Section |===*/
export const Favourite = {
    template: `
        <div>
            <section class="fav__section">
                <div class="container">
                    <h1 class="text-center py-5 mb-4 fav-title">Juegos Favoritos</h1>
                    <form @submit.prevent="addInfo">
                        <FavForm></FavForm>
                    </form>
                    <div class="row justify-content-center">
                        <FavTable></FavTable>
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
            FavouriteForm,
            FavouriteTable
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