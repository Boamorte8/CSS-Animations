// Function to add tooltips to anchors

let anchors = document.querySelectorAll('.anchor-tooltip');

anchors.forEach((anchor) => {
    let tooltipText = anchor.getAttribute('title'),
        tooltip = document.createElement('span');

    tooltip.className = 'title-tooltip';
    tooltip.innerHTML = tooltipText;
    anchor.appendChild(tooltip);
})

