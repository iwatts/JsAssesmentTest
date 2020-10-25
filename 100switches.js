/*
There are 100 switches in a room operating 100 bulbs. Initially all switches are off. You are asked to make 100 passes through them, in such a manner that during i th pass all the switches that are multiples of i are toggled (if a switch is off, you switch it on, if it is on, you switch it off). For example, during 10th pass you will toggle switch number 10,20,30….100. After completing 100 passes through the switches how many bulbs are on?
 
Answer: 10

*/

function toggleSwitches() {
    let switchesOn = [];
    /*Run through 100 times, starting at 1 */
    for (i = 1; i < 101; i++) {
        /*loop through the 100 switches, starting with 1*/
        for (j = 1; j < 101; j++) {
            if( j % i == 0) {
                /*If the switch isn't in the array, it's "off", add it to the array to be "on" */
                if (!switchesOn.includes(j)) {
                    switchesOn.push(j);
                /*If the switch is in the array already, remove it/turn it "off" */
                } else {
                    let index = switchesOn.indexOf(j);
                    switchesOn.splice(index, 1);
                }
            }
        }
    }
    /*Sort the switches numerically, for my sanity */
    switchesOn.sort((a, b) => a - b);
    
    return switchesOn.length;
}

toggleSwitches();