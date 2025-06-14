
  // --------------------------------------------------- Promo Strap ----------------------------------------------------
  const promoMessages = [
    'Top Grades Need Top Screens! Grab 10% Cashback up to ₹2000 on Monitors + Student-Only Deals - Limited Time!',
    'Transform your <b>Home</b> setup with sharp, sleek <b>Monitors</b> built for serious Multitasking',
    '<strong>Shopping for a business?</strong> Shop for the best deals for LenovoPro with our Exclusive Offers!',
    'The best of power & versatility. Get incredible discounts, assured exchange bonus of ₹1500 & more on all Tablets',
    'New Exchange Offer: Get bonus of up to ₹10,000 + Exchange Value of your device! <strong>Trade-In now!</strong>'
  ];

  const promoText = document.getElementById('promo-text');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');

  let index = 0;
  let interval;

  function showPromo(i) {
    promoText.style.opacity = 0;
    setTimeout(() => {
      promoText.innerHTML = promoMessages[i];
      promoText.style.opacity = 1;
    }, 300);
  }

  function nextPromo() {
    index = (index + 1) % promoMessages.length;
    showPromo(index);
  }

  function prevPromo() {
    index = (index - 1 + promoMessages.length) % promoMessages.length;
    showPromo(index);
  }

  function startAutoSlide() {
    interval = setInterval(nextPromo, 4000);
  }

  function resetTimer() {
    clearInterval(interval);
    startAutoSlide();
  }

  leftArrow.addEventListener('click', () => {
    prevPromo();
    resetTimer();
  });

  rightArrow.addEventListener('click', () => {
    nextPromo();
    resetTimer();
  });

  // Initialize
  showPromo(index);
  startAutoSlide();













  function scrollNav(direction) {
      const strip = document.getElementById('navStrip');
      const scrollAmount = 200;
      strip.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }



function redirectToSignIn() {
  window.location.href = "signIn.html";
}
function redirectToHome() {
  window.location.href = "index.html";
}
function redirectToHomeMain() {
    window.location.href = "home.html";
  }











