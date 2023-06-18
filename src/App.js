import { ReserveListComponent } from "./component/ReserveListComponent.js";
import { getOrders } from "./services/api.js";

class App {
    constructor(app){
        this.app = app;
        this.render();
    }
    async render() {
        try {
            const response = await getOrders();
            if(response) {
                const reserveListEl = document.querySelector("#reservation-container")
                new ReserveListComponent(response,reserveListEl);
            }
        } catch(e) {
            console.log(e);
        }
    }
}
export default App;