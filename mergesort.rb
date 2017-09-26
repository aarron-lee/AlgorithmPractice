

def mergesort(arr, &prc)
  prc ||= Proc.new{|x,y| x< y}

  return arr if arr.length <=1

  middle_idx = (arr.length/ 2)-1
  left = mergesort(arr[0..middle_idx], &prc)
  right = mergesort(arr[(middle_idx+1)..-1], &prc)


  merge(left, right)


end

def merge(left, right, &prc)
  merged = []
  until left.empty? || right.empty?
    if left.first < right.first
      merged << left.shift
    elsif right.first < left.first
      merged << right.shift
    end
  end
  merged + left + right

end






arr = (0..10000).to_a.shuffle


puts mergesort(arr) == arr.sort
