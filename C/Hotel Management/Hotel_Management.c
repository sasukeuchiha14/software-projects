#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <Windows.h>
#include <time.h>

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
    printf("Address: %s, %s, %s, %s, %s\n", customer.address.house_appartment, customer.address.street, customer.address.city, customer.address.state, customer.address.pincode);
}

typedef struct {
    int roomNumber;
    bool isReserved;
    char status[50];
} Room;

Room single_rooms[MAX_SINGLE_ROOMS];
Room double_rooms[MAX_DOUBLE_ROOMS];
Room suit_rooms[MAX_SUIT_ROOMS];

void initializeRooms() {
    for (int i = 0; i < MAX_SINGLE_ROOMS; i++) {
        single_rooms[i].roomNumber = i + 1;
        single_rooms[i].isReserved = false;
        strcpy(single_rooms[i].status, "Room is Available!");
    }
    for (int i = 0; i < MAX_DOUBLE_ROOMS; i++) {
        double_rooms[i].roomNumber = i + 1;
        double_rooms[i].isReserved = false;
        strcpy(double_rooms[i].status, "Room is Available!");
    }
    for (int i = 0; i < MAX_SUIT_ROOMS; i++) {
        suit_rooms[i].roomNumber = i + 1;
        suit_rooms[i].isReserved = false;
        strcpy(suit_rooms[i].status, "Room is Available!");
    }
}

struct about_room{
    int type;
    int roomNumber;
    int days, start_date, start_month, start_year;
    int food;
}about_room;

