#include <stdio.h>
#include <string.h>

struct Customer {
    char name[50];
    int age;
    char address[100];
};

struct Room {
    int roomNumber;
    int capacity;
    int isOccupied;
};

void displayCustomerInfo(struct Customer customer) {
    printf("Name: %s\n", customer.name);
    printf("Age: %d\n", customer.age);
    printf("Address: %s\n", customer.address);
}

void manageRooms(struct Room rooms[], int numRooms) {
    // Implement room management logic here
}

void makeReservation(struct Room rooms[], int numRooms) {
    // Implement reservation logic here
}

int main() {
    int choice;
    struct Customer customer;
    struct Room rooms[100];
    char yn[5];
    do {
        printf("\nSelect the number you want to jump on\n1. Customer info\n2. Room management\n3. Reservation\n");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter customer name: ");
                scanf("%s", customer.name);
                printf("Enter customer age: ");
                scanf("%d", &customer.age);
                printf("Enter customer address: ");
                scanf("%s", customer.address);
                displayCustomerInfo(customer);
                break;
            case 2:
                manageRooms(rooms, 10);
                break;
            case 3:
                makeReservation(rooms, 10);
                break;
            default:
                printf("Invalid choice\n");
                break;
        }
        printf("Do yo want to Exit?\nEnter Yes or No\n");
        scanf("%d", &yn);
    } while (yn != "No" || yn != "no");
    return 0;
}
