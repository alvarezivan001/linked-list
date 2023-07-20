function aa(){
    console.log("huh");
    // setTimeout(aa, 3000)
}

class LinkedList {
    
    constructor(head = null)
    {
        this.head = head;
    }

    append(value) {
        let currentNode = this.head;
        while(currentNode.nextNode != null)
        {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = new Node(value);

    }
    prepend(value) {
        let newHead = new Node(value);
        let temp = this.head;
        this.head = newHead;
        this.head.nextNode = temp;
    }
    size(){
        let i = 1;
        let currentNode = this.head;
        while(currentNode.nextNode != null)
        {
            i++;
            currentNode = currentNode.nextNode;
        }

        console.log("size: " + i);
        return i;

    }
    whatishead(){
        console.log(this.head + " warning");
        return this.head;
        
    }
    tail(){
        let currentNode = this.head;
        while(currentNode.nextNode != null)
        {
            currentNode = currentNode.nextNode;
        }
        console.log(currentNode);
        return currentNode;
    }
    at(index) {
        let currentNode = this.head;
        while(index > 0)
        {
            currentNode = currentNode.nextNode;
            index--;
        }
        console.log(currentNode);
        return currentNode;
    }
    pop(){
        let currentNode = this.head;
        let prevNode = null;
        while(currentNode.nextNode != null)
        {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        prevNode.nextNode = null;
    }
    contains(value){
        let currentNode = this.head;
        let yes = false;
        currentNode.value == value ? yes = true : false;
        while(yes == false && currentNode != null)
        {
            
            currentNode.value == value ? yes = true : false;
            currentNode = currentNode.nextNode;
        }
        console.log(yes);
        return yes;
    }
    find(value){
        let i = 0;
        let no = true;
        let currentNode = this.head;
        currentNode.value == value ? no = false : currentNode = currentNode.nextNode;
        while(no == true && currentNode != null)
        {
            i++;
            currentNode.value == value ? no = false: true;
            currentNode = currentNode.nextNode;
        }
        if(no == true){console.log(false); return null;}
        else {console.log(i); return i;}
        
    }
    toString(){
        //fix ouput
        let currentNode = this.head;
        while(currentNode.nextNode != null){
            process. stdout. write("( " + currentNode.value + " ) -> ");
            if(currentNode.nextNode != null) 
            {currentNode = currentNode.nextNode;}
            else
            { process. stdout. write("null");}
            
        }

        process. stdout. write("( " + currentNode.value + " ) -> ");
        console.log("null");
    }
    insertAt(value, index){
        if(index <= 0) {
            console.log("inserting as head");
            this.prepend(value);
        }
        else if(index > (this.size()-1))
        {
            console.log("out/end of range, appending to tail");
            this.append(value);
        }
        else{
            let i = 0;
            let currentNode = this.head;
            let prevNode = null;
            let newNode = new Node(value);
            while(i < index && currentNode.nextNode != null)
            {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
                i++;
            }
            newNode.nextNode = currentNode;
            prevNode.nextNode = newNode;
        }
    }
    removeAt(index){
        if(index >= (this.size()-1))
        {
            console.log("out/end of range, removing tail");
            this.pop();
       }
       else{
            let i = 0;
            let prevNode = null;
            let currentNode = this.head;
            
            while(i < index)
            {
                prevNode = currentNode;
                currentNode = currentNode.nextNode;
                i++;
            }
            currentNode = currentNode.nextNode;
            prevNode.nextNode = currentNode;
       }
    }
};

class Node {
    constructor(val = null, next = null) {
        this.value = val;
        this.nextNode = next;
    }
    print() {
        console.log(this.value);
        console.log(this.nextNode);
    }
};

let newList = new LinkedList(new Node(1));
newList.append(5);
newList.append(3);
newList.prepend(9);
newList.prepend(7);
newList.toString();
// newList.pop();

// newList.insertAt(4,5);
newList.removeAt(4);

newList.toString();
