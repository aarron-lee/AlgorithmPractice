class Heap{

  constructor(){
    this.heap = [];
    this.comparator = null;
  }

  add(val){
    this.heap.push(val);
    this._reheapifyUp();
  }

  peek(){
    return this.heap[this.heap.length-1] ? this.heap[this.heap.length-1] : null;
  }

  delete(val){
    let idx = 0;

    while(idx < this.heap.length){
      let currentVal = this.heap[idx];
      if(currentVal === val){
        break;
      }else if( idx === this.heap.length-1 ){
        return null;
      }
      idx++;
    }

    this.deleteAt(idx);
  }

  deleteAt(idx){
    if(!idx){
      return null;
    }

    this._swap(idx, this.heap.length-1);
    this.heap.pop();

    idx = this._reheapifyUp(idx);
    this._reheapifyDown(idx);
  }

  _parent(idx){
    let parentIdx = Math.floor((idx - 1) / 2);

    if(parentIdx < 0){
      return -1;
    }

    return  { index: parentIdx, value: this.heap[parentIdx] };
  }

  _children(idx){
    let children = [];
    let child1Index = (2 * idx) + 1;
    if( this.heap[child1Index] ){
      children.push( { index: child1Index, value: this.heap[child1Index] } );
    }

    let child2Index = (2 * idx) + 2;
    if( this.heap[child2Index] ){
      children.push( { index: child2Index, value: this.heap[child2Index] } );
    }

    return children.length ? children : null;
  }

  _swap(idx1, idx2){
    let tmp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = tmp;
  }

  _root(){
    return this.heap[0] ? this.heap[0] : null;
  }

  _reheapifyUp(idx){
    if(!this.comparator){
      return null;
    }
    let currentIdx = idx !== undefined ? idx : this.heap.length-1;
    let parent = this._parent(currentIdx);

    //parent.value > this.heap[currentIdx]
    while( this.comparator(parent.value, this.heap[currentIdx]) ){
      this._swap(parent.index, currentIdx);
      currentIdx = parent.index;
      parent = this._parent(currentIdx);
    }
    return currentIdx;
  }

  _reheapifyDown(idx){
    if(!this.comparator){
      return null;
    }
    let children = this._children(idx);
    let currentNodeValue = this.heap[idx];
    while( children && children.length ){
      let node = this._priorityNode(children);

      if( this.comparator(currentNodeValue, node.value) ){
        this._swap(idx, node.index);
        idx = node.index;
        children = this._children(idx);
      }else{
        break;
      }
    }

  }

  _priorityNode(arr){
    if( arr.length == 2){
      if( this.comparator(arr[0].value, arr[1].value) ){
        return arr[1];
      }else{
        return arr[0];
      }
    }else if(arr.length === 1){
      return arr[0];
    }else{
      return null;
    }
  }

}

class MinHeap extends Heap{
  constructor(){
    super();
    this.comparator = (parentVal, currentVal) =>{
      if (parentVal > currentVal ){
        return true;
      }
      return false;
    }
  }

  min(){
    return this._root();
  }
}

class MaxHeap extends Heap{
  constructor(){
    super();
    this.comparator = (parentVal, currentVal) =>{
      if (parentVal < currentVal ){
        return true;
      }
      return false;
    }
  }

  max(){
    return this._root();
  }
}
