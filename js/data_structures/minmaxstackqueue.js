// always keeps track of max value in stack
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
