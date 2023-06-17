export const timeFormat = (time)=>{
    const initialTime = new Date(time);
    const formattedTime = new Intl.DateTimeFormat("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(initialTime);
    return formattedTime
}