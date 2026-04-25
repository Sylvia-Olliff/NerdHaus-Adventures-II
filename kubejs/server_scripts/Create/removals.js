ServerEvents.recipes(event => {
    event.remove({ output: 'createfood:apple_slice' });
    event.remove({ output: 'createfood:butterscotch_apple_slice' });
    event.remove({ output: 'createfood:caramel_apple_slice' });
    event.remove({ output: 'createfood:chocolate_apple_slice' });
    event.remove({ output: 'createfood:creme_brulee_bottle' });
    event.remove({ output: 'createfood:dark_chocolate_apple_slice' });
    event.remove({ output: 'createfood:honeyed_apple_slice' });
    event.remove({ output: 'createfood:toffee_apple_slice' });
    event.remove({ output: 'createfood:white_chocolate_apple_slice' });
    event.remove({ output: 'createfood:creme_brulee_bottle_block' });

});
