module.exports=function find_all() {
    let result=[]
    for(var i=100;i<1000;i++)
    {
        if(i===(parseInt(i/100)*parseInt(i/100)*parseInt(i/100)+(parseInt(i/10)%10)*(parseInt(i/10)%10)*(parseInt(i/10)%10)+(i%10)*(i%10)*(i%10)))
        {
            result.push(i)
        }
    }
    return result;
}