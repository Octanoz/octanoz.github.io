// Add this wrap around function to make sure the script is run after the HTML is loaded
// There was an issue initially because the script was loaded before the field was loaded
window.addEventListener('load', function () {
    // Get the phone number field element
    const phoneNumberField = document.getElementById('phone');

    // Listen for input events on the field
    phoneNumberField.addEventListener('input', function (event) {
        // Get the current value of the field
        let phoneNumberValue = this.value;

        // Remove any existing whitespaces from the value
        phoneNumberValue = phoneNumberValue.replace(/\s/g, '');

        // Add a whitespace after the third and sixth characters
        if (phoneNumberValue.length > 3) {
            phoneNumberValue = phoneNumberValue.slice(0, 3) + ' ' + phoneNumberValue.slice(3);
        }
        if (phoneNumberValue.length > 7) {
            phoneNumberValue = phoneNumberValue.slice(0, 7) + ' ' + phoneNumberValue.slice(7);
        }

        // Limit input to 10 numbers
        if (phoneNumberValue.length > 12) {
            event.preventDefault();
            phoneNumberValue = phoneNumberValue.substr(0, 12);
        }

        // Set the new value of the field, with added whitespaces
        this.value = phoneNumberValue;
    })
});
