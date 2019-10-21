function bubbleSort(str){
    let arr = str.split(',')
    let sortlog = []
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; i < arr.length - i - 1; j++){
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            sortLog.push([arr.concat(), [j, j + 1]])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1],arr[j]]
                sortLog.push([arr.concat(), [j, j + 1]])
            }
        }
    }
    sortLog.push([arr.concat(), [j, j + 1]])
    return sortLog
}
function showLog(logValues, showElement){
    let str = ''
    let {
        done,
        value: [row,pos]
    } = logValues.next()
}
function insertSort(str){
    let arr = str.split(',')
    for (let i = 1; i < arr.length; i++){
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]){
                [arr[j - 1],arr[j]] = [arr[j],arr[j - 1]]
            }
        }
    }
    return arr
}