function shoppingCar(typePaella){
    this.typePaella = typePaella;
    var arrayElements = [];

    this.compositeProto = function(){
      var objectComposite = {

      add: function(products){
        arrayElements.push(products);
    },

      remove: function (products){

        arrayElements.split(0, this.arrayElements.length);
        arrayElements.add(arrayElements);

        return arrayElements;
      }
    }
    return objectComposite;
}
}
    function buildShoppingCar(typeProduct,products){
      var Car = new shoppingCar(typeProduct);
      var resultCar = Car.compositeProto().add(products);

      return resultCar;
    }
