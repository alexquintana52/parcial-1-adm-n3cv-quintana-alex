export const AboutCard_2 = Vue.component('AboutCard-2', {
    template:
    `
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
    `
})