// main.js

document.addEventListener('alpine:init', () => {
  Alpine.data('example', () => ({
    // Placeholder data or initialization, modify as needed
    ids: [/* your array of ids */],
    isTemplate: true, // Modify based on your logic
    template: /* your message template */,
    clients: [/* your array of clients */],
    statuses: [/* your array of statuses */],
    deviceCount: /* your device count */,
    totalStatus: {
      sent: 0,
      addSent(count) {
        this.sent += count;
      },
    },

    // Function to send messages
    sendMessages() {
      this.ids.map((j) => {
        const generatedMessage = this.isTemplate
          ? dummyjson.parse(this.template)
          : this.template;
        this.sendD2CMessageCore(
          this.clients[j],
          generatedMessage,
          this.statuses[j],
          this.totalStatus,
        );
      });
      this.totalStatus.addSent(this.deviceCount);
    },

    // Function to send a single message, you may need to implement this
    sendD2CMessageCore(client, message, status, totalStatus) {
      // Implement your logic to send a message to the client
      // Update status and total status accordingly
    },
  }));
});

Alpine.start();
