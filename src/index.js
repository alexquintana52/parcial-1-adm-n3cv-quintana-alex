/*===| Sección Inicio |===*/
const Home = {
    template: `
        <div>
            <section class="home__section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-6 text-center">
                            <h1 class="py-3"><span class="text-danger">¡</span>Bienvenidos a <span class="text-danger">Zona Gamer!</span><br>Sumérgete en el Mundo Virtual</h1>
                            <p>Bienvenido a <b class="text-danger">Zona Gamer</b>. Aquí encontrarás todo lo que necesitas para sumergirte en los <b class="text-danger">universos virtuales más increíbles y emocionantes</b>. Desde los juegos más clásicos hasta los más modernos y sorprendentes, tenemos una amplia selección que seguramente te cautivará.</p>
                            <router-link to=/favourite class="btn btn-danger-2 rounded-0">Contacto</router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="home__section-2 my-5 py-5">
                <div class="container">
                    <div class="row g-0 bg-dark home__card">
                        <div class="col-12 col-lg-6">
                            <div class="p-5">
                                <h2 class="ps-5 fw-bold border-danger border-start border-4">Los Mejores Juegos en un Solo Lugar</h2>
                                <p class="mt-5 text-white">Ya sea que quieras jugar solo o con amigos, tenemos una amplia selección de juegos para ti. Nuestros juegos están disponibles en varias plataformas, incluyendo <span class="text-danger">PC, PS5 y Xbox</span>, para que puedas jugarlos en cualquier momento y en cualquier lugar.</p>
                                <router-link to="/games" class="btn btn-danger-2 rounded-0">Nuestros Juegos</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    `,
    data: function(){
        return {
            titulo: 'Este es el título del componente',
            mensaje: 'Esto de aca es un componente reutilizable.',
        }
    },
}

/*===| Sección Sobre Nosotros |===*/
const About = {
    template: `
        <div>
            <section class="about__section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-lg-6 text-center">
                            <h1 class="text-center py-4">Sobre <span class="text-danger">Nosotros</span></h1>
                            <p>Somos una tienda de juegos apasionada por ofrecer a nuestros clientes una experiencia única en el mundo de los videojuegos. Desde los juegos clásicos hasta los más innovadores, estamos comprometidos a brindar una amplia selección de juegos para todas las edades y plataformas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about__section-2 py-5">
                <div class="container">
                    <div class="row gy-5 align-items-center">
                        <div class="col-12 col-lg-6 d-flex justify-content-center">
                            <img src="assets/portadas_secciones/about-bg-2.jpg" class="w-75 mx-auto" alt="portada tales of arise">
                        </div>
                        <div class="col-12 col-lg-6 text-white text-center text-lg-start">
                            <h2 class="mb-4"><span class="text-danger">¿</span>Quienes Somos<span class="text-danger">?</span></h2>
                            <p class="text-white-2">Somos una tienda de juegos apasionada por ofrecer a nuestros clientes una experiencia única en el mundo de los videojuegos. Nos enorgullece tener un equipo de expertos en videojuegos, que están dispuestos a ayudarte en todo momento y responder cualquier pregunta que puedas tener.</p>
                            <p class="text-white-2">Nos aseguramos de estar al tanto de las últimas tendencias y novedades del mundo de los videojuegos, para que puedas estar seguro de que siempre encontrarás los juegos más actuales y populares en nuestra tienda.</p>
                            <p class="text-white-2">Además, nos preocupamos por la satisfacción del cliente y nos esforzamos por brindar un servicio excepcional en todo momento. Desde la selección de juegos hasta la entrega rápida y eficiente, nuestro objetivo es que disfrutes de una experiencia de compra sin problemas.</p>
                            <router-link to="/games" class="btn btn-danger-2 rounded-0">Nuestros Juegos</router-link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `,
    data: function(){
        return {
            titulo: 'Este es el título del componente',
            mensaje: 'Esto de aca es un componente reutilizable.',
        }
    },
}

/*===| Sección Juegos |===*/
const Games = {
    template:
    `
        <section class="games__section">
            <div class="container">
                <h1 class="text-center py-5 mb-5 games-title">Todos Nuestros Juegos</h1>
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
                    >
                    </CardGame> 
                </div>       
            </div>
        </section>
    `,
    data: function(){
        return {
            json_file: '../src/juegos.json',
            items: []
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
                console.log(gameData)
                this.items = gameData
            })
        }
    },
    mounted() {
        this.getData()
    }
}

/*===| Sección Favoritos y Jugados |===*/
const FavPlayed = {
    template: `
        <div>
            <section class="fav__section">
                <div class="container">
                    <h1 class="text-center py-5 mb-5 fav-title">Favoritos y Jugados</h1>
                    <form @click.prevent="addInfo">
                        <div class="row justify-content-center">
                            <div class="col-12 col-md-6 col-lg-3 mb-4">
                                <input
                                    class="form-control border-0 rounded-0 py-3 px-3"
                                    type="text" name="nombre" placeholder="Nombre"
                                    aria-label="nombre" required
                                    v-model="newInfo"
                                >
                            </div>
                            <div class="col-12 col-md-6 col-lg-3 mb-4">
                                <input
                                    class="form-control border-0 rounded-0 py-3 px-3"
                                    type="text" name="apellido" placeholder="Apellido"
                                    aria-label="apellido" required
                                    v-model="newInfo"
                                >
                            </div>
                        </div>
                        <div class="row mb-4 justify-content-center">
                            <div class="col-12 col-md-12 col-lg-6">
                                <input class="form-control border-0 rounded-0 py-3 px-3" type="email" name="email" placeholder="Correo Electrónico" aria-label="email" required>
                            </div>
                        </div>
                        <div class="row mb-4 justify-content-center">
                            <div class="col-12 col-md-12 col-lg-6">
                                <input class="form-control border-0 rounded-0 py-3 px-3" type="email" name="email" placeholder="Correo Electrónico" aria-label="email" required>
                            </div>
                        </div>
                        <div class="row mb-4 justify-content-center">
                            <div class="col-12 col-lg-6">
                                <button class="btn btn-danger-2 rounded-0 w-100" type="submit">Enviar</button>
                            </div>
                        </div>
                    </form>
                    <h1>{{newInfo}}</h1>
                </div>
            </section>
        </div>
    `,
    data: function(){
        return {
            newInfo: ''
        }
    },
    methods: {
        addInfo(){
            console.log("Funciona")
        }
    },
}

/*===| Routes Links |===*/
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/games',
        component: Games
    },
    {
        path: '/favourite',
        component: FavPlayed
    },
]

/*===| Vue Router Instance |===*/
const router = new VueRouter({
    routes
});

/*===| Vue Instance for #App |===*/
const App = new Vue({
    el: "#App",
    router,
    data: {
        
    },
});
