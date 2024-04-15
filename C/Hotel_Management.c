#include <stdio.h>
#include <string.h>
#include <stdbool.h>

#define MAX_SINGLE_ROOMS 20
#define MAX_DOUBLE_ROOMS 10
#define MAX_SUIT_ROOMS 5


struct Customer {
    char name[50];
    int age;
    long long int number;
    char mail[50];
    struct Address {
        char house_appartment[50];
        char street[20];
        char city[20];
        char state[50];
        int pincode[7];
    } address;
};

void displayCustomerInfo(struct Customer customer) {
    printf("\nName: %s\n", customer.name);
    printf("Age: %d\n", customer.age);
    printf("Phone Number: %lld\n", customer.number);
    printf("Email: %s\n", customer.mail);
    printf("Address: %s, %s, %s, %s, %d\n", customer.address.house_appartment, customer.address.street, customer.address.city, customer.address.state, customer.address.pincode);
}

typedef struct {
    int roomNumber;
    bool isReserved;
} Room;

Room single_rooms[MAX_SINGLE_ROOMS];
Room double_rooms[MAX_DOUBLE_ROOMS];
Room suit_rooms[MAX_SUIT_ROOMS];

void initializeRooms() {
    for (int i = 0; i < MAX_SINGLE_ROOMS; i++) {
        single_rooms[i].roomNumber = i + 1;
        single_rooms[i].isReserved = false;
    }
    for (int i = 0; i < MAX_DOUBLE_ROOMS; i++) {
        double_rooms[i].roomNumber = i + 1;
        double_rooms[i].isReserved = false;
    }
    for (int i = 0; i < MAX_SUIT_ROOMS; i++) {
        suit_rooms[i].roomNumber = i + 1;
        suit_rooms[i].isReserved = false;
    }
}

void roomname(int type) {
    if (type == 1) {
        printf("Single Room");
    }
    else if (type == 2) {
        printf("Double Room");
    }
    else if (type == 3) {
        printf("Suit Room");
    }
    else {
        printf("Invalid room type!\n");
    }
}

void displayRooms() {
    printf("Available Rooms:\n\n");
    printf("Single Rooms:\n");
    for (int i = 0; i < MAX_SINGLE_ROOMS; i++) {
        if (!single_rooms[i].isReserved) {
            printf("Room %d\t", single_rooms[i].roomNumber);
        }
    }
    printf("\n\nDouble Rooms:\n");
    for (int i = 0; i < MAX_DOUBLE_ROOMS; i++) {
        if (!double_rooms[i].isReserved) {
            printf("Room %d\t", double_rooms[i].roomNumber);
        }
    }
    printf("\n\nSuit Rooms:\n");
    for (int i = 0; i < MAX_SUIT_ROOMS; i++) {
        if (!suit_rooms[i].isReserved) {
            printf("Room %d\t", suit_rooms[i].roomNumber);
        }
    }
    printf("\n");
}

bool reserveSingleRoom(int roomNumber, int days) {
    if (roomNumber < 1 || roomNumber > MAX_SINGLE_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (single_rooms[roomNumber - 1].isReserved) {
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
            single_rooms[roomNumber - 1].isReserved = true;
            printf("Room %d reserved successfully!\n", roomNumber);
            return true;
        }
    }
}

bool reserveDoubleRoom(int roomNumber, int days) {
    if (roomNumber < 1 || roomNumber > MAX_DOUBLE_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (double_rooms[roomNumber - 1].isReserved) {
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
            double_rooms[roomNumber - 1].isReserved = true;
            printf("Room %d reserved successfully!\n", roomNumber);
            return true;
        }
    }
}

bool reserveSuitRoom(int roomNumber, int days) {
    if (roomNumber < 1 || roomNumber > MAX_SUIT_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (suit_rooms[roomNumber - 1].isReserved) {
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
            suit_rooms[roomNumber - 1].isReserved = true;
            printf("Room %d reserved successfully!\n", roomNumber);
            return true;
        }
    }
}

bool reserveRoom(int type, int roomNumber, int days) {
    if (type == 1) {
        return reserveSingleRoom(roomNumber, days);
    }
    else if (type == 2) {
        return reserveDoubleRoom(roomNumber, days);
    }
    else if (type == 3) {
        return reserveSuitRoom(roomNumber, days);
    }
    else {
        printf("Invalid room type!\n");
        return false;
    }
}