// --------------------------------------------------- Customization ----------------------------------------------------

  document.addEventListener("DOMContentLoaded", function () {
      const toggleButton = document.getElementById("customization-toggle");
      const panel = document.getElementById("customization-panel");

      const bgColorPicker = document.getElementById("bg-color-picker");
      const textColorPicker = document.getElementById("text-color-picker");
      const fontSizeSelector = document.getElementById("font-size-selector");
      const darkModeToggle = document.getElementById("dark-mode-toggle");
      const spotlightToggle = document.getElementById("spotlight-toggle");
      const spotlightBtn = document.getElementById("spotlight-next");
      const spotlightPrevBtn = document.getElementById("spotlight-prev");

      const body = document.body;
      const paragraphs = document.querySelectorAll("p");
      let currentFocus = 0;

      // Customization Panel Toggle
      toggleButton.addEventListener("click", () => {
        panel.style.display = panel.style.display === "flex" ? "none" : "flex";
      });

      // Background Color
      bgColorPicker.addEventListener("input", (e) => {
        body.style.backgroundColor = e.target.value;
      });

      // Text Color
      textColorPicker.addEventListener("input", (e) => {
        body.style.color = e.target.value;
      });

      // Font Size
      fontSizeSelector.addEventListener("change", (e) => {
        body.style.fontSize = e.target.value;
      });

      // Dark Mode
      darkModeToggle.addEventListener("change", (e) => {
        body.classList.toggle("dark-mode", e.target.checked);
      });


      // Hide customization panel if clicked outside
      document.addEventListener("click", (e) => {
        if (!panel.contains(e.target) && !toggleButton.contains(e.target)) {
          panel.style.display = "none";
        }
      });
    })


    // ----------------------------------------------------- Filters ------------------------------------------------------------
    // Global variables for filter system
        let zx9k_allProducts = [];
        let zx9k_isDropdownOpen = false;

        // Initialize the filter system
        function zx9k_initializeFilterSystem() {
            zx9k_allProducts = Array.from(document.querySelectorAll('.product-card')).map(card => {
                return {
                    element: card.cloneNode(true),
                    price: parseInt(card.getAttribute('data-price').replace('₹', '').replace(',', '')) || 0,
                    rating: parseFloat(card.getAttribute('data-rating')) || 0,
                    ram: parseInt(card.getAttribute('data-ram')) || 0,
                    storage: parseInt(card.getAttribute('data-storage')) || 0
                };
            });
        }

        // Toggle filter dropdown
        function zx9k_toggleFilterDropdown() {
            const dropdown = document.getElementById('zx9k_filterDropdown');
            zx9k_isDropdownOpen = !zx9k_isDropdownOpen;
            
            if (zx9k_isDropdownOpen) {
                dropdown.classList.add('zx9k_show_dropdown');
                document.addEventListener('click', zx9k_handleOutsideClick);
            } else {
                dropdown.classList.remove('zx9k_show_dropdown');
                document.removeEventListener('click', zx9k_handleOutsideClick);
            }
        }

        // Handle clicks outside dropdown
        function zx9k_handleOutsideClick(event) {
            const dropdown = document.getElementById('zx9k_filterDropdown');
            const button = document.querySelector('.zx9k_smart_filter_btn');
            
            if (!dropdown.contains(event.target) && !button.contains(event.target)) {
                dropdown.classList.remove('zx9k_show_dropdown');
                zx9k_isDropdownOpen = false;
                document.removeEventListener('click', zx9k_handleOutsideClick);
            }
        }

        // Smart filter application with intelligent messaging
        function zx9k_applySmartFilter() {
            const maxPrice = parseFloat(document.getElementById('zx9k_maxPrice').value) || Infinity;
            const minRating = parseFloat(document.getElementById('zx9k_minRating').value) || 0;
            const minRam = parseInt(document.getElementById('zx9k_minRam').value) || 0;
            const minStorage = parseInt(document.getElementById('zx9k_minStorage').value) || 0;

            // Check if RAM and Storage inputs were provided
            const ramInputProvided = document.getElementById('zx9k_minRam').value.trim() !== '';
            const storageInputProvided = document.getElementById('zx9k_minStorage').value.trim() !== '';

            // Validate inputs and collect issues
            const inputIssues = zx9k_validateInputs(maxPrice, minRating, minRam, minStorage);
            
            // Primary filtering with strict handling of missing specs
            let filteredProducts = zx9k_allProducts.filter(product => {
                const meetsPrice = product.price <= maxPrice;
                const meetsRating = product.rating >= minRating;
                
                // For products with missing RAM/Storage specs (monitors):
                // Only include them if user didn't specify RAM/Storage requirements
                if (product.ram === 0 || product.storage === 0) {
                    // If user specified RAM or Storage requirements, exclude products without these specs
                    if (ramInputProvided || storageInputProvided) {
                        return false;
                    }
                    // If user didn't specify RAM/Storage, only check price and rating
                    return meetsPrice && meetsRating;
                }
                
                // For products with complete specs, check all criteria
                const meetsRam = product.ram >= minRam;
                const meetsStorage = product.storage >= minStorage;
                
                return meetsPrice && meetsRating && meetsRam && meetsStorage;
            });

            let appliedStrategy = "exact_match";
            let usedCriteria = [];

            // Smart fallback logic
            if (filteredProducts.length === 0) {
                appliedStrategy = "fallback";
                
                // First fallback: Try price + rating only (including monitors)
                if (maxPrice !== Infinity && minRating > 0) {
                    filteredProducts = zx9k_allProducts.filter(product => {
                        return product.price <= maxPrice && product.rating >= minRating;
                    });
                    if (filteredProducts.length > 0) {
                        usedCriteria = ["price", "rating"];
                    }
                }

                // Second fallback: Try just price (including monitors)
                if (filteredProducts.length === 0 && maxPrice !== Infinity) {
                    filteredProducts = zx9k_allProducts.filter(product => product.price <= maxPrice);
                    if (filteredProducts.length > 0) {
                        usedCriteria = ["price"];
                    }
                }

                // Third fallback: Try just rating (including monitors)
                if (filteredProducts.length === 0 && minRating > 0) {
                    filteredProducts = zx9k_allProducts.filter(product => product.rating >= minRating);
                    if (filteredProducts.length > 0) {
                        usedCriteria = ["rating"];
                    }
                }

                // Last fallback: Show top 3 highest rated products
                if (filteredProducts.length === 0) {
                    filteredProducts = [...zx9k_allProducts]
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 3);
                    appliedStrategy = "top_rated";
                }
            }

            // Sort results by best match
            filteredProducts.sort((a, b) => {
                if (Math.abs(b.rating - a.rating) > 0.1) {
                    return b.rating - a.rating;
                }
                return a.price - b.price;
            });

            zx9k_displayFilteredResults(filteredProducts, inputIssues, appliedStrategy, usedCriteria, ramInputProvided, storageInputProvided);
            zx9k_toggleFilterDropdown();
        }

        // Validate user inputs and return issues
        function zx9k_validateInputs(maxPrice, minRating, minRam, minStorage) {
            let issues = [];
            
            // Get actual input values to check if they were entered
            const priceInput = document.getElementById('zx9k_maxPrice').value;
            const ratingInput = document.getElementById('zx9k_minRating').value;
            const ramInput = document.getElementById('zx9k_minRam').value;
            const storageInput = document.getElementById('zx9k_minStorage').value;

            // Check for unrealistic values
            if (priceInput && maxPrice > 500000) {
                issues.push("Price seems too high (above ₹5,00,000)");
            }
            if (ratingInput && (minRating > 5 || minRating < 0)) {
                issues.push("Rating should be between 0 and 5");
            }
            if (ramInput && minRam > 128) {
                issues.push("RAM requirement seems too high (above 128GB)");
            }
            if (storageInput && minStorage > 5000) {
                issues.push("Storage requirement seems too high (above 5TB)");
            }

            // Check for unrealistic combinations
            if (priceInput && ratingInput && maxPrice < 15000 && minRating > 4.5) {
                issues.push("High rating with very low budget might be unrealistic");
            }

            return issues;
        }

        // Display filtered results with smart messaging
        function zx9k_displayFilteredResults(products, inputIssues, strategy, usedCriteria, ramInputProvided, storageInputProvided) {
            const overlay = document.getElementById('zx9k_resultsOverlay');
            const grid = document.getElementById('zx9k_filteredProductsGrid');
            const messageContainer = document.getElementById('zx9k_smartMessageContainer');
            
            // Clear previous messages
            messageContainer.innerHTML = '';

            // Generate smart messages
            let messages = [];

            // Input validation messages
            if (inputIssues.length > 0) {
                messages.push({
                    type: 'warning',
                    text: `⚠️ ${inputIssues.length} input issue(s) detected: ${inputIssues.join(', ')}`
                });
            }

            // Monitor exclusion message
            if ((ramInputProvided || storageInputProvided) && strategy === "exact_match") {
                const excludedMonitors = zx9k_allProducts.filter(p => p.ram === 0 || p.storage === 0).length;
                if (excludedMonitors > 0) {
                    messages.push({
                        type: 'info',
                        text: `ℹ️ Excluded ${excludedMonitors} monitor(s) due to missing RAM/Storage specifications`
                    });
                }
            }

            // Strategy messages
            if (strategy === "fallback" && usedCriteria.length > 0) {
                messages.push({
                    type: 'info',
                    text: `ℹ️ No exact matches found. Showing results based on: ${usedCriteria.join(' and ')} (including monitors)`
                });
            } else if (strategy === "top_rated") {
                messages.push({
                    type: 'info',
                    text: `ℹ️ No matches for your criteria. Showing top 3 highest-rated products instead`
                });
            } else if (strategy === "exact_match" && inputIssues.length > 0) {
                messages.push({
                    type: 'info',
                    text: `✅ Found matches despite input issues. Results may be based on corrected values`
                });
            }

            // Results count message
            if (products.length > 0) {
                const monitorCount = products.filter(p => p.ram === 0 || p.storage === 0).length;
                const deviceCount = products.length - monitorCount;
                
                let countText = `📊 Found ${products.length} product(s)`;
                if (monitorCount > 0 && deviceCount > 0) {
                    countText += ` (${deviceCount} device(s) + ${monitorCount} monitor(s))`;
                } else if (monitorCount > 0) {
                    countText += ` (${monitorCount} monitor(s))`;
                }
                
                messages.push({
                    type: 'info',
                    text: countText
                });
            }

            // Display messages
            messages.forEach(msg => {
                const messageDiv = document.createElement('div');
                messageDiv.className = `zx9k_${msg.type}_message`;
                messageDiv.innerHTML = `<span class="zx9k_message_icon">${msg.text.charAt(0)}</span>${msg.text.substring(2)}`;
                messageContainer.appendChild(messageDiv);
            });

            // Display products or no results message
            if (products.length === 0) {
                grid.innerHTML = '<div class="zx9k_no_results_message">❌ No products match your criteria. Try adjusting your filters.</div>';
            } else {
                grid.innerHTML = products.map(product => {
                    const productHtml = product.element.outerHTML;
                    const isMonitor = product.ram === 0 || product.storage === 0;
                    
                    return `<div class="zx9k_filtered_product_wrapper">
                        ${productHtml}
                        <div class="zx9k_product_specs">
                            <div class="zx9k_spec_item">Price: ₹${product.price.toLocaleString()}</div>
                            <div class="zx9k_spec_item">Rating: ${product.rating}★</div>
                            <div class="zx9k_spec_item">RAM: ${product.ram || (isMonitor ? 'N/A (Monitor)' : 'N/A')}${product.ram ? 'GB' : ''}</div>
                            <div class="zx9k_spec_item">Storage: ${product.storage || (isMonitor ? 'N/A (Monitor)' : 'N/A')}${product.storage ? 'GB' : ''}</div>
                        </div>
                    </div>`;
                }).join('');
            }
            
            overlay.classList.add('zx9k_show_overlay');
        }

        // Hide filter results and return to main page
        function zx9k_hideFilterResults() {
            const overlay = document.getElementById('zx9k_resultsOverlay');
            overlay.classList.remove('zx9k_show_overlay');
        }

        // Clear all filters
        function zx9k_clearFilters() {
            document.getElementById('zx9k_maxPrice').value = '';
            document.getElementById('zx9k_minRating').value = '';
            document.getElementById('zx9k_minRam').value = '';
            document.getElementById('zx9k_minStorage').value = '';
        }

        // Initialize when page loads
        document.addEventListener('DOMContentLoaded', zx9k_initializeFilterSystem);

        // Close dropdown on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                if (zx9k_isDropdownOpen) {
                    zx9k_toggleFilterDropdown();
                }
                if (document.getElementById('zx9k_resultsOverlay').classList.contains('zx9k_show_overlay')) {
                    zx9k_hideFilterResults();
                }
            }
        });