function find_median(arr) {
    if (arr.length%2===1)
    {
        return arr[(arr.length+1)/2-1];
    }else
    {
        return (arr[arr.length/2-1]+arr[arr.length/2])/2
    }
}
module.exports= find_median;