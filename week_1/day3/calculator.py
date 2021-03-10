# Calculator App
"""
Input 1 - Represents the first number
Input 2 - Represents the second number
Input 3 - Represents the third number
"""

print("Welcome to the Calculator Application")
first_number = int(input("Please enter a number > "))
operator = input("Please select an operator (+, -, *, /) > ")
second_number = int(input("Please enter another number > "))


def addition(a, b):
    return a + b


def subtraction(a, b):
    return a - b


def multiplication(a, b):
    return a * b


def division(a, b):
    return a / b


solution = None
if operator == "+":
    solution = addition(first_number, second_number)
    print(f"{first_number} + {second_number} = {solution}")
elif operator == "-":
    solution = subtraction(first_number, second_number)
    print(f"{first_number} - {second_number} = {solution}")
elif operator == "*":
    solution = multiplication(first_number, second_number)
    print(f"{first_number} * {second_number} = {solution}")
elif operator == "/":
    solution = division(first_number, second_number)
    print(f"{first_number} / {second_number} = {solution}")
else:
    print("Something went wrong, please restart.")

exit(0)
