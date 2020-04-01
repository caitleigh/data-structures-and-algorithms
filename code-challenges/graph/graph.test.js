class Graph {
    constructor() {
        this.adjacenyList = []
    }

    addNode(node) {
        //check to see if node exists in graph and if not, add node
        if (this.adjacenyList.has(node)) {
            this.adjacenyList.get(node)
        } else {
            this.adjacenyList.set(node, [])
        }
    }
    addEdge(node1, node2, weight) {
        if (this.adjacenyList.has(node1) && this.adjacenyList.has(node2)) { 
            
            this.adjacenyList.get(node1).push((node2, weight))
            this.adjacenyList.get(node1).push((node2, weight))
        }
    }

    getNodes() {
        return this.adjacenyList
    }

    getNeighbors(node) {

        if (this.adjacenyList.has(node)) {
            return this.adjacenyList.get(node)
        }
    }
    getSize() {
        return this.adjacenyList.size
    }
}

//Tests 
// Node can be successfully added to the graph
// An edge can be successfully added to the graph
// A collection of all nodes can be properly retrieved from the graph
// All appropriate neighbors can be retrieved from the graph
// Neighbors are returned with the weight between nodes included
// The proper size is returned, representing the number of nodes in the graph
// A graph with only one node and edge can be properly returned
// An empty graph properly returns null