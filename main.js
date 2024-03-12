// main.js

document.addEventListener('alpine:init', () => {
  Alpine.data('example', () => ({
    // ... (existing code)

    // Function to send messages
    sendMessages() {
      this.ids.map((j) => {
        // Use a function to generate a new message each time
        const generatedMessage = () => this.isTemplate
          ? dummyjson.parse(this.template)
          : this.template;
        this.sendD2CMessageCore(
          this.clients[j],
          generatedMessage(),
          this.statuses[j],
          this.totalStatus,
        );
      });
      this.totalStatus.addSent(this.deviceCount);
    },

    // ... (existing code)
  }));
});

Alpine.start();
