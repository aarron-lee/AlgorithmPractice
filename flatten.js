function flatten(arr){
  let result = [];

  arr.forEach( el =>{
    if( el instanceof Array ){
      result = result.concat( flatten(el) );
    }else{
      result.push(el);
    }
  });
  return result;
}


console.log(flatten ([1, 2, 3, [4, 5, [6], [ ] ] ]) );
