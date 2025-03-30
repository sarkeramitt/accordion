document.addEventListener("DOMContentLoaded", () => {
    const accordionItems = document.querySelectorAll(".accordion-item")
  
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header")
      const content = item.querySelector(".accordion-content")
  
      header.addEventListener("click", () => {
        // Toggle active state for the clicked item
        const isActive = item.classList.contains("active")
  
        // If it's already active, close it
        if (isActive) {
          item.classList.remove("active")
          content.style.maxHeight = null
          return
        }
  
        // Close all other items
        accordionItems.forEach((accordionItem) => {
          if (accordionItem !== item) {
            accordionItem.classList.remove("active")
            accordionItem.querySelector(".accordion-content").style.maxHeight = null
          }
        })
  
        // Open the clicked item
        item.classList.add("active")
        content.style.maxHeight = content.scrollHeight + "px"
  
        // Scroll into view if needed
        setTimeout(() => {
          const rect = item.getBoundingClientRect()
          const isInView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  
          if (!isInView) {
            item.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
            })
          }
        }, 300)
      })
    })
  
    // Open the first item by default
    if (accordionItems.length > 0) {
      accordionItems[0].classList.add("active")
      const firstContent = accordionItems[0].querySelector(".accordion-content")
      firstContent.style.maxHeight = firstContent.scrollHeight + "px"
    }
  
    // Reset hover animation when active state changes
    // accordionItems.forEach((item) => {
    //   const icon = item.querySelector(".icon")
  
    //   item.addEventListener("mouseenter", () => {
    //     if (!item.classList.contains("active")) {
    //       icon.style.transform = "rotate(45deg)"
    //     }
    //   })
  
    //   item.addEventListener("mouseleave", () => {
    //     if (!item.classList.contains("active")) {
    //       icon.style.transform = "rotate(0)"
    //     }
    //   })
    // })
  })
  
  