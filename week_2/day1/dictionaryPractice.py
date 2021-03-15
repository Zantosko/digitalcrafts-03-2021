# Add personal info
digitalCraftsStudent = {
    "name": "Zachary Antosko",
    "city": "Houston",
    "computer": ["Macbook Pro"],
}
# Print out computer info in the terminal
# print(digitalCraftsStudent["computer"][0])


# add a platform, ps5, pc, xbox 1, switch, add your skill level ("noob", "not", "noob", "pwner")
gamer = {
    "platform": "PS5",
    "gamingHours": [{"weekday": "9-5"}, {"weekends": "anytime"}],
    "skill": "noob",
}
# print on the terminal, what time you would game?
# print(gamer["gamingHours"][1]["weekends"])
# Looping isn't necessary here because we only need to pinpoint one value in the list.
# If we wanted to print out the entire list then a for-loop would be used.


stonks = {
    "name": "Game Doge",
    "ticker": "GGDOG",
    "pricePerShare": 1,
    "denomination": "cent",
    "volume": 25,
    "volatility": "low",
    "startOfDayPrice": 2,
    "endOfDayPrice": 4,
    "market": ["US", "Europe"],
    "shareHolders": [
        {"name": "James Walden"},
        {"name": "LeRon Rovira"},
        {"name": "Kendall Burdette"},
        {"name": "Randi Reyna"},
        {"name": "Zachary Antosko"},
    ],
}

# print(stonks["name"])
# print(stonks["ticker"])
# stonks.update({"dividends": 1})

# Alternate update method
# stonks["dividends"] = 1
# print(stonks)

# print(stonks["shareHolders"][0]["name"])


# 1. print out a list of engine choices (the whole list) **
# 2. print out the horsepower values only (all of them) **
# 3. check to see if the value "trim" exist on the car dictionary **
# 4. add a new key to the car dictionary called "colors" which will be a list of all possible colors (use 4 color strings) **
# 5. find an image and put the url into https://bitly.com/, and paste shortened url into that "image" value

car = {
    "model": "",
    "image": "https://bit.ly/3vuIiIQ",
    "year": "",
    "engineChoices": [
        {"v4": {"horsepower": 230}},
        {"v6": {"horsepower": 300}},
        {"v8": {"horsepower": 400}},
        {"v12": {"horsepower": 900}},
    ],
}

# 1
print(car["engineChoices"])

# 2
print(car["engineChoices"][0]["v4"]["horsepower"])
print(car["engineChoices"][1]["v6"]["horsepower"])
print(car["engineChoices"][2]["v8"]["horsepower"])
print(car["engineChoices"][3]["v12"]["horsepower"])

print("''''''''''''''''''''")

# Alternate values
for hpValue in car["engineChoices"]:
    for key, value in hpValue.items():
        print(value["horsepower"])

# 3
print("trim" in car.values())

# 4
car.update({"colors": ["silver", "black", "white", "burgundy"]})
print(car)