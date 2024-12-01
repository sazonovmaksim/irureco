function domChild(parent, index, elementType, namespace) {
    // Create a new element in the specified namespace
    let newElement = document.createElementNS(namespace, elementType);
    
    // Optionally, handle the index parameter if it has special meaning
    
    // Append the new element to the parent
    parent.appendChild(newElement);
    
    // Return the new element
    return newElement;
}

// Example usage
let svgns = "http://www.example.org/2000/svg";
let svgParent = document.getElementById("svgElement"); // Assume there's an SVG element with this ID
let pt = svgParent; // Set pt to the parent initially
pt = domChild(pt, 0, 'rect', svgns); // Create and append a rectangle element
