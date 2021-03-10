# String interpolation
# Means putting a dynamic value within a string
# print(f"Hello {name_of_user}, welcome to python")
# Alternate way to do it (Python2)
# print("Hello %s, welcome to python" % name_of_user)

# While Loop
# A condition will have to be true, then your loop will keep running
name_of_user = input("What is your first name? ")
length_of_user_name = len(name_of_user)
while length_of_user_name < 1:
    name_of_user = input("What is your first name? ")
    length_of_user_name = len(name_of_user)


last_name_of_user = input("What is your last name? ")
length_of_user_last_name = len(last_name_of_user)
while length_of_user_last_name < 1:
    last_name_of_user = input("What is your last name? ")
    length_of_user_last_name = len(last_name_of_user)

print(f"You name is {name_of_user} {last_name_of_user}")


# Takes user's last name as input
# lastNameOfUser = input("What is your last name? ")
# Stores length of characters from input
# length_of_user_last_name = len(lastNameOfUser)
# print(f"Hello {name_of_user} {lastNameOfUser}, welcome to Python")

# If statements
# Do somethiing if a certain condition happens or doesn't happen
# print("This is the length of user name ", length_of_user_name)
# print(f"This user name is {name_of_user} {lastNameOfUser}")

# If statements have if <your condition> :
# else: code goes below it
# if length_of_user_name > 0:
#     # if this username length is greater than 0, aka it returns TRUE, we do the code in here
#     name_of_friend = input("What is your friends name? ")
#     print("Your friend's name is", name_of_friend)
# else:
#     print("Please enter at least one letter...literally one letter")
