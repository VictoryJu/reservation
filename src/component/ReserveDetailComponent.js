import { statusType } from "../data/statusType.js";
import { timeFormat } from "../utils/timeFormat.js";

const DIM_EL = document.querySelector(".dim");

export class ReserveDetailComponent {
    constructor (reserveData,app,showMobile){
        this.app = app;
        this.showMobile = showMobile
        this.initialData = reserveData;
        this.render(this.initialData);
        this.outSideClick();
        this.closeBtnClick();
    }

    initialData
    
    render(reserve){
        if(this.showMobile){
            this.app.className += " active";
            DIM_EL.style.display = "block"
        }
        const {timeRegistered,timeReserved,status} = reserve;
        const {name,level,memo,request} = reserve.customer;
        const registeredTime = timeFormat(timeRegistered);
        const reservedTime = timeFormat(timeReserved);
        const result = `
        <div class="detail-wrap">
            <div class="title">
                예약 정보
                <div class="close-btn">닫기</div>
            </div>
            <div class="info-line">
                <div class="left-item">예약 상태</div>
                <div class="right-item">${statusType[status].description}</div>
            </div>
            <div class="info-line">
                <div class="left-item">예약 시간</div>
                <div class="right-item">${reservedTime}</div>
            </div>
            <div class="info-line">
                <div class="left-item">접수 시간</div>
                <div class="right-item">${registeredTime}</div>
            </div>
        </div>
        <div class="customer-wrap">
            <div class="title customer">고객 정보</div>
            <div class="info-line">
                <div class="left-item">고객 성명</div>
                <div class="right-item name">${name}</div>
            </div>
            <div class="info-line">
                <div class="left-item">고객 등급</div>
                <div class="right-item">${level}</div>
            </div>
            <div class="info-line">
                <div class="left-item">고객 메모</div>
                <div class="right-item memo">${memo}</div>
            </div>
        </div>
        <div class="request-wrap">
            <div class="info-line">
                <div class="left-item">요청 사항</div>
                <div class="right-item requset">${request}</div>
            </div>
        </div>
        `
        this.app.innerHTML = result
    }

    closeApp(){
        this.app.style.display = "none";
        this.app.className = this.app.className.replace(" active","");
        DIM_EL.style.display = "none"
        return
    }

    closeBtnClick(){
        const closeEl = document.querySelector(".close-btn");
        closeEl.addEventListener("click",()=>{
            this.closeApp()
            return
        })
        return
    }

    outSideClick(){
        document.addEventListener("click", (event) => {
            const targetEl = event.target;
            if (DIM_EL.contains(targetEl)) {
              this.closeApp()
              return
            }
          });
          return
    }
}