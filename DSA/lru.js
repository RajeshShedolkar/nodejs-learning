class LRUCache {
  constructor(capacity) {
    this.capacity = capacity; // Maximum capacity of the cache
    this.cache = new Map();   // Using a Map to store key-value pairs
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1; // Key not found
    }
    // Move the accessed key to the end to mark it as recently used
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      // Delete the existing key so it can be updated as most recently used
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    // If the cache exceeds capacity, remove the least recently used (first item in Map)
    if (this.cache.size > this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// Usage example
const lru = new LRUCache(3);
lru.put(1, 10); // Cache: {1: 10}
lru.put(2, 20); // Cache: {1: 10, 2: 20}
lru.put(3, 30); // Cache: {1: 10, 2: 20, 3: 30}

console.log(lru.get(1)); // Output: 10 (Cache: {2: 20, 3: 30, 1: 10})
lru.put(4, 40);          // Cache: {3: 30, 1: 10, 4: 40} (2 is removed)
console.log(lru.get(2)); // Output: -1 (2 was evicted)
console.log(lru.get(3)); // Output: 30
