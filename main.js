// main.js

document.addEventListener('alpine:init', () => {
  Alpine.data('example', () => ({
    // Placeholder data or initialization, modify as needed
    ids: [1, 2, 3], // Replace with your array of ids
    isTemplate: true, // Modify based on your logic
    template: 'Hello, { "name": "{{ firstName }}" }!', // Replace with your message template
    clients: ['ClientA', 'ClientB', 'ClientC'], // Replace with your array of clients
    statuses: ['Sent', 'Failed', 'Delivered'], // Replace with your array of statuses
    deviceCount: 3, // Replace with your device count
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
      console.log(`Message sent to ${client}: ${message} (${status})`);
    },
  }));
});

Alpine.start();
