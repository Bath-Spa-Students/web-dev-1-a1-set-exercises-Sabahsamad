document.getElementById("calculateButton").addEventListener("click", function() {
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var liters = parseFloat(document.getElementById("liters").value);
    var totalCost = costPerLiter * liters;
    document.getElementById("totalCost").innerText = "Total Cost: AED" + totalCost.toFixed(2);
});