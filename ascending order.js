
function countVowels(str){

    for(const char of str){
    
    
        console.log(char);
    
    }
    } 
    let numbers = [4, 2, 7, 1, 9, 5];
    
    function sortAscending(numbers) {
        return numbers.slice().sort(function(a, b) {
            return a - b;
        });
    }
    // Call the function to get a new array sorted in ascending order
    let sortedNumbersAscending = sortAscending(numbers);
    
    console.log("Original array:", numbers);
    console.log("Sorted array in ascending order:", sortedNumbersAscending);
    
    