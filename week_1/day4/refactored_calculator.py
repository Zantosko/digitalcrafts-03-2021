# Calculator App
"""
Input 1 - Represents the first number
Input 2 - Represents the second number
Input 3 - Represents the third number
"""

print("Welcome to the Calculator Application")
print("Enter 'q' to quit at any time")
print(
    """Please enter 3 values 
The first value should be a number
The second value should be a operator (+, -, *, /)
The third value should be another number
After this you will be prompted again to press '=' for the solution"""
)


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


operation = list(map(str, input("Enter 3 values here > ").split()))
length = len(operation)


while operation[0] != "q":

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
            input_2 = input("Press '=' for solution > ")
            if input_2 == "=":
                print(f"{operation[0]} + {operation[2]} = {solution}")
                exit(0)
            else:
                print("Invalid input")
        elif operation[1] == "-":
            solution = subtraction(int(operation[0]), int(operation[2]))
            input_2 = input("Press '=' for solution > ")
            if input_2 == "=":
                print(f"{operation[0]} - {operation[2]} = {solution}")
                exit(0)
            else:
                print("Invalid input")
        elif operation[1] == "*":
            solution = multiplication(int(operation[0]), int(operation[2]))
            input_2 = input("Press '=' for solution > ")
            if input_2 == "=":
                print(f"{operation[0]} * {operation[2]} = {solution}")
                exit(0)
            else:
                print("Invalid input")
        elif operation[1] == "/":
            solution = division(int(operation[0]), int(operation[2]))
            input_2 = input("Press '=' for solution > ")
            if input_2 == "=":
                print(f"{operation[0]} / {operation[2]} = {solution}")
                exit(0)
            else:
                print("Invalid input")
        elif operation[0].lower() == "q":
            quit()
        else:
            print("Something went wrong, please restart.")
            quit()
