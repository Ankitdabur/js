# Project related to DOM

## Project link
[click](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js
)
# Solution code 

## Project 6
```javascript
const insert = document.getElementById('insert')

window.addEventListener('keydown' , (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>key</th>
    <th>key code</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </table>
</div>
  `

// e.key → tells which key/value was pressed
// Example: "a", "A", "Enter", "ArrowUp"

// e.code → tells the physical key that was pressed
// Example: "KeyA", "Enter", "Space", "ArrowUp"

// e.keyCode → old numeric key code
// Deprecated; prefer e.key or e.code
})
```