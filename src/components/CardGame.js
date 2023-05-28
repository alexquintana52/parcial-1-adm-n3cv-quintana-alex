export const CardGame = Vue.component('CardGame', {
    props: [
        "id",
        "titulo",
        "portada",
        "descripcion",
        "genero",
        "plataforma",
        "desarrollo",
        "produccion",
        "distribucion",
        "lanzamiento",
        "precio"
    ],
    template:
    `
        <div class="col-12 col-md-6 col-lg-4" :id="'game-' + id">
            <div class="card mb-4 bg-dark text-white border-0 rounded-0">
                <img :src="'../../assets/portadas_juegos/' + portada" class="card-img-top img-fluid rounded-0" :alt="'Portada de ' + titulo">
                <div class="card-body card-info">
                    <p class="card-title text-danger h5">{{titulo}}</p>
                    <p class="card-text text-white-2 card-description">{{descripcion}}</p>
                </div>
                <ul class="list-group list-group-flush border-0">
                    <li class="list-group-item bg-dark text-white border-0"><span class="badge bg-danger fw-normal py-2">{{genero}}</span></li>
                    <li class="list-group-item bg-dark text-white border-0"><span class="badge bg-danger fw-normal py-2">{{plataforma}}</span></li>
                    <li class="list-group-item bg-dark text-white border-0"><span class="fw-bold text-danger">Desarrollo:</span> {{desarrollo}}</li>
                    <li class="list-group-item bg-dark text-white border-0"><span class="fw-bold text-danger">Producción:</span> {{produccion}}</li>
                    <li class="list-group-item bg-dark text-white border-0"><span class="fw-bold text-danger">Distribución:</span> {{distribucion}}</li>
                    <li class="list-group-item bg-dark text-white border-0"><span class="fw-bold text-danger">Lanzamiento:</span> {{lanzamiento}}</li>
                </ul>
                <div class="card-body">
                    <p class="fs-3 mb-3 fw-bold text-center text-white"><span class="text-danger">$</span> {{precio}}</p>
                </div>
            </div>
        </div>
    `
})