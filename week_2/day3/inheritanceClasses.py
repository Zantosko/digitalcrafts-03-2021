# Dictionary
# dictonaryName[""]

# List
# listName[0]

# This is for a Class instance
# classNameThatWeStoreTheInstanceIn.whateverValue


class Currency:
    # Explicitly defining these variables
    def __init__(self, name, homeNationCurrency, price, quantity):
        self.name = name
        self.homeNationCurrency = homeNationCurrency
        self.price = price
        self.quantity = quantity

    # If you need to reference values within __init__() then you need to pass in self as a parameter for your methods
    def printCurrency(self):
        print(f"{self.name}, {self.price}, {self.homeNationCurrency} {self.quantity}")

    def increaseQuantity(self, amount):
        self.quantity += amount
        self.printCurrency()

# yen = Currency("Yen", "Japan", 20)
# prints out actual price
# print(f"{yen.price}")
# print out (actual name, actual price, actual nation of this currency)
# print(f"{yen.name}, {yen.price}, {yen.homeNationCurrency}")

# Accessing class attributes
# usDollar = Currency("Dollar", "US", 1)
# print(f"{usDollar.name}, {usDollar.price}, {usDollar.homeNationCurrency}")


# Accessing class methods
swedishKrona = Currency("Krona", "Sweeden", 1, 100)
swedishKrona.printCurrency()

# I want to add a specified quantity to the specified currency of my choice
swedishKrona.increaseQuantity(100)


# * Inheritance Practice

# Sub Classes
# The value in parenthesis is the Super Class(or Parent Class)
# Sub classes inherit the state(attributes) and methods(functions) from their Parent Class
# In programming children inherit from their Parent, but the parent cannot access from the child
class CryptoCurrency(Currency):
    # Only pass new attributes to subclasses, that way it will overide the parent and make this volatility attribute available in CrytoCurrency
    def __init__(self, name, homeNationCurrency, price, quantity, volatility):
        # super() allows you to overide the Parent Class while still having access to values that are hard coded into it
        def super().__init__(self, name, homeNationCurrency, price, quantity):
            pass

    # Implicit inheritence because the self value comes from the Parent Class

    def to_the_moon(self):
        self.price *= 1000

    # This only affects this child and the child of this class, but it will not affect the parent class
    def printCurrency(self):
        print("No you print doge")


doge = CryptoCurrency("DogeCoin", "Doge Nation", 5, 1000000)
print(f"The currency is {doge.name}")

doge.printCurrency()
doge.to_the_moon()

# usDollar.to_the_moon() # This will not work because this method is only can only be accessed by the child class(sub class)


class ScamCurrency(CryptoCurrency):
    def sendYourPersonalData(self):
        print("You got scammed")


xvg = ScamCurrency("XVG", "SuperDuperSecure Money", 0, 10)


xvg.printCurrency()
xvg.to_the_moon()
xvg.sendYourPersonalData()
xvg.printCurrency()
swedishKrona.printCurrency()
