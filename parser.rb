File.open("books/OnWritingWell", "r") do |f|
  f.each_line do |line|
    puts line
  end
end