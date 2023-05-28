export const HomeCard = Vue.component('HomeCard', {
    template:
    `
        <div class="row justify-content-center">
            <div class="col-12 col-lg-6 text-center">
                <h1 class="py-3"><span class="text-danger">¡</span>Bienvenidos a <span class="text-danger">Zona Gamer!</span><br>Sumérgete en el Mundo Virtual</h1>
                <p>Bienvenido a <b class="text-danger">Zona Gamer</b>. Aquí encontrarás todo lo que necesitas para sumergirte en los <b class="text-danger">universos virtuales más increíbles y emocionantes</b>. Desde los juegos más clásicos hasta los más modernos y sorprendentes, tenemos una amplia selección que seguramente te cautivará.</p>
                <router-link to=/favourite class="btn btn-danger-2 rounded-0">Contacto</router-link>
            </div>
        </div>
    `
})