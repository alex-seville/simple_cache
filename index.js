var cache={};

module.exports = {
        checkCache: function(key){
            if (cache[key]){
                if (new Date().getTime() < cache[key].expires){
                    //console.log("using cache, expires on ",cache[key].expires);
                    return cache[key].value;
                 }else{
                     //console.log("cache expired, removing cache");
                     delete cache[key];
                 }
            }
            return null;
        },
        add: function(key,value,expiryDate){
            //defaults to a one hour expiry
            cache[key]={value: value,expires: expiryDate || new Date().setHours(new Date().getHours()+1)};
        }
};
