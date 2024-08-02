const clearanceData = {
    "1/4-20": { "close": 0.257, "normal": 0.265, "loose": 0.277 },
    "10-32": { "close": 0.191, "normal": 0.201, "loose": 0.213 },
    "5/16-18": { "close": 0.323, "normal": 0.332, "loose": 0.346 },
    "3/8-16": { "close": 0.386, "normal": 0.397, "loose": 0.413 },
    "1/2-13": { "close": 0.514, "normal": 0.528, "loose": 0.546 },
    "6-32": { "close": 0.106, "normal": 0.113, "loose": 0.120 },
    "8-32": { "close": 0.136, "normal": 0.144, "loose": 0.151 },
    "1/2-20": { "close": 0.516, "normal": 0.532, "loose": 0.550 },
    "3/4-10": { "close": 0.765, "normal": 0.781, "loose": 0.800 },
    "1/4-28": { "close": 0.239, "normal": 0.250, "loose": 0.265 },
    "5/16-24": { "close": 0.290, "normal": 0.302, "loose": 0.315 },
    "3/8-24": { "close": 0.349, "normal": 0.362, "loose": 0.377 },
    "1/2-20": { "close": 0.484, "normal": 0.500, "loose": 0.515 },
    "9/16-18": { "close": 0.543, "normal": 0.562, "loose": 0.578 },
    "5/8-18": { "close": 0.609, "normal": 0.627, "loose": 0.644 },
    "3/4-16": { "close": 0.761, "normal": 0.781, "loose": 0.797 },
    "7/8-14": { "close": 0.886, "normal": 0.906, "loose": 0.926 },
    "1-14": { "close": 1.011, "normal": 1.031, "loose": 1.051 },
    "M3x0.5": { "close": 3.2, "normal": 3.4, "loose": 3.6 },
    "M4x0.7": { "close": 4.2, "normal": 4.4, "loose": 4.6 },
    "M5x0.8": { "close": 5.2, "normal": 5.4, "loose": 5.6 },
    "M6x1.0": { "close": 6.2, "normal": 6.4, "loose": 6.6 },
    "M8x1.25": { "close": 8.4, "normal": 8.6, "loose": 8.8 },
    "M10x1.5": { "close": 10.5, "normal": 10.7, "loose": 10.9 },
    "M12x1.75": { "close": 12.5, "normal": 12.7, "loose": 12.9 },
    "M16x2.0": { "close": 16.5, "normal": 16.7, "loose": 16.9 },
    "M20x2.5": { "close": 20.5, "normal": 20.7, "loose": 20.9 }
};

document.getElementById('boltSize').addEventListener('input', function() {
    const input = this.value.trim();
    const suggestions = document.getElementById('suggestions');
    suggestions.innerHTML = '';
    
    if (input) {
        const filteredData = Object.keys(clearanceData).filter(key => key.includes(input));
        if (filteredData.length > 0) {
            suggestions.style.display = 'block';
            filteredData.forEach(key => {
                const suggestionItem = document.createElement('p');
                suggestionItem.textContent = key;
                suggestionItem.onclick = () => {
                    document.getElementById('boltSize').value = key;
                    suggestions.style.display = 'none';
                };
                suggestions.appendChild(suggestionItem);
            });
        } else {
            suggestions.style.display = 'none';
        }
    } else {
        suggestions.style.display = 'none';
    }
});

function calculateClearance() {
    const boltSize = document.getElementById('boltSize').value.trim();
    const clearanceType = document.getElementById('clearanceType').value;
    
    if (!boltSize || !(boltSize in clearanceData)) {
        document.getElementById('clearanceResult').textContent = 'Please enter a valid bolt size found in the database.';
        document.getElementById('results').style.display = 'block';
        return;
    }
    
    const clearanceValue = clearanceData[boltSize][clearanceType];
    document.getElementById('clearanceResult').textContent = `The clearance for a ${boltSize} bolt with a ${clearanceType} fit is ${clearanceValue} inches.`;
    document.getElementById('results').style.display = 'block';
}

function clearForm() {
    document.getElementById('boltSize').value = '';
    document.getElementById('clearanceType').value = 'close';
    document.getElementById('results').style.display = 'none';
    document.getElementById('suggestions').style.display = 'none';
}
