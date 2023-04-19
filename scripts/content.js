const mutationObserver = new MutationObserver(entries => {  
  const targetDiv = document.querySelector("div.xal61yo.x1jn9clo.x2c8kfy.x78zum5.x164qtfw.xl56j7k.xz65tgg.xixxii4.xxsgkw5")
  if (targetDiv) {
    parent.removeChild(targetDiv)
  }
})

const parent =  document.querySelector("div.x9f619.x1n2onr6.x1ja2u2z")

mutationObserver.observe(parent, { childList: true })

