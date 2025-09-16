;(function(){
  // Loader overlay for 5s
  const loader = document.createElement('div')
  loader.className = 'glow-loader'
  const cleat = document.createElement('div')
  cleat.className = 'glow-cleat'
  loader.appendChild(cleat)
  document.addEventListener('DOMContentLoaded',()=>{
    document.body.appendChild(loader)
    setTimeout(()=>{
      loader.style.opacity='0'
      loader.style.transition='opacity .5s ease'
      setTimeout(()=> loader.remove(), 500)
    }, 5000)
  })

  // Simple client-side filtering on gallery page
  function setupFilters(){
    const container = document.querySelector('[data-gallery]')
    if(!container) return
    const inputs = document.querySelectorAll('[data-filter] input')
    function apply(){
      const values = Array.from(inputs).filter(i=>i.checked).map(i=>i.value.toLowerCase())
      const cards = container.querySelectorAll('[data-card]')
      cards.forEach(card=>{
        const tags = (card.getAttribute('data-tags')||'').toLowerCase()
        const ok = values.length===0 || values.every(v=>tags.includes(v))
        card.style.display = ok ? '' : 'none'
      })
    }
    inputs.forEach(i=>i.addEventListener('change', apply))
    apply()
  }
  document.addEventListener('DOMContentLoaded', setupFilters)
})();
