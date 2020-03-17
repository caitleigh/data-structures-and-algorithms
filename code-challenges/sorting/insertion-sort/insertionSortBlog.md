## 
Insertion Sort takes in and array and returns the same array with sorted values. 
    Example: 
        input = [8, 4, 23, 42, 16, 15]
        output = [4, 8 15, 16, 23, 42]

## Algorithm 
1) Declare a function called insertionSort that takes in an array 
2) Loop through the array setting i to 1
3) declare j to be i minus 1
4) Set a temp variable to be the value of arr[i]
5) Start a while loop and while j is greater than or equal to 0 and the arr[j] is less than the temp variable 
    - While this is true, set arr[j] equal to arr[j-1]
    - set j to j minus 1
    - set the new temp to j + 1

## Step through input 
input = [8, 4, 23, 42, 16, 15]
    length of array = 6

Step 1    
    j = 1-1 = 0
    temp = arr[1] = 4

    is 0 greater than or equal to 0? YES
    is 4 less than arr[0] so is 4 less 8? YES
        set arr[0] to be index 1 so arr[1] now has a value of 8
        reset j to be j-1 so 1-1 = 0

        array is now [4, 8, 23, 42, 16, 15]

        is 0 greater than or equal to 0? yes
        is arr 4 less than 4? No
        break out of while loop

        temp = arr[j+1] = 1 = arr[1] = 8 
Step 2
    j = i -1 = 2-1 = 1
    temp = arr [2] 23

    is 1 greater than 0? YES
    is 23 less than arr[1] = 8? NO
    break out of while loop 

    current arr = [4, 8, 23, 42, 16, 15] 

Step 3
    j = i-1 = 3-1 = 2 
    temp = arr[3] = 42

    is 2 greater than or equal to 0? YES
    is 43 less than arr[2]=23? NO
    break out of while
Step 4
    j = i -1 = 4-1 = 3
    temp = arr[4] = 16

    is 3 greater than or equal to 0? YES
    is 16 less than or equal to arr[3]=42? YES
        set arr[3] to be index 4 so now arr[4] now has a value of 42
        set j to be j-1 so 3-1  = 2
        [4, 8, 23, 16, 42, 15]

        temp = j+1 or 2+1 = arr[3] = 16

        is 2 greater than or equal to 0? YES
        is 16 less than arr[2]=23? YES 
            set arr[2] to be index 4  so now arr[4] now has a value of 23
            set j to j -1 so 2-1 = 1 

            current array is now [4, 8, 16, 23, 42, 15]

            temp = j+1 or 1=1 = 2 = 16

            is 1 greater than or equal to 0? YES 
            is 16 less than or equal to arr[1]= 8? NO
            break out of while loop 
Step 5 
    j = i -1 so 5 -1 = 4 
    temp = arr[5] = 15

    is 4 greater than or equal to 0? YES
    is 15 less than arr[4]=42? YES 
        set arr[4]=42 to be index arr[4+1] or arr[5]
        set j to be j-1 so 4-1 = 3

        current array is now [4, 8, 16, 23, 15, 42] 

        temp = j+1 = 3+1 = 4 = arr[4] = 15

        is 4 greater than or equal to 4? YES 
        is 15 less than arr[3]= 23? YES
        set arr[3] to be at index arr[3+1] or arr [4]
        set j to be j -1 so 3 -1 = 2

        current array is now [4, 8, 16, 15, 23, 42]

        temp = j+1 = 2+1 = arr[3] = 15

        is 2 greater than or equal to 0? YES
        is 15 less than arr[2]= 16? YES 
            set arr [2] to be index arr [2+1] or arr[3]
            set j to be j -1 so 2 -1 = 1 

            current array is now [4, 8, 15, 16, 23, 42]
            temp = j + 1 = 1+1 = arr[2] = 15

            is 1 greater than or equal to 0? YES
            is 15 less than arr[1]=8? NO
            BREAK 
Step 5
    i = 6 which does not exist to BREAK 

Final array = [4, 8, 15, 16, 23, 42]



j = -1 (0-1)
temp = 8

is -1 greater than or equal to 0? No, so break out of while and move onto arr[i+1]

arr[i+1] = 4
now j = 0 (1-1)
temp = 4

j greater than or equal to 0? 
    is 0 greater than or equal to 0? yes
is the current temp less than arr[j]
    is 4 greaer than or equal to arr[0] so is 4 less than 8? yes 
        now let arr[j] orr arr[0] which is the value of 8 move to arr[1]
        now arr = [4, 8, 23, 42, 16, 15]

        temp now equals arr[j-1] so arr[1] = 

now j =1 (2-1)
temp = 23 

j greater than or equal to 0? 
    is 1 greater than or equal to 0? yes
is the current temp less than arr[j]
    is 23 less than 4? 

    


