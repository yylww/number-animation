# number-animation
数字改变时动画效果

## [Demo]('https://yylww.github.io/demo/number-animation/')

## Usage
### HTML
```html
<body>
  <div id='box'></div>
</body>
```

### JavaScript
```javascript
window.onload = function() {
  /**
   * @param {object} 
   * el: required
   * number: optional, initail value, defaut: 0
   * speed: optional, animation speed(ms), default: 1000 
   * length: optional, default: 0 (Minimun is the length of the number)
   * style: optional, number style
   */
  const a = new Animation({
    el: document.getElementById('box_1'),
  })
  const b = new Animation({
    el: document.getElementById('box_2'),
    number: 2000,
    speed: 2000,
    length: 6,
    style: {
      width: '60px',
      height: '90px',
      fontSize: '40px',
      color: 'red',
      margin: '5px 10px',
      border: '3px solid red'
    }
  })
  const c = new Animation({
    el: document.getElementById('box_3'),
    style: {
      width: '40px',
      height: '60px',
      fontSize: '30px',
      color: '#22c485',
      margin: '5px 0',
      background: '#f2f2f2'
    }
  })

  let x = 1234
  let y = 4321
  let z = 56.78
  setInterval(() => {
    x += 1357
    y += 2468
    z += 11.11
    a.setNumber(x)
    b.setNumber(y)
    c.setNumber(z.toFixed(2))
  }, 4000)
}
```