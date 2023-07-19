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

    }
    head(){
        
    }
    tail(){
        let currentNode = this.head;
        while(currentNode.nextNode != null)
        {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }
    at(index) {

    }
    pop(){
        
    }
    contains(value){

    }
    find(value){
        
    }
    toString(){
        //fix ouput
        let currentNode = this.head;
        do{
            console.log("( " + currentNode.value + " ) -> ");
            if(currentNode.nextNode != null) 
            {currentNode = currentNode.nextNode;}
            else
            {console.log("null");}
            
        }while(currentNode.nextNode != null)
        
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
newList.append(1);
newList.append(9);

newList.toString();//fix ouput