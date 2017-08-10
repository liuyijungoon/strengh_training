function rm_same_num(arr,ch) {
    let result=[];
    for (var y of arr)
    {
        if (y!=ch)
        {
            result.push(y);
        }
    }
    return result;
}
function is_in_array(arr,ch) {
    for (var item of arr)
    {
        if (item==ch)
        {
            return true;
        }
    }
    return false;
}
module.exports =function find_num(arr) {
    var result=[];
    for (var x of arr)
    {
        if(!is_in_array(result,x))
        {
            result.push(x);
        }else
        {
            result=rm_same_num(result,x);
        }
    }
    return result[0];
}