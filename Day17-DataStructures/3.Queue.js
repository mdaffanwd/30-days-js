// Task 5
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items == []) {
      console.log("Queue is empty");
      return null;
    }
    return this.items.shift();
  }
  front() {
    if (this.items == []) {
      console.log("Queue is empty");
      return null;
    }
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}
const queue = new Queue();
// queue.enqueue(10)
// queue.enqueue(110)
// queue.enqueue(120)
// console.log(queue);
// queue.dequeue()
// console.log(queue);
// console.log(queue.front());

// task 6
class PrintJob {
  constructor(jobName, pages) {
    this.jobName = jobName;
    this.pages = pages;
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  // Add a new print job to the queue
  addJob(jobName, pages) {
    const job = new PrintJob(jobName, pages);
    this.queue.enqueue(job);
    console.log(`Job "${jobName}" with ${pages} pages added to the queue.`);
  }

  // Process the next job in the queue
  processJob() {
    if (this.queue.isEmpty()) {
      console.log("No jobs in the queue.");
      return;
    }
    const job = this.queue.dequeue();
    console.log(`Processing job "${job.jobName}" with ${job.pages} pages.`);
  }

  // Display the next job in the queue
  nextJob() {
    if (this.queue.isEmpty()) {
      console.log("No jobs in the queue.");
      return;
    }
    const job = this.queue.front();
    console.log(`Next job: "${job.jobName}" with ${job.pages} pages.`);
  }
}

// Usage example
const printerQueue = new PrinterQueue();
printerQueue.addJob("Document1", 5);
printerQueue.addJob("Photo", 2);
printerQueue.addJob("Report", 10);

printerQueue.nextJob(); 
printerQueue.processJob();
printerQueue.processJob(); 
printerQueue.processJob(); 
printerQueue.processJob();
