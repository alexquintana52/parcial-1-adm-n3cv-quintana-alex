export const FavouriteTable = Vue.component('FavTable', {
    template:
    `
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
    `
})