
module.exports =  {
  Locations : {},
  
  saveLocations : function(book){
    this.Locations[location.id]= location;
  },
  AllLocations: function(){
    var rtnValue =[];
    for (var item in this.Locations) {
      rtnValue.push(this.Locations[item]);
    };
    return rtnValue;
  },
  findLocations : function(id){
    return this.Locations[id];
  },
  
  NumPresent : {},
  
  saveNumPresentLocation : function(location){
    this.NumPresent[location.id]= location;
  },
  AllNemPresent: function(){
    var rtnValue =[];
    for (var item in this.NemPresent) {
      rtnValue.push(this.NemPresent[item]);
    };
    return rtnValue;
  },
  findNumPresentLocation : function(Name){
    return this.Locations[Name];
  }
};