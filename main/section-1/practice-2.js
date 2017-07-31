'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var result=[];
    var a=collectionB[0];
    for (var i=0;i<collectionA.length;i++)
    {
        for (var j=0;j<a.length;j++)
        {
            if(collectionA[i]==a[j])
            {
                result.push(a[j]);
            }
        }
    }
  return result;
}
