import Averagerating from "./averagerating";
import Sentimentanalysis from "./sentimentanalysis";
import Websitevisitors from "./websitevisitors";
import Reviews from "./reviews";
function Main() {
    return(
        <div id='main'>
            <Reviews />
            <Averagerating />
            <Sentimentanalysis />
            <Websitevisitors />
        </div>
    )
}

export default Main;