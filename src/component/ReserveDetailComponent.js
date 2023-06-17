import { statusType } from "../data/statusType.js";
import { timeFormat } from "../utils/timeFormat.js";

export class ReserveDetailComponent {
    constructor (reserveData,app){
        this.app = app;
        this.initialData = reserveData;
        this.render(this.initialData);
    }

    initialData

    render(reserve){
        this.app.style.display = "block"
        const registeredTime = timeFormat(reserve.timeRegistered);
        const reservedTime = timeFormat(reserve.timeReserved);
        const result = `
        <div class="detail-wrap">
            <div class="title">예약 정보</div>
                <div class="info-line">
                <div class="left-item">예약 상태</div>
                <div class="right-item">${statusType[reserve.status].description}</div>
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
                <div class="right-item">value</div>
            </div>
            <div class="info-line">
                <div class="left-item">고객 등급</div>
                <div class="right-item">value</div>
            </div>
            <div class="info-line">
                <div class="left-item">고객 메모</div>
                <div class="right-item">value</div>
            </div>
        </div>
        <div class="request-wrap">
            <div class="info-line">
                <div class="left-item">요청 사항</div>
                <div class="right-item">value</div>
            </div>
        </div>
        `
        this.app.innerHTML = result
    }
}