import { statusType } from "../data/statusType.js";
import { timeFormat } from "../utils/timeFormat.js";
import { ReserveDetailComponent } from "./ReserveDetailComponent.js";

export class ReserveListComponent {
    constructor (reserveDatas,app){
        this.app = app;
        this.initialDatas = reserveDatas.reservations;
        this.render(this.initialDatas);
    }

    initialDatas

    render(data){
        const result = data.filter(item=>item.status!=="done").map((item)=>{
            const tables = item.tables.map((table)=>table.name).join(", ");
            const menus = item.menus.map((menu)=>`${menu.name}(${menu.qty})`).join(", ");
            const reservedTime = timeFormat(item.timeReserved);
            return`
                <div id=${item.id} class="reservation-wrap">
                    <div class="left-item">
                        <div>${reservedTime}</div>
                        <div text-color=${item.status} class="status">${statusType[item.status].description}</div>
                    </div>
                    <div class="center-item">
                        <div class="name">${item.customer.name} - ${tables}</div>
                        <div class="type">성인 ${item.customer.adult} 아이 ${item.customer.child}</div>
                        <div class="menu">${menus}</div>
                    </div>
                    <button data-type="${item.status}" class="reserve-btn">${statusType[item.status].btnText}</button>
                </div>
            `
        });
        this.app.innerHTML = result.join("");
        this.setClickBtns()
        this.setClickDivs()
    }




    reserveBtnClicked (type,id) {
        if(type==='seated') this.deleteReserve(id);
        if(type==='reserved') this.updateReserve(id);
    }

    updateReserve(id){
        this.initialDatas = this.initialDatas.map(item=>{
            if(item.id===id){
                item.status = "seated"
            }
            return item
        });
        this.render(this.initialDatas);
        
        const detailReserveEl = document.querySelector("#reservation-detail-container");
        if(getComputedStyle(detailReserveEl).display==="block") this.reserveWrapClicked(id);
    }

    deleteReserve(id){
        this.initialDatas = this.initialDatas.filter(item => item.id !== id);
        this.render(this.initialDatas);
    }

    reserveWrapClicked(id){
        const detailReserve = this.initialDatas.filter(item=>item.id===id);
        const detailReserveEl = document.querySelector("#reservation-detail-container");
        new ReserveDetailComponent(detailReserve,detailReserveEl);
    }

    setClickBtns = () => {
            const buttons = document.getElementsByClassName("reserve-btn");
            Array.prototype.forEach.call(buttons,(button)=>{
                button.addEventListener("click",(el)=>{
                    el.stopPropagation();
                    this.reserveBtnClicked(el.target.dataset.type,el.target.parentElement.id);
                })
            })
        }
    
    setClickDivs = () => {
        const divLists = document.getElementsByClassName("reservation-wrap");
        Array.prototype.forEach.call(divLists,(div)=>{
            div.addEventListener("click",(el)=>{
                this.reserveWrapClicked(el.currentTarget.id);
            })
        })
    }
    
}