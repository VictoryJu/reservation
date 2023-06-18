import { ReserveListComponent } from "./component/ReserveListComponent.js";
import { getOrders } from "./services/api.js";

class App {
    constructor(app){
        this.app = app;
        this.render();
        this.outSideClick();
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

    outSideClick(){
        document.addEventListener("click", function (event) {
            const targetEl = event.target;
            const containerEl = document.querySelector("main");
            if (!containerEl.contains(targetEl)) {
              const detailEl = document.querySelector(".reservation-detail-container");
              detailEl.style.display = "none";
              return;
            }
          });
          return
    }
}
export default App;