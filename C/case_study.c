#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_ROOMS 10

typedef struct {
    int roomNumber;
    bool isReserved;
} Room;

Room rooms[MAX_ROOMS];

int main() {
    int choice;
    char yn[5];

    for (int i = 0; i < MAX_ROOMS; i++) {
        rooms[i].roomNumber = i + 1;
        rooms[i].isReserved = false;
    }

    char name[50];
    int age;
    int number;
    char address[100];

    int roomNumber;
    while (true) {

        printf("\nMenu:\n1. Customer info\n2. Display available rooms\n3. Reserve a room\n4. Cancel Reservation\n5. Exit\n\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter customer name: ");
                scanf("%s", name);
                printf("Enter customer age: ");
                scanf("%d", &age);
                printf("Enter customer phone number: ");
                scanf("%d", &number);
                printf("Enter customer address: ");
                scanf("%s", address);
                printf("\nName: %s\n", name);
                printf("Age: %d\n", age);
                printf("Phone Number: %d\n", number);
                printf("Address: %s\n", address);
                break;

            case 2:
                printf("Available Rooms:\n");
                for (int i = 0; i < MAX_ROOMS; i++) {
                    if (!rooms[i].isReserved) {
                        printf("Room %d\n", rooms[i].roomNumber);
                    }
                }
                break;

            case 3:
                printf("Enter the room number to reserve: ");
                scanf("%d", &roomNumber);
                {
                    if (roomNumber < 1 || roomNumber > MAX_ROOMS) {
                        printf("Invalid room number!\n");
                    }

                    else if (rooms[roomNumber - 1].isReserved) {
                        printf("Room %d is already reserved!\n", roomNumber);
                    }

                    else {
                        rooms[roomNumber - 1].isReserved = true;
                        printf("Room %d reserved successfully!\n", roomNumber);
                    }
                }
                break;

            case 4:
                printf("Enter the room number to cancel reservation: ");
                scanf("%d", &roomNumber);
                {
                    if (roomNumber < 1 || roomNumber > MAX_ROOMS) {
                        printf("Invalid room number!\n");
                    }

                    else if (!rooms[roomNumber - 1].isReserved) {
                        printf("Room %d is not reserved!\n", roomNumber);
                    }

                    else {
                        rooms[roomNumber - 1].isReserved = false;
                        printf("Reservation for room %d cancelled successfully!\n", roomNumber);
                    }
                }
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