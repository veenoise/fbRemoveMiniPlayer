const mutationObserver = new MutationObserver(entries => {  
  const targetDiv = document.querySelector(".xxsgkw5")
  if (targetDiv) {    
    parent.removeChild(targetDiv)
  }
})

const parent =  document.querySelector("div.x9f619.x1n2onr6.x1ja2u2z")

mutationObserver.observe(parent, { childList: true })

