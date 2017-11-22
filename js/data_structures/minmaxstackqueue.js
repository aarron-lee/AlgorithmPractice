// uses 2 stacks to implement a queue
class StackQueue {
  constructor(){
    this.enqueStack = [];
    this.dequeStack = [];
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
    if(this.dequeStack.length === 0){
      this._moveElsToDequeStack();
    }
    if(this.dequeStack.length > 0){
      return this.dequeStack[this.dequeStack.length-1];
    }
    return null;
  }

  last(){
    if(this.dequeStack.length === 0){
      this._moveElsToDequeStack();
    }
    if(this.dequeStack.length > 0){
      return this.dequeStack[0];
    }
    return null;
  }

  _moveElsToDequeStack(){
    while(this.enqueStack.length > 0){
      this.dequeStack.push( this.enqueStack.pop() );
    }
  }

}
