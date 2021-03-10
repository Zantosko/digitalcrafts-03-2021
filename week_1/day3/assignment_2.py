# Asks user for input and assigns it to variable
user_first_name = input("What is your first name? ")
# Gets length of that variable and assigns it to a new varible
length_of_first_name = len(user_first_name)

# While loop that runs until user's first name is given
while length_of_first_name < 1:
    # Prompts user again for first name and reassigns it
    user_first_name = input("What is your first name? ")
    # Reassigns length of input
    length_of_first_name = len(user_first_name)

# Asks user for last name and assigns it to a variable
user_last_name = input("What is your last name? ")
# Gets length of that variable and assigns it to a new variable
length_of_last_name = len(user_last_name)

# While loop that runs until user's last name is given
while length_of_last_name < 1:
    # Prompts user again for last name and reassigns it
    user_last_name = input("What is your last name? ")
    # Reassigns length of input
    length_of_last_name = len(user_last_name)

# Prints out user first name and last name
print(f"Your name is {user_first_name} {user_last_name}")

# Same set of steps but for the friend's name
friends_first_name = input("What is your friend's first name? ")
length_of_friends_first_name = len(friends_first_name)

while length_of_friends_first_name < 1:
    friends_first_name = input("What is your friend's first name? ")
    length_of_friends_first_name = len(friends_first_name)

friends_last_name = input("What is your friend's last name? ")
length_of_friends_last_name = len(friends_last_name)

while length_of_friends_last_name < 1:
    friends_last_name = input("What is your friend's last name? ")
    length_of_friends_last_name = len(friends_name)

# Prints out first and last names of user and the user's friend
print(
    f"{user_first_name} {user_last_name} is friends with {friends_first_name} {friends_last_name}"
)
