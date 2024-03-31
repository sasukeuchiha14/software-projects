#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_ROOMS 10

struct Customer {
    char name[50];
    int age;
    long long int number;
    char mail[50];
    char address[100];
};

void displayCustomerInfo(struct Customer customer) {
    printf("\nName: %s\n", customer.name);
    printf("Age: %d\n", customer.age);
    printf("Phone Number: %lld\n", customer.number);
    printf("Email: %s\n", customer.mail);
    printf("Address: %s\n", customer.address);
}

typedef struct {
    int roomNumber;
    bool isReserved;
} Room;

Room rooms[MAX_ROOMS];

void initializeRooms() {
    for (int i = 0; i < MAX_ROOMS; i++) {
        rooms[i].roomNumber = i + 1;
        rooms[i].isReserved = false;
    }
}

void displayRooms() {
    printf("Available Rooms:\n");
    for (int i = 0; i < MAX_ROOMS; i++) {
        if (!rooms[i].isReserved) {
            printf("Room %d\n", rooms[i].roomNumber);
        }
    }
}

bool reserveRoom(int roomNumber,int days) {
    if (roomNumber < 1 || roomNumber > MAX_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (rooms[roomNumber - 1].isReserved) {
        printf("Room %d is already reserved!\n", roomNumber);
        return false;
    }

    else {
        printf("For how many days do you want to reserve the room? ");
        scanf("%d", &days);
        if (days < 1)
        {
            printf("Invalid number of days!\n");
            return false;
        }
        else if (days > 10)
        {
            printf("You can reserve a room for a maximum of 10 days!\n");
            return false;
        }
        else
        {
            rooms[roomNumber - 1].isReserved = true;
            printf("Room %d reserved successfully!\n", roomNumber);
            return true;
        }
    }
}

bool cancelReservation(int roomNumber) {
    if (roomNumber < 1 || roomNumber > MAX_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (!rooms[roomNumber - 1].isReserved) {
        printf("Room %d is not reserved!\n", roomNumber);
        return false;
    }

    else {
        rooms[roomNumber - 1].isReserved = false;
        printf("Reservation for room %d cancelled successfully!\n", roomNumber);
        return true;
    }
}

int main() {
    int choice;
    struct Customer customer;
    char yn1[5],yn2[5];
    initializeRooms();
    int cost = 1000;
    int roomNumber,days;
    while (true) {
        printf("\nMenu:\n1. Customer info\n2. Display available rooms\n3. Reserve a room\n4. Cancel Reservation\n5. Generate Bill \n6. Exit\n\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter customer name: ");
                scanf("%s", customer.name);
                printf("Enter customer age: ");
                scanf("%d", &customer.age);
                printf("Enter customer phone number: ");
                scanf("%lld", &customer.number);
                printf("Enter customer email: ");
                scanf("%s", customer.mail);
                printf("Enter customer address: ");
                scanf("%s", customer.address);
                displayCustomerInfo(customer);
                break;
            case 2:
                displayRooms();
                break;
            case 3:
                printf("Enter the room number to reserve: ");
                scanf("%d", &roomNumber);
                reserveRoom(roomNumber,days);
                break;
            case 4:
                printf("Enter the room number to cancel reservation: ");
                scanf("%d", &roomNumber);
                cancelReservation(roomNumber);
                break;
            case 5:
                printf("\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
                printf("Customer Name     : %s\n", customer.name);
                printf("Customer Age      : %d\n", customer.age);
                printf("Customer Phone No : %lld\n", customer.number);
                printf("Customer Email    : %s\n", customer.mail);
                printf("No. of days stayed: %d\n", days);
                printf("Room cost per day : %d\n", cost);
                printf("Cost (without gst): %d\n", cost * days);
                printf("Final Cost        : %.2f\n", cost*days*1.18);
                printf("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
                break;
            case 6:
                printf("Are you sure you want to exit? (y/n): ");
                scanf("%s", yn1);
                if (strcmp(yn1, "y") == 0) {
                    printf("Would you like to provide feedback? (y/n): ");
                    scanf("%s", yn2);
                    if (strcmp(yn2, "y") == 0) {
                        printf("Please provide your feedback: ");
                        char feedback[100];
                        scanf("%s", feedback);
                        printf("Thank you for your feedback!\n");
                    }
                    else if (strcmp(yn2, "n") == 0) {
                        printf("Thank you for using our service!\n");
                    }
                    else {
                        printf("Invalid choice! Thank you for using our service!\n");
                    }
                    return 0;
                }
                else if (strcmp(yn1, "n") == 0) {
                    printf("Returning to main menu...\n");
                }
                else {
                    printf("Invalid choice! Returning to main menu...\n");
                }
                break;
            default:
                printf("Invalid choice! Please try again.\n");
                break;
        }
    }
}