bool cancelSingleRoom(int roomNumber) {
    if (roomNumber < 1 || roomNumber > MAX_SINGLE_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (!single_rooms[roomNumber - 1].isReserved) {
        printf("Room %d is not reserved!\n", roomNumber);
        return false;
    }

    else {
        single_rooms[roomNumber - 1].isReserved = false;
        printf("Reservation for room %d cancelled successfully!\n", roomNumber);
        return true;
    }
}

bool cancelDoubleRoom(int roomNumber) {
    if (roomNumber < 1 || roomNumber > MAX_DOUBLE_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (!double_rooms[roomNumber - 1].isReserved) {
        printf("Room %d is not reserved!\n", roomNumber);
        return false;
    }

    else {
        double_rooms[roomNumber - 1].isReserved = false;
        printf("Reservation for room %d cancelled successfully!\n", roomNumber);
        return true;
    }
}

bool cancelSuitRoom(int roomNumber) {
    if (roomNumber < 1 || roomNumber > MAX_SUIT_ROOMS) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (!suit_rooms[roomNumber - 1].isReserved) {
        printf("Room %d is not reserved!\n", roomNumber);
        return false;
    }

    else {
        suit_rooms[roomNumber - 1].isReserved = false;
        printf("Reservation for room %d cancelled successfully!\n", roomNumber);
        return true;
    }
}

bool cancelReservation(int roomNumber) {
    if (roomNumber > 1 && roomNumber <= MAX_SINGLE_ROOMS) {
        return cancelSingleRoom(roomNumber);
    }
    else if (roomNumber > MAX_SINGLE_ROOMS && roomNumber <= MAX_SINGLE_ROOMS + MAX_DOUBLE_ROOMS) {
        return cancelDoubleRoom(roomNumber);
    }
    else if (roomNumber > MAX_SINGLE_ROOMS + MAX_DOUBLE_ROOMS && roomNumber <= MAX_SINGLE_ROOMS + MAX_DOUBLE_ROOMS + MAX_SUIT_ROOMS) {
        return cancelSuitRoom(roomNumber);
    }
    else {
        printf("Invalid room number!\n");
        return false;
    }
}

struct Bill{
    int cost_perday;
    int without_gst_cost;
    int gst_cost; 
}bill;

void gencost(int type, int days, struct Bill bill){
    if (type == 1) {
        bill.cost_perday = 1500;
    }
    else if (type == 2) {
        bill.cost_perday = 2500;
    }
    else if (type == 3) {
        bill.cost_perday = 5000;
    }
    else {
        printf("Invalid room type!\n");
    }
    bill.without_gst_cost = bill.cost_perday * days;
    bill.gst_cost = bill.cost_perday * days * 1.18;
}

void genBill(int days, int type, struct Bill bill, struct Customer customer) {
    printf("\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
    printf("Customer Name      : %s\n", customer.name);
    printf("Customer Age       : %d\n", customer.age);
    printf("Customer Phone No  : %lld\n", customer.number);
    printf("Customer Email     : %s\n", customer.mail);
    printf("Customer Address   : %s, %s, %s, %s, %d\n", customer.address.house_appartment, customer.address.street, customer.address.city, customer.address.state, customer.address.pincode);
    printf("Room Type          : "); roomname(type);
    printf("No. of days stayed : %d\n", days);
    printf("Room cost per day  : %d\n", bill.cost_perday);
    printf("Cost (without gst) : %d\n", bill.without_gst_cost);
    printf("Final Cost         : %.2f\n", bill.gst_cost);
    printf("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
}

int main() {
    int choice;
    struct Customer customer;
    initializeRooms();
    int type,roomNumber,days;
    char yn1[5],yn2[5];
    while (true) {
        printf("\nMenu:\n1. Customer info\n2. Display available rooms\n3. Reserve a room\n4. Cancel Reservation\n5. Generate Bill \n6. Exit\n\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter customer name: ");
                scanf(" %[^\n]%*c", customer.name);
                printf("Enter customer age: ");
                scanf("%d", &customer.age);
                printf("Enter customer phone number: ");
                scanf("%lld", &customer.number);
                printf("Enter customer email: ");
                scanf("%s", customer.mail);
                printf("Enter customer address as follows: ");
                printf("\n\tHouse/Apartment: ");
                scanf(" %[^\n]%*c", customer.address.house_appartment);
                printf("\tStreet: ");
                scanf(" %[^\n]%*c", customer.address.street);
                printf("\tCity: ");
                scanf("%s", customer.address.city);
                printf("\tState: ");
                scanf("%s", customer.address.state);
                printf("\tPincode: ");
                scanf("%d", &customer.address.pincode);
                displayCustomerInfo(customer);
                break;
            case 2:
                displayRooms();
                break;
            case 3:
                printf("Room types available: \n1. Single Room\n2. Double Room\n3. Suit Room\nEnter your choice: ");
                scanf("%d", &type);
                printf("Enter the room number to reserve: ");
                scanf("%d", &roomNumber);
                reserveRoom(type,roomNumber,days);
                break;
            case 4:
                printf("Enter the room number to cancel reservation: ");
                scanf("%d", &roomNumber);
                cancelReservation(roomNumber);
                break;
            case 5:
                gencost(type, days, bill);
                genBill(days, type, bill, customer);
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