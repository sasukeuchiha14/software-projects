# This program calculates the total wealth accumulated over a period of time given a certain rate of return and monthly savings

import sys

# Function to calculate total wealth accumulated over a period of time
def calculate_wealth_by_year(current_wealth, rate_of_return, monthly_savings, years):
    for year in range(1, years + 1):
        total_savings = current_wealth + (monthly_savings * 12 * year)
        interest = total_savings * (rate_of_return / 100)
        total_savings += interest
        print(f"Year {year}: Total wealth = {total_savings:.2f}")
    return 0

# Function to calculate the number of years it will take to reach a certain target wealth
def calculate_years_till_freedom(current_wealth, rate_of_return, monthly_savings, target_wealth):
    if rate_of_return == 0:
        print("The rate of return is 0. It will take infinite years to reach the target wealth.")
    else:
        years_to_freedom = (target_wealth - current_wealth) / (monthly_savings * 12 * (rate_of_return * 1.01))
        print(f"You will reach financial freedom in {years_to_freedom:.1f} years! Keep grinding!! ")
    return 0

# Input from user to determine which program to run to calculate wealth or years to freedom
prog = input("\nWhich program would you like to run? \n[ 'f' for FREEDOM | 'r' for RETURNS ] : ")

# Main program

# Input from user for current wealth, rate of return, and monthly savings
try:
    current_wealth = float(input("Enter your current wealth: "))
    rate_of_return = float(input("Enter estimated rate of return per annum (%): "))
    monthly_savings = float(input("Enter how much you can save per month: "))

# Error handling for invalid input
except ValueError:
    print("Invalid input. You must only enter numbers.")
    sys.exit()

# Run the program based on user input
if prog == 'r':
    # Input from user for investment period in years and run the calculate_wealth_by_year function
    years = int(input("Enter investment period in years: "))
    calculate_wealth_by_year(current_wealth, rate_of_return, monthly_savings, years)

elif prog == 'f':
    # Input from user for target wealth and run the calculate_years_till_freedom function
    try:
        target_wealth = float(input("How much money do you need to be financially free? "))
    except ValueError:
        print("Invalid input. You must only enter numbers.")
        sys.exit()
    else:
        calculate_years_till_freedom(current_wealth, rate_of_return, monthly_savings, target_wealth)

# Error handling for invalid input
else:
    print("Invalid input. Please enter 'f' for FREEDOM or 'r' for RETURNS.")