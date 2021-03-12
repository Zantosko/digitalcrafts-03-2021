# Fibonacci Sequence

sequence_up_to = int(input("Enter number > "))
# Inital values of the Fibacci Sequence
num1, num2 = 0, 1
# Sets intial count at 0
count = 0

if sequence_up_to <= 0:
    print("Error endter positive numbers or greater than 0")
elif sequence_up_to == 1:
    print(f"fib sequence for {sequence_up_to}")
    print(sequence_up_to)
else:
    # Iterates continously until counter is greater than the number that the user inputs
    while count < sequence_up_to:
        print(num1)
        # Holds sum of initial values
        added_nums = num1 + num2
        # Reassign second value to first value
        num1 = num2
        # Reassign first value to second value
        num2 = added_nums
        # Increment counter
        count += 1
