// always keeps track of max value in stack
// the max will be the top value of the max stack
// O(1) time for max
class MaxStack{
  constructor(){
    this.maxHistory = [];
    this.stack = [];
  }

  push(val){
    if(this.maxHistory.length === 0){
      this.maxHistory.push(val);
    }else if( this.maxHistory[this.maxHistory.length-1] <= val ){
      this.maxHistory.push(val);
    }
    this.stack.push(val);
    return true;
  }

  pop(){
    let poppedVal = this.stack.pop();
    if( this.max() === poppedVal ){
      this.maxHistory.pop();
    }
    return poppedVal;
  }

  max(){
    if(this.maxHistory.length > 0){
      return this.maxHistory[this.maxHistory.length-1];
    }
    return null;
  }

  size(){
    return this.stack.length;
  }

  length(){
    return this.stack.length;
  }

  bottom(){
    if(this.stack.length > 0){
      return this.stack[0];
    }
    return null;
  }

  top(){
    if(this.stack.length > 0){
      return this.stack[this.stack.length-1];
    }
    return null;
  }

  empty(){
    if(this.size() === 0){
      return true;
    }
    return false;
  }

}

// always keeps track of min and max values in stack
// max values tracked by MaxStack
// the min will be the top value of the min stack
// O(1) time for min
class MinMaxStack extends MaxStack{

  constructor(){
    super();
    this.minHistory = [];
  }

  push(val){
    if(this.minHistory.length === 0){
      this.minHistory.push(val);
    }else if( this.minHistory[this.minHistory.length-1] >= val ){
      this.minHistory.push(val);
    }
    return super.push(val);
  }

  pop(){
    let poppedVal = super.pop();
    if( this.min() === poppedVal ){
      this.minHistory.pop();
    }
    return poppedVal;
  }

  min(){
    if(this.minHistory.length > 0){
      return this.minHistory[this.minHistory.length-1];
    }
    return null;
  }

}


// uses 2 MinMaxStacks to implement a queue
// has O(1) enqueue, amortized O(1) dequeue
// O(1) for max val, O(1) for min val
class MinMaxQueue {
  constructor(){
    this.enqueStack = new MinMaxStack();
    this.dequeStack = new MinMaxStack();
  }

  empty(){
    if( this.enqueStack.size() === 0 && this.dequeStack.size() === 0){
      return true;
    }
    return false;
  }

  enqueue(val){
    this.enqueStack.push(val);
  }

  dequeue(){
    if(this.dequeStack.size() === 0){
      this._moveElsToDequeStack();
    }
    if(this.dequeStack.size() > 0){
      return this.dequeStack.pop();
    }
    return null;
  }

  first(){
    if( !this.dequeStack.empty() ){
      return this.dequeStack.top();
    }else if( !this.enqueStack.empty() ){
      return this.enqueStack.bottom();
    }else{
      return null;
    }
  }

  last(){
    if( !this.enqueStack.empty() ){
      return this.enqueStack.top();
    }else if( !this.dequeStack.empty() ){
      return this.dequeStack.bottom();
    }else{
      return null;
    }
  }

  min(){
    let min1 = this.enqueStack.min();
    let min2 = this.dequeStack.min();

    if(min1 == null && min2 == null){
      return null;
    }
    if( min1 == null){
      return min2;
    }
    if( min2 == null){
      return min1;
    }
    if( min1 > min2){
      return min2;
    }
    if( min2 > min1){
      return min1;
    }
  }
  max(){
    let max1 = this.enqueStack.max();
    let max2 = this.dequeStack.max();

    if(max1 == null && max2 == null){
      return null;
    }
    if( max1 == null){
      return max2;
    }
    if( max2 == null){
      return max1;
    }
    if( max1 > max2){
      return max1;
    }
    if( max2 > max1){
      return max2;
    }
  }

  length(){
    return this.enqueStack.size() + this.dequeStack.size();
  }

  size(){
    return this.length();
  }

  _moveElsToDequeStack(){
    while(this.enqueStack.size() > 0){
      this.dequeStack.push( this.enqueStack.pop() );
    }
  }
}
