/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Input: list1 = [], list2 = []
Output: []

Input: list1 = [], list2 = [0]
Output: [0]


    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
    
*/

/*
    First thoughts, the lists are of maximum size 50.
    The lists are already sorted.

    Sorting from start to finish could be O(N) easily.

    using the existing passed arrays to sort would be inefficient due to array shifting when inserting values

    creating a new array will create an additional space to O(N) but the effective runtimen should be better due to constant O(1) popping during the O(N) sort.
*/

/*
Thought

Whileimplementing it became clear there needed to be a plan to handle cases where one list might have significantly more numbers of higher or lower which would throw off a single iterating variable

to avoid going into O(N^2) time complexity we will use two tracking variables and increment them through each check in O(1)

Due to this we will be incrementing and decrementing both i and j inside the for loop to keep the checks in place.

This does increase the worst case runtime to O(N + some additional comparisons) but is negligable.
*/
let mergeTwoLists = (list1, list2) => {
    let maxLength = list2.length;
    let mergedList = [];
    let j = 0;
    if (list1.length < 1 && list2.length < 1){ // if lists are empty return the empty list
        return list1;
    }
    if (list1.length > list2.length){ // if list1 is longer than list 2 set the max length to the new max
        maxLength = list1.length;
    }
    for (let i = 0; i <= maxLength; i++){ // O(N) due to lists of unknown length and merged list of unknown space
        if (j >= maxLength && i >= maxLength){ // if all conditions are met break early
            break;
        }
        if (j >= maxLength && i < maxLength){ // if list2 is maxed start adding remaining items from list 1
            mergedList.push(list1[i]);
            continue;
        }
        if (i === maxLength && j < maxLength){ // if list2 is maxed start adding remaining items from list 2
            mergedList.push(list2[j]);
            i--;
            j++;
            continue;
        }
        if (list1[i] === list2[j]){ // condition 1
            mergedList.push(list1[i]);
            mergedList.push(list2[j]);
        } else if (list1[i] > list2[j]){ // condition 2
            mergedList.push(list2[j]);
            i--;
        } else if (list1[i] < list2[j]){ // condition 3
            mergedList.push(list1[i]);
            j--;
        }
        j++;
    }
    return mergedList[0];
};


let list1 = [1, 2, 3];

let list2 = [1, 2, 4];

console.log(mergeTwoLists(list1, list2)); 

//Question wants a linked list and we answered with an array. will revisit this later.