export const HomeCard_2 = Vue.component('HomeCard-2', {
    template:
    `
        <div class="row g-0 bg-dark home__card">
            <div class="col-12 col-lg-6">
                <div class="p-5">
                    <h2 class="ps-5 fw-bold border-danger border-start border-4">Los Mejores Juegos en un Solo Lugar</h2>
                    <p class="mt-5 text-white">Ya sea que quieras jugar solo o con amigos, tenemos una amplia selección de juegos para ti. Nuestros juegos están disponibles en varias plataformas, incluyendo <span class="text-danger">PC, PS5 y Xbox</span>, para que puedas jugarlos en cualquier momento y en cualquier lugar.</p>
                    <router-link to="/games" class="btn btn-danger-2 rounded-0">Nuestros Juegos</router-link>
                </div>
            </div>
        </div>
    `
})