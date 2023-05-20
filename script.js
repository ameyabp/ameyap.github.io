function expandContractNews() {
    console.log("chaltay baba!")
    var btn = d3.select("#news-expand-contract")
    
    console.log(btn.node().value)            
    
    if (btn.node().value === "contracted") {
        btn.node().value = "expanded"
        btn.text("-")
    }
    else {
        btn.node().value = "contracted"
        btn.text("+")
    }
    
    console.log(btn.node().value)

}