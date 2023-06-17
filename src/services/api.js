const apiUrl = "https://frontend.tabling.co.kr/v1"
export const getOrders = async ()=>{
    try{
        const response = await fetch(`${apiUrl}/store/9533/reservations`);
        if(response.status === 200){
            const result = await response.json();
            return result;
        }else{
            throw new Error("GET API Error");
        }
    }catch(e){
        throw new Error(e);
    }
}