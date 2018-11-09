
const numberAnimation = {

  element: null,
  speed: 2000,
  length: 0,
  style: {
    width: 100,
    height: 150,
    fontSize: 60
  },

  init: function(options) {
    this.element = document.querySelector(options.el)
    this.speed = options.speed || this.speed
    this.length = Math.max(options.length || 0, options.number.toString().length)
    this.style = options.style || this.style

    this.prepare()
    this.setStyle()
    this.setNumber(options.number)
    return this
  },

  prepare: function() {
    const length = this.length
    const numberDiv = '<div class="number-box">' +
                        '<div class="number-wrap">' + 
                          '<span class="number-span">0</span>' + 
                          '<span class="number-span">1</span>' + 
                          '<span class="number-span">2</span>' + 
                          '<span class="number-span">3</span>' + 
                          '<span class="number-span">4</span>' + 
                          '<span class="number-span">5</span>' + 
                          '<span class="number-span">6</span>' + 
                          '<span class="number-span">7</span>' + 
                          '<span class="number-span">8</span>' + 
                          '<span class="number-span">9</span>' + 
                          '<span class="number-span">.</span>' + 
                        '</div>' +
                      '</div>'
    let htmlStr = ''
    for (let i = 0; i < length; i++) {
      htmlStr += numberDiv
    }
    this.element.innerHTML = htmlStr
  },

  setStyle: function() {
    const style = this.style
    const numberBoxArr = this.element.querySelectorAll('.number-box')
    const numberSpanArr = this.element.querySelectorAll('.number-span')

    numberBoxArr.forEach(function(item, i) {
      item.style.width = style.width + 'px'
      item.style.height = style.height + 'px'
      item.style.lineHeight = style.height + 'px'
      item.style.fontSize = style.fontSize + 'px'
    })

    numberSpanArr.forEach(function(item, i) {
      item.style.width = style.width + 'px'
      item.style.height = style.height + 'px'
      item.style.fontSize = style.fontSize + 'px'
    })
  },

  setNumber: function(number) {
    const numberHeight = this.style.height
    const speed = this.speed
    const numberStr = this.numberPadding(number, this.length).toString()
    console.log(numberStr, this.length)
    if (numberStr.length > this.length) {
      this.length = numberStr.length
      this.prepare()
      this.setStyle()
    }
    const numberArr = numberStr.split('')
    const numberWrapArr = this.element.querySelectorAll('.number-wrap')
    numberWrapArr.forEach(function(value, i) {
      numberWrapArr[i].style.webkitTransform = 'translateY(-' + numberHeight * parseInt(numberArr[i]) + 'px)'
      numberWrapArr[i].style.webkitTransition = speed / 1000 + 's'
    }) 
  },

  numberPadding(number, length) {
    if (number.toString().length >= length) return number
    for(var len = (number + '').length; len < length; len = number.length) {
      number = '0' + number;           
    }
    return number
  }
}