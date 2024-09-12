#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

typedef enum { head, data } TYPEFIELD;

typedef struct entryNode {
    int docID;
    int patID;
    char time[6];
    struct entryNode *nextDoc;
    struct entryNode *nextPat;
} ENTRYNODE;

typedef struct multiList {
    ENTRYNODE *doctors;
    ENTRYNODE *patients;
} MULTILIST;

MULTILIST* init(TYPEFIELD tag) {
    MULTILIST *p = (MULTILIST *)malloc(sizeof(MULTILIST));
    p->doctors = NULL;
    p->patients = NULL;
    return p;
}

int addDoctor(MULTILIST *p) {
    static int docID = 0;
    ENTRYNODE *newDoc = (ENTRYNODE *)malloc(sizeof(ENTRYNODE));
    newDoc->docID = ++docID;
    newDoc->nextDoc = p->doctors;
    newDoc->nextPat = NULL;
    p->doctors = newDoc;
    return docID;
}

int addPatient(MULTILIST *p) {
    static int patID = 0;
    ENTRYNODE *newPat = (ENTRYNODE *)malloc(sizeof(ENTRYNODE));
    newPat->patID = ++patID;
    newPat->nextPat = p->patients;
    newPat->nextDoc = NULL;
    p->patients = newPat;
    return patID;
}

void addAppointment(MULTILIST *p, int docID, int patID, char *time) {
    ENTRYNODE *doc = p->doctors;
    while (doc && doc->docID != docID) {
        doc = doc->nextDoc;
    }
    if (!doc) {
        printf("Doctor not found\n");
        return;
    };

    ENTRYNODE *pat = p->patients;
    while (pat && pat->patID != patID) {
        pat = pat->nextPat;
    }
    if (!pat) {
        printf("Patient not found\n");
        return;
    };

    ENTRYNODE *newApp = (ENTRYNODE *)malloc(sizeof(ENTRYNODE));
    newApp->docID = docID;
    newApp->patID = patID;
    strcpy(newApp->time, time);
    newApp->nextDoc = doc->nextDoc;
    newApp->nextPat = pat->nextPat;
    doc->nextDoc = newApp;
    pat->nextPat = newApp;
    printf("Appointment added for doctor %d and patient %d at %s\n", docID, patID, time);
    return;
}

void deleteAppointment(MULTILIST *p, int docID, int patID) {
    ENTRYNODE *doc = p->doctors;
    ENTRYNODE *prevDoc = NULL;
    while (doc && doc->docID != docID) {
        prevDoc = doc;
        doc = doc->nextDoc;
    }
    if (!doc) return;

    ENTRYNODE *pat = p->patients;
    ENTRYNODE *prevPat = NULL;
    while (pat && pat->patID != patID) {
        prevPat = pat;
        pat = pat->nextPat;
    }
    if (!pat) return;

    ENTRYNODE *app = doc->nextDoc;
    ENTRYNODE *prevApp = doc;
    while (app && (app->docID != docID || app->patID != patID)) {
        prevApp = app;
        app = app->nextDoc;
    }
    if (app) {
        prevApp->nextDoc = app->nextDoc;
        free(app);
    }

    app = pat->nextPat;
    prevApp = pat;
    while (app && (app->docID != docID || app->patID != patID)) {
        prevApp = app;
        app = app->nextPat;
    }
    if (app) {
        prevApp->nextPat = app->nextPat;
        free(app);
    }

    printf("Appointment deleted for doctor %d and patient %d\n", docID, patID);
}

void listAppDoc(MULTILIST *p, int docID) {
    ENTRYNODE *doc = p->doctors;
    while (doc && doc->docID != docID) {
        doc = doc->nextDoc;
    }
    if (!doc) {
        printf("Doctor not found\n");
        return;
    }
    ENTRYNODE *app = doc->nextDoc;
    if (!app) {
        printf("No appointments for doctor %d\n", docID);
        return;
    }
    while (app) {
        printf("Doctor ID: %d, Patient ID: %d, Time: %s\n", app->docID, app->patID, app->time);
        app = app->nextDoc;
    }
}

void listAppPat(MULTILIST *p, int patID) {
    ENTRYNODE *pat = p->patients;
    while (pat && pat->patID != patID) {
        pat = pat->nextPat;
    }
    if (!pat) {
        printf("Patient not found\n");
        return;
    }
    ENTRYNODE *app = pat->nextPat;
    if (!app) {
        printf("No appointments for patient %d\n", patID);
        return;
    }
    
    while (app) {
        printf("Doctor ID: %d, Patient ID: %d, Time: %s\n", app->docID, app->patID, app->time);
        app = app->nextPat;
    }
}

void freeAll(MULTILIST *p) {
    ENTRYNODE *current, *temp;

    current = p->doctors;
    while (current) {
        temp = current;
        current = current->nextDoc;
        free(temp);
    }

    current = p->patients;
    while (current) {
        temp = current;
        current = current->nextPat;
        free(temp);
    }

    free(p);
}

int main() {
    int ch, docID, patID, cont;
    time_t t = time(NULL)  + 10*60;
    char *exact_time = ctime(&t);
    char time[6];
    for (int i = 0; i < 5; i++) {
        time[i] = exact_time[i+11];
    }
    MULTILIST *p;
    p = init(data);
    printf("********************************************\n");
    printf("    HOSPITAL MANAGEMENT SYSTEM              \n");
    printf("********************************************\n");
    do {
        printf("\nEnter your choice:");
        printf("\n1. Add doctor");
        printf("\n2. Add patient");
        printf("\n3. Add Appointment");
        printf("\n4. Delete Appointment");
        printf("\n5. List Appointments for a Doctor");
        printf("\n6. List Appointments for a Patient");
        printf("\n7. Exit");
        printf("\nChoice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                docID = addDoctor(p);
                printf("\nDoctor inserted with doctor ID: %d", docID);
                break;
            case 2:
                patID = addPatient(p);
                printf("\nPatient inserted with patient ID: %d", patID);
                break;
            case 3:
                printf("\nEnter the doctor ID: ");
                scanf("%d", &docID);
                printf("\nEnter the patient ID: ");
                scanf("%d", &patID);
                addAppointment(p, docID, patID, time);
                break;
            case 4:
                printf("\nEnter the doctor ID: ");
                scanf("%d", &docID);
                printf("\nEnter the patient ID: ");
                scanf("%d", &patID);
                deleteAppointment(p, docID, patID);
                break;
            case 5:
                printf("\nEnter the doctor ID: ");
                scanf("%d", &docID);
                listAppDoc(p, docID);
                break;
            case 6:
                printf("\nEnter the patient ID: ");
                scanf("%d", &patID);
                listAppPat(p, patID);
                break;
            case 7:
                exit(0);
            default:
                printf("\nInvalid choice");
        }
        printf("\nDo you want to continue? Press 1 for Yes, 0 for No: ");
        scanf("%d", &cont);
    } while (cont);
    
    freeAll(p);
    return 0;
}
