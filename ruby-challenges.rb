# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
def even_or_odd(number)
    if number % 2 == 0
      "#{number} is even"
    else
      "#{number} is odd"
    end
  end
  puts even_or_odd(reposts1)


reposts2 = 42
# Expected output: '42 is even'
def even_or_odd(number)
    if number % 2 == 0
      "#{number} is even"
    else
      "#{number} is odd"
    end
  end
puts even_or_odd(reposts2)

reposts3 = 221
# Expected output: '221 is odd'


def even_or_odd(number)
    if number % 2 == 0
      "#{number} is even"
    else
      "#{number} is odd"
    end
  end
puts even_or_odd(reposts3)

#Output for all three 
# 7 is odd
# 42 is even
# 221 is odd

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'

def remove_vowels(string)
  string = string.delete('aeiou')
  string
end

puts remove_vowels(beatles_album1)

beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'

def remove_vowels(string)
    string = string.delete('aeiou')
    string
  end
  
  puts remove_vowels(beatles_album2)

beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
    string = string.delete('aeiouAEIOU')
    string
  end
  
  puts remove_vowels(beatles_album3)

#Output for all three
# Rbbr Sl
# Sgt Pppr
# bby Rd


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'

def bckfwd1(string)
    if string.downcase == string.downcase.reverse
      "#{string} is a palindrome"
    else
      "#{string} is not a palindrome"
    end
  end
  
  puts bckfwd1(palindrome_test_case1)
  

palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'

def bckfwd2(string)
    if string== string.reverse
      "#{string} is a palindrome"
    else
      "#{string} is not a palindrome"
    end
  end
  
  puts bckfwd2(palindrome_test_case2)

palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def bckfwd3(string)
    if string.downcase == string.downcase.reverse
      "#{string} is a palindrome"
    else
      "#{string} is not a palindrome"
    end
  end
  
  puts bckfwd3(palindrome_test_case3)
  
# Output for all 3
# racecar is a palindrome
# LEARN is not a palindrome
# rotator is a palindrome