char* roomname(int type) {
    if (type == 1) {
        return "Single Room";
    }
    else if (type == 2) {
        return "Double Room";
    }
    else if (type == 3) {
        return "Suit Room";
    }
    else {
        return "Invalid room type!";
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

bool myRoom(struct about_room *about_room, int MAX, Room *rooms_type, int st_day, int st_month, int st_year) {
    if (about_room->roomNumber < 1 || about_room->roomNumber > MAX) {
        printf("Invalid room number!\n");
        return false;
    }

    else if (rooms_type[about_room->roomNumber - 1].isReserved) {
        printf("Room %d is already reserved!\n", about_room->roomNumber);
        return false;
    }

    else {
        printf("For how many days do you want to reserve the room? ");
        scanf("%d", &about_room->days);
        if (about_room->days < 1)
        {
            printf("Invalid number of days!\n");
            return false;
        }
        else if (about_room->days > 10)
        {
            printf("You can reserve a room for a maximum of 10 days!\n");
            return false;
        }
        else
        {
            printf("Do you want to include Breakfast & Dinner (500 per Day)? (y/n): ");
            char yn[5];
            scanf("%s", yn);
            if (strcmp(yn, "y") == 0) {
                about_room->food = 500;
                printf("Breakfast & Dinner add-on added!\n");
            }
            else if (strcmp(yn, "n") == 0) {
                about_room->food = 0;
            }
            else {
                printf("Invalid choice! Breakfast & Dinner add-on is not added.\n");
            }
            rooms_type[about_room->roomNumber - 1].isReserved = true;
            printf("Room %d reserved successfully!\n", about_room->roomNumber);
            char status_name[50];
            sprintf(status_name, "Reserved by Customer for %d days!", about_room->days);
            strcpy(rooms_type[about_room->roomNumber - 1].status, status_name);
            about_room->start_date = st_day;
            about_room->start_month = st_month;
            about_room->start_year = st_year;
            return true;
        }
    }
}

bool reserveRoom(struct about_room *about_room, int st_day, int st_month, int st_year) {
    if (about_room->type == 1) {
        return myRoom(about_room, MAX_SINGLE_ROOMS, single_rooms, st_day, st_month, st_year);
    }
    else if (about_room->type == 2) {
        return myRoom(about_room, MAX_DOUBLE_ROOMS, double_rooms, st_day, st_month, st_year);
    }
    else if (about_room->type == 3) {
        return myRoom(about_room, MAX_SUIT_ROOMS, suit_rooms, st_day, st_month, st_year);
    }
    else {
        printf("Invalid room type!\n");
        return false;
    }
}

bool cancelRoom(int roomNumber, int MAX) {
    if (roomNumber < 1 || roomNumber > MAX) {
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
        strcpy(single_rooms[roomNumber - 1].status, "Room is Available now!");
        return true;
    }
}

bool cancelReservation(int roomNumber) {
    if (roomNumber > 1 && roomNumber <= MAX_SINGLE_ROOMS) {
        return cancelRoom(roomNumber, MAX_SINGLE_ROOMS);
    }
    else if (roomNumber > MAX_SINGLE_ROOMS && roomNumber <= MAX_SINGLE_ROOMS + MAX_DOUBLE_ROOMS) {
        return cancelRoom(roomNumber, MAX_DOUBLE_ROOMS);
    }
    else if (roomNumber > MAX_SINGLE_ROOMS + MAX_DOUBLE_ROOMS && roomNumber <= MAX_SINGLE_ROOMS + MAX_DOUBLE_ROOMS + MAX_SUIT_ROOMS) {
        return cancelRoom(roomNumber, MAX_SUIT_ROOMS);
    }
    else {
        printf("Invalid room number!\n");
        return false;
    }
}

struct Bill{
    int cost_perday;
    float without_gst_cost;
    float gst_cost;
}bill;

void gencost(struct about_room about_room, struct Bill *bill){
    if (about_room.type == 1) {
        bill->cost_perday = 1500;
    }
    else if (about_room.type == 2) {
        bill->cost_perday = 2500;
    }
    else if (about_room.type == 3) {
        bill->cost_perday = 5000;
    }
    else {
        printf("Invalid room type!\n");
    }
    bill->cost_perday += about_room.food;
    bill->without_gst_cost = bill->cost_perday * about_room.days;
    if (bill->without_gst_cost > 7500) {
        bill->gst_cost = bill->cost_perday * about_room.days * 1.18;
    }
    else {
        bill->gst_cost = bill->cost_perday * about_room.days * 1.12;
        printf("(GST 12%% added becz of total bill less than 7500!)\n");
    }
}

void genBill(struct about_room about_room, struct Bill bill, struct Customer customer) {
    printf("\nXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
    printf("Customer Name      : %s\n", customer.name);
    printf("Customer Age       : %d\n", customer.age);
    printf("Customer Phone No  : %lld\n", customer.number);
    printf("Customer Email     : %s\n", customer.mail);
    printf("Customer Address   : %s, %s, %s, %s, %s\n", customer.address.house_appartment, customer.address.street, customer.address.city, customer.address.state, customer.address.pincode);
    printf("Room Type          : %s\n", roomname(about_room.type));
    printf("No. of days stayed : %d\n", about_room.days);
    printf("Room cost per day  : %d\n", bill.cost_perday);
    printf("Cost (without gst) : %.f\n", bill.without_gst_cost);
    printf("Final Cost         : %.f\n", bill.gst_cost);
    printf("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n");
}

char* payment(struct Customer customer) {
    char pay[5];
    printf("Would you like to make the payment right now? (y/n): ");
    scanf("%s", pay);
    if (strcmp(pay, "y") == 0) {
        printf("\nHow you wanna pay ?\n1. Credit Card\n2. Debit Card\n3. UPI\n4. Net Banking\n5. Cash\nEnter your choice: ");
        int p_choice;
        scanf("%d", &p_choice);
        switch (p_choice)
        {
        case 1:
            printf("Enter your Credit Card number: ");
            long long int cc_number;
            scanf("%lld", &cc_number);
            printf("Enter the CVV: ");
            int cvv;
            scanf("%d", &cvv);
            printf("Enter the expiry date (MM/YY): ");
            char expiry[6];
            scanf("%s", expiry);
            FILE *pi;
            pi = fopen("payment_info.csv", "a");
            fprintf(pi, "%s,Credit Card,%lld,%d,%s\n", customer.name,cc_number, cvv, expiry);
            fclose(pi);
            printf("Enter the OTP send at your phone number linked to your credit card\n");
            int otp;
            scanf("%d", &otp);
            if (otp == 1234) {
                printf("Payment successful!\n");
                return "Credit Card";
            }
            else {
            printf("OTP Incorrect!\n");
            printf("Payment unsuccessful!\n");
            }
            break;
        case 2:
            printf("Enter your Debit Card number: ");
            long long int dc_number;
            scanf("%lld", &dc_number);
            printf("Enter the CVV: ");
            int cvv2;
            scanf("%d", &cvv2);
            printf("Enter the expiry date (MM/YY): ");
            char expiry2[6];
            scanf("%s", expiry2);
            FILE *pi2;
            pi2 = fopen("payment_info.csv", "a");
            fprintf(pi2, "%s,Debit Card,%lld,%d,%s\n", customer.name,dc_number, cvv2, expiry2);
            fclose(pi2);
            printf("Enter the OTP send at your phone number linked to your debit card\n");
            int otp2;
            scanf("%d", &otp2);
            if (otp2 == 1234) {
                printf("Payment successful!\n");
                return "Debit Card";
            }
            else {
            printf("OTP Incorrect!\n");
            printf("Payment unsuccessful!\n");
            }
            break;
        case 3:
            printf("\nUPI ID: continentalhotel@upi\n");
            printf("Enter the OTP send at your phone number linked to your UPI ID\n");
            int otp3;
            scanf("%d", &otp3);
            if (otp3 == 1234) {
                printf("Payment successful!\n");
                return "UPI";
            }
            else {
            printf("OTP Incorrect!\n");
            printf("Payment unsuccessful!\n");
            }
            break;
        case 4:
            printf("Enter your Net Banking ID: ");
            char netbank[50];
            scanf("%s", netbank);
            printf("Enter the password: ");
            char pass[50];
            scanf("%s", pass);
            printf("Enter the OTP send at your phone number linked to your Net Banking ID\n");
            int otp4;
            FILE *pi3;
            pi3 = fopen("payment_info.csv", "a");
            fprintf(pi3, "%s,Bank Details,%s,%s\n", customer.name,netbank, pass);
            fclose(pi3);
            scanf("%d", &otp4);
            if (otp4 == 1234) {
                printf("Payment successful!\n");
                return "Net Banking";
            }
            else {
            printf("OTP Incorrect!\n");
            printf("Payment unsuccessful!\n");
            }
            break;
        case 5:
            printf("Enter the 7 digit code given by the receptionist: ");
            int code;
            scanf("%d", &code);
            if (code == 1234567) {
                printf("Payment successful!\n");
                return "Cash";
            }
            else {
                printf("Invalid code! Payment unsuccessful!\n");
            }
            break;
        default:
            break;
        }
    }
    else if (strcmp(pay, "n") == 0) {
        printf("Payment cancelled!\n");
        return "Cancelled";
    }
    else {
        printf("Invalid choice! Payment cancelled!\n");
        return "Invalid";
    }
}

void booking_history(struct Customer customer, struct about_room about_room, struct Bill bill, char* payment_info) {
    FILE *fp;
    fp = fopen("Booking_History.csv", "a");
    fprintf(fp, "%s,", customer.name);
    fprintf(fp, "%s%s%s%s%s,",customer.address.house_appartment, customer.address.street, customer.address.city, customer.address.state, customer.address.pincode);
    fprintf(fp, "%lld,%s,",customer.number,customer.mail);
    fprintf(fp, "%s,%d,%d,",roomname(about_room.type),about_room.roomNumber,about_room.days);
    fprintf(fp, "%s",payment_info);
    fprintf(fp, "%d,%d,%d,",about_room.start_date,about_room.start_month,about_room.start_year);
    fclose(fp);
}

void take_feedback() {
    char yn2[5];
    printf("Would you like to provide feedback? (y/n): ");
    scanf("%s", yn2);
    if (strcmp(yn2, "y") == 0) {
        FILE *fp;
        fp = fopen("Feedback.txt", "a");
        int star;
        char feedback[100];
        printf("Rate our service out of 5 stars: ");
        scanf("%d", &star);
        printf("Please provide your feedback in Single Line: ");
        scanf(" %[^\n]%*c", feedback);
        fprintf(fp, "%d,%s\n", star, feedback);
        fclose(fp);
        printf("\n");
        printf("Thank you for your feedback!\n");
    }
    else if (strcmp(yn2, "n") == 0) {
        printf("\n");
        printf("Thank you for using our service!\n");
    }
    else {
        printf("\n");
        printf("Invalid choice! Thank you for using our service!\n");
    }
}

void displayRooms_withStatus() {
    printf("\nSingle Rooms:\n");
    for (int i = 0; i < MAX_SINGLE_ROOMS; i++) {
        if (single_rooms[i].isReserved) {
            printf("Room %d: Reserved\n", single_rooms[i].roomNumber);
            printf("Status: %s\n", single_rooms[i].status);
        }
        else {
            printf("Room %d: Available\n", single_rooms[i].roomNumber);
            printf("Status: %s\n", single_rooms[i].status);
        }
    }
    printf("\nDouble Rooms:\n");
    for (int i = 0; i < MAX_DOUBLE_ROOMS; i++) {
        if (double_rooms[i].isReserved) {
            printf("Room %d: Reserved\n", double_rooms[i].roomNumber);
            printf("Status: %s\n", double_rooms[i].status);
        }
        else {
            printf("Room %d: Available\n", double_rooms[i].roomNumber);
            printf("Status: %s\n", double_rooms[i].status);
        }
    }
    printf("\nSuit Rooms:\n");
    for (int i = 0; i < MAX_SUIT_ROOMS; i++) {
        if (suit_rooms[i].isReserved) {
            printf("Room %d: Reserved\n", suit_rooms[i].roomNumber);
            printf("Status: %s\n", suit_rooms[i].status);
        }
        else {
            printf("Room %d: Available\n", suit_rooms[i].roomNumber);
            printf("Status: %s\n", suit_rooms[i].status);
        }
    }

};

void changeRoomStatus(int max_room, Room *rooms_type) {
    printf("Enter the room number to change the status: ");
    int roomnum;
    char status[50];
    scanf("%d", &roomnum);
    if (roomnum > 1 && roomnum <= max_room) {
        rooms_type[roomnum - 1].isReserved = !rooms_type[roomnum - 1].isReserved;
        if (rooms_type[roomnum - 1].isReserved) {
            printf("Room %d status changed to reserved!\nStatus: ", roomnum);
            scanf("%s", rooms_type[roomnum - 1].status);
        }
        else {
            printf("Room %d status changed to available!\nStatus: ", roomnum);
            strcpy(rooms_type[roomnum - 1].status, "Room is Available now!");
        }
    }
    else {
        printf("Invalid room number!\n");
    }
};

void staff_credentials() {
    int choice;
    FILE *fp_show;
    fp_show = fopen("staff_credentials.csv", "r");
    char username_show[20];
    char password_show[20];
    char line[50];
    printf("\nCurrent Staff Credentials:\n");
    while (fgets(line, sizeof(line), fp_show) != NULL) {
        char* username_show = strtok(line, ",");
        char* password_show = strtok(NULL, ",");
        printf("Username: %s\n", username_show);
        printf("Password: %s\n", password_show);
    }
    fclose(fp_show);

    printf("\n1. Add a New Credential\n2. Change Credential\n3. Delete Credential\n4. Return to Main Menu...\nEnter your choice: ");
    scanf("%d", &choice);
    switch (choice) {
    case 1:
        printf("Enter the new username: ");
        char new_username[20];
        scanf("%s", new_username);
        printf("Enter the new password: ");
        char new_password[20];
        scanf("%s", new_password);
        FILE *fp;
        fp = fopen("staff_credentials.csv", "a");
        fprintf(fp, "%s,%s\n", new_username, new_password);
        fclose(fp);
        printf("New credentials added successfully!\n");
        break;
    case 2:
        printf("Enter the username to change the password: ");
        char change_username[20];
        scanf("%s", change_username);
        printf("Enter the new password: ");
        char change_password[20];
        scanf("%s", change_password);
        FILE *fp2;
        fp2 = fopen("staff_credentials.csv", "r");
        FILE *fp3;
        fp3 = fopen("temp.csv", "w");
        char username[20];
        char password[20];
        while (fscanf(fp2, "%s,%s\n", username, password) != EOF) {
            if (strcmp(username, change_username) == 0) {
                fprintf(fp3, "%s,%s\n", change_username, change_password);
            }
            else {
                fprintf(fp3, "%s,%s\n", username, password);
            }
        }
        fclose(fp2);
        fclose(fp3);
        remove("staff_credentials.csv");
        rename("temp.csv", "staff_credentials.csv");
        printf("Password changed successfully!\n");
        break;
    case 3:
        printf("Enter the username to delete the credentials: ");
        char delete_username[20];
        scanf("%s", delete_username);
        FILE *fp4;
        fp4 = fopen("staff_credentials.csv", "r");
        FILE *fp5;
        fp5 = fopen("temp2.csv", "w");
        char username2[20];
        char password2[20];
        while (fscanf(fp4, "%s,%s\n", username2, password2) != EOF) {
            if (strcmp(username2, delete_username) != 0) {
                fprintf(fp5, "%s,%s\n", username2, password2);
            }
        }
        fclose(fp4);
        fclose(fp5);
        remove("staff_credentials.csv");
        rename("temp2.csv", "staff_credentials.csv");
        printf("Credentials deleted successfully!\n");
        break;
    case 4:
        printf("Returning to Main Menu...\n");
        break;
    default:
        printf("Invalid choice! Returning to Main Menu...\n");
        break;
    }
}

void displayCustomerInfo_withRoomDetails(char* name_search, char* address_search, long long int number_search, char* mail_search, char* roomtype_search, int roomnumber_search, int days_search, char* payment_search) {
    printf("\nCustomer Name      : %s\n", name_search);
    printf("Customer Address   : %s\n", address_search);
    printf("Customer Phone No  : %lld\n", number_search);
    printf("Customer Email     : %s\n", mail_search);
    printf("Room Type          : %s\n", roomtype_search);
    printf("Room Number        : %d\n", roomnumber_search);
    printf("No. of days stayed : %d\n", days_search);
    printf("Payment Method     : %s\n", payment_search);
}

void customerList_sort() {
    FILE *fp_sort;
    fp_sort = fopen("Booking_History.csv", "r");
    char line[256];
    char name_sort[50];
    char address_sort[100];
    long long int number_sort;
    char mail_sort[50];
    char roomtype_sort[50];
    int roomnumber_sort;
    int days_sort;
    char payment_sort[50];
    char line1[256];
    fgets(line1, sizeof(line), fp_sort);
    char lines[50][256];
    int count = 0;
    while (fgets(line, sizeof(line), fp_sort) != NULL) {
        strcpy(lines[count], line);
        count++;
    }
    fclose(fp_sort);
    for (int i = 0; i < count - 1; i++) {
        for (int j = 0; j < count - i - 1; j++) {
            sscanf(lines[j], "%[^,],%[^,],%lld,%[^,],%[^,],%d,%d,%[^,]\n", name_sort, address_sort, &number_sort, mail_sort, roomtype_sort, &roomnumber_sort, &days_sort, payment_sort);
            long long int number_sort_next;
            sscanf(lines[j + 1], "%[^,],%[^,],%lld,%[^,],%[^,],%d,%d,%[^,]\n", name_sort, address_sort, &number_sort_next, mail_sort, roomtype_sort, &roomnumber_sort, &days_sort, payment_sort);
            if (!(number_sort < number_sort_next)) {
                char temp[256];
                strcpy(temp, lines[j]);
                strcpy(lines[j], lines[j + 1]);
                strcpy(lines[j + 1], temp);
            }
        }
    }
    fp_sort = fopen("Booking_History.csv", "w");
    fprintf(fp_sort, "%s", line1);
    for (int i = 0; i < count; i++) {
        fprintf(fp_sort, "%s", lines[i]);
    }
    fclose(fp_sort);
};

void search_customer(struct about_room about_room) {
    customerList_sort();
    printf("How you wanna search ?\n1. By Name\n2. By Phone Number\n3. By Email\n4. By Days\nEnter your choice: ");
    int search_choice;
    scanf("%d", &search_choice);
    switch (search_choice) {
        case 1:
            printf("Enter the name to search: ");
            char search_name[50];
            scanf("%s", search_name);
            FILE *fp_search;
            fp_search = fopen("Booking_History.csv", "r");
            char line[256];
            char name_search[50];
            char address_search[50];
            long long int number_search;
            char mail_search[50];
            char roomtype_search[50];
            int roomnumber_search;
            int days_search;
            char payment_search[50];
            while (fgets(line, sizeof(line), fp_search) != NULL) {
                sscanf(line, "%[^,],%[^,],%lld,%[^,],%[^,],%d,%d,%[^,]\n", name_search, address_search, &number_search, mail_search, roomtype_search, &roomnumber_search, &days_search, payment_search);
                if (strcmp(name_search, search_name) == 0) {
                    displayCustomerInfo_withRoomDetails(name_search, address_search, number_search, mail_search, roomtype_search, roomnumber_search, days_search, payment_search);
                }
            }
            fclose(fp_search);
            break;
        case 2:
            printf("Enter the phone number to search: ");
            long long int search_number;
            scanf("%lld", &search_number);
            FILE *fp_search2;
            fp_search2 = fopen("Booking_History.csv", "r");
            char line2[256];
            char name_search2[50];
            char address_search2[50];
            long long int number_search2;
            char mail_search2[50];
            char roomtype_search2[50];
            int roomnumber_search2;
            int days_search2;
            char payment_search2[50];
            while (fgets(line2, sizeof(line2), fp_search2) != NULL) {
                sscanf(line2, "%[^,],%[^,],%lld,%[^,],%[^,],%d,%d,%[^,]\n", name_search2, address_search2, &number_search2, mail_search2, roomtype_search2, &roomnumber_search2, &days_search2, payment_search2);
                if (number_search2 == search_number) {
                    displayCustomerInfo_withRoomDetails(name_search2, address_search2, number_search2, mail_search2, roomtype_search2, roomnumber_search2, days_search2, payment_search2);
                }
            }
            fclose(fp_search2);
            break;
        case 3:
            printf("Enter the email to search: ");
            char search_mail[50];
            scanf("%s", search_mail);
            FILE *fp_search3;
            fp_search3 = fopen("Booking_History.csv", "r");
            char line3[256];
            char name_search3[50];
            char address_search3[50];
            long long int number_search3;
            char mail_search3[50];
            char roomtype_search3[50];
            int roomnumber_search3;
            int days_search3;
            char payment_search3[50];
            while (fgets(line3, sizeof(line3), fp_search3) != NULL) {
                sscanf(line3, "%[^,],%[^,],%lld,%[^,],%[^,],%d,%d,%[^,]\n", name_search3, address_search3, &number_search3, mail_search3, roomtype_search3, &roomnumber_search3, &days_search3, payment_search3);
                if (strcmp(mail_search3, search_mail) == 0) {
                    displayCustomerInfo_withRoomDetails(name_search3, address_search3, number_search3, mail_search3, roomtype_search3, roomnumber_search3, days_search3, payment_search3);
                }
            }
            fclose(fp_search3);
            break;
        case 4:
            printf("Enter the Dates in (dd/mm/yyyy) format");
            printf("Enter the start date: ");
            int start_date, start_month, start_year;
            scanf("%d/%d/%d", &start_date, &start_month, &start_year);
            printf("Enter the end date: ");
            int end_date, end_month, end_year;
            scanf("%d/%d/%d", &end_date, &end_month, &end_year);
            FILE *fp_search4;
            fp_search4 = fopen("Booking_History.csv", "r");
            char line4[256];
            char name_search4[50];
            char address_search4[50];
            long long int number_search4;
            char mail_search4[50];
            char roomtype_search4[50];
            int roomnumber_search4;
            int days_search4;
            char payment_search4[50];
            int start_date4, start_month4, start_year4;
            while (fgets(line4, sizeof(line4), fp_search4) != NULL) {
                sscanf(line4, "%[^,],%[^,],%lld,%[^,],%[^,],%d,%d,%[^,],%d,%d,%d\n", name_search4, address_search4, &number_search4, mail_search4, roomtype_search4, &roomnumber_search4, &days_search4, payment_search4, &start_date4, &start_month4, &start_year4);
                if (start_year4 >= start_year && start_year4 <= end_year) {
                    if (start_year4 == start_year == end_year) {
                        if (start_month4 >= start_month && start_month4 <= end_month) {
                            if (start_month4 == start_month == end_month) {
                                if (start_date4 >= start_date && start_date4 <= end_date) {
                                    displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                                }
                            }
                            else if (start_month4 == start_month) {
                                if (start_date4 >= start_date) {
                                    displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                                }
                            }
                            else if (start_month4 == end_month) {
                                if (start_date4 <= end_date) {
                                    displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                                }
                            }
                            else {
                                displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                            }
                        }
                    }
                    else if (start_year4 == start_year) {
                        if (start_month4 >= start_month) {
                            if (start_month4 == start_month) {
                                if (start_date4 >= start_date) {
                                    displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                                }
                            }
                            else {
                                displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                            }
                        }
                    }
                    else if (start_year4 == end_year) {
                        if (start_month4 <= end_month) {
                            if (start_month4 == end_month) {
                                if (start_date4 <= end_date) {
                                    displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                                }
                            }
                            else {
                                displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                            }
                        }
                    }
                    else {
                        displayCustomerInfo_withRoomDetails(name_search4, address_search4, number_search4, mail_search4, roomtype_search4, roomnumber_search4, days_search4, payment_search4);
                    }
                }
            }
            fclose(fp_search4);
            break;
        default:
            printf("Invalid choice!\n");
            break;
    }
}

void feedback_report() {
    FILE *fp_feedback;
    fp_feedback = fopen("Feedback.txt", "r");
    char line[256];
    int star;
    char feedback[100];
    int total_stars = 0,total_feedbacks = 0;
    printf("\nFeedback Report:\n");
    while (fgets(line, sizeof(line), fp_feedback) != NULL) {
        sscanf(line, "%d,%[^\n]\n", &star, feedback);
        total_stars += star;
        total_feedbacks++;
        printf("Feedback%d: %s (%d Stars)\n", total_feedbacks, feedback, star);
    }
    printf("\nAverage Rating: %.2f stars\n", (float)total_stars / total_feedbacks);
    fclose(fp_feedback);
}

void staffPortal() {
    char username[20];
    char password[20];

    printf("\nSTAFF PORTAL\n");
    printf("Enter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%s", password);

    FILE *fp_check;
    fp_check = fopen("staff_credentials.csv", "r+");
    char username_check[20];
    char password_check[20];
    char line[50];
    int valid_credential = 0;
    while (fgets(line, sizeof(line), fp_check) != NULL) {
        char* username_check = strtok(line, ",");
        char* password_check = strtok(NULL, "\n");
        if (strcmp(username, username_check) == 0 && strcmp(password, password_check) == 0) {
            valid_credential = 1;
            break;
        }
    }
    fclose(fp_check);

    if (valid_credential == 1) {
        printf("\nWelcome, %s!\n", username);
        printf("\nRoom Status:\n");
        displayRooms_withStatus();
        printf("\nWould you Like to change the status of any room? (y/n): ");
        char yn[5];
        scanf("%s", yn);
        if (strcmp(yn, "y") == 0) {
            printf("Enter the room type to change the status: ");
            int roomtype;
            scanf("%d", &roomtype);
            if (roomtype < 1 || roomtype > 3) {
                printf("Invalid room type!\n");
            }
            else if (roomtype == 1) {
                changeRoomStatus(MAX_SINGLE_ROOMS, single_rooms);
            }
            else if (roomtype == 2) {
                changeRoomStatus(MAX_DOUBLE_ROOMS, double_rooms);
            }
            else if (roomtype == 3) {
                changeRoomStatus(MAX_SUIT_ROOMS, suit_rooms);
            }
            else {
                printf("Invalid room type!\n");
            }
        }
        else if (strcmp(yn, "n") == 0) {
            printf("Returning to Main Menu...\n");
        }
        else {
            printf("Invalid choice! Returning to Main Menu...\n");
        }
    }
    else {
        printf("Invalid credentials! Access denied.\n");
    }
}

void adminPortal() {
    char username[20];
    char password[20];

    printf("\nADMIN PORTAL\n");
    printf("Enter username: ");
    scanf("%s", username);
    printf("Enter password: ");
    scanf("%s", password);

    if ((strcmp(username, "hardik") == 0 && strcmp(password, "continental7123") == 0) || (strcmp(username, "admin") == 0 && strcmp(password, "admin") == 0)) {
        printf("\nWelcome, %s!\n", username);
        printf("\n1. Change the status of a room\n2. Staff Credentials\n3. Search For a Customer\n4. Feedback Status\n5. Return to Main Menu.\nEnter your choice:");
        int admin_choice;
        scanf("%d", &admin_choice);
        switch (admin_choice) {
            case 1:
                printf("\nRoom Status:\n");
                displayRooms_withStatus();
                printf("\nEnter the room type to change the status: ");
                int roomtype;
                scanf("%d", &roomtype);
                if (roomtype == 1) {
                    changeRoomStatus(MAX_SINGLE_ROOMS, single_rooms);
                }
                else if (roomtype == 2) {
                    changeRoomStatus(MAX_DOUBLE_ROOMS, double_rooms);
                }
                else if (roomtype == 3) {
                    changeRoomStatus(MAX_SUIT_ROOMS, suit_rooms);
                }
                else {
                    printf("Invalid room type!\n");
                }
                break;
            case 2:
                staff_credentials();
                break;
            case 3:
                search_customer(about_room);
                break;
            case 4:
                feedback_report();
                break;
            case 5:
                printf("Returning to Main Menu...\n");
                break;
            default:
                printf("Invalid choice! Returning to Main Menu...\n");
                break;
            }
    }
    else {
        printf("Invalid credentials! Access denied.\n");
    }
}

int main() {
    int choice;
    struct Customer customer;
    struct about_room about_room;
    initializeRooms();
    char yn[5];
    char* payment_info = malloc(20 * sizeof(char));
    payment_info = "Invalid";

    time_t t = time(NULL);
    struct tm tm = *localtime(&t);

    SetConsoleOutputCP(CP_UTF8);
    printf("\n");
    printf("       \\        / |‾‾‾ |    |‾‾‾ |‾‾‾|   /\\  /\\   |‾‾‾\n");
    printf("        \\  /\\  /  |——  |    |    |   |  /  \\/  \\  |——\n");
    printf("         \\/  \\/   |___ |___ |___ |___| /        \\ |___\n");
    printf("\n");
    printf("               ‾‾|‾‾ |‾‾‾|   ‾‾|‾‾ |   | |‾‾‾\n");
    printf("                 |   |   |     |   |———| |——\n");
    printf("                 |   |___|     |   |   | |___\n");
    printf("\n");
    printf("|‾‾‾ |‾‾‾| |\\  | ‾‾|‾‾ ‾‾|‾‾ |\\  | |‾‾‾ |\\  | ‾‾|‾‾   /\\   |\n");
    printf("|    |   | | \\ |   |     |   | \\ | |——  | \\ |   |    /__\\  |\n");
    printf("|___ |___| |  \\|   |   __|__ |  \\| |___ |  \\|   |   /    \\ |___\n");
    printf("\n");
    printf("                 |   | |‾‾‾| ‾‾|‾‾ |‾‾‾ |\n");
    printf("                 |———| |   |   |   |——  |\n");
    printf("                 |   | |___|   |   |___ |___\n");
    printf("\n");

    while (true) {

        printf("\nMenu:\n1. Customer Information\n2. Display Available Rooms\n3. Reserve a Room\n4. Cancel Reservation\n5. Generate Bill\n6. Make Payment\n7. Staff Portal\n8. Admin Portal\n9. Exit\n\nEnter your choice: ");

        if (scanf("%d", &choice) != 1) {
            printf("Invalid choice! Please try again.\n");
            fflush(stdin);
            continue;
        }

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
                printf("\tStreet/Colony: ");
                scanf(" %[^\n]%*c", customer.address.street);
                printf("\tCity: ");
                scanf("%s", customer.address.city);
                printf("\tState: ");
                scanf("%s", customer.address.state);
                printf("\tPincode: ");
                scanf("%s", &customer.address.pincode);
                
                displayCustomerInfo(customer);
                break;
            case 2:
                displayRooms();
                break;
            case 3:
                printf("Room types available: \n1. Single Room (1500 per Day)\n2. Double Room (2500 per Day)\n3. Suit Room (5000 per Day)\nEnter your choice: ");
                scanf("%d", &about_room.type);
                printf("Enter the room number to reserve: ");
                scanf("%d", &about_room.roomNumber);
                reserveRoom(&about_room, tm.tm_mday, tm.tm_mon + 1, tm.tm_year + 1900);
                break;
            case 4:
                printf("Enter the room number to cancel reservation: ");
                scanf("%d", &about_room.roomNumber);
                cancelReservation(about_room.roomNumber);
                break;
            case 5:
                gencost(about_room, &bill);
                genBill(about_room, bill, customer);
                break;
            case 6:
                payment_info = payment(customer);
                break;
            case 7:
                staffPortal();
                break;
            case 8:
                adminPortal();
                break;
            case 9:
                printf("Are you sure you want to exit the Menu? (y/n): ");
                scanf("%s", yn);
                if (strcmp(yn, "y") == 0) {
                    if (strcmp(payment_info, "Cancelled") != 0 && strcmp(payment_info, "Invalid") != 0) {
                        booking_history(customer, about_room, bill, payment_info);
                    }
                    take_feedback();
                    return 0;
                }
                else if (strcmp(yn, "n") == 0) {
                    printf("Returning to Main Menu...\n");
                }
                else {
                    printf("Invalid choice! Returning to Main Menu...\n");
                }
                break;
            default:
                printf("Invalid choice! Please try again.\n");
                break;
        }
    }
}