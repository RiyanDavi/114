document.addEventListener('DOMContentLoaded', () => {
    const adminMessageInput = document.getElementById('adminMessage');
    const adminSaveButton = document.getElementById('adminSaveButton');
    const adminSavedMessage = document.getElementById('adminSavedMessage');
  
    const userMessageInput = document.getElementById('userMessage');
    const userSaveButton = document.getElementById('userSaveButton');
    const userSavedMessage = document.getElementById('userSavedMessage');
  
    const emailForm = document.getElementById('emailForm');
    const emailUserMessage = document.getElementById('emailUserMessage');
  
    // Load saved messages on page load
    const savedAdminMessage = localStorage.getItem('adminMessage');
    const savedUserMessage = localStorage.getItem('userMessage');
  
    if (savedAdminMessage) adminSavedMessage.textContent = savedAdminMessage;
    if (savedUserMessage) userSavedMessage.textContent = savedUserMessage;
  
    // Save admin message
    adminSaveButton.addEventListener('click', () => {
      const adminMessage = adminMessageInput.value;
      if (adminMessage.trim() === '') {
        alert('Admin: Please write a message before saving.');
        return;
      }
      localStorage.setItem('adminMessage', adminMessage);
      adminSavedMessage.textContent = adminMessage;
      alert('Admin message saved successfully!');
    });
  
    // Save user message and send email
    userSaveButton.addEventListener('click', () => {
      const userMessage = userMessageInput.value;
      if (userMessage.trim() === '') {
        alert('User: Please write a message before saving.');
        return;
      }
      localStorage.setItem('userMessage', userMessage);
      userSavedMessage.textContent = userMessage;
  
      // Send email via Web3Forms
      emailUserMessage.value = userMessage;
      emailForm.submit();
  
      alert('User message saved successfully and sent to your email!');
    });
  });
  