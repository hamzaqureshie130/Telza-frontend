async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) {
    console.warn(`Element with id="${id}" not found.`);
    return;
  }

  try {
    const response = await fetch(file);
    if (!response.ok) {
      console.error(`Failed to load ${file}: ${response.status} ${response.statusText}`);
      element.innerHTML = `<div class="component-error">Could not load component.</div>`;
      return;
    }

    const html = await response.text();
    const range = document.createRange();
    range.selectNode(document.body); 
    const fragment = range.createContextualFragment(html);
    element.innerHTML = '';          
    element.appendChild(fragment);

   
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
    element.innerHTML = `<div class="component-error">Error loading component.</div>`;
  }
}

window.addEventListener("DOMContentLoaded", async () => {
  await Promise.all([
    loadComponent('header', 'header.html'),
    loadComponent('footer', 'footer.html'),
  ]);

});
