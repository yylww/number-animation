# number-animation
数字改变时动画效果

### [Demo](https://yylww.github.io/demo/number-animation/)

### HTML
```html
<body>
  <div id='box'></div>
</body>
```

### JavaScript
```javascript
const a = new Animation({
  el: document.getElementById('box'), // required
  number: 2000,                       // optional, Initail value, default: 0
  speed: 3000,                        // optional, Animation speed(ms), default: 1000
  length: 6,                          // optional, default: 0 (Minimun is the length of the number)
  style: {                            // optional, number style 
    width: '60px',
    height: '90px',
    fontSize: '40px',
    color: 'red',
    margin: '5px 10px',
    border: '3px solid red'
  }
})
a.init()
let number = 2000
setInterval(() => {
  number += 1234
  a.setNumber(number)
})
```
