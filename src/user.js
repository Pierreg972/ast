module.exports = {
    save: function(name, pwd, callback) {
      if(callback == null) {
         pwd(new Error('missing parameters'))
      } else {
         //console.log("saving " + name + " with pwd " + pwd)
         callback()
      }
    }, //callback always last argument of function
    get: function(name, callback) {
        //console.log("saving " + name)
        if(callback == null) {
          name(new Error('missing parameters'))
       } else {
          //console.log("saving " + name + " with pwd " + pwd)
          callback()
       }
    }
}
