document.addEventListener('DOMContentLoaded', () => {
  const resourceGrid = document.getElementById('resource-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('category-filter');
  const subcategoryFilter = document.getElementById('subcategory-filter');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
   

  // Theme Management
  const currentTheme = localStorage.getItem('theme') || 'light';
  if (currentTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️ Light Mode';
  }

  themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    if (isDark) {
      body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙 Dark Mode';
    } else {
      body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️ Light Mode';
    }
  });

  // Populate Filters
  const categories = [...new Set(resources.map(r => r.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });

  function updateSubcategories(category) {
    subcategoryFilter.innerHTML = '<option value="all">All Subcategories</option>';
    if (category === 'all') {
      subcategoryFilter.disabled = true;
      return;
    }
    
    subcategoryFilter.disabled = false;
    const subcats = [...new Set(resources
      .filter(r => r.category === category)
      .map(r => r.subcategory))];
    
    subcats.forEach(sub => {
      const option = document.createElement('option');
      option.value = sub;
      option.textContent = sub;
      subcategoryFilter.appendChild(option);
    });
  }

  // Initial render
  renderResources(resources);

  // Event Listeners
  searchInput.addEventListener('input', filterResources);
  categoryFilter.addEventListener('change', (e) => {
    updateSubcategories(e.target.value);
    filterResources();
  });
  subcategoryFilter.addEventListener('change', filterResources);

  function filterResources() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCat = categoryFilter.value;
    const selectedSub = subcategoryFilter.value;

    const filtered = resources.filter(r => {
      const matchesSearch = r.title.toLowerCase().includes(searchTerm);
      const matchesCat = selectedCat === 'all' || r.category === selectedCat;
      const matchesSub = selectedSub === 'all' || r.subcategory === selectedSub;
      return matchesSearch && matchesCat && matchesSub;
    });

    renderResources(filtered);
  }

  function renderResources(data) {
    resourceGrid.innerHTML = '';
    
    if (data.length === 0) {
      resourceGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No resources found matching your criteria.</p>';
      return;
    }

    data.forEach(resource => {
      const card = document.createElement('div');
      card.className = 'resource-card';
      
      const isPdf = resource.type === 'pdf';
      const btnClass = isPdf ? 'btn' : 'btn btn-link';
      const btnText = isPdf ? 'Download PDF' : 'Open Link';
      const btnHref = isPdf ? resource.file : resource.url;
      const downloadAttr = isPdf ? `download="${resource.title}.pdf"` : 'target="_blank" rel="noopener noreferrer"';

      card.innerHTML = `
        <span class="resource-type type-${resource.type}">${resource.type}</span>
        <h3>${resource.title}</h3>
        <div class="resource-meta">
          <strong>Category:</strong> ${resource.category}<br>
          <strong>Subcategory:</strong> ${resource.subcategory}
        </div>
        <a href="${btnHref}" class="${btnClass}" ${downloadAttr}>${btnText}</a>
      `;
      
      resourceGrid.appendChild(card);
    });
  }
});


// Populate course list

const courseList = document.getElementById("course-list");

courses.forEach((course, index) => {
  // 1. Create a NEW row instance for every iteration
  const row = document.createElement("tr");

  // 2. Set the content of that specific row
  row.innerHTML = `
    <td data-label="S/N">${index + 1}</td>
    <td data-label="Code">${course.code}</td>
    <td data-label="Title"><a href="${course.url}">${course.title}</a></td>
  `;

  // 3. Append the element node to the list
  courseList.appendChild(row);
});