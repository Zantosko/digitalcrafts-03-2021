# Sum of all multiples
list_of_numbers = list(range(1, 1001))
print(list_of_numbers)

list_to_add = []
total = 0

for num in list_of_numbers:
    if num % 3 == 0 or num % 5 == 0:
        list_to_add.append(num)

for num in range(0, len(list_to_add)):
    total += list_to_add[num]

print(total)