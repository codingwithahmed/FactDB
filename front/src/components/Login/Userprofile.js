var  Userprofile = ( function( ) {
    var username = "";

    function getname (){
        return username
    }


    var setName = function(name) {
        username = name;
    }


    return{
        getname:getname,
        setname : setName
    }

})();

export default Userprofile;