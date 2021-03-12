"""
TODO LIST
- Press 1 to add task
- Press 2 to delete task
- Press 3 to view all tasks
- Press q to quit
- The user should only be allowed to quit when they press 'q'
- Add Task: ask for "title" and "priority" (high, medium, and low )
- Delete Task: show user all the tasks along with index number of each task. User can then enter the index number of the task to delete the task.
- View all tasks: 
  Allow the user to view all the tasks in the following format:

  1 - Wash the car - high
  2 - Mow the lawn - low

  Store each task in a dictionary and use 'title' and 'priority' as keys of the dictionary.
  Store each dictionary inside an array. Array will represent list of tasks.
"""


def greet():
    print("Welcome to the TODO list application")
    message = """Press 1 to add a task
    Press 2 to delete a task
    Press 3 to view all tasks
    Press q to quit
    Enter task name and the priority level next to it
    Priorty Levels: low, medium, high"""
    print(message)


# Empty List
todo_list = []

# Add mode function
def add_mode():
    task = input("Enter task name > ")
    priority = input("What is the priority level? > ")
    if (
        (priority.lower() != "low")
        and (priority.lower() != "medium")
        and (priority.lower() != "high")
    ):
        print("Invalid priority level! Please restart!")
        start()

    item_dict = {"task": task, "priority": priority}
    todo_list.append(item_dict)

    print("Task has been added!")


# Delete mode function
def delete_mode():
    item_to_delete = int(input("> "))
    if (item_to_delete - 1 >= len(todo_list)) or (item_to_delete == 0):
        print("Invalid entry! Please restart!")
        start()

    todo_list.pop(item_to_delete - 1)

    return print("Task was deleted!")


# View items function
def view_items():
    count = 1
    for item in todo_list:
        print(f"{count} - {item}")
        count += 1


# Quit function
def quit():
    exit(0)


def start():
    greet()
    # Loop will run infinitely until valid input is given
    while True:
        mode = input("Please enter a value: ")
        if mode == "1":
            print(
                """
            You are now in add mode
            Put your task name for the first input
            Put your priority level for the second input"""
            )
            add_mode()
        elif mode == "2":
            print(
                """
            You are now in delete mode
            Enter the list number of the item you would like to delete"""
            )
            delete_mode()
        elif mode == "3":
            print("Current items in list")
            view_items()
        elif mode.lower() == "q":
            quit()
        else:
            print("Invalid input")


start()