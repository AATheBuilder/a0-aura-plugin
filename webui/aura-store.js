import { createStore } from "/js/AlpineStore.js";

export const store = createStore("auraStore", {
    isThinking: false,
    intensity: 0.12,
    
    init() {
        // Listen for agent thinking state if available in the global context
        // This is a placeholder for actual integration with AgentZero's message stream
        console.log("🌌 Aura Store: Initialized");
    },
    
    onOpen() {
        console.log("🌌 Aura Store: Active");
    },
    
    cleanup() {
        console.log("🌌 Aura Store: Cleaned up");
    }
});
