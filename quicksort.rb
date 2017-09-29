

def quicksort(arr, &prc)
  return arr if arr.length <=1

  prc||=Proc.new{|x,y| x < y }

  pivot = arr.first
  left = arr[1..-1].select{|num| prc.call(num, pivot) }
  right = arr[1..-1].select{|num| !prc.call(num,pivot) }

  quicksort(left, &prc) + [pivot] + quicksort(right, &prc)
end



arr = (0..10000).to_a.shuffle

puts quicksort(arr) == arr.sort


arr = (0..10000).to_a.shuffle

puts quicksort(arr){|x,y| x > y } == arr.sort.reverse
