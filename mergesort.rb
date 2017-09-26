

def mergesort(arr, &prc)
  prc ||= Proc.new{|x,y| x< y}

  return arr if arr.length <=1

  middle_idx = (arr.length/ 2)-1
  left = mergesort(arr[0..middle_idx], &prc)
  right = mergesort(arr[(middle_idx+1)..-1], &prc)

  merge(left, right, &prc)

end

def merge(left, right, &prc)
  merged = []
  until left.empty? || right.empty?
    result = prc.call( left.first, right.first )

    if result == -1 || result == true
      merged << left.shift
    else
      merged << right.shift
    end
  end
  merged + left + right

end






arr = (0..10000).to_a.shuffle


puts mergesort(arr) == arr.sort


arr = (0..10000).to_a.shuffle

puts mergesort(arr){|x,y| y <=> x} == arr.sort.reverse
