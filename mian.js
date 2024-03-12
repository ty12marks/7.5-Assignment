// Example Alpine.js logic
document.addEventListener('alpine:init', () => {
    Alpine.data('example', () => ({
      message: 'Hello from Alpine.js!',
      changeMessage() {
        this.message = 'Alpine.js is working!';
      },
    }));
  });
  