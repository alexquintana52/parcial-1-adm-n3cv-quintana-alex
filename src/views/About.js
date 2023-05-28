import { AboutCard } from '../components/AboutCard.js'
import { AboutCard_2 } from '../components/AboutCard_2.js'

/*===| About Section |===*/
export const About = {
    template: `
        <div>
            <section class="about__section">
                <div class="container">
                    <div class="row justify-content-center">
                        <AboutCard></AboutCard>
                    </div>
                </div>
            </section>
            <section class="about__section-2 py-5">
                <div class="container">
                    <AboutCard-2></AboutCard-2>
                </div>
            </section>
        </div>
    `,
    data: function(){
        return {
            AboutCard,
            AboutCard_2
        }
    },
}