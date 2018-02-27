class SmartCalculator {
 
    constructor(initialValue) {
      this.pastOper = [initialValue];
    }
  
    add(number) {
      this.pastOper.push("+",number);
      return this; 
    }
    
    subtract(number) {
      this.pastOper.push("-",number);
      return this;
    }
  
    multiply(number) {
      this.pastOper.push("*",number);
      return this;
    }
  
    devide(number) {
      this.pastOper.push("/",number);
      return this;
    }
  
    pow(number) {
      this.pastOper.push("^",number);
      return this;
    }
    
    toString() {
      
       for (var i=1; i<this.pastOper.length-1; i+=2){
        if (this.pastOper[i]=="^"){
          this.pastOper[i-1]=Math.pow(this.pastOper[i-1],this.pastOper[i+1]);
          this.pastOper.splice(i,2);
          i-=2;
        }
      }
      
       //check * /
      for (var i=1; i<this.pastOper.length-1; i+=2){
        if (this.pastOper[i]=="*"){
          this.pastOper[i-1]=this.pastOper[i-1]*this.pastOper[i+1];
          this.pastOper.splice(i,2);
          i-=2;
        }
         if (this.pastOper[i]=="/"){
          this.pastOper[i-1]=this.pastOper[i-1]/this.pastOper[i+1];
          this.pastOper.splice(i,2);
          i-=2;
        }
      }
      //check + - 
      for (var i=1; i<this.pastOper.length-1; i+=2){
        if (this.pastOper[i]=="+"){
          this.pastOper[i-1]=this.pastOper[i-1]+this.pastOper[i+1];
          this.pastOper.splice(i,2);
          i-=2;
        }
         if (this.pastOper[i]=="-"){
          this.pastOper[i-1]=this.pastOper[i-1]-this.pastOper[i+1];
          this.pastOper.splice(i,2);
          i-=2;
        }
      }
      console.log("value is"+this.pastOper[0]);
      var value=this.pastOper[0];
      return value;
    }
    
  

}

module.exports = SmartCalculator;
