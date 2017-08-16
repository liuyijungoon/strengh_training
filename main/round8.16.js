function main(arr) {
    let new_arr;
    let result=[];
    let expectText=''
    new_arr=arr.sort();
    for( let i=1;i<arr.length;i++)
    {
        if(new_arr[i]===new_arr[i-1]){
            result.push(new_arr[i]);
        }
    }
    expectText=expectText+result[0]
    for(let j=1;j<result.length;j++)
    {
        expectText=expectText+','
        expectText=expectText+result[j]
    }
    return expectText;
}
module.exports= main;