// 시작 / 끝 타임스탬프 주입시 시간 차이 return
const getDiff = function (startTime, endTime) {
    const diffTstmp = endTime - startTime;
    const diffMin = Math.floor(diffTstmp / 1000 / 60);
    const diffHour = Math.floor(diffTstmp / 1000 / 3600);
    return { diffMin, diffHour };
},
