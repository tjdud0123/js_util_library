// 시작 / 끝 타임스탬프 주입시 시간 차이 return
const getDiff = function (startTime, endTime) {
    const diffTstmp = endTime - startTime;
    const diffMin = Math.floor(diffTstmp / 1000 / 60);
    const diffHour = Math.floor(diffTstmp / 1000 / 3600);
    return { diffMin, diffHour };
},

// 대상이 어제인지 반환
const getIsYesterday = function (insertedTstmp, curTstmp) {
    let yesterday = new Date(curTstmp);
    yesterday.setDate(yesterday.getDate() - 1); // 어제
    const yesterdayStr = yesterday.toDateString();
    let insertedDate = new Date(insertedTstmp); // 내일 자정
    const insertedDateStr = insertedDate.toDateString();
    return yesterdayStr === insertedDateStr;
},

// date 타입 확인
if(!isNaN(date.getTime())) {
    console.log('valid Date Type')
}
