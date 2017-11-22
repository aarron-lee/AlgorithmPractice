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
      return this.dequeStack[this.enqueStack.length-1];
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
