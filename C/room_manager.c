#include <stdio.h>
#include <stdbool.h>

#define MAX_ROOMS 10

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

    if (rooms[roomNumber - 1].isReserved) {
        printf("Room %d is already reserved!\n", roomNumber);
        return false;
    }

    rooms[roomNumber - 1].isReserved = true;
    printf("Room %d reserved successfully!\n", roomNumber);
    return true;
}

bool cancelReservation(int roomNumber) {
    if (roomNumber < 1 || roomNumber > MAX_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    if (!rooms[roomNumber - 1].isReserved) {
        printf("Room %d is not reserved!\n", roomNumber);
        return false;
    }

    rooms[roomNumber - 1].isReserved = false;
    printf("Reservation for room %d cancelled successfully!\n", roomNumber);
    return true;
}

int main() {
    initializeRooms();

    int choice, roomNumber;
    while (true) {
        printf("\nMenu:\n");
        printf("1. Display available rooms\n");
        printf("2. Reserve a room\n");
        printf("3. Cancel reservation\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                displayRooms();
                break;
            case 2:
                printf("Enter the room number to reserve: ");
                scanf("%d", &roomNumber);
                reserveRoom(roomNumber);
                break;
            case 3:
                printf("Enter the room number to cancel reservation: ");
                scanf("%d", &roomNumber);
                cancelReservation(roomNumber);
                break;
            case 4:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice! Please try again.\n");
        }
    }

    return 0;
}
