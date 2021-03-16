"""
# * You have two charcaters, a Hero and a Goblin
# * Your goal is to let them fight, whoever wins, will be printed out in a victory message (fancy way of saying a function that prints)
# * Whoever is defeated can be printed out in that message as well

# ? Human
name
attack
defense
hp

# ! Goblin
name
attack
defense
hp
clan
"""


class Hero:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Hero"

    def takeDamage(self):
        self.hp -= 5


class Goblin:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Goblin"

    def takeDamage(self):
        self.hp -= 5


class Wizard:
    def __init__(self, name, hp):
        self.name = name
        self.hp = hp
        self.characterClass = "Wizard"


def characterCreate():
    charName = input("What is your name?")
    charClass = input(
        " What is your class? Choose exactly ((w)Wizard, (g)Goblin, (h)Hero")

    if charClass == "w":
        charcter = Wizard(charName, 300)
    elif charClass == "g":
        charcter = Goblin(charName, 200)
    elif charClass == "h":
        charcter = Hero(charName, 250)
    else:
        print("Error")


def characterAttack(char1, char2):
    print(f"{char1.name} attacks {char2.name}")
    char2.takeDamage()
    print(f"{char2.name} takes 5 damage")
    print(f"{char2.name} has {char2.hp} left")


def victoryMessage(hero, goblin):
    print(f"{hero.name} and defeated {goblin.name}")


bob = Goblin("Bob", 10)
phil = Hero("Hero", 10)
whitney = Hero("Whitney", 10)
randi = Hero("Randi", 10)
randy = Goblin("Randy", 10)
Zach = Wizard("Zach", 300)

# print(f"The name of this character: {bob.name}")
# print(f"The name of this character: {phil.name}")
# print(f"The name of this character: {whitney.name}")
# print(f"The name of this character: {randi.name}")
# print(f"The name of this character: {randy.name}")
# print(f"The name of this character: {zach.name}")


# randi to punch randy, simulating your character attacking another character

# you take 5 damage to your health
# I ask tthe user to type in their name
# I give them health values
# I print out their health values
# I then set a global variabel to be the while loop condition

character = characterCreate()
# while character.hp > 0:
#     characterAttack(randi, randy)
#     if randy.hp == 0:
#         victoryMessage(randi, randy)
