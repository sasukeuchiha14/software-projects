#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_ROOMS 10

struct Customer {
    char name[50];
    int age;
    int number;
    char address[100];
};

void displayCustomerInfo(struct Customer customer) {
    printf("\nName: %s\n", customer.name);
    printf("Age: %d\n", customer.age);
    printf("Phone Number: %d\n", customer.number);
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

bool reserveRoom(int roomNumber) {
    if (roomNumber < 1 || roomNumber > MAX_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (rooms[roomNumber - 1].isReserved) {
        printf("Room %d is already reserved!\n", roomNumber);
        return false;
    }

    else {
        rooms[roomNumber - 1].isReserved = true;
        printf("Room %d reserved successfully!\n", roomNumber);
        return true;
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
    char yn[5];
    initializeRooms();
    int roomNumber;
    while (true) {
        printf("\nMenu:\n1. Customer info\n2. Display available rooms\n3. Reserve a room\n4. Cancel Reservation\n5. Exit\n\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter customer name: ");
                scanf("%s", customer.name);
                printf("Enter customer age: ");
                scanf("%d", &customer.age);
                printf("Enter customer phone number: ");
                scanf("%d", &customer.number);
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
                reserveRoom(roomNumber);
                break;
            case 4:
                printf("Enter the room number to cancel reservation: ");
                scanf("%d", &roomNumber);
                cancelReservation(roomNumber);
                break;
            case 5:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice! Please try again.\n");
                break;
        }
    }
}