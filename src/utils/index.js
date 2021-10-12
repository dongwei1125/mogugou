export function debounce(func, delay = 20) {
  var timer = null

  return function (...arg) {
    if (timer) clearTimeout(timer)

    timer = setTimeout(() => {
      func.apply(this, arg)
    }, delay)
  }
}
