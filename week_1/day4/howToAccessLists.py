# This is a list
pets = ["dog", "cat", "monke", "pikachu"]
# Gets length of list
# Length is counted normally
# length = len(pets)
# print(length)

# Gets specific index of list
# Index always starts at zero
# dog = pets[0]

# If we try to access something that is not in the list, aka not indexed, we get an error
# dog = pets[8]
# print(dog)

# Accesses the end of a list
# If you give a negative INDEX, you access the end of the list
# demonSpawn = pets[-1]
# print(demonSpawn)

# If you want to access a range of vlaue in a list, you use a number and a colon: and then end of the range you want to access
# myFavoriteTwoAnimals = pets[0:2]
# print(myFavoriteTwoAnimals)

# If you start your index range with a negative, it starts from the end of the list, and then goes back however many times you want depending on the second number of the range.
demonSpawns = pets[-3:-1]
print(demonSpawns)