function calculateProfit() {
    // Parameters for market simulation
    const slippage = 0.02; // 2% price increase for slippage

    // Get inputs
    const amountToBuy = parseFloat(document.getElementById("amountToBuy").value);
    const currentPriceCents = parseInt(document.getElementById("currentPrice").value);
    const sellingPriceCents = parseInt(document.getElementById("sellingPrice").value);
    const resultDiv = document.getElementById("result");

    // Validate inputs
    if (isNaN(amountToBuy) || isNaN(currentPriceCents) || isNaN(sellingPriceCents)) {
        resultDiv.innerHTML = `<p class="text-red-500 text-sm">Please fill out all fields with valid numbers.</p>`;
        return;
    }

    if (amountToBuy <= 0 || currentPriceCents < 1 || currentPriceCents > 100 || sellingPriceCents < 1 || sellingPriceCents > 100) {
        resultDiv.innerHTML = `<p class="text-red-500 text-sm">Invalid input values.</p>`;
        return;
    }

    // Convert prices from cents to dollars
    const basePrice = currentPriceCents / 100;
    const sellingPrice = sellingPriceCents / 100;

    // Simulate slippage
    const adjustedPrice = basePrice * (1 + slippage);

    // Calculate shares bought
    const sharesBought = amountToBuy / adjustedPrice;

    // Calculate total cost (no transaction fee)
    const totalCost = amountToBuy;

    // Calculate earnings and profit/loss
    const earnings = sharesBought * sellingPrice;
    const profitOrLoss = earnings - totalCost;
    const profitPercentage = (profitOrLoss / totalCost) * 100;

    // Display result
    resultDiv.innerHTML = `
        <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 w-full">
            <table class="w-full text-left text-sm">
                <tbody>
                    <tr>
                        <td class="text-gray-700 py-1">Shares Bought:</td>
                        <td class="text-right text-gray-700">${sharesBought.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td class="text-gray-700 py-1">Adjusted Price (with Slippage):</td>
                        <td class="text-right text-gray-700">$${adjustedPrice.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td class="text-gray-700 py-1">Total Cost:</td>
                        <td class="text-right text-gray-700">$${totalCost.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td class="text-gray-700 py-1">Earnings:</td>
                        <td class="text-right text-gray-700">$${earnings.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td class="text-gray-700 py-1">Net Profit/Loss:</td>
                        <td class="text-right ${
                            profitOrLoss >= 0 ? "text-green-500" : "text-red-500"
                        }">$${profitOrLoss.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td class="text-gray-700 py-1">Profit/Loss Percentage:</td>
                        <td class="text-right ${
                            profitOrLoss >= 0 ? "text-green-500" : "text-red-500"
                        }">${profitPercentage.toFixed(2)}%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
}
