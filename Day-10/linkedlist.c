#include <stdio.h>

struct Node {
    int data;
    struct Node * prev;
    struct Node * next;
};

struct Node * createNode(int data) {
    struct Node * newNode = (struct Node * )
    malloc(sizeof(struct Node));
    newNode -> data = data;
    newNode -> prev = NULL;
    newNode -> next = NULL;
    return newNode;
}

// Function to delete a node at a specific 
//position in the doubly linked list
struct Node * delPos(struct Node * head, int pos) {

    // If the list is empty
    if (head == NULL)
        return head;

    struct Node * curr = head;

    // Traverse to the node at the given position
    for (int i = 1; curr && i < pos; ++i) {
        curr = curr -> next;
    }

    // If the position is out of range
    if (curr == NULL)
        return head;

    // Update the previous node's next pointer
    if (curr -> prev)
        curr -> prev -> next = curr -> next;

    // Update the next node's prev pointer
    if (curr -> next)
        curr -> next -> prev = curr -> prev;

    // If the node to be deleted is the head node
    if (head == curr)
        head = curr -> next;

    // Deallocate memory for the deleted node
    free(curr);
    return head;
}

// Function to print the doubly linked list
void printList(struct Node * head) {
    struct Node * curr = head;
    while (curr != NULL) {
        printf("%d ", curr -> data);
        curr = curr -> next;
    }
    printf("\n");
}

int main() {

    // Create a hardcoded doubly linked list:
    // 1 <-> 2 <-> 3
    struct Node * head = createNode(1);
    struct Node * temp1 = createNode(2);
    struct Node * temp2 = createNode(3);

    // Link the nodes together
    head -> next = temp1;
    temp1 -> prev = head;
    temp1 -> next = temp2;
    temp2 -> prev = temp1;

    printf("Original Linked List: ");
    printList(head);

    // Delete node at position 2
    head = delPos(head, 2);

    printf("After Deletion at position 2: ");
    printList(head);

    return 0;
}