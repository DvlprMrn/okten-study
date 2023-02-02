import {Simpson} from "./components/Simpson/Simpson";

const App = () => {
    return (
        <div>
            <Simpson name={'Homer'} surname={'Simpson'} image={'https://fthmb.tqn.com/X46F1PuWJuhGdwkhM8UlU5GxUnE=/1372x1800/filters:fill(auto,1)/Simpsons_09_Homer_V2F_hires1-56e1eccc5f9b5854a9f89a63.jpg'}/>
            <Simpson name={'Marge'} surname={'Simpson'} image={'https://www.clipartkey.com/mpngs/m/61-618592_download-marge-simpson-clipart-com-free-for-personal.png'}/>
            <Simpson name={'Lisa'} surname={'Simpson'} image={'https://pre00.deviantart.net/38fa/th/pre/i/2010/341/6/c/lisa_simpson_by_kass_93-d34ejaf.png'}/>
            <Simpson name={'Bart'} surname={'Simpson'} image={'https://pngimg.com/uploads/simpsons/simpsons_PNG73.png'}/>
            <Simpson name={'Meggie'} surname={'Simpson'} image={'https://alchetron.com/cdn/maggie-simpson-04a331a5-d649-4656-9c01-2af66e35f82-resize-750.jpeg'}/>
        </div>
    );
};

export {App};