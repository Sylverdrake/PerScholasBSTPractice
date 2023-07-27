//BST

class Seed
{
    constructor(value)
    {
        this.value = value,
        this.left = null,
        this.right = null
    }
}


class BST
{
    constructor(value)
    {
    this.root = new Seed (value)
    this.count = 1    
    }
    
    size()
    {
        return this.count
    }

    insert(value)
    {
        this.count++;
        let newSeed = new Seed(value)
        //if less, go left | if more, go right
        //use recursive search function which calls itself when it sees another node

        const searchTree = seed =>
        {
            //if value < node.value, go left
            if (value < seed.value)
            {
                //if no left child, append new node
                if (!seed.left)
                {
                    seed.left = newSeed
                }
                //if left child, look left again
                else
                {
                    searchTree(seed.left)
                }
            }
            //if value > node.value, go right
            else if(value > seed.value)
            {
                if(!seed.right)
                {
                    seed.right = newSeed
                }
                //if right child, look right again
                else
                {
                    searchTree(seed.right)
                }
            }
        }
        searchTree(this.root)
    }

    min()
    {
        let currentSeed = this.root;
        //continue traversing left until no more children
        while (currentSeed.left)
        {
            currentSeed = currentSeed.left
        }
        return currentSeed.value
    }

    max()
    {
        let currentSeed = this.root;
        //continue traversing right until no more children
        while (currentSeed.right)
        {
            currentSeed = currentSeed.right
        }
        return currentSeed.value
    }

    contains(value)
    {
        let currentSeed = this.root;
        while (currentSeed)
        {
            if (value === currentSeed.value)
            {
                return true
            }
            if (value < currentSeed.value)
            {
                currentSeed = currentSeed.left
            }
            else
            {
                currentSeed = currentSeed.right
            }
        }
        return false
    }
    //depth first search - branch by branch

    //in-order
    //left, root, right
    //2, 3, 12, 15, 28, 36, 39
dfsInOrder()
{
    //initialize result array
    let result = []
    //use nested recursive function
    const traverse = seed =>
    {
        //if left child exists, go left again
        if (seed.left) traverse(seed.left)
        //capture root node value
        result.push(seed.value)
        //if right child exists, go right again
        if (seed.right) traverse(seed.right)
    }
    traverse(this.root)
    return result
}
    //pre-order
    //root, left, right
    //15, 3, 2, 12, 36, 28, 29
dfsPreOrder()
{
    let result = []
    const traverse = seed =>
    {
        //capture root node value
        result.push(seed.value)
        //if left child exists, go left again
        if (seed.left) traverse(seed.left)
        //if right child exists, go right again
        if (seed.right) traverse(seed.right)
    }
    traverse(this.root)
    return result
}
    //post-order
    //left, right, root
    //2, 12, 3, 28, 39, 36, 15
dfsPostOrder()
{
    let result = []
    //use nested recursive function
    const traverse = seed =>
    {
        //if left child exists, go left again
        if (seed.left) traverse(seed.left)
        //if right child exists, go right again
        if (seed.right) traverse(seed.right)
        //capture root node value
        result.push(seed.value)

    }
    traverse(this.root)
    return result
}

//breadth first search - level by level
//use a queue
//returns by level
bfs()
{
    let result = [];
    let queue = [];

    queue.push(this.root)
    while(queue.length)
    {
        let currentSeed = queue.shift()
        result.push(currentSeed.value)

        if(currentSeed.left)
        {
            queue.push(currentSeed.left)
        }
        if(currentSeed.right)
        {
            queue.push(currentSeed.right)
        }
    }
    return result
}
}


const bst = new BST(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)

bst.insert(39)

// console.log(bst.dfsInOrder());
// console.log(bst.dfsPreOrder());
// console.log(bst.dfsPostOrder());

// console.log(bst.bfs());

//Trees are hierarchal non-linear data structures
//Binary trees are where each node has max 2 children
//Left child > parent node
//right child < parent node

//BSTs good for accessing/using large amounts of ordered data at expense of memory


//depth first search with in order/pre/order/post order
//breadth first search goes level by level
