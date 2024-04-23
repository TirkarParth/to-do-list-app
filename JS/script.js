$(document).ready(function() {
    // Function to add a new item to the list
    function addItem() {
        let newItemText = $('#newItem').val().trim();
        if (newItemText !== '') {
            let newItem = $('<li>').text(newItemText);
            let deleteButton = $('<button>').text('X').addClass('delete');
            deleteButton.on('click', function() {
                $(this).parent().remove();
            });
            let completeButton = $('<button>').text('✓').addClass('complete');
            completeButton.on('click', function() {
                $(this).parent().toggleClass('completed');
            });
            newItem.append(deleteButton);
            newItem.append(completeButton);
            $('#todoList').append(newItem);
            $('#newItem').val('');
        } else {
            $('#emptyModal').show();
        }
    }

    // Event listener for adding an item
    $('#addItem').on('click', addItem);

    // Event listener for pressing Enter key
    $('#newItem').keypress(function(e) {
        if (e.which == 13) {
            addItem();
        }
    });

    // Make the list items sortable
    $('#todoList').sortable();

    // Close the modal when the close button is clicked
    $('.close').on('click', function() {
        $('#emptyModal').hide();
    });
});
