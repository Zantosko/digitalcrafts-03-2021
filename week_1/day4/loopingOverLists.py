pets = ["doge", "cat", "monke", "pikachu"]
otherPets = ["mouse", "bird", "rabbit"]
people = ["bob", "sally", "will"]
# you can use len to find the length of the list
# print(len(pets))

# Loop over a list, a while loop requires a condition
index = 0
# while index < len(pets):
#     pet = pets[index]
#     print(f"What pet are you? I'm a {pet}")
#     index += 1  # => the same as index = index + 1


# For loop, for...in...
# The word after for is a variable that is created when the loop is made
# The word should be specific and a singular word
# Creating a index isn't required (index = 0)
# for..in.. loops are better for lists than while loops
count = 0
# write for, write the singular name of the lists you are looping over, write of, write the name of the list
for person in people:
    print(person)
    print(count)
    count += 1

# How do we combine lists?
# combinedList = pets + otherPets
# Alternate way

# Using append function
for pet in otherPets:
    pets.append(pet)

print(pets)

# Using extend function
pets.extend(people)
print(pets)


# How do we modify a list?
