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


// uses 2 stacks to implement a queue
class StackQueue {
  constructor(){
    this.enqueStack = [];
    this.dequeStack = [];
  }

  empty(){
    if( this.enqueStack.length === 0 && this.dequeStack.length === 0){
      return true;
    }
    return false;
  }

  enqueue(val){
    this.enqueStack.push(val);
  }

  dequeue(){
    if(this.dequeStack.length === 0){
      this._moveElsToDequeStack();
    }
    if(this.dequeStack.length > 0){
      return this.dequeStack.pop();
    }
    return null;
  }

  first(){
    if( this.dequeStack.length > 0){
      return this.dequeStack[this.dequeStack.length-1];
    }else if (this.enqueStack.length > 0){
      return this.enqueStack[0];
    }else{
      return null;
    }
  }

  last(){
    if( this.enqueStack.length > 0){
      return this.enqueStack[this.enqueStack.length-1];
    }else if (this.dequeStack.length > 0){
      return this.dequeStack[0];
    }else{
      return null;
    }
  }

  _moveElsToDequeStack(){
    while(this.enqueStack.length > 0){
      this.dequeStack.push( this.enqueStack.pop() );
    }
  }
}
