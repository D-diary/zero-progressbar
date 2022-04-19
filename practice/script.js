;(function () {
  'use strict'

  let timerId
  const get = (target) => {
    return document.querySelector(target)
  }

  const throttle = (callback, time) => {
    if (timerId) return // 매번 초기화
    timerId = setTimeout(()=> {
      callback()
      timerId = undefined
    }, time)
  }

  const $progressBar = get('.progress-bar')

  const onScroll = () => {
    const height = 
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

    
    const scrollTop = document.documentElement.scrollTop
    
    const scrollWidth = (scrollTop / height) * 100
    $progressBar.style.width = scrollWidth + '%'
    // console.log('height',height)
    // console.log('scrollTop',scrollTop)
    // console.log(scrollWidth)
  }


  window.addEventListener('scroll', () => throttle(onScroll, 100))
})()
