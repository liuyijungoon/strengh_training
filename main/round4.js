function table_delate(str,val) {
    val =val+'';
    let result;
    for (var i=0;i<str.length;i++)
    {
        if(val===str[i])
        {
            let str1=str.substr(0,i-2);
            let str2=str.substr(i+1,str.length);
            result=str1+str2;
            return result;
        }
    }

}
function is_in_array(arr,ch) {
    for (var item of arr)
    {
        if (item===ch)
        {
            return true;
        }
    }
    return false;
}
module.exports=function main(str,val) {
    val =val +'';
    while(is_in_array(str,val))
    {
        str=table_delate(str,val);
    }
    return str;
}