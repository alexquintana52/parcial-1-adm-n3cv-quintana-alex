import {HomeCard} from '../components/HomeCard.js'
import {HomeCard_2} from '../components/HomeCard_2.js'

/*===| Home Section |===*/
export const Home = {
    template: `
        <div>
            <section class="home__section">
                <div class="container">
                    <HomeCard></HomeCard>
                </div>
            </section>
            <section class="home__section-2 my-5 py-5">
                <div class="container">
                    <HomeCard-2></HomeCard-2>
                </div>
            </section>
        </div>
        
    `,
    data: function(){
        return {
            HomeCard,
            HomeCard_2
        }
    },
}