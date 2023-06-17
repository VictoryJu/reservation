import { statusType } from "../data/statusType.js";
import { timeFormat } from "../utils/timeFormat.js";

export class ReserveListComponent {
    constructor (reserveDatas,app){
        this.app = app;
        this.render(reserveDatas);
    }

    render(data){
        const result = data.reservations.filter(item=>item.status!=="done").map((item)=>{
            const tables = item.tables.map((table)=>table.name).join(", ");
            const menus = item.menus.map((menu)=>`${menu.name}(${menu.qty})`).join(", ");
            const registered = timeFormat(item.timeRegistered);
            return`
                <div class="reservation-wrap">
                    <div class="left-item">
                        <div>${registered}</div>
                        <div class="status">${statusType[item.status].description}</div>
                    </div>
                    <div class="center-item">
                        <div class="name">${item.customer.name} - ${tables}</div>
                        <div class="type">성인 ${item.customer.adult} 아이 ${item.customer.child}</div>
                        <div class="menu">${menus}</div>
                    </div>
                    <button class="reserve-btn">${statusType[item.status].btnText}</button>
                </div>
            `
        });
        this.app.innerHTML = result.join("");
    }
    
}