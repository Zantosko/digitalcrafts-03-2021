# Functions

# Type of function
# built in function
# print("")
# length_of_number = len(2)
# print(1 + 3)

# Defining a function
# The word "def", the name of the function, and a colon(:)
# The indented block is the body of the code
# In the body of the function, you need a return statement
# def printMessage():
#     return print("hello")


# Functions that add numbers
# def add(number1, number2):
#     return number1 + number2


# Alternate way
# def add(number1, number2):
#     return print(number1 + number2)

# print(add(3, 5))


# Invoking a function
# printMessage()
# print(add(add(2, 3), add(4, 8)))  # => Don't invoke functions this way


# quitKey = ""

# getFirstNumber = input("Gimme a number")
# getSecondNumber = input("Gimme a second number")
# getOperand = input("Gimme an operand")

# if getOperand == "/" and quitKey != "q":
#     division(getFirstNumber, getSecondNumber)


# Function Practice

# num_1 = int(input("enter a number > "))
# operator = input("enter operand (+, -, *, /) > ")
# num_2 = int(input("enter another number > "))


# def add(firstNumber, secondNumber):
#     return print(firstNumber + secondNumber)


# def subtract(firstNumber, secondNumber):
#     return print(firstNumber - secondNumber)


# def multiply(firstNumber, secondNumber):
#     return print(firstNumber * secondNumber)


# def divide(firstNumber, secondNumber):
#     return print(firstNumber / secondNumber)


# while True:
#     if operator == "+":
#         add(num_1, num_2)
#         exit(0)
#     elif operator == "-":
#         subtract(num_1, num_2)
#         exit(0)
#     elif operator == "*":
#         multiply(num_1, num_2)
#         exit(0)
#     elif operator == "/":
#         divide(num_1, num_2)
#         exit(0)
#     else:
#         print("Input invalid, please restart")

#     num_1 = int(input("enter a number > "))
#     operator = input("enter operand (+, -, *, /) > ")
#     num_2 = int(input("enter another number > "))


def start():
    string = input("Enter a word or sentence > ")
    string_length = len(string)
    return print(string_length)


start()

# Combining Strings
ask_user = input("Type in a word: ")
ask_user_again = input("Type in another word: ")

# Scope
# Scope is about having access to certain things in your program
# Global scope, means anyone can access this variable function from anywhere inside your program
# Local scope, or LEXICAL SCOPE, means you only have access to certain variables INSIDE of a specific place
def print_input(firstMessage, secondMessage):
    combined_message = firstMessage + " " + secondMessage
    return print(combined_message)


# This will return an error because combinedMessage is only available in
print(combinedMessage)