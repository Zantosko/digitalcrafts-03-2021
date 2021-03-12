# Calculator App
"""
Input 1 - Represents the first number
Input 2 - Represents the second number
Input 3 - Represents the third number
"""

print("Welcome to the Calculator Application")
print("Enter 'q' to quit at any time")
# first_number = input("Please enter a number > ")
# operator = input("Please select an operator (+, -, *, /) > ")
# second_number = input("Please enter another number > ")


def quit():
    exit(0)


def addition(a, b):
    return a + b


def subtraction(a, b):
    return a - b


def multiplication(a, b):
    return a * b


def division(a, b):
    return a / b


# Make quit function
operation = list(map(str, input("> ").split()))
length = len(operation)

if operation == "q":
    quit()
else:
    pass

while True:
    if length > 3:
        print("No more than 3 arguments")
        operation = list(map(str, input("> ").split()))
        length = len(operation)
    else:
        break


while True:
    solution = None
    if operation[1] == "+":
        solution = addition(int(operation[0]), int(operation[2]))
        print(f"{operation[0]} + {operation[2]} = {solution}")
        exit(0)
    elif operation[1] == "-":
        solution = subtraction(int(operation[0]), int(operation[2]))
        print(f"{operation[0]} - {operation[2]} = {solution}")
        exit(0)
    elif operation[1] == "*":
        solution = multiplication(int(operation[0]), int(operation[2]))
        print(f"{operation[0]} * {operation[2]} = {solution}")
        exit(0)
    elif operation[1] == "/":
        solution = division(int(operation[0]), int(operation[2]))
        print(f"{operation[0]} / {operation[2]} = {solution}")
        exit(0)
    else:
        print("Something went wrong, please restart.")
