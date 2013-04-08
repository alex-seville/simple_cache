var cache={};

module.exports = {
        checkCache: function(key,cb){
            if (cache[key]){
                if (new Date().getTime() < cache[key].expires){
                    console.log("using cache, expires on ",cache[key].expires);
                    cb(cache[key].html);
                    return true;
                 }else{
                     console.log("removing cache");
                     delete cache[key];
                 }
            }
            return null;
        },
        add: function(key,value,expiryDate){
            cache[key]={html: value,expires: expiryDate || new Date().setHours(new Date().getHours()+1)};
        }
};
