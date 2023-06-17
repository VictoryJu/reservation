export class ReserveListComponent {
    constructor (reserveDatas,app){
        this.app = app;
        this.render(reserveDatas);
    }
    render(data){
        const result = data.reservations.map((item)=>{
            return`
                <div class="reservation-wrap">
                    <div class="left-item">
                        <div> ${item.id} </div>
                        <div>시간</div>
                        <div class="status">상태</div>
                    </div>
                    <div class="center-item">
                        <div class="name">예약자명 - 테이블명</div>
                        <div class="type">성인 아이</div>
                        <div class="menu">메뉴명</div>
                    </div>
                    <button class="reserve-btn">버튼</button>
                </div>
            `
        });
        console.log(result)
        this.app.innerHTML = result.join("");
    }
    
}