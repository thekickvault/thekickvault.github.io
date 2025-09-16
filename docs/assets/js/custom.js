;(function(){
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

  // Advertisement side panels
  function injectAds(){
    const left = document.createElement('div')
    left.className = 'ad-panel ad-left'
    left.innerHTML = '<div class="ad-box">Your Ad Here\n240x300</div><div class="ad-box">Sponsor: The Kick Vault</div>'
    const right = document.createElement('div')
    right.className = 'ad-panel ad-right'
    right.innerHTML = '<div class="ad-box">Concept Boots Drop</div><div class="ad-box">Custom Plates R&D</div>'
    document.body.append(left, right)
  }
  document.addEventListener('DOMContentLoaded', injectAds)
})();
