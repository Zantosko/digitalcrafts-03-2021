# Fizz Buzz

num_list = list(range(1, 101))

for n, i in enumerate(num_list):
    if (i % 3 == 0) and (i % 5 == 0):
        num_list[n] = "FizzBuzz"
    elif i % 3 == 0:
        num_list[n] = "Fizz"
    elif i % 5 == 0:
        num_list[n] = "Buzz"

print(num_list)
