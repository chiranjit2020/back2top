# BACK2TOP.JS
###### Back2Top Js is a small library to create a back to top button using Vanilla JavaScript 

### HTML
```html
<!-- Place the button on your page -->
<button id="back2top">BACK2TOP</button>
```
### CSS
```css
button#back2top{
    /*Button will appear on bottom-right corner of the page */
    position: fixed;
    right: 2%;
    bottom: 2%;
    opacity: 0;
    visibility: hidden;
    
    /*For better looking button*/
    font-family: sans-serif;
    font-size: 14px;
    color: #fff;
    line-height: 1.3;
    background-color: #123;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 10px 18px;
    margin: 0;
}
```
### JavaScript
```javascript
//Add BACK2TOP.JS or BACK2TOP.MIN.JS file
//<script src="back2top.js"></script>
<script src="back2top.min.js"></script>
<script>
    const button = document.querySelector("#back2top");

    // Call the BACK2TOP Function
    BACK2TOP(button, 200);
</script>
```