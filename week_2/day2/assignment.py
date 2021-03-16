# ASSIGNMENTS
# ? 1
# Create a User class, that has the ability to print the users name

# Create a TempUser class, that has the ability to only print his name.

# Create a function that as you to give the user a name, and give the user an age, and will then create the user for you, and print it to the screen. The user will have a choice to either be a temp user or a User

# # * Global Vars
# g_name = input("Whats your name? ")
# g_age = input("How old are you? ")


# # * Global function


# def userInput(name, age):
#     choice = input(
#         """What kind of user are you ((r)regular or (t)temporary)? """)
#     if choice == "r":
#         user = UserClass(name, age)
#         user.printUserInfo()
#     elif choice == "t":
#         temp = TempUserClass(name, age)
#         temp.printTempUserInfo()
#     else:
#         print("Invalid input")


# # * Classes


# class UserClass:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def printUserInfo(self):
#         print(f"The user's name is{self.name} and is {self.age} years old")


# class TempUserClass:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def printTempUserInfo(self):
#         print(
#             f"""The temporary user's name is {self.name} and is {self.age} years old""")


# # * Function call
# userInput(g_name, g_age)


# ? 2
# Create a building class **
# Will have height, capacity, sqft, commercial **
# Ask the user to create a building
# They will enter height, capacity, people, sqft
# Create five instances of building
# Print out specs of the building everytime a building is made
# The print statement needs to be a method


class Building:
    def __init__(self, height, capacity, people, sqft):
        self.height = height
        self.capacity = capacity
        self.people = people
        self.sqft = sqft
        # self.commercial = commercial

    def printSpecs(self):
        print(f"""
        The building is {self.height} feet tall
        The building has a max capcity of {self.capacity} people
        {self.people} people are expected to occupy the building
        The internal size is {self.sqft} square feet
        """)


def makeBuilding(height, capacity, people, sqft):
    build = Building(height, capacity, people, sqft)
    build.printSpecs()


count = 0
while count != 5:
    print("Lets design your building")
    l_height = int(input("How tall is it (in feet)? "))
    l_capacity = int(input("What's the max amount of people can it hold? "))
    l_people = int(input("How many people will actually be in the building? "))
    l_sqft = int(input("How big is the inside (in square feet ft^2)? "))

    makeBuilding(l_height, l_capacity, l_people, l_sqft)

    count += 1
