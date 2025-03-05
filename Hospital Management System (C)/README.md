# Hospital Management System

A simple hospital management system implemented in C that allows tracking doctors, patients, and their appointments.

## Features

- Add doctors and patients to the system
- Schedule appointments between doctors and patients
- Delete existing appointments
- List all appointments for a specific doctor
- List all appointments for a specific patient

## Data Structure

The system uses a multi-list data structure to efficiently manage appointments:
- Each doctor and patient has their own linked list
- Appointments are connected through both doctor and patient lists
- This allows quick retrieval of all appointments for either a doctor or patient

## Getting Started

### Prerequisites

- C compiler (GCC recommended)

### Compilation

```bash
gcc main.c -o hospital_system
```

### Running the Program

```bash
./hospital_system
```

## Usage

The program offers a menu-driven interface with the following options:

1. Add a new doctor
2. Add a new patient
3. Schedule an appointment
4. Delete an appointment
5. List all appointments for a specific doctor
6. List all appointments for a specific patient
7. Exit

## Implementation Details

- The system automatically assigns unique IDs to doctors and patients
- Appointment times are generated using the system time
- Memory is properly freed before program termination

## Limitations

- No persistent storage (data is lost when the program ends)
- Limited error handling
- No authentication or user roles

## License

This project is open source and available for personal use.