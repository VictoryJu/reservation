import { statusType } from "../data/statusType.js";
import { timeFormat } from "../utils/timeFormat.js";

export class ReserveDetailComponent {
    constructor (reserveData,app){
        this.app = app;
        this.initialData = reserveData[0];
        this.render(this.initialData);
        this.outSideClick();
    }

    initialData
    render(reserve){
        const dimEl = document.querySelector(".dim");
        this.app.style.display = "block"
        dimEl.style.display = "block"
        const {timeRegistered,timeReserved,status} = reserve;
        const {name,level,memo,request} = reserve.customer;
        const registeredTime = timeFormat(timeRegistered);
        const reservedTime = timeFormat(timeReserved);
        const result = `
        <div class="detail-wrap">
            <div class="title">예약 정보</div>
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
            <div class="title">고객 정보</div>
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

    outSideClick(){
        document.addEventListener("click", function (event) {
            const targetEl = event.target;
            const containerEl = document.querySelector(".dim");
            if (containerEl.contains(targetEl)) {
              const detailEl = document.querySelector(".reservation-detail-container")
              const dimEl = document.querySelector(".dim");
              detailEl.style.display = "none";
              dimEl.style.display = "none";
              return;
            }
          });
          return
    }
}