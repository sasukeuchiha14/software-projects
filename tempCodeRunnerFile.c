#include <stdio.h>
#include <time.h>

void test_time_function() {
    for (int i = 0; i < 24; i++) {
        time_t t = time(NULL) + 10*60 + i*3600;
        char *exact_time = ctime(&t);
        char time[6];
        for (int j = 0; j < 5; j++) {
            time[j] = exact_time[j+11];
        }
        time[5] = '\0'; // Null-terminate the string
        printf("Test %d - Time: %s\n", i+1, time);
    }
}

int main() {
    test_time_function();
    return 0;
}