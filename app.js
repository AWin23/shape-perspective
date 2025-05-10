let vm = Vue.createApp({
    data() {
        return {
            perspective: 100, // Distance between user and the z-plane
            rotateX: 0, // Rotation around the X-axis in degrees
            rotateY: 0, // Rotation around the Y-axis in degrees
            rotateZ: 0, // Rotation around the Z-axis in degrees
        }
    },

    // computed property
    computed: {
        box() {
            // Dynamically computes the CSS transform property for the box
            // Based on current reactive state: perspective, rotateX/Y/Z
            return {
                // shift the distance of element between user and z-plane
                transform: `
                perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg)
                rotateY(${this.rotateY}deg)
                rotateZ(${this.rotateZ}deg)
                `
            }
        }
    },

    methods: {
        // Resets transform-related sliders and perspective to default values
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },

        // copies the stuff to clipboard
        async copyToClipBoard() {
            // Creates a CSS transform string using the computed property
            // `box.transform` returns the current full transform string
            // variable is set to a template string 
            let text = `transform:${this.box.transform};`

            // Uses modern clipboard API to copy the text
            await navigator.clipboard.writeText(text)

            // Notifies the user
            alert('CSS Copied to clipboard!')
        }

        
    }
}).mount('#app');