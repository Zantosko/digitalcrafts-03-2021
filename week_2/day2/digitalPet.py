"""
# * KEEPING YOURSELF ORGANIZED
# ? Define global functions and variables first at the top of your program
# ? Define Classes next and any unique methods inside of them
# ? Then define your while loop if you need the user to keep doing the task until a certain condition is met (remeber, your condition needs to be global, and needs to be re-assigned inside your while loop)
"""


# Use classes if you're working with multiple dicts that only differ in values but not in keys
class Spider:
    def __init__(self, name, strength, defense, hp):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp

    # Functions that defined inside of a class are called methods
    def feedSpider(self):
        print("delicious")
        self.strength += 5
        self.hp += 5

    def playedWithSpider(self):
        print("he's angry")
        self.defense += 5

    def smile(self):
        print(f"{self.name} smiled")

    # def howIsSpiderDoing(self):
    #     print("how you doing Spider?")
    #     print(petSpider)

    # def quit():
    #     exit(0)


class omegaSpider:
    def __init__(self, name, strength, defense, hp, size):
        self.name = name
        self.strength = strength
        self.defense = defense
        self.hp = hp
        self.size = size

    def smile(self):
        print(f"{self.name} smiled")


# Dot notation
# This is the way that you refer to items that exist in an object

# EXAMPLES OF CREATING NEW INSTANCES OF A SPIDER
peter = Spider("Peter", 20, 10, 100)
print(f"peters starting strength: {peter.strength}")
print(f"peters starting defense: {peter.defense}")
peter.feedSpider()
peter.playedWithSpider()
peter.smile()
print(f"peters ending strength: {peter.strength}")
print(f"peters ending defense: {peter.defense}")

venom = Spider("Venom", 30, 20, 200)
venom.smile()
# Dot notatinon refers to us using . and reference

carnage = omegaSpider("Carnage", 200, 100, 1000, "huge")
carnage.smile()


# fed the spider
# Using a globarl function inside of a method is totally fine
def welcomeMessage():
    message = int(input("""
    Please choose from the following:
    1. Feed Spider
    2. Play with Spider (he gets angry)
    3. Check on Spider
    4. Stare
    5. Quit
    """))

    return message


choice = ""
# while choice != 5:

#     choice = welcomeMessage()
#     if choice == 1:
#         # feedSpider()
#         pass
#     elif choice == 2:
#         # playedWithSpider()
#         pass
#     elif choice == 3:
#         # howIsSpiderDoing()
#         pass
#     elif choice == 4:
#         # print("Staring.......")
#         pass
#     elif choice == 5:
#         # quit()
#         pass
#     else:
#         pass  # Pass stops the code
