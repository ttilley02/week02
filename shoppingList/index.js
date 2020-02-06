$(function addMe() {
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      let listAddition = $(
        `<li>
         <span class="shopping-item"> ${$(this).find('input').val()} </span>
         <div class="shopping-item-controls">
           <button class="shopping-item-toggle">
             <span class="button-label">check</span>
           </button>
           <button class="shopping-item-delete">
             <span class="button-label">delete</span>
           </button>
         </div>
       </li>`
     )
      $('ul').append(listAddition);
           
    });
  });
  
  $(function deleteMe() {
    $('ul').on('click','.shopping-item-delete',function(event) {
      event.preventDefault();
      
      this.closest('li').remove();
  
    });
  });
  
  $(function checkMe() {
    $('ul').on('click','.shopping-item-toggle',function(event) {
      event.preventDefault();
      let element=$(this).closest('li').find('.shopping-item');
      element.toggleClass('shopping-item__checked');
      
    });
  });