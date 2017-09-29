

def quicksort(arr)
  return arr if arr.length <=1

  pivot = arr.first
  left = arr[1..-1].select{|num| num < pivot }
  right = arr[1..-1].select{|num| num >= pivot}

  quicksort(left) + [pivot] + quicksort(right)
end



arr = (0..10000).to_a.shuffle

puts quicksort(arr) == arr.sort
