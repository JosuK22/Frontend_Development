function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-button');
  
    tabContents.forEach(content => {
      content.classList.remove('active');
    });
  
    tabButtons.forEach(button => {
      button.classList.remove('active');
    });
  
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
  }
  
  // Set the first tab as active initially
  document.querySelector('.tab-button').click();