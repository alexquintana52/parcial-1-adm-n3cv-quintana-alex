import { CardGame } from '../components/CardGame.js'

/*===| Games Section |===*/
export const Games = {
    template:`
        <section class="games__section">
            <div class="container">
                <h1 class="text-center py-5 mb-5 games-title">Todos Nuestros Juegos</span></h1>
                <div class="row">
                    <CardGame
                        v-for="item in items"
                        :id="item.id"
                        :titulo="item.titulo"
                        :portada="item.portada"
                        :descripcion="item.descripcion"
                        :genero="item.genero"
                        :plataforma="item.plataforma"
                        :desarrollo="item.desarrollo"
                        :produccion="item.produccion"
                        :distribucion="item.distribucion"
                        :lanzamiento="item.lanzamiento"
                        :precio="item.precio"
                        :key="item.id"
                    >
                    </CardGame>
                </div>       
            </div>
        </section>
    `,
    data(){
        return {
            CardGame,
            json_file: '../src/juegos.json',
            items: [], // Array de objetos con los datos de los juegos
        }
    },
    methods: {
        /**
         * Trae los datos del archivo JSON de Juegos
         */
        getData(){
            fetch(this.json_file)
            .then(response => response.json())
            .then(gameData => {
                //console.log(gameData)
                this.items = gameData
            })
        }
    },
    mounted() {
        this.getData()
    }
}