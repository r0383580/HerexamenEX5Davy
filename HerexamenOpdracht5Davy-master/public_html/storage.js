
module.exports =  {
  Locations : {},
  
  saveLocation : function(location){
    this.Locations[location.id]= location;
  },
  AllLocation : function(){
    var rtnValue =[];
    for (var item in this.Locations ) {
      rtnValue.push(this.Locations [item]);
    };
    return rtnValue;
  },
  findLocation : function(id){
    return this.Locations [id];
  },
  
   NumPresent: {},
  
    saveNumPresentLocation : function(location){
    this.books[location.id]= location;
  },
  AllNumPresent : function(){
    var rtnValue =[];
    for (var item in this.present) {
      rtnValue.push(this.persent[item]);
    };
    return rtnValue;
  },
  findNumPresentLocation : function(){
    return this.NumPresent[Name];
  }
